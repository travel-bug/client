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
    axios.post(API_POST.signup, authParams).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  obj.sendSigninRequest = (params) => {
    let authParams = {
      username: params.username,
      password: params.password
    };
    axios.post(API_POST.login, authParams).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  obj.sendSignoutRequest = () => {
    axios.post(API_POST.signout).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
})(AuthService);

export default AuthService;