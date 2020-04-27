import firebase from 'firebase';


class Firebase {

  constructor() {
    console.log('constructor');
    this.initilaizingApp();
    this.observeAuth();
  }
  
  
  initilaizingApp = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDi-3QRZOannEDC27JV6vnH3jh2oCJvenU",
        authDomain: "chatapp-e972c.firebaseapp.com",
    databaseURL: "https://chatapp-e972c.firebaseio.com",
    projectId: "chatapp-e972c",
    storageBucket: "chatapp-e972c.appspot.com",
    messagingSenderId: "588440723030",
    appId: "1:588440723030:web:3465d3db277ee84fb0e5f7",
    measurementId: "G-YVJRHY6JF5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

 observeAuth = () => {
   firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
 }

 onAuthStateChanged = user => {
   console.log("user =>",user);
   if(!user) {
     try {
       console.log('user +>',user);
       firebase.auth().signInAnonymously();
       console.log('firebase',firebase);
     } catch ({message}) {
       alert(message);
     }
   }
 };

get ref() {
  return firebase.database().ref('messages');
}

get uid() {
  return (firebase.auth().currentUser || {}).uid;
}

get timestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}

send = messages => {
  console.log(messages);
  for (let i = 0; i < messages.length; i++) {
    const { text, user } = messages[i];
    const message = {
      text,
      user,
      timestamp: this.timestamp,
    };
    this.append(message);
  }
};

append = message => this.ref.push(message);

on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

parse = snapshot => {
  const { timestamp: numberStamp, text, user } = snapshot.val();
  const { key: _id } = snapshot;
  const timestamp = new Date(numberStamp);

  const message = {
    _id,
    timestamp,
    text,
    user,
  };
 return message;
}

off() {
        this.ref.off();
      }


};


Firebase.shared = new Firebase();

export default Firebase;