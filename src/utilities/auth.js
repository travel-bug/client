import axios from 'axios';
import { API_POST } from './constants';

var AuthService = {};

// anonymous IIFE to generate the AuthService object
(function(obj) {

  obj.sendSignupRequest = (params) => {
    let authParams = {
      username: params.username,
      password: params.password,
      email: params.email
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

  obj.sendSigninRequest = (params) => {
    let authParams = {
      username: params.username,
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