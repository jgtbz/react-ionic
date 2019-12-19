import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react'
import {
  Dashboard,
  Page1,
  Page11,
  Page2,
  Page3,
  Page4
} from '../pages/Secure'
import { home } from 'ionicons/icons'
import { equals } from 'ramda'

const tabs = [
  {
    title: 'Page 1',
    tab: 'page1',
    url: '/page1',
    icon: home
  },
  {
    title: 'Page 2',
    tab: 'page2',
    url: '/page2',
    icon: home
  },
  {
    title: 'Page 3',
    tab: 'page3',
    url: '/page3',
    icon: home
  },
  {
    title: 'Page 4',
    tab: 'page4',
    url: '/page4',
    icon: home
  }
]

const Component = ({ location }) => {
  const isSelected = (url) => equals(url, location.pathname)
  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/page1" component={Page1} />
        <Route path="/page11" component={Page11} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/" render={() => <Redirect to="/dashboard" /> } />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabs.map((item, index) => (
          <IonTabButton key={index} tab={item.tab} href={item.url} selected={isSelected(item.url)}>
            <IonIcon icon={item.icon} />
            <IonLabel>{item.title}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  )
}

export default withRouter(Component)
