const faker = require('faker');
const fs = require('fs');

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};



const file = fs.createWriteStream("./propertyData_final.csv");


// setting up header
// // propertyData header
var header = 'id,zestimationPrice,startPriceRange,endPriceRange,thirtyDayPriceChange,oneYearForcast,propertyLastSalePrice,propertLastSaleDate,comparableHomePrice,marketAppreciationPrice,localSalesAvg,sellDate,sellPrice,beds,baths,sqft,streetAddress,priceSqft,saleToList,url\n'

// // localHomesData header
// var header = 'id,sellDate,sellPrice,beds,baths,sqft,streetAddress,priceSqft,saleToList,url\n'

// comparableHomeData header
// var header = 'id,sellDate,sellPrice,beds,baths,sqft,streetAddress,priceSqft,url\n'


// write header into file
file.write(header);

// The word “async” before a function means one simple thing: a function always returns a promise. 
// Even If a function actually returns a non-promise value, prepending the function definition with 
// the “async” keyword directs Javascript to automatically wrap that value in a resolved promise.

// *** In a nutshell *** 
// Async ensures that the function returns a promise, and wraps non-promises in it

(async() => {

      for(let i = 1; i < 10000001; i++) {
        var dataGen = i + ',"' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
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
                        + ',' + `https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large${faker.random.number({'min': 1, 'max': 99})}.jpg`

/************************************************************************************************************************************************/

          // var dataGen = i + ',' + `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`
          //               + ',"' + numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}))
          //               + '",' + faker.random.number({'min': 2, 'max': 6})
          //               + ',' + faker.random.number({'min': 2, 'max': 4})
          //               + ',"' + numberWithCommas(faker.random.number({'min': 1000, 'max': 3500}))
          //               + '",' + faker.address.streetAddress()
          //               + ',"' + numberWithCommas(faker.random.number({'min': 1200, 'max': 2500}))
          //               + '",' 
          //               + faker.random.number({'min': 91, 'max': 105})
          //               + ',' + `https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large${faker.random.number({'min': 1, 'max': 99})}.jpg`





        if(!file.write(`${dataGen}\n`)) {

            // The keyword await makes JavaScript wait until that promise settles and returns its result
            // *** In a nutshell *** 
            // await literally makes JavaScript wait until the promise settles, and then go on with the result
            await new Promise(resolve => file.once('drain', resolve));
        }
    }
})();