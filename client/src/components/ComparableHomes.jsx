import React from 'react';
import ComparableHomesItem from './ComparableHomesItem.jsx';
import {HomeDetailsCollapsibleComponent, ComparableHomesHeader, ComparableHomesToolTip, ComparableHomesToolTipText, ComparableHomesListHeader, ComparableHomesListHeaderSqft, PropertyList} from '../style.js';

class ComparableHomes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <HomeDetailsCollapsibleComponent>
        <CollapsibleContent>
          <ComparableHomesHeader>
          This estimate looks at for-sale or recently sold homes with similar features to this home, like its location, square footage and beds/baths. We then adjust the price of each comparable home based on its “similarity score” and local appreciation rate and use that set of adjusted values to calculate this estimate.
            <ComparableHomesToolTip>
              <ComparableHomesToolTipText>
                {' '}What affects the accuracy of this estimate?
              </ComparableHomesToolTipText>
            </ComparableHomesToolTip>
          </ComparableHomesHeader>
          <ComparableHomesListHeader>
            Top comparable homes in this estimate
            <ComparableHomesListHeaderSqft>$/sqft</ComparableHomesListHeaderSqft>
          </ComparableHomesListHeader>
          <ComparableHomesList>
            <PropertyList>
              {this.props.comparableHomesData.map((home, i) => {
                return <ComparableHomesItem key={i} homeData={home} photo={this.props.photosData[Math.floor(Math.random() * Math.floor(49))]}/>;
              })}
            </PropertyList>
          </ComparableHomesList>
        </CollapsibleContent>
      </HomeDetailsCollapsibleComponent>
    );
  }
} 

export default ComparableHomes; 