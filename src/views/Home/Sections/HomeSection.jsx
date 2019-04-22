import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import YouTube from 'react-youtube';

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class HomeSection extends React.Component {
  render() {
    const { classes } = this.props;
    const opts = {
     height: '390',
     width: '640',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 0
     }
   };
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.description}>
              Добре дошли в новата ни интернет страница!
              <br/>
              Потопете се в магията на Родопа планина!
              <br/>
              Позволете ни да направим Вашия празник незабравим!
            </h3>
          </GridItem>
        </GridContainer>
      <br/>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <YouTube
                 videoId="pGexWCgiGb8"
                 opts={opts}
                 onReady={this._onReady}
               />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(HomeSection);
