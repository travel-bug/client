import axios from 'axios';
import { API_GET, API_POST } from './constants';
import { uploadImage } from './firebase';

/** Global data object used to send requests to the API */
var DataService = {};

/** 
 * Anonymous IIFE that creates the AuthService object
 * @module DataService
 */
(function(obj) {
  /**
   * Sends a GET request to the API for the most recent posts made on travel bug
   * @memberof module:DataService
   * @method getTopPosts
   * @returns {Promise} Promise object resolves to an array of objects containing the most recent posts made by users
   */
  obj.getTopPosts = () => {
    axios.get(API_GET.top_posts).then(response => {
      console.log(response);
      // set the top posts to a variable or coordinate with context
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Sends a POST request to create a new post by the signed in user.  It will first upload the image submitted by the user to firebase, which returns a URL specific to the uploaded image.  That URL is then added to the payload sent to the API in a POST request.
   * @memberof module:DataService
   * @method newPost
   * @param {Object} params Post information by the user
   * @param {String} params.postTitle Title used for the user's post - will also be the name of the image sent to firebase
   * @param {String} params.content Content of the post
   * @param {String} params.place_id The location id corresponding the the primary key in MySQL
   * @param image The image file uploaded by the user
   */
  obj.newPost = (params) => {
    // likely from the User object that lives in AuthService
    // let user_id = User.user_id;

    uploadImage(params.image, user_id, params.postTitle, (imageUrl) => {
      let newPostParams = {
        user_id: user_id,
        content: params.content,
        place_id: params.place_id,
        image_url: imageUrl
      };
      
      axios.post(API_POST.new_post, newPostParams).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    })

    
  }
})(DataService);

export default DataService