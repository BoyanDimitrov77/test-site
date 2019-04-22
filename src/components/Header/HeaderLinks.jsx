/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Home } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> Начало
        </Button>
        <Button
          href="info"
          color="transparent"
          className={classes.navLink}
        > Съставът
        </Button>

        <Button
          href="bagpipe"
          color="transparent"
          className={classes.navLink}
        > За гайдата
        </Button>

        <Button
          href="bagpipers"
          color="transparent"
          className={classes.navLink}
        > Гайдарите
        </Button>

        <Button
          href="activities"
          color="transparent"
          className={classes.navLink}
        > Дейност
        </Button>

        <Button
          href="contacts"
          color="transparent"
          className={classes.navLink}
        >Контакти
        </Button>

        <Button
          href="participations"
          color="transparent"
          className={classes.navLink}
        >Участия
        </Button>

      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Гайдарски-състав-Петко-Войвода-685619148137783"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
