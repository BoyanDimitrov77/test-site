import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Свържете се с нас по следните начини:</h2>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                За контакт
                <br />
              </h4>
              <CardBody>
                <h4 className={classes.description}>
                    Телефон за връзка:<br/>
                    Иван Балабанов: 0895125211 <br/> <br/>
                    Е-поща:<br/>
                    gaidari@abv.bg <br/> <br/>
                    Facebook страница: <br/>
                  <a href="https://www.facebook.com/Гайдарски-състав-Петко-Войвода-685619148137783">Гайдарски състав "Петко Войвода"</a> <br/> <br/>
                    Репетиции: <br/>
                    Всеки вторник от 19:30 часа <br/>
                    Адрес: <br/> <br/>
                    гр. София, ж. к. „Стрелбище“, ул. „Тулча“, № 20
                </h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                За да изпратите запитване, моля, попълнете правилно полетата:
                <br />
              </h4>
              <CardBody>
                <form>
                  <CustomInput
                    labelText="Име"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />

                  <CustomInput
                    labelText="Адрес"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Телефон"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />

                  <CustomInput
                    labelText="Е-поща"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />

                  <CustomInput
                    labelText="Запитване или коментар"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />

                <Button color="info">Изпрати</Button>

                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ContactSection);
