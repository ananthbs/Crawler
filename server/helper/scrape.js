const {chromium} = require('playwright');

 const getScrapedData = async (size = 0) => {
  
  try{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.companydetails.in/latest-registered-company-mca');

    // Wait for the content to load
      await page.waitForSelector('.banklisting');

    // Extract data
    let hrefs = await page.$$eval('.banklisting a', anchors => {
      return anchors.map(anchor => anchor.getAttribute('href'));
    });
    
    const scrapedData = [];
    
     if(size != 0){
      hrefs = hrefs.splice(0, size);
     }

     console.log(hrefs.length);
     
    for (const href of hrefs) {
      // Navigate to the page
      await page.goto(`https://www.companydetails.in/${href}`);

      // Wait for elements with class 'DESC' to load
      await page.waitForSelector('#basicdetails');

      // Extract company name, CIN, email
      const parentElement = await page.$('#basicdetails');
      const companyDetailsElem = await page.$('#CONTACT-DETAILS');

      // Access all child <div> elements of the parent element
      const childDivs = await parentElement.$$('div');
      const companyDetailsChildElem = await companyDetailsElem.$$('div');

      const companyNameElem = await childDivs[0]?.$('h6');
      const companyCinElem = await childDivs[10]?.$('h6');
      const companyPinElem = await companyDetailsChildElem[5]?.$('h6');
      const companyEmailElem = await companyDetailsChildElem[17]?.$('h6');

      const companyName = await companyNameElem?.innerText();
      const companyCin = await companyCinElem?.innerText();
      const companyPin = await companyPinElem?.innerText();
      const companyEmail = await companyEmailElem?.innerText();
      
      
      if(companyCin?.toString()?.length == 21 && companyPin?.toString()?.length == 6 && companyName && companyEmail){
        scrapedData.push([companyCin, companyPin, companyName, companyEmail]);
      }
    }
    console.log(`scrape done found ${scrapedData?.length} data's`)
    // Close the browser
    await browser.close();

    return scrapedData;
  }
  catch(err){
    console.log(err);
    return [];
  }
}

module.exports = getScrapedData;