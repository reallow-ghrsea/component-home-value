const faker = require('faker');
const fs = require('fs');
const fetch = require('node-fetch')

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};

var catArr = ["https://cdn2.thecatapi.com/images/dvi.jpg"
, "https://cdn2.thecatapi.com/images/4sb.jpg"
, "https://cdn2.thecatapi.com/images/3qf.jpg"
, "https://cdn2.thecatapi.com/images/dun.jpg"
, "https://cdn2.thecatapi.com/images/MTgyMzMxMg.jpg"
, "https://cdn2.thecatapi.com/images/MTY0NzA1NA.jpg"
, "https://cdn2.thecatapi.com/images/42r.jpg"
, "https://cdn2.thecatapi.com/images/MTg3OTI3MQ.jpg"
, "https://cdn2.thecatapi.com/images/atu.jpg"
, "https://cdn2.thecatapi.com/images/1kp.jpg"
, "https://cdn2.thecatapi.com/images/MTYzNzc5Mg.gif"
, "https://cdn2.thecatapi.com/images/5ge.jpg"
, "https://cdn2.thecatapi.com/images/ata.jpg"
, "https://cdn2.thecatapi.com/images/MTY0MjEyNA.jpg"
, "https://cdn2.thecatapi.com/images/dgm.jpg"
, "https://cdn2.thecatapi.com/images/4pd.gif"
, "https://cdn2.thecatapi.com/images/d59.jpg"
, "https://cdn2.thecatapi.com/images/a29.jpg"
, "https://cdn2.thecatapi.com/images/MTc2NjQ3Ng.jpg"
, "https://cdn2.thecatapi.com/images/4ig.gif"
, "https://25.media.tumblr.com/tumblr_krvv9ssJAe1qa9hjso1_1280.jpg"
, "https://cdn2.thecatapi.com/images/cho.jpg"
, "https://cdn2.thecatapi.com/images/MTc5MTY4MA.jpg"
, "https://cdn2.thecatapi.com/images/cmv.jpg"
, "https://cdn2.thecatapi.com/images/853.gif"
, "https://cdn2.thecatapi.com/images/8c.gif"
, "https://cdn2.thecatapi.com/images/3j5.jpg"
, "https://cdn2.thecatapi.com/images/b65.jpg"
, "https://cdn2.thecatapi.com/images/4lt.gif"
, "https://cdn2.thecatapi.com/images/a2v.jpg"
, "https://cdn2.thecatapi.com/images/6um.jpg"
, "https://cdn2.thecatapi.com/images/MTgzNTY5Mg.jpg"
, "https://cdn2.thecatapi.com/images/b0a.jpg"
, "https://cdn2.thecatapi.com/images/4a6.gif"
, "https://cdn2.thecatapi.com/images/chi.jpg"
, "https://cdn2.thecatapi.com/images/AdYH730Du.jpg"
, "https://cdn2.thecatapi.com/images/dqs.jpg"
, "https://cdn2.thecatapi.com/images/MTU3NDQ3OQ.jpg"
, "https://cdn2.thecatapi.com/images/37k.jpg"
, "https://cdn2.thecatapi.com/images/MTczMDk2Nw.jpg"
, "https://cdn2.thecatapi.com/images/G-zFLupdX.jpg"
, "https://cdn2.thecatapi.com/images/6j5.jpg"
, "https://cdn2.thecatapi.com/images/MTYxMDIwNw.jpg"
, "https://cdn2.thecatapi.com/images/MjA5MDgyOQ.jpg"
, "https://cdn2.thecatapi.com/images/5gv.jpg"
, "https://cdn2.thecatapi.com/images/319.jpg"
, "https://cdn2.thecatapi.com/images/9uf.jpg"
, "https://cdn2.thecatapi.com/images/bu5.jpg"
, "https://cdn2.thecatapi.com/images/MTUxOTM1OA.jpg"
, "https://cdn2.thecatapi.com/images/MTkxNDM3Mg.jpg"
, "https://cdn2.thecatapi.com/images/9ib.jpg"
, "https://cdn2.thecatapi.com/images/eak.jpg"
, "https://cdn2.thecatapi.com/images/dkn.jpg"
, "https://cdn2.thecatapi.com/images/b8h.jpg"
, "https://cdn2.thecatapi.com/images/vq.png"
, "https://cdn2.thecatapi.com/images/3jg.jpg"
, "https://cdn2.thecatapi.com/images/A7zOGS-Gr.jpg"
, "https://cdn2.thecatapi.com/images/BZ59tdOo6.jpg"
, "https://cdn2.thecatapi.com/images/1v6.jpg"
, "https://cdn2.thecatapi.com/images/MTk1NjM4MA.jpg"
, "https://cdn2.thecatapi.com/images/21e.jpg"
, "https://cdn2.thecatapi.com/images/EAIExii87.jpg"
, "https://cdn2.thecatapi.com/images/beu.jpg"
, "https://cdn2.thecatapi.com/images/csk.jpg"
, "https://cdn2.thecatapi.com/images/3kk.jpg"
, "https://cdn2.thecatapi.com/images/cej.jpg"
, "https://cdn2.thecatapi.com/images/7wuqD2L2b.jpg"
, "https://cdn2.thecatapi.com/images/dd0.jpg"
, "https://cdn2.thecatapi.com/images/cqh.jpg"
, "https://cdn2.thecatapi.com/images/17k.jpg"
, "https://cdn2.thecatapi.com/images/a3s.jpg"
, "https://cdn2.thecatapi.com/images/MTcwOTI4NQ.jpg"
, "https://cdn2.thecatapi.com/images/7nm.jpg"
, "https://cdn2.thecatapi.com/images/bei.jpg"
, "https://cdn2.thecatapi.com/images/MTY3ODE2MA.jpg"
, "https://cdn2.thecatapi.com/images/23v.jpg"
, "https://cdn2.thecatapi.com/images/a92.jpg"
, "https://cdn2.thecatapi.com/images/MTg1NTQ1Nw.jpg"
, "https://cdn2.thecatapi.com/images/c2s.jpg"
, "https://cdn2.thecatapi.com/images/8r1.jpg"
, "https://cdn2.thecatapi.com/images/GcZbVDVi8.jpg"
, "https://cdn2.thecatapi.com/images/382.jpg"
, "https://cdn2.thecatapi.com/images/b5f.gif"
, "https://cdn2.thecatapi.com/images/ajo.gif"
, "https://cdn2.thecatapi.com/images/46c.jpg"
, "https://cdn2.thecatapi.com/images/9vo.jpg"
, "https://cdn2.thecatapi.com/images/cqd.jpg"
, "https://cdn2.thecatapi.com/images/ZODkwyL4E.jpg"
, "https://cdn2.thecatapi.com/images/993.jpg"
, "https://cdn2.thecatapi.com/images/b7u.jpg"
, "https://cdn2.thecatapi.com/images/asr.jpg"
, "https://cdn2.thecatapi.com/images/584.gif"
, "https://cdn2.thecatapi.com/images/a7e.jpg"
, "https://cdn2.thecatapi.com/images/dqs.jpg"
, "https://cdn2.thecatapi.com/images/8D--jCd21.jpg"
, "https://cdn2.thecatapi.com/images/1uk.jpg"
, "https://cdn2.thecatapi.com/images/EEf-L2ubj.jpg"
, "https://cdn2.thecatapi.com/images/9oi.jpg"
, "https://cdn2.thecatapi.com/images/89a.gif"
, "https://cdn2.thecatapi.com/images/MuEGe1-Sz.jpg"]






