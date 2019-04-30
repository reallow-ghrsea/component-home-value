import React from 'react';
import {
  PropertyCard,
  PropertyDetailSection,
  PropertyImage, 
  HomeStatus,
  RecentlySoldIcon,
  RecentlySold, 
  Price, 
  PropertyDetailedInfo,
  PropertyAddress,
  SaleToList,
  LocalHomesDetialsCollapsibleContent,
  LocalPropertyDetailSection
} from '../style.js';

var LocalHomesItem = ({homeData}) => {
  return (
    <div>
      <PropertyCard>
        <PropertyImage src={homeData.url}></PropertyImage>
        <LocalPropertyDetailSection>
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
        </LocalPropertyDetailSection>
        <SaleToList>
          {`${homeData.saletolist}%`}
        </SaleToList>
      </PropertyCard>
    </div>
  );
};

export default LocalHomesItem; 