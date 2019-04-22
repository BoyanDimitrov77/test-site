import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import historyAndFunctionPic from "assets/img/img-dump/ustroistvo-i-istoria_m.jpg";
import kabaBagpipePic from "assets/img/img-dump/kaba-gaida_m.jpg";
import djuraBagpipePic from "assets/img/img-dump/djura-gaida_m.jpg";
import macedonianBagpipe from "assets/img/img-dump/makedonska-gaida_m.jpg";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class BagpipeSection extends React.Component {
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
            <h2 className={classes.title}>Устройство и история</h2>
            <img src={historyAndFunctionPic} alt="..." className={imageClasses} align="left"/>
            <h5 className={classes.description}>
              Българската гайда е духов музикален инструмент.
              Състои се от мях, гайдуница, ручило, надуялка, пискуни и главини.
              Мехът представлява обработена ярешка или козя кожа, обърната с косъма навътре. Гайдуницата е разпробито дърво с пръстови отвори. Тя служи за извличане на мелодията чрез отваряне и затваряне на съответните дупки. Басовият тон, който е една октава по-нисък от строя на гайдуницата, „извира“ от ручилото. То има три части – „еклемета“, с помощта на които се регулира височината на тона. Вкраването на въздух в гайдата се осъществява чрез надуялката, която представлява цилиндър с канал, завършващ с клапа. Тя не позволява на въздуха да се върне обратно. Тези три дървени части се прикрепят към меха с помощта на главини, завързани за него. Но самата „душа“ на гайдата е пискунът. Един в гайдуницата и в ручилото. Налягането, създадено от притискането на меха, кара „перцето“ на пискуна да издава трептения, които се превръщат в звуци.

              Гайдата е древен инструмент. Траки, славяни, българи - всички те са били изкусни свирачи. Но тя не е разпространена само на Балканите – във всяка европейска страна се среща поне по един вид гайда. Освен това е позната в Близкия Изток и Индия. Оцеляла хилядолетия, съхранила автентичния си вид и същевременно развивала се през вековете, гайдата не е само инструмент – тя е религия, съдба.
            </h5>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem className={classes.itemGrid}>
                <img src={kabaBagpipePic} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Каба гайдата
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  В България има три вида гайди – каба, джура и македонска. Каба гайдата се среща само в Родопите и се отличава с мекота на звука и дълбочина на тона. Чисто технически, за разлика от джура гайдата, родопската гайда е с извита в долния край гайдуница, от което зависи ниския ѝ тембър. Тя е най-ниско звучащата гайда в света и се среща в четири основни строя - ре, ми, фа и сол, съответно и в ми бемол и фа диез. Подходяща е за съпровод на песни, тъй като позволява на певеца да разгърне песента, без да бъде заглушен от звука на инструмента. Също така родопските хора̀ задължително се играят под звуците на каба гайдата. Както се казва – нейният звук подсказва на хороигралците къде да стъпят. Съзвучието между два или повече инструмента създава една неповторима атмосфера, която напомня за красотите на Родопа планина. Родопският музикален фолклор е изключително богат на песни, а що се отнася до инструменталните мелодии – те са по-малко, и затова хора̀та представляват една пъстра поредица от песни, подредени от минорна към мажорна тоналност. Най-разпространеният размер е 2/4, а след него се нареждат ръченицата в 7/8, по-известна в Родопите като „по̀седница“, и сво̀рнатото хоро в 9/8. Срещат се и песни в 5/8. А умерените песенни образци в 4/4 са като съчетание между бавна и бърза песен. Но магията на родопската народна музика се крие именно в бавните песни. Те като че ли се леят между барчините и показват величието на планината, от която са се родили, и душевността на хората, които са ги сътворили. Защото всяка една песен е история – истинска и неповторима.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem className={classes.itemGrid}>
                <img src={djuraBagpipePic} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Джура гайдата
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Джура гайдата се среща в цяла България без Родопите – Мизия, Делиормана, Добруджа, Балкана, Средна гора, Северна, Източна и Западна Тракия, Странджа, Шоплука, Граово,  Западните покрайнини и Пиринска Македония,
                  като в различните области се различава по височината на тона. Тя звучи по-високо от каба гайдата и се характеризира с ясен и чист глас. Неслучайно в дюзѝята чанове най-ниските се наричат „каба“, а най-високите „джурици“.
                  Тази разновидност на гайдата непременно присъства в битовия народен орекстър, но е известна и като солов инструмент, който съпровожда цели сватби и свири с часове на селския мегдан, съпровождайки неделното хоро.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem className={classes.itemGrid}>
                <img src={macedonianBagpipe} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Македонската гайда
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Македонската гайда се среща в югозападната част на Пиринска Македония, във Вардарска Македония (дн. Република Македония) и в Егейска Македония (дн. Гръцка република). Нейният строй е между джура и каба гайдата, тоест средна по звучене. Тя също е с извита гайдуница.
                  Игривите македонски хора никога не минават без звука на гайдата, която също така съпровожда характерните едногласни и двугласни песни, със или без оркестър от народни инструменти.
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

export default withStyles(productStyle)(BagpipeSection);
