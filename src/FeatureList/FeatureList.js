import React, { Component } from 'react';
import ItemOption from '../ItemOption/ItemOption';

class FeatureItems extends Component {

  render() {
    const options = this.props.options.map((item, index) => {
      const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature_selected' : '';
      const featureClass = 'feature_option' + selectedClass;
      return (
        <ItemOption
          featureClass={featureClass}
          key={index}
          onSelect={this.props.onSelect}
          item={item}
          featureName={this.props.name}
        />
      )
    })

    return (
      <div className="feature" key={this.props.name}>
        <div className="feature__name">{this.props.name}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    );

  }
}




export default FeatureItems;