import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import picture1 from "assets/img/img-dump/imeto_m.jpg";
import picture2 from "assets/img/img-dump/nashite-pevici_m.jpg";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class InfoSection extends React.Component {
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
            <h2 className={classes.title}>История и цел</h2>
            <h5 className={classes.description}>
              Гайдарски състав „Петко войвода“ е създанен на 4 декември 2013 година. Основната му цел е опазване,
              разпространение и популяризиране на родопското народно творчество и традиции, представени чрез характерната
              за Родопа планина каба гайда и съпътстващите я самобитност и култура. Съставът е насочен изцяло към изворния фолклор.
              В репертоара му влизат автентични песни, мелодии и хора̀, които са наследство от старите родопски гайдаджии, певци и певици.
            </h5>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem justify="center" className={classes.itemGrid}>
                <img src={picture1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Името
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Патронът на гайдарския състав не е избран случайно. Петко Киряков, или по-известен като Капитан Петко войвода,
                  е символ на българския дух, сила и борбеност. Борец за човешките правдини, доказал се със своите дела,
                  които са от особено значение за българите от Беломорска Тракия и Родопите, той остава в паметта на народа.
                  Песните, в които се пее за Петко войвода, са направили безсмъртен този истински българин.
                  Ето защо името на състава е един израз на почит от признателните синове на България.
                  Име, което е всявало страх и уважение у бейове, султани и душмани само при произнасянето му!
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem justify="center" className={classes.itemGrid}>
                <img src={picture2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Нашите певици
                <br />
                <small className={classes.smallTitle}>Светла Дукатева</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  <p>Родена в град Смолян в музикален род, Светла е носител и прекрасен изпълнител на родопски народни песни.
                  Освен красотата на родопчанката, тя е наследила и невероятен глас, с който майсторски извайва извивките на песента.</p>
                  <p>Учи пеене в ДЮФА „Орфей“ от първи клас, а три години участва в самодейността на Народно читалище „Христо Ботев“ – 1871 г. в родния си град.
                  В момента учи музика в СУ „Климент Охридски“, като не спира с музикалните си изяви.</p>

                  <p>Участвала е в множество концерти в страната и чужбина (Франция, Италия, Австрия, Турция, Гърция, Германия, Украйна, Сърбия, Румъния и други).
                  Има редица първи места в конкурси като „Орфеево изворче“ – гр. Стара Загора, Рожен 2006, Казанлък, Свиленград, Пиленце пее – гр. София.</p>

                  <p>Записва няколко красиви родопски песни в БНР под съпровода на оркестъра при катедра „Музика“ при СУ.</p>
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(InfoSection);
