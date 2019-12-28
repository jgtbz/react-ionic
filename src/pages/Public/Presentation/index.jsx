import React from 'react'
import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonButton
} from '@ionic/react'
import {
  ionicLogo,
  reactLogo,
  ionicReactLogo
} from '../../../assets'

const Component = () => {
  const slidesStyles = { height: '100%', color: '#cbccce', backgroundColor: '#53565d', '--bullet-background-active': '#97999d' }
  const slideStyle = { display: 'block' }
  const imageStyle = { height: '40%', marginTop: '35px' }
  const buttonStyle = { '--color': '#ffffff', '--border-color': '#a9aaae', '--box-shadow': 'none', marginLeft: '25px', marginRight: '25px' }
  const buttonLoginStyle = { ...buttonStyle, marginTop: '25px', marginBottom: '15px' }

  const WelcomeSlide = () => (
    <IonSlide style={slideStyle}>
      <img style={imageStyle} src={ionicLogo} alt="Ionic" />
      <h1>Ionic</h1>
    </IonSlide>
  )

  const HomeSlide = () => (
    <IonSlide style={slideStyle}>
      <img style={imageStyle} src={reactLogo} alt="React" />
      <h1>React</h1>
    </IonSlide>
  )

  const Slide = () => (
    <IonSlide style={slideStyle}>
      <img style={imageStyle} src={ionicReactLogo} alt="Ionic" />
      <h1>Ionic + React</h1>
      <IonButton style={buttonLoginStyle} shape="round" expand="block" fill="outline" routerLink="/login">Login</IonButton>
      <IonButton style={buttonStyle} shape="round" expand="block" fill="outline" routerLink="/register">Cadastro</IonButton>
    </IonSlide>
  )

  return (
    <IonPage>
      <IonContent>
        <IonSlides style={slidesStyles} pager>
          <WelcomeSlide />
          <HomeSlide />
          <Slide />
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

export default Component
