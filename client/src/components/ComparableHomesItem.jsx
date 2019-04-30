import React from 'react';
import {
  PropertyCard, 
  PropertyDetailSection, 
  HomeStatus, 
  RecentlySold, 
  RecentlySoldIcon, 
  Price, 
  PropertyDetailedInfo, 
  PropertyAddress, 
  PropertySqftCalculation,
  PropertyImage
} from '../style.js';

var ComparableHomesItem = ({homeData}) => {
  return (
    <div>
      <PropertyCard>
        <PropertyImage src={homeData.url} />
        <PropertyDetailSection>
          <HomeStatus>
            <RecentlySoldIcon></RecentlySoldIcon>
            <RecentlySold> 
              SOLD ({homeData.selldate})
            </RecentlySold>
          </HomeStatus>
          <Price>
            {`$${homeData.sellprice}`}
          </Price>
          <PropertyDetailedInfo>
            {`${homeData.beds} bds - ${homeData.baths} ba - 1555 sqft`}                          
          </PropertyDetailedInfo>
          <PropertyAddress>
            {homeData.streetaddress}
          </PropertyAddress>
        </PropertyDetailSection>
        <PropertySqftCalculation>
          {`$${homeData.pricesqft}`}
        </PropertySqftCalculation>
      </PropertyCard>
    </div>
  );
};


export default ComparableHomesItem; 