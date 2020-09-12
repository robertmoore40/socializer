import React, { Component } from 'react';
import MyButton from '../../util/MyButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { connect } from 'react-redux';
import { likeScream, unlikeScream } from '../../redux/actions/dataActions';

export class LikeButton extends Component {
    likedScream = () => {
      if (      
          this.props.user.likes &&
        this.props.user.likes.find(
          (like) => like.screamId === this.props.screamId
          )
    )
      return true;
    else return false;
};
likeScream = () => {
  this.props.likeScream(this.props.screamId);
};