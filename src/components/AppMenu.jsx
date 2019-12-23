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
import { menuItems } from '../modules/containers'

const Component = () => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {menuItems.map((item, index) => (
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
