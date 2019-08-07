import axios from 'axios';
import { API_GET } from './constants';

var DataService = {};

// anonymous IIFE to generate the DataService object
(function(obj) {
  obj.getTopPosts = () => {
    axios.get(API_GET.top_posts).then(response => {
      console.log(response);
      // set the top posts to a variable or coordinate with context
    }).catch(error => {
      console.log(error);
    });
  }
})(DataService);

export default DataService