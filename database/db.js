const mongoose = require('mongoose');
var faker = require('faker');
mongoose.connect('mongodb://localhost:27017/zillow');

// Initialize mongodb schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create db schema for properties
let propertySchema = new Schema({
  id: Number,
  zestimationPrice: String,
  startPriceRange: String,
  endPriceRange: String,
  thirtyDayPriceChange: String,
  oneYearForcast: String,
  propertyLastSalePrice: String, 
  propertLastSaleDate: String,
  comparableHomePrice: String,
  marketAppreciationPrice: String,
  localSalesAvg: String,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  saleToList: Number,
  url: String
});

let comparableHomes = new Schema({
  id: Number,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  url: String
});

let localHomes = new Schema({
  id: Number,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  saleToList: Number,
  url: String
});

// Accessing the models for each schema
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);

// Query to grab data for all properties 
module.exports = {
  readAllProperties: (callback) => {
    Property.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 99
    });
  }, 
  // Query to grab data for comparableHomes 
  readAllComparableHomes: (callback) => {
    ComparableHomes.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 10
    });
  }, 
  // Query to grab data for localhomes 
  readAllLocalHomes: (callback) => {
    LocalHomes.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 10
    });
  },
  // Query to grab data from a single property 
  readSingleProperty: (id, callback) => {
    Property.find({id}, (err, data) => {
      callback(err, data);
    });
  }
};