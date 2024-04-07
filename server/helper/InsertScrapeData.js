
// Function to insert bulk data into the database
const insertScrapeData = async (connection , data, res) => {
    const columns = ['cin','pin','name','email']; 
    const placeholders = data.map(() => '(?, ?, ?, ?)').join(', '); // Create placeholders for each row
    const insertQuery = `INSERT INTO company_data (${columns.join(', ')}) VALUES ${placeholders}`;

    // Flatten the array of arrays
    const flattenedDataArray = data.flat();

    await connection.query(insertQuery, flattenedDataArray, (err, result)=>{
         if(err){
            console.log(err)
             res.send({success: false, message: err?.sqlMessage || "insert failed"})
         }
         else{
            res.send({success: true, message: `succesfully scraped and inserted ${data?.length} data`});
         }
    })
};

module.exports= insertScrapeData;
