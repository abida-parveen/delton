import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const config = {
    apiKey: "AIzaSyCoewSbAbCGLoDl-miyyAGMP19Cc_hyP34",
    authDomain: "crwn-db-1829a.firebaseapp.com",
    databaseURL: "https://crwn-db-1829a.firebaseio.com",
    projectId: "crwn-db-1829a",
    storageBucket: "crwn-db-1829a.appspot.com",
    messagingSenderId: "164648756042",
    appId: "1:164648756042:web:a827b8e16ace1d7eadd7b3",
    measurementId: "G-SG5ZL0XHMJ"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists)
      {
          const {displayName,email} = userAuth;
          const createdAt = new Date();

          try
          {
                if(displayName===null)
                {
                    if(additionalData===undefined)
                    {
                        
                    }
                    else{
                        await userRef.set({
                            displayName,
                            email,
                            createdAt,
                            ...additionalData
                        })
                    }
                }
                else
                {
                    await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                    })
                }
          } catch(error){
              console.log('Error creating user ', error.message);
          }
          //console.log('this is firebase ',displayName,' and ',additionalData,' and ',email)

      }
      return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;