import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Cart from './Cart/Cart';
import Header from './Header'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  };
  //Setting new state 
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form
            features={this.props.features}
            selected={this.state.selected}
            onSelect={this.updateFeature} />
          <Cart selected={this.state.selected} />
        </main>
      </div>
    )
  }
}