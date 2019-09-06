// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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
            Ongelma
          </Heading>
          <Text margin="50px 0 0" textColor="tertiary" bold>
            Projektin budjetin seuranta tehdään manuaalisesti eikä Google sheet
            ole siihen paras - melkoinen häkkyrä ylläpitää
          </Text>
          <Text margin="50px 0 0" textColor="tertiary" bold>
            Laskutuksen ennustaminen / seuranta manuaalisesti Google sheetillä
            vaatii jatkuvaa työtä / on kömpelöä
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Ratkaisu - mitä tehtiin
          </Heading>
          <Text bold textColor="tertiary">
            Laajennettiin Geniem Jiraa
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Projektisivu - projektin budjetin ja avainlukujen seuranta
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Projektille voi nimetä tiimin ja tekijät
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Tiimien ylläpito
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Laskutusennusteiden ja toteutumien toteutus projektille ennusteen
            seuraaminen juokseva 6kk eteenpäin ja toteutuksen seuranta juokseva
            6kk taaksepäin
          </Text>
          <Text margin="40px 0 0" bold textColor="tertiary">
            Jatkuvalle palvelulla oma sivu
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            Kilpailevat ratkaisut
          </Heading>
          <Text bold>
            Vaihtaa johonkin kokonaisvaltaiseen työkaluun kuten Timer / Severa /
            ValueFrame -> ongelma kun eivät integroidu kunnolla Jiraan
          </Text>
          <Text margin="50px 0 0" bold>
            Jatkaa Google sheetin käyttöä -> vaatii manuaalista työtä ja on taas
            yksi uusi paikka - eli kukaan ei seuraa sitä
          </Text>
          <Text margin="50px 0 0" bold>
            Jiralle tälläistä työkalua ei ole saatavilla vaikka kuinka etsittiin{" "}
          </Text>
        </Slide>

        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            Hyödyt Geniemille
          </Heading>
          <Text bold>
            Kankea ekselinpyöritys loppuu - työkalusta näkee simppelisti
            projektin avainluvut ja laskutusennusteen
          </Text>
          <Text margin="50px 0 0" bold>
            Homma on läpinäkyvämpää läpi firman, kun tonne on kaikilla helppo
            pääsy
          </Text>
          <Text margin="50px 0 0" bold>
            Jira on globaalisti paljon käytetty tuote -> jossain vaiheessa
            ratkaisu voi oikeasti kiinnostaa muitakin Jiraa käyttäviä firmoja ->
            omaa tulevaisuuden tuote potentiaalia
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
