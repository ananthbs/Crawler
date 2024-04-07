const express = require('express');
const app = express();
const connection = require('./helper/connection');
const bodyparser = require('body-parser');
const scrape = require('./helper/scrape');
const insertScrapeData = require("./helper/InsertScrapeData");
const cors = require("cors");

app.use(cors());
app.use(bodyparser.json());

app.get('/scrape/:size', async (req, res) => {
    const scrapeData = await scrape(req?.params?.size);
    try{
        if(scrapeData?.length){
            await insertScrapeData(connection, scrapeData, res);
           }
           else{
               res.send({success: false, message: "Failed while scraping 0 data found"});
           }
    }
    catch(err){
        console.log(err);
        res.status(200).send({success: false, message: "Something went wrong"})
    }
});

app.get('/clients/clearData', (req, res) =>{
    const deleteQuery = 'DELETE FROM company_data';
   connection.query(deleteQuery, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({success: true, data: result});
        }
   })
});

app.get('/clients', (req, res) =>{
     const query = req.query.q;
     if(query){
        const getClientByQuery = `SELECT * FROM company_data WHERE id LIKE '%${query}%' OR cin LIKE '%${query}%' OR pin LIKE '%${query}%' OR name LIKE '%${query}%' OR email LIKE '%${query}%';`;
        connection.query(getClientByQuery, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send({success: true, data: result});
            }
       })
     }
     else{
        const getAllClients = 'SELECT * FROM company_data';
        connection.query(getAllClients, (err, result)=>{
             if(err){
                 console.log(err);
             }
             else{
                 res.send({success: true, data: result});
             }
        })
     }
})

app.post('/clients', (req, res) =>{
    const clientData = req.body;
    const insertQuery = 'INSERT INTO company_data(cin,pin,name,email) values(?)';
   connection.query(insertQuery,[Object.values(clientData)], (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({success: true, data: result});
        }
   })
})

app.get('/clients/:id', (req, res) =>{
    const getAllClients = 'SELECT * FROM company_data WHERE id=?';
   connection.query(getAllClients,[req?.params?.id], (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({success: true, data: result});
        }
   })
});

app.post('/clients/:id', (req, res) =>{
    const clientData = req.body;
    const updateQuery = 'UPDATE company_data SET ? WHERE id=';
   connection.query(updateQuery + req?.params?.id,[clientData], (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({success: true, data: result});
        }
   })
})

app.delete('/clients/:id', (req, res) =>{
    const getAllClients = 'DELETE FROM company_data WHERE id=?';
   connection.query(getAllClients,[req?.params?.id], (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({success: true, data: result});
        }
   })
});

app.listen(5000, ()=>{
    console.log("server started at 5000")
})