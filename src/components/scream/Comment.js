import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    ...theme,
    commentImage: {
      maxWidth: '100%',
      height: 100,
      objectFit: 'cover',
      borderRadius: '50%'
    },
    commentData: {
      marginLeft: 20
    }
  });

  
class Comments extends Component {
    render() {
        const { comments, classes } = this.props;
        return (
          <Grid container>
               {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
            <Grid item sm={12}>
              <Grid container>
                <Grid item sm={2}>