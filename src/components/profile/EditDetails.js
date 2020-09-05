import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';

import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';