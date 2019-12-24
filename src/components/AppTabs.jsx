import React, { useState, useEffect } from 'react'
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
  Profile,
  UpdatePassword,
  Page1,
  Page11,
  Page2,
  Page3,
  Page4
} from '../pages/Secure'
import { tabsItems, withTabs } from '../modules/containers'
import { equals } from 'ramda'

const Component = ({ location }) => {
  const [showTabBar, setShowTabBar] = useState(false)

  useEffect(() => {
    setShowTabBar(withTabs.includes(location.pathname))
  }, [location.pathname])

  const isSelected = (url) => equals(url, location.pathname)

  const tabBarStyles = { display: showTabBar ? 'flex' : 'none' }

  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/updatePassword" component={UpdatePassword} exact />
        <Route path="/page1" component={Page1} exact />
        <Route path="/page11" component={Page11} exact />
        <Route path="/page2" component={Page2} exact />
        <Route path="/page3" component={Page3} exact />
        <Route path="/page4" component={Page4} exact />
        <Route path="/" render={() => <Redirect to="/dashboard" /> } exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" style={tabBarStyles}>
        {tabsItems.map((item, index) => (
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
