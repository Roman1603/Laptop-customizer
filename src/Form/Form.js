import React, { Component } from 'react';
import FeatureList from '../FeatureList/FeatureList';




class Form extends Component {
  render() {
    const { selected } = this.props;
    const features = Object.keys(this.props.features).map(key => {
      return (
        <FeatureList
          name={key}
          key={key}
          options={this.props.feature[key]}
          selected={selected}
          onSelect={this.props.onSelect}

        />
      )
    })


    return (

      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default Form;