// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

const images = {
  old: require('../assets/vanha.png'),
  goodWork: require('../assets/good-work.gif'),
  team: require('../assets/tiimi.jpg'),
  newVersion: require('../assets/saatana.png'),
  bug: require('../assets/viat.png'),
  mobile: require('../assets/sami-mobiili.jpg')
}

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#F81894',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor='secondary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Geniem JIRA
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' fit bold>
            Make JIRA Great Again
          </Text>
        </Slide>
        <Slide bgColor='primary'>
          <Image src={images.old} width={800} />
          <Text margin='10px 0 0' textColor='tertiary' bold>
            Kiitos (2018-2019)
          </Text>
        </Slide>
        <Slide bgColor='primary' textColor='tertiary'>
          <Heading size={1} textColor='secondary' caps>
            Tiimi 5/5
          </Heading>
          <Image src={images.team} width={700} />
          <List textAlign='center'>
            <ListItem textSize={30}>💻 Kalle</ListItem>
            <ListItem textSize={30}>🖥️ Lauri</ListItem>
            <ListItem textSize={30}>👻 Riku</ListItem>
            <ListItem textSize={30}>💕 Kaapo</ListItem>
            <ListItem textSize={30}>👑 Arre</ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary' textColor='tertiary'>
          <Heading size={2} textColor='secondary' caps>
            Tämmönen siitä nyt tuli
          </Heading>
          <Image src={images.newVersion} width={700} />
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={2} textColor='primary' caps>
            Missä nyt mennään?
          </Heading>
          <Text margin='50px 0 0' textColor='tertiary' bold>
            Henkilöt ja Projektit osiot valmiina Beta-testaukseen.
          </Text>
          <Text margin='50px 0 0' textColor='tertiary' bold>
            Budjettiosio odottelee vielä herrojen tarkempaa speksausta.
          </Text>
          <Text margin='50px 0 0' textColor='tertiary' bold>
            GitHub-projektien issues osioon on kerätty kehitettäviä /
            korjattavia asioita.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={4} textColor='primary' caps>
            Minkälainen tekki on käytössä?
          </Heading>
          <Text margin='50px 0 0' bold textColor='tertiary'>
            Backend API: JS-Tiimin TypeScript API Starter + MySQL
          </Text>
          <Text margin='50px 0 0' bold textColor='tertiary'>
            Frontend: React + MobX + Semantic UI
          </Text>
          <Text margin='50px 0 0' bold textColor='tertiary'>
            Deplaus: Kontena
          </Text>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={5} textColor='primary' caps>
            Mitä uusia juttuja on kokeiltu?
          </Heading>
          <Text margin='40px 0 0' bold textColor='tertiary'>
            Backend:
            <br /> Sovelluksella 2 eri moodia, jolloin samaa docker-imagea voi
            ajaa eri tarkoituseen.
            <br />
          </Text>
          <Text margin='40px 0 0' bold textColor='tertiary'>
            Frontend: React Hooks API, <br />
            MobX -tilanhallinta, Semantic UI -komponentit, <br />
            uusi ajatusmalli testaamiseen - React Testing Library
          </Text>
          <Text margin='40px 0 0' bold textColor='tertiary'>
            Kontena:
            <br />
            Zero Downtime Deployment
            <br />
            Volumen jakaminen palveluiden välillä (ei vielä mahdollista)
          </Text>
        </Slide>
        <Slide bgColor='primary' textColor='tertiary'>
          <Image src={images.bug} width={700} />
          <Heading size={5} textColor='tertiary' caps>
            Valivali
          </Heading>
          <Image src={images.mobile} width={700} />
          <Heading size={5} textColor='tertiary' caps>
            Sitä saa mitä tilaa
          </Heading>
          <Text margin='50px 0 0' textColor='tertiary' bold>
            Palautetta ja koodausapua otetaan vastaan #jirasaatana-kanavalla.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={1} textColor='tertiary' caps>
            #jirasaatana
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
