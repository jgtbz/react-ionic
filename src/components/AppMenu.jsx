import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/react'
import { home } from 'ionicons/icons'

const menu = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: home
  },
  {
    title: 'Page 1',
    url: '/page1',
    icon: home
  },
  {
    title: 'Page 2',
    url: '/page2',
    icon: home
  },
  {
    title: 'Page 3',
    url: '/page3',
    icon: home
  },
  {
    title: 'Page 4',
    url: '/page4',
    icon: home
  }
]

const Component = () => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {menu.map((item, index) => (
          <IonMenuToggle key={index} autoHide={false}>
            <IonItem routerLink={item.url} routerDirection="none">
              <IonIcon icon={item.icon} slot="start" />
              <IonLabel>{item.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        ))}
      </IonList>
    </IonContent>
  </IonMenu>
)

export default withRouter(Component)
