import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import classNames from "classnames";
import SectionPills from "./Sections/SectionPills.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Participations extends React.Component {

  render(){
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Гайдарски състав 'Петко Войвода'"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Parallax filter image={require("assets/img/bg-backgroud.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Участия</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div >
            <SectionPills/>
          </div>
        </div>
      <Footer />
      </div>
    );
  }

}

export default withStyles(landingPageStyle)(Participations);
