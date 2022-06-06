import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../App';

interface LocationState {
  from: {
    pathname: string;
  };
}

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const auth = useAuth();

  let { from } = location.state || { from: { pathname: "/tab1" } };

  const login = () => {
    auth?.signin(() => {
      history.replace(from);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <IonButton
            onClick={login}
            color="success"
          >Log in</IonButton>
        </div>
      </IonContent>

    </IonPage>
  );
}

export default Login
