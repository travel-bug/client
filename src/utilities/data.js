import axios from 'axios';
import { API_GET, API_POST } from './constants';
import { uploadImage } from './firebase';

/** 
 * Anonymous IIFE that creates the AuthService object
 * @module DataService
 */
var DataService = {};
const baseUrl = process.env.REACT_APP_BASE_URL || '/';

/**
 * An array of post objects across all categories
 * @param {Object[]}
 * @param {String} posts[].postId The post's unique id, corresponding to its primary key in mysql
 * @param {String} posts[].authorId The unique id of the post's author
 * @param {String} posts[].author The username of the post's author
 * @param {String} posts[].content The content of the post
 * @param {String} posts[].imgUrl The url of the image associated with the post
 */
var TopPostsAll = [];

(function(obj) {
  /**
   * Sends a GET request to the API for the most recent posts made on travel bug across all categories
   * @memberof module:DataService
   * @method getTopPosts
   * @returns {Promise} Promise object resolves to an array of objects containing the most recent posts made by users
   */
  obj.getTopPosts = () => {
    axios.get(baseUrl + API_GET.top_posts).then(response => {
      console.log(response);
      // set the top posts to a variable or coordinate with context
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Sends a GET request to the API for the most recent posts made on travel bug in the "see" category
   * @memberof module:DataService
   * @method getTopSeePosts
   * @returns {Promise} Promise object resolves to an array of objects containing the most recent posts made by users
   */
  obj.getTopSeePosts = () => {
    axios.get(baseUrl + API_GET.top_posts_see).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Sends a GET request to the API for the most recent posts made on travel bug in the "do" category
   * @memberof module:DataService
   * @method getTopDoPosts
   * @returns {Promise} Promise object resolves to an array of objects containing the most recent posts made by users
   */
  obj.getTopDoPosts = () => {
    axios.get(baseUrl + API_GET.top_posts_do).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Sends a GET request to the API for the most recent posts made on travel bug in the "eat" category
   * @memberof module:DataService
   * @method getTopEatPosts
   * @returns {Promise} Promise object resolves to an array of objects containing the most recent posts made by users
   */
  obj.getTopEatPosts = () => {
    axios.get(baseUrl + API_GET.top_posts_eat).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Sends a GET request to search the database for a location by name
   * @memberof module:DataService
   * @method searchPlace
   * @param {String} searchString The keyword to search the database on
   * @param {String} category Specifies which category to search in.  Can be "see", "do", "eat", or "all".
   */
  obj.searchPlace = (searchString, category) => {
    axios.get(baseUrl + API_GET.search_place + `${category}/${searchString}`).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  /**
   * Sends a GET request to grab a user's profile information for populating a profile page
   * @memberof module:DataService
   * @method getUserInfo
   * @param {String} userId The user id you want to fetch information for
   */
  obj.getUserInfo = (userId) => {
    axios.get(baseUrl + API_GET.user_profile + userId).then(response => {
      console.log(response);
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
      
      axios.post(baseUrl + API_POST.new_post, newPostParams).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    })

    
  }
})(DataService);

export default DataService