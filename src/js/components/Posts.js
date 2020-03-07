import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //calling the new action creator
    this.props.getData();
  }

  render() {
    return null;
  }
}

export default connect(null, { getData })(Post);
