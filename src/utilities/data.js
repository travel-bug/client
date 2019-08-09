import axios from 'axios';
import { API_GET, API_POST } from './constants';
import { uploadImage } from './firebase';

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

  obj.newPost = (params) => {
    // likely from the User object that lives in AuthService
    // let user_id = User.user_id;

    uploadImage(params.image, user_id, params.postTitle, (imageUrl) => {
      let newPostParams = {
        user_id: params.user_id,
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