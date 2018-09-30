import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { config } from './secret.js'


firebase.initializeApp(config)

export const db = firebase.database();
export const authenticate = firebase.auth();
export let current_user = '';

export function googleLogin() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      current_user = {
        username: user.displayName,
        avatar: user.photoURL,
        auth_id: user.uid
      }
      document.getElementById('avatar').style.backgroundImage = 'url('+current_user.avatar +')'
      document.getElementById('username').innerText = current_user.username
      document.getElementById('signin').style.display = "none";
    } else {
      console.log("User not signed in")
    }
  })
}

export function twitter_api () {
  console.log("twitter")
}

export function google_auth () {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    const token = result.credential.accessToken;
    const user = result.user;
    current_user = {
      username: user.displayName,
      avatar: user.photoURL,
      auth_id: user.uid
    }
  }).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  });
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
