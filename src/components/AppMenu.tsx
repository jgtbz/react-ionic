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

import { home, list } from 'ionicons/icons'

export interface Menu {
  title: string
  url: string
  icon: object
}

const menu: Menu[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'List',
    url: '/list',
    icon: list
  }
]

const Menu: React.FC = () => (
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
              <IonIcon slot="start" icon={item.icon} />
              <IonLabel>{item.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        ))}
      </IonList>
    </IonContent>
  </IonMenu>
)

export default withRouter(Menu)
