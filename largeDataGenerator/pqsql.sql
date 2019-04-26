DROP DATABASE IF EXISTS senwlu;

CREATE DATABASE senwlu;

\c senwlu;

CREATE TABLE home_value (id SERIAL PRIMARY KEY, zestimationPrice VARCHAR (100), startPriceRange VARCHAR (100), endPriceRange VARCHAR (100), thirtyDayPriceChange VARCHAR (100), oneYearForcast VARCHAR (100), propertyLastSalePrice VARCHAR (100), propertLastSaleDate VARCHAR (100), comparableHomePrice VARCHAR (100), marketAppreciationPrice VARCHAR (100), localSalesAvg VARCHAR (100), sellDate VARCHAR (100), sellPrice VARCHAR (100), beds INT, baths INT, sqft VARCHAR (100), streetAddress VARCHAR (100), priceSqft VARCHAR (100), saleToList INT, url VARCHAR (100));

-- How to execute this file
-- psql -f <file_name> -U <username>

-- Copy csv to psql
COPY home_value (id, zestimationPrice, startPriceRange, endPriceRange, thirtyDayPriceChange, oneYearForcast, propertyLastSalePrice, propertLastSaleDate, comparableHomePrice,marketAppreciationPrice, localSalesAvg, sellDate, sellPrice, beds, baths, sqft, streetAddress, priceSqft, saleToList, url ) FROM '/Users/senwl/Documents/Galvanize/GHRSEA-SDC/component-home-value/largeDataGenerator/propertyData_final.csv' DELIMITER ',' CSV HEADER;