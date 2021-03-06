import axios from 'axios';
import { LOGIN, CHECK_AUTH, loginSuccess, loginError, logoutSuccess } from '../action/user-actions';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    /*
    case CHECK_AUTH: {
      axios({
        method: 'post',
        url: 'http://localhost:3001/isLogged',
        withCredentials: true // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.logged) {
            store.dispatch(loginSuccess(res.data.info));
          }
        })
        .catch((err) => {
          console.error(err);
        })
      break;
    }
    */
    // réagir au login
    case LOGIN: {
      const { user } = store.getState();
      console.log(user);
      
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/user',
        data: user,
        withCredentials: true // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
            console.log('login request')
          store.dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(loginError("Impossible de connecter cet utilisateur"))
        })

      break;
    }
    default:
      return;
    }

}