const file = fs.createWriteStream("./propertyData_final.csv");


// setting up header
// // propertyData header
var header = 'zestimationPrice,startPriceRange,endPriceRange,thirtyDayPriceChange,oneYearForcast,propertyLastSalePrice,propertLastSaleDate,comparableHomePrice,marketAppreciationPrice,localSalesAvg,sellDate,sellPrice,beds,baths,sqft,streetAddress,priceSqft,saleToList,url\n'

// // localHomesData header
// var header = 'sellDate,sellPrice,beds,baths,sqft,streetAddress,priceSqft,saleToList,url\n'

// comparableHomeData header
// var header = 'sellDate,sellPrice,beds,baths,sqft,streetAddress,priceSqft,url\n'




// write header into file
file.write(header);

// The word “async” before a function means one simple thing: a function always returns a promise. 
// Even If a function actually returns a non-promise value, prepending the function definition with 
// the “async” keyword directs Javascript to automatically wrap that value in a resolved promise.

// *** In a nutshell *** 
// Async ensures that the function returns a promise, and wraps non-promises in it

(async() => {

      for(let i = 1; i < 10000001; i++) {
        var dataGen = '"' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
                        + '","' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
                        + '","' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
                        + '","' + numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}))
                        + '","' + numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}))
                        + '","' + numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000)}))
                        + '",' + `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`
                        + ',"' + numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}))
                        + '","' + numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}))
                        + '","' + numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}))
                        + '",' + `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`
                        + ',"' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
                        + '",' + faker.random.number({'min': 2, 'max': 6})
                        + ',' + faker.random.number({'min': 2, 'max': 4})
                        + ',"' + numberWithCommas(faker.random.number({'min': 1000, 'max': 3500}))
                        + '",' + faker.address.streetAddress()
                        + ',"' + numberWithCommas(faker.random.number({'min': 1200, 'max': 2500}))
                        + '",' + faker.random.number({'min': 91, 'max': 105})
                        + ',' + `${catArr[Math.floor(Math.random() * Math.floor(100))]}`

/************************************************************************************************************************************************/

          // var dataGen = `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`
          //               + ',"' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
          //               + '",' + faker.random.number({'min': 2, 'max': 6})
          //               + ',' + faker.random.number({'min': 2, 'max': 4})
          //               + ',"' + numberWithCommas(faker.random.number({'min': 1000, 'max': 3500}))
          //               + '",' + faker.address.streetAddress()
          //               + ',"' + numberWithCommas(faker.random.number({'min': 1200, 'max': 2500}))
          //               + '",' 
          //               // + faker.random.number({'min': 91, 'max': 105})
          //               // + ',"'
          //                + `${catArr[Math.floor(Math.random() * Math.floor(100))]}`





        if(!file.write(`${dataGen}\n`)) {

            // The keyword await makes JavaScript wait until that promise settles and returns its result
            // *** In a nutshell *** 
            // await literally makes JavaScript wait until the promise settles, and then go on with the result
            await new Promise(resolve => file.once('drain', resolve));
        }
    }
})();