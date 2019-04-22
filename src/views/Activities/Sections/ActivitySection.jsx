import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import kaba_gaida_izrabotka_m from "assets/img/img-dump/kaba-gaida-izrabotka_m.jpg";
import gaidarski_sastav_sofia_zheni_m from "assets/img/img-dump/gaidarski-sastav-sofia-zheni_m.jpg";
import iziavi_m from "assets/img/img-dump/iziavi_m.jpg";
import gaidari_za_svatba_m from "assets/img/img-dump/gaidari-za-svatba_m.jpg";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ActivitySection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div className={classes.section}>
        <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>За нашата дейност</h2>
          </GridItem>
        </GridContainer>

        <Card plain>
          <GridItem className={classes.itemGrid}>
            <img src={kaba_gaida_izrabotka_m} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Изработка на родопски каба гайди
            <br />
          </h4>
          <CardBody>
            <p className={classes.description}>
              Изработка на родопски каба гайди от нашия изявен гайдар Христо Павлов.
            </p>
          </CardBody>
        </Card>

        <Card plain>
          <GridItem  className={classes.itemGrid}>
            <img src={gaidarski_sastav_sofia_zheni_m} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Женска гайдарска група
            <br />
          </h4>
          <CardBody>
            <p className={classes.description}>
              В началото на 2015 г. се създава женска гайдарска група към Гайдарски състав "Петко Войвода".
              <br />
              Добре дошли са дамите, които желаят да се научат да свирят на гайда.
              <br />
              Можете да се свържете с нас от секция "Контакт" на сайта.
            </p>
          </CardBody>
        </Card>

        <Card plain>
          <GridItem  className={classes.itemGrid}>
            <img src={iziavi_m} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Изяви
            <br />
          </h4>
          <CardBody>
            <p className={classes.description}>
              Гайдарски състав „Петко войвода“ и поотделно неговите гайдари участват в редица концерти и печелят призови места на събори на народното творчество, надсвирвания и други обществени мероприятия. Съставът предлага богата фолклорна програма за Вашия семеен празник (сватба, рожден ден, имен ден и др.), фирмено тържество и други поводи. Осигурете си едно незабравимо преживяване с магията на Родопа планина. Участниците също така изпълняват песни и танци под съпровод на изворна музика, облечени в автентични носии.
            </p>
          </CardBody>
        </Card>

        <Card plain>
          <GridItem  className={classes.itemGrid}>
            <img src={gaidari_za_svatba_m} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Гайдари за сватба
            <br />
          </h4>
          <CardBody>
            <p className={classes.description}>
              Направете вашата сватба незабравима с автентичния звук на родопската каба гайда.
            </p>
          </CardBody>
        </Card>

        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ActivitySection);
