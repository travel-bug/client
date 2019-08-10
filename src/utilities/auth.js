import axios from 'axios';
import { API_POST } from './constants';

/** Global authentication object used to send requests to the API */
var AuthService = {};

/** 
 * Anonymous IIFE that creates the AuthService object
 * @module AuthService
 */
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
      firstName: params.firstName,
      lastName: params.lastName
    };
    return new Promise((resolve, reject) => {
      axios.post(API_POST.signup, authParams).then(response => {
        // set important response data to a variable or coordinate with context
        console.log(response);
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
      email: params.email,
      password: params.password
    };
    return new Promise((resolve, reject) => {
      axios.post(API_POST.login, authParams).then(response => {
        // set important response data to a variable or coordinate with context
        console.log(response);
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
      axios.post(API_POST.signout).then(response => {
        console.log(response);
        resolve();
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }
})(AuthService);

export default AuthService;