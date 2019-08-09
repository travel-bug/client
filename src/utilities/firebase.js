import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBOAYv-GugU1kiVeZKMZ2PbejQS2J76pY",
  authDomain: "travel-bug-1a95c.firebaseapp.com",
  databaseURL: "https://travel-bug-1a95c.firebaseio.com",
  projectId: "travel-bug-1a95c",
  storageBucket: "travel-bug-1a95c.appspot.com",
  messagingSenderId: "147518503810",
  appId: "1:147518503810:web:16797adfdf424f18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

const uploadImage = (image) => {

}

export {
  storage
};