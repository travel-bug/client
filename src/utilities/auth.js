import axios from 'axios';
import Pubsub from './pubsub';
import { API_POST, NOTIF } from './constants';

/** 
 * Anonymous IIFE that creates the AuthService object
 * @module AuthService
 */
var AuthService = {};
const baseUrl = process.env.REACT_APP_BASE_URL || '/';

/**
 * User object representing the currently signed in user's profile information
 * @param {String} [userId] The user's unique id, corresponding to the primary key in mysql
 * @param {String} [username] User's display name
 * @param {String} [firstName] User's first name
 * @param {String} [lastName] User's last name
 * @param {String} [profPicUrl] The URL of the user's profile pic that's stored in firebase
 */
var User = {};

(function(obj) {
  /**
   * Send user information in a POST request to the the API "create account" endpoint
   * @memberof module:AuthService
   * @method sendSignupRequest
   * @param {Object} params User information required to create an account
   * @param {String} params.username The user's username/alias
   * @param {String} params.email The user's email address
   * @param {String} params.password The user's password
   * @param {String} params.firstName The user's first name
   * @param {String} params.lastName The user's last name
   * @returns {Promise} Promise object resolves to the newly created user's id and rejects an error object
   */
  obj.sendSignupRequest = (params) => {
    let authParams = {
      username: params.username,
      password: params.password,
      email: params.email,
      firstname: params.firstName,
      lastname: params.lastName
    };
    console.log(baseUrl + API_POST.signup);
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + API_POST.signup, authParams).then(response => {
        // set important response data to a variable or coordinate with context
        console.log(response);
        packageUserInfo(response.data);
        console.log(User);
        Pubsub.publish(NOTIF.SIGN_IN, null);
        resolve();
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }

  /**
   * Send user information in a POST request to the API "login" endpoint
   * @memberof module:AuthService
   * @method sendSigninRequest
   * @param {Object} params User information required to sign in
   * @param {String} params.email The user's email address
   * @param {String} params.password The user's password
   * @returns {Promise} Promise object resolves to the user's id and rejects an error object
   */
  obj.sendSigninRequest = (params) => {
    let authParams = {
      username: params.username,
      password: params.password
    };
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + API_POST.login, authParams).then(response => {
        // set important response data to a variable or coordinate with context
        console.log(response);
        packageUserInfo(response.data);
        console.log(User);
        Pubsub.publish(NOTIF.SIGN_IN, null);
        resolve();
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }

  /**
   * Sends a POST requrest to the API "sign out" endpoint
   * @memberof module:AuthService
   * @method sendSignoutRequest
   * @returns {Promise} Promise object resolves to nothing and rejects an error object
   */
  obj.sendSignoutRequest = () => {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + API_POST.signout).then(response => {
        console.log(response);
        User = {};
        Pubsub.publish(NOTIF.SIGN_OUT, null);
        resolve();
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }
})(AuthService);

const packageUserInfo = (userObj) => {
  User.user_id = userObj.id;
  User.username = userObj.username;
  User.firstName = userObj.firstName || '';
  User.lastName = userObj.lastName || '';
  User.profPicUrl = userObj.prof_pic_url || '';
}

export default AuthService;

export {
  User
};