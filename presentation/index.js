// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Image, List, ListItem, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  old: require("../assets/vanha.png"),
  goodWork: require("../assets/good-work.gif"),
  team: require("../assets/tiimi.jpg"),
  newVersion: require("../assets/saatana.png"),
  bug: require("../assets/viat.png"),
  mobile: require("../assets/sami-mobiili.jpg")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#ff2774",
    secondary: "white",
    tertiary: "#443800",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            😈 Geniem JIRA 😈
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Vieläkö me tehdään tätä?
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            OA 2019 Tavoitteet
          </Heading>
          <Text margin="50px 0 0" textColor="tertiary" bold>
            Henkilöt ja Projektit osiot valmiina Beta-testaukseen.
          </Text>
          <Text margin="50px 0 0" textColor="tertiary" bold>
            Budjettiosio odottelee vielä herrojen tarkempaa speksausta.
          </Text>
          <Text margin="50px 0 0" textColor="tertiary" bold>
            GitHub-projektien issues osioon on kerätty kehitettäviä /
            korjattavia asioita.
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            Mitä uusia juttuja on kokeiltu?
          </Heading>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Backend:
            <br /> Sovelluksella 2 eri moodia, jolloin samaa docker-imagea voi
            ajaa eri tarkoituseen.
            <br />
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Frontend: React Hooks API, <br />
            MobX -tilanhallinta, Semantic UI -komponentit, <br />
            uusi ajatusmalli testaamiseen - React Testing Library
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Kontena:
            <br />
            Zero Downtime Deployment
            <br />
            Volumen jakaminen palveluiden välillä (ei vielä mahdollista)
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Image src={images.bug} width={700} />
          <Heading size={5} textColor="tertiary" caps>
            Valivali
          </Heading>
          <Image src={images.mobile} width={700} />
          <Heading size={5} textColor="tertiary" caps>
            Sitä saa mitä tilaa
          </Heading>
          <Text margin="50px 0 0" textColor="tertiary" bold>
            Palautetta ja koodausapua otetaan vastaan #jirasaatana-kanavalla.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="tertiary" caps>
            Huolia ja murheita?
          </Heading>
          <Heading size={3} textColor="secondary">
            Tule kanavalle #JIRASAATANA
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
