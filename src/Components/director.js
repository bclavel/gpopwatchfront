import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import Header from './header'
import "../App.css";

export default class Director extends React.Component {
  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data" credentials = "CTTHu8VEB:9a2d51ff-0506-4d50-aa66-9e914b4de128">
        <Header />
        <h1>Director</h1>
      </ReactiveBase>
      </div>
    );
  }
}

var styles = {
}
