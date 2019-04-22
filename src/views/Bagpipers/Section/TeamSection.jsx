import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import ivan_balabanov_m from "assets/img/img-dump/team/ivan-balabanov_m.jpg";
import hristo_pavlov_m from "assets/img/img-dump/team/hristo-pavlov_m.jpg";
import kostadin_gerdjikov_m from "assets/img/img-dump/team/kostadin-gerdjikov_m.jpg";
import stanislav_georgiev_m from "assets/img/img-dump/team/stanislav-georgiev_m.jpg";
import dimitur_gramadarev_m from "assets/img/img-dump/team/dimitur-gramadarev_m.jpg";
import georgi_ivanov_m from "assets/img/img-dump/team/georgi-ivanov_m.jpg";
import boian_vasilev_m from "assets/img/img-dump/team/boian-vasilev_m.jpg";
import filip_boyadjiev_m from "assets/img/img-dump/team/filip-boyadjiev_m.jpg";
import Venelin_Kichukov_m from "assets/img/img-dump/team/Venelin-Kichukov_m.jpg";
import ilia_pishtalov_m from "assets/img/img-dump/team/ilia-pishtalov_m.jpg";
import Miroslav_Jelevski_m from "assets/img/img-dump/team/Miroslav-Jelevski_m.jpg";
import Slavi_Tichev_m from "assets/img/img-dump/team/Slavi-Tichev_m.jpg";
import gabi_m from "assets/img/img-dump/team/gabi_m.jpg";
import Elena_Boukova_m from "assets/img/img-dump/team/Elena-Boukova_m.jpg";
import ivajlo_petrov_m from "assets/img/img-dump/team/ivajlo-petrov_m.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Нашите гайдари</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ivan_balabanov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Иван Балабанов (1982 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден е в град Смолян, а корените му са от с. Гела и с. Широка лъка.

                    Потомък на гайдарите  /Стайко Пелтеков/,неговият дядо  и  вуйчо му/ Манол Пелтеков – Мано̀лата/, който е един от първите гайдари в Ансамбъл „Манол Радичев“ – с. Гела, Иван  е закърмен с родопската песен и свирня.Голям патриот и родолюбец.

                    За първи път хваща гайдата на 8-годишна възраст.  Учи се е от големите гайдари, Дафо Трендафилов,Манол Ташков и Костадин Илчев. Участвал е в Детско-юношески фолклорен ансамбъл „Орфей“ – гр. Смолян и Ансамбъл „Манол Радичев“ село Гела.

                    През 2002 г. издава самостоятелен албум „Родопска душа“.Има много изяви в страната и чужбина.

                    Ежегодно участва в Националното гайдарско надсвирване в с. Гела и  четири пъти печели първа награда. От основаването на Гайдарски състав „Петко войвода“ е негов ръководител.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={hristo_pavlov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Христо Павлов (1975 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в село Наречен в стар дюлгерски род, Христо е носител на родопските традиции и фолклор.

                    Започва да свири на гайда на 10-годишна възраст в родното си село при преподавателите Илия Ламбрев и Николай Янев.

                    След това се премества в гр. Смолян, където става ученик на Костадин Илчев и солист на ДЮФА „Орфей“.

                    Свирил е на много сватби, събори и концерти в цялата страна.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={kostadin_gerdjikov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Костадин Герджиков (1985 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден е в град Смолян.

                    Той е потомък на богат овчарски род от с. Райково (дн. квартал на гр. Смолян) по бащина линия, а майка му е от китното селце Борово, пазещо дверите на Кръстова гора.

                    Започва да свири в ІV клас, запален от братовчед си Николай Беляшки.

                    Изучава инструмента в ДЮФА „Орфей“, под опитното ръководство на Костадин Илчев и Тодор Тодоров.

                    От 1999 г. до днес е участник във Фолклорен ансамбъл „Манол Радичев“, с. Гела.

                    Участвал е в много фестивали в страната и чужбина.

                    Многократно мери майсторлък с колеги по време на Националното гайдарско надсвирване в с. Гела. Има много призови места и отличия.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={stanislav_georgiev_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Станислав Георгиев (1972 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден е в град София.

                    Независимо, че е от с. Кокаляне и шопското е в кръвта му, той се запленява от родопската музика и започва да свири на каба гайда.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={dimitur_gramadarev_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Димитър Грамадарев (1989 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден е в град Пловдив, но е израстнал в Смолян.

                  За първи път се среща с гайдата във II-ри клас, след като баща му го записва в ДЮФА „Орфей“.

                  Инструментът, на който свири и до днес, е направен от Костадин Илчев.

                  Той, заедно с Тодор Тодоров, са учителите на Димитър – тези, които го посвещават в гайдарското изкуство.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={georgi_ivanov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Георги Иванов (1984 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в град София с корени от Костенец, Георги е завладян от гайдата, докато работи в гр. Смолян.

                    За 2 години пребиваване в столицата на Родопите обаянието на планината го подтиква да си купи гайда.

                    Но инструментът не остава само сувенир за спомен.

                    Влечението към народната музика си казва думата – Георги взима своята каба гайда и започва да се учи да свири на нея.

                    До ден днешен той си остава страстен почитател на родопската песен, а от няколко години насам с голям плам се учи и на джура гайда.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={boian_vasilev_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Боян Василев (1988 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден е в град София, но във вените му тече кръвта на балканджии от Стара планина и тракийци от Сакар.

                    При срещата си с каба гайдата се влюбва в нея и постепенно започва да заучава песни и мелодии от Родопите.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={filip_boyadjiev_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Филип Бояджиев (1988 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в град София, с корени от Хасковско, Филип проявява интерес към българското народно творчество още от ранна детска възраст.

                    Първата му среща с каба гайдата е при няколкото му лета, прекарани в Родопите.

                    На 15 годишна възраст опитът му да си вземе гайда е неуспешен.

                    Няколко години по-късно получава първата си гайда като подарък и още с първото надуване е пленен от магията на инструмента.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={Venelin_Kichukov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Венелин Кичуков (1970 г)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в гр.Девин, бащината му къща е в с.Врезе, която се намира на 7 км от Широка лъка и на 12 км от Девин. Започва своето учение на каба гайда около 10 годишна възраст при преподавателя Манов Ташков. На 13 години отива в школата на СМУ - Широка Лъка при Михаил Калфов (бай Хальо) на каба и при Васил Бебелков на джура гайда. На 15 години се записва в Детско-Юношеския Фолклорен Ансамбъл „Орфей” гр.СМОЛЯН при Костадин Илчев и Тодор Тодоров.

                    На 18 годишна възраст прекъсва заниманията си с каба гайдата, но след 17 г се отново се връща към нея.

                    През 2006 г изненадващо получава сватбен подарък, именно каба гайда от народната певица Веска Кичукова. В последствие отново се захваща с най-българския имузикален инструмент, като става част от гайдйрски състав "ПЕТКО ВОЙВОДА" в края на 2013 г.  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ilia_pishtalov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Илия Пищалов (1990 г)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Родното му е място е град Девин, като именно там започва негово обучение на автентичния инструмент.

                    Благодарение на кръжок към местно читалище, той прави първи стъпки в изучаването на родопската каба гайда.

                    Член на Гайдарски състав "Петко войвода" от създаването му.  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={Miroslav_Jelevski_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Мирослав Жилевски(1983 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в Ловеч, града на люляците. Любовта към планината и най-вече фолклора го среща и с гайдари, така се сдобива с изоставена вече Бай Диньова гайда и започва да свири.
                    Не след дълго научава и за състава, така започва всичко ...  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={Slavi_Tichev_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Слави Тичев (1988 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в Благоевград и с корени от Пиринска Македония, каба гайдата докосва сърцето му в студентските години. Започва уроци на каба и джура гайда през 2010г. при Костадин Атанасов (солист на Ансамбъл „Филип Кутев”), който му дава първите стъпки в гайдарското изкуство.
                    През 2015 г. научава за състава и се присъединява към него, а меракът за изучаването на нови мелодии от Родопа планина, докосващи сърцето, не го оставя и до ден днешен.  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={gabi_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Габриела Юрукова (2002 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Родом е от село Мирково, но с корени от Пиринската Македония! Закърмена от малка с традиция в семейство на професионални танцьори и музиканти, българският фолклор е в кръвта ѝ. Запалена от батко ѝ, който също е гайдар, любовта към каба гайдата нараства и тя решава да свири. С негова помощ получава и първата си гайда, която по-късно е заменена с друга от нейният учител и голям майстор Христо Павлов. От 2015 год. е част от състава. Ученичка в Национално училище за танцово изкуство град София със специалност "Българска народна хореография" във випуска на Венета Ценова.</p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={Elena_Boukova_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Елена Боюкова (1982) - Шопска ми е главата, родопска ми е душата:)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    С корени от района на Самоков и София.

                    Изключително признателна на първия си учител Венцислав Андонов, който й дава основата, когато започва да се учи в края на 2008 г.
                    В началото на 2011 г. боледуване я принуждава да преустанови занимания, но четири години по-късно успява отново да започне и с помощта на Иван Балабанов да продължи развитието си, като от началото на 2016 г. е част от състава.</p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ivajlo_petrov_m} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Ивайло Петров (1983 г.)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Роден в гр.Добрич, потомък на един от най-старите добруджански родове.Като дете тренира народни таци в Добруджански ансамбъл и се влюбва във фолклора.Завършил ландшафтна архитектура в Лесотехнически университет. Гайдарското надсвирване в с.Гела го запалва по гайдата през 2010 г. и заедно с Боян Василев и Илия Пищалов основават първия гайдарски състав към ЛТУ. Обучавал се е от гайдари, като Петър Янев, Григор Лалов и Тодор Михайлов.</p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
