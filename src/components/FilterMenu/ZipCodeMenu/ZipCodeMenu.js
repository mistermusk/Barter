import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './ZipCodeMenu.css';


const ZipCodeMenu = (props) => {



  return (
      <div class={classes.form}>
        <form>
          <input
            className={classes.form}
            id="filterZip"
            type="text"
            pattern="[0-9]{5}"
            name="zipcode"
            placeholder="Filter by zipcode"
          />
          <button id="filterButton" className={classes.button} type="button">
            Update
          </button>


        </form>
      </div>

    )
}


export default withRouter(ZipCodeMenu);