import React from 'react';
import ZestimateAdditionalInfo from './ZestimateAdditionalInfo.jsx';
import {
  SecondaryZestimateItems,
  SecondaryRow,
  ZestimateIcon,
  SecondaryWrapper,
  SecondaryTitle,
  SecondaryContent,
  PercentIncrease,
  ToggleSection,
  ToggleHistory,
  ExpandDown
} from '../style.js';

class ZestimateRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
    const { oneyearforcast, thirtydaypricechange} = this.props.propertyData;
    return (
      <div>
        <SecondaryZestimateItems>
          <SecondaryRow>
            <ZestimateIcon>
              <span className="fa-stack fa-2x">
                <i className="far fa-circle fa-stack-2x "></i>
                <i className="fas fa-home fa-stack-1x  "></i>
              </span>
            </ZestimateIcon>
            <SecondaryWrapper>
              <SecondaryTitle>
                Zestimate Range
                <SecondaryContent>
                $9.54m - $16.95m
                </SecondaryContent>
              </SecondaryTitle>
            </SecondaryWrapper>
          </SecondaryRow>
  
          <SecondaryRow>
            <ZestimateIcon>
              <span className="fa-stack fa-2x">
                <i className="far fa-circle fa-stack-2x "></i>
                <i className="fas fa-arrow-up fa-stack-1x  "></i>
              </span>
            </ZestimateIcon>
            <SecondaryWrapper>
              <SecondaryTitle>
              Last 30-Day Change
                <SecondaryContent>
                  {`+$${thirtydaypricechange} `}
                  <PercentIncrease>(+0.1%)</PercentIncrease>
                </SecondaryContent>
              </SecondaryTitle>
            </SecondaryWrapper>
          </SecondaryRow>
  
          <SecondaryRow>
            <ZestimateIcon>
              <span className="fa-stack fa-2x">
                <i className="far fa-circle fa-stack-2x "></i>
                <i className="fas fa-chart-line fa-stack-1x  "></i>
              </span>
            </ZestimateIcon>
            <SecondaryWrapper>
              <SecondaryTitle>
                One Year Forecast
                <SecondaryContent>
                  {`$${oneyearforcast} - $${oneyearforcast}`}
                  <PercentIncrease></PercentIncrease>
                </SecondaryContent>
              </SecondaryTitle>
            </SecondaryWrapper>
          </SecondaryRow>
        </SecondaryZestimateItems>
        <ToggleSection>
          <ToggleHistory onClick={this.toggleHidden.bind(this)}>
          Zestimate history and details <ExpandDown><i className="fas fa-angle-down"></i> </ExpandDown>
          </ToggleHistory>
        </ToggleSection>
        {!this.state.isHidden && 
          <ZestimateAdditionalInfo 
            propertyData={this.props.propertyData}
            comparableHomesData={this.props.comparableHomesData}
            localHomesData={this.props.localHomesData}
          />
        }
      </div> 
    );
  }
}

export default ZestimateRow;
