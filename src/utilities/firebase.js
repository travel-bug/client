import firebase from 'firebase/app';
import 'firebase/storage';

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
var storageRef = firebase.storage().ref();
var usersRef = storageRef.child('users');

/** @module Firebase */

/**
 * @memberof module:Firebase
 * @method uploadImage
 * @param image The image file uploaded by the user
 * @param {String} user_id The users id corresponding to the primary key in MySQL
 * @param {String} imageName The name to be assigned to the uploaded image in the firebase storage bucket
 * @param cb Callback function executed upon successful image upload that takes the URL of the newly uploaded image
 */
const uploadImage = (image, user_id, imageName, cb) => {
  var uploadTask = usersRef.child(`/${user_id}/${imageName}`).put(image);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function (error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      console.log(error.code);
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, function () {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
        cb(downloadURL);
      });
    }
  );
}

export {
  uploadImage
};