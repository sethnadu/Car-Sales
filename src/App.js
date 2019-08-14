import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addNewFeature, addAdditionalPrice, removeAFeature, removeAdditionalPrice } from "./Actions/index.js";


const App = props => {
 
  const removeFeature = feature => {
    props.removeAFeature(feature)
    props.removeAdditionalPrice(feature.price)
    console.log(feature.id)
  };

  const buyItem = item => {
    props.addAdditionalPrice(item.price)
    props.addNewFeature(item)
    console.log(props.features)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures   buyItem = {buyItem} store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store,
   

  }
}

export default connect(mapStateToProps, {addNewFeature, addAdditionalPrice, removeAFeature, removeAdditionalPrice})(App);
