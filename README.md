# Travel Bug
Travel Bug is a site intended for users to share their experiences at local restaurants/bars, events, or sights.  Users can create an account and post a picture about a certain aspect of the activity they experienced and write a short comment to share with the world.

# Documentation

## React Components
...

## Data Layer

The data layer consists of several chunks of code designed to be imported to any react component that needs to use its functionality.

1. `auth.js`

   This file exports an object called `AuthService` and is responsible for sending all http requests associated with authentication.
   
   ```
   // Sends an http POST request to the sign up endpoint with a payload of three parameters:
   // username, password, and email
   AuthService.sendSignupRequest = (params) => {...}` 

   // Similar to the above function, but the sign in function only requires an email and password params
   AuthService.sendSigninRequest = (params) => {...}

   // Sends a signout request - no params required
   AuthService.sendSignoutRequest = () => {...}
   ```

2. `data.js`

   This file exports an object called `DataService` and is responsible for sending all http requests associated with data stored in the MySQL database

   ```
   // This function requests the most recent posts from the API to display on the home page
   // ** The Payload of the request is not yet known**
   DataService.getTopPosts = () => {...}

   // Sends a POST request that creates a new post on the travel bug app
   // Requires several properties properties in the params object: 
   // user_id - corresponds to the primary key in the MySQL database, 
   // content - text content written by the user, 
   // place_id - corresponds to the primary key in the places table in MySQL,
   // image - image file submitted by the user,
   // postTitle - title of the post written by the user
   DataService.newPost = (params) => {...}
   ```

3. `firebase.js`

   Imports the firebase npm package and initializes itself to the travel bug firebase project, which is where all images for the app will be stored.

   Note the API keys in this file do not need to be protected because they are public keys

   The `uploadImage` function takes three inputs and a callback function to upload an image to the firebase storage bucket.  
   `image`: the file uploaded by the user.
   `user_id`: the user_id corresponding to the primary key in our MySQL database
   `imageName`: arbitrary name for the image - likely the title of the user's post
   `cb`: function invoked upon a successful image upload which takes in the image URL

   ```
   uploadImage = (image, user_id, imageName, cb) => {...}
   ```

4. `pubsub.js`

   Exports an object called `Pubsub` and serves as the middleman for communication between unrelated react components

   ```
   Pubsub.publish = (notif, data) => {...}

   Pubsub.subscribe = (notif, subscriber, cb) => {...}

   Pubsub.unsubscribe = (notif, subscriber) => {...}
   ```

   The simplest way to use this object is for a component to subscribe to a specific event in the `componentDidMount()` lifecycle function and unsubscribe in `componentWillUnmount()`.  Note it is very important that all components that subscribe to an event always unsubscribe in the unmount function.

   Example use case for telling a modal component to show/hide via Pubsub:

   `modal.js`
   ```
   import React from 'react';
   import Modal from 'react-modal';
   import Pubsub from './pubsub';
   import { NOTIF } from './constants';

   export class Modal extends Component {
     
     state = {
       modalIsOpen: false
     };

     // subscribing to the SHOW_MODAL event will cause the Pubsub object to call the showModal function whenever any component publishes on that event.
     componentDidMount() {
       Pubsub.subscribe(NOTIF.SHOW_MODAL, this, showModal);
     }

     // unsubscribing in the unmount function is very important as the app will have memory leaks if you do not unsubscribe
     componentWillUnmount() {
       Pubsub.unsubscribe(NOTIF.SHOW_MODAL, this);
     }

     showModal = () => {
       this.setState({
         modalIsOpen: true
       });
     }

     closeModal = () => {
       this.setState({
         modalIsOpen: false
       });
     }

     render() {
       return (
         <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
         >
           {/* MODAL CONTENT /*}
         </Modal>
       );
     }
   }
   ```


   `navbar.js`
   ```
   import React from 'react';
   import Pubsub from './pubsub';
   import { NOTIF } from './constants';

   export class Navbar extends Component {
     
     showModal = () => {
       // publish an event on the NOTIF.SHOW_MODAL subscription for all components listening to that specific notification constant
       // the second parameter is null in this case because the modal doesn't need any data from the Navbar
       Pubsub.publish(NOTIF.SHOW_MODAL, null);
     }

     render() {
       return (
         <nav>
           <NavItem />
           <NavItem />
           <NavItem />
           {/* we want the modal to show on screen when clicking the button /*}
           <button onClick={showModal}>
             Sign In/Sign Up
           </button>
         </nav>
       );
     }
   }
   ```

   The above components do not need to be related in the DOM tree for the Pubsub relationship to work.  When the navbar calls `Pubsub.publish()` on the `NOTIF.SHOW_MODAL` event, any component subscribed to that event (e.g. the modal component) will run the callback function associated with its subscription.

5. `constants.js`

   A catch-all for reusable primitive values, i.e. `NOTIF` properties used in the Pubsub relationship, relative API routes used in `AuthService` and `DataService`, or any other use case we encounter.

   The Pubsub example above demonstrates how values are stored in the `NOTIF` object, and relative API routes are stored as follows:

   ```
   export const API_GET = {
     top_posts: '/api/top_posts',
     ...
   };

   export const API_POST = {
     login: '/api/login',
     signup: '/api/signup',
     ...
   };
   ```