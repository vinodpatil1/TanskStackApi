import axios from "axios";


const api =  axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})


export const fetchPosts = async (pageNumber) =>{
      try {
       const resp = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
       return resp.status === 200? resp.data : [];

   } catch (error) {
      console.log(error);
      
   }
}

export const fetchDetailsPosts = async (id) =>{
   try {
       const resp = await api.get(`/posts/${id}`);
       return resp.status === 200? resp.data : [];

   } catch (error) {
      console.log(error);
      
   }
}

