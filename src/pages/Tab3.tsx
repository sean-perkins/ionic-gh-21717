import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../App';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const AuthButton: React.FC = () => {
  let history = useHistory();
  let auth = useAuth();

  return <IonButton
    color="danger"
    onClick={() => {
      auth?.signout(() => history.push("/tab1"));
    }}
  >
    Sign out
  </IonButton>
}


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <AuthButton />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
