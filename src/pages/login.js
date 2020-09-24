import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme
  });

  class login extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        errors: {}
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.UI.errors) {
        this.setState({ errors: nextProps.UI.errors });
      }
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData, this.props.history);
    };