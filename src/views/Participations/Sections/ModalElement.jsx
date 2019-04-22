import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import YouTube from 'react-youtube';
import classNames from "classnames";

import image from  "assets/img/profile-bg.jpg";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ModalElement extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );

    const opts = {
     height: '390',
     width: '640',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 0
     }
   };

    return (
      <div className={classes.section}>
        <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                  <img src={image} alt="..." className={imageClasses}
                    onClick={() => this.handleClickOpen("classicModal")} />
                  <Dialog  maxWidth = {'lg'}
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("classicModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("classicModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>Modal title</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6} >
                          <img src={image} alt="..." className={imageClasses} align="left"/>

                        </GridItem>

                      <GridItem xs={12} sm={12} md={6} >
                        <h5 className={classes.description}>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean. A
                            small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth. Even the all-powerful
                            Pointing has no control about the blind texts it is an
                            almost unorthographic life One day however a small line
                            of blind text by the name of Lorem Ipsum decided to
                            leave for the far World of Grammar.
                          </h5>

                        </GridItem>

                      </GridContainer>
                      <br/>
                      <div>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <YouTube
                               videoId="pGexWCgiGb8"
                               opts={opts}
                               onReady={this._onReady}
                             />
                          </GridItem>
                        </GridContainer>
                      </div>

                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button color="transparent" simple>
                        Nice Button
                      </Button>
                      <Button
                        onClick={() => this.handleClose("classicModal")}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
          <div className={classes.title}>
            <h3>Carousel</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(ModalElement);
