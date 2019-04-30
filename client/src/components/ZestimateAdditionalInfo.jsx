import React from 'react';
import ComparableHomes from './ComparableHomes.jsx';
import LocalHomes from './LocalHomes.jsx';
import MarketAppreciation from './MarketAppreciation.jsx';
import ZestDeepDiveButton from './ZestDeepDiveButton.jsx';
import {
  AdditionalZestimateInformation, 
  ZestDeepDive, 
  ZestDeepDiveIntro,
  ZestDeepDiveIntroTitle,
  ZestDeepDiveIntroContent,
  ZestDeepDiveIntroEstimate,
  ZestDeepDiveCollapsible,
  ZestDeepDiveCollapsibleTitle, 
  ZestDeepDiveCollapsibleTitleText,
  Table, 
  TableContainer
} from '../style.js';

class ZestimateAdditionalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiddenComparableHomes: true,
      isHiddenMarketAppreciation: true,
      isHiddenLocalHomes: true
    };

  }

  toggleHiddenComparableHomes () {
    this.setState({
      isHiddenComparableHomes: !this.state.isHiddenComparableHomes
    });
  }

  toggleHiddenMarketAppreciation () {
    this.setState({
      isHiddenMarketAppreciation: !this.state.isHiddenMarketAppreciation
    });
  }

  toggleLocalHomes () {
    this.setState({
      isHiddenLocalHomes: !this.state.isHiddenLocalHomes
    });
  }

  render () {
    const {comparablehomeprice, marketappreciationprice} = this.props.propertyData;
    const {comparableHomesData, propertyData, localHomesData} = this.props;
    return (

      <div>
        <AdditionalZestimateInformation>
          <ZestDeepDive>
            <ZestDeepDiveIntro>
              <ZestDeepDiveIntroTitle>
              Inside the Zestimate
              </ZestDeepDiveIntroTitle>
              <ZestDeepDiveIntroContent>
                The Zestimate is Zillow’s best estimate of a home’s value. It is based on a blend of valuation methods, each of which may produce a different estimate depending on the available data.
              </ZestDeepDiveIntroContent>
            </ZestDeepDiveIntro>
            <ZestDeepDiveIntroEstimate>Estimate based on</ZestDeepDiveIntroEstimate>
            <ZestDeepDiveCollapsible>
              <ZestDeepDiveButton 
                name={'Comparable homes'} 
                estimate={`$${comparablehomeprice}`} 
                onClick={this.toggleHiddenComparableHomes.bind(this)}
              />
              {!this.state.isHiddenComparableHomes && 
                <ComparableHomes 
                  comparableHomesData={comparableHomesData} 
                  propertyData={propertyData}
                /> 
              }
              <ZestDeepDiveButton 
                name={'Market appreciation'} 
                estimate={`$${marketappreciationprice}`} 
                onClick={this.toggleHiddenMarketAppreciation.bind(this)}
              />
              {!this.state.isHiddenMarketAppreciation && 
                <MarketAppreciation 
                  marketAppreciationData={propertyData} 
                />
              }
              <ZestDeepDiveButton 
                name={'Local sale prices'}
                estimate={`$${comparablehomeprice}`} 
                onClick={this.toggleLocalHomes.bind(this)}
              />
              {!this.state.isHiddenLocalHomes && 
                <LocalHomes 
                  localHomesData={localHomesData} 
                /> 
              }
              <TableContainer>
                <Table src='https://cdn2.thecatapi.com/images/b5f.gif'></Table>
              </TableContainer>
            </ZestDeepDiveCollapsible>
          </ZestDeepDive>
        </AdditionalZestimateInformation>
      </div>
    );
  }
}

export default ZestimateAdditionalInfo; 