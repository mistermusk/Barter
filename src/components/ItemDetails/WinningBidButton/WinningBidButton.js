import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './WinningBidButton.css';


const WinningBidButton = (props) => {


//                  { this.isOwner(item.owner) ? <WinningBidButton onClick={this.setWinner}/> : null }
  return (
    <button id="WinnerButton" className={classes.button} type="button" onClick={props.onClick}>
      Choose Winner
    </button>
    )
}


export default withRouter(WinningBidButton);