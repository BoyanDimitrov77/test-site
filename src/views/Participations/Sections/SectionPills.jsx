import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Tv from "@material-ui/icons/Tv";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import People from "@material-ui/icons/People";
import Cake from "@material-ui/icons/Cake";
import Mic from "@material-ui/icons/Mic";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import CalendarToday from "@material-ui/icons/CalendarToday";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

import SectionCarousel from "./SectionCarousel.jsx";
import ModalElement from "./ModalElement.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <NavPills
              color="default"
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 }
              }}
              tabs={[
                {
                  tabButton: "TV предавания",
                  tabIcon: Tv,
                  tabContent: (
                      <GridContainer>
                        <GridItem>
                          <ModalElement/>
                        </GridItem>
                      </GridContainer>


                  )
                },
                {
                  tabButton: "Снимки",
                  tabIcon: PhotoLibrary,
                  tabContent: (
                    <span>
                      <SectionCarousel/>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely
                        deliverables for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions. Dramatically visualize
                        customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets
                        via plug-and-play networks. Dynamically
                        procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Сватби",
                  tabIcon: People,
                  tabContent: (
                    <span>
                      <ModalElement/>
                    </span>
                  )
                },
                {
                  tabButton: "Тържества",
                  tabIcon: Cake,
                  tabContent: (
                    <span>
                      <ModalElement/>
                    </span>
                  )
                },
                {
                  tabButton: "Концерти",
                  tabIcon: Mic,
                  tabContent: (
                    <span>
                      <ModalElement/>
                    </span>
                  )
                },
                {
                  tabButton: "Клипове",
                  tabIcon: VideoLibrary,
                  tabContent: (
                    <span>
                      <ModalElement/>
                    </span>
                  )
                },
                {
                  tabButton: "Календари",
                  tabIcon: CalendarToday,
                  tabContent: (
                    <span>
                      <ModalElement/>
                    </span>
                  )
                }

              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
