// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
// // const apiUrl = "http://localhost:5209"

// console.log(process.env.REACT_APP_API_URL)
// axios.defaults.baseURL=process.env.REACT_APP_API_URL;
// const currentAxios=axios.create({
//   baseURL:process.env.REACT_APP_API_URL
// });

// currentAxios.interceptors.response.use(
//   response=>response
//   ,error=>{
//   console.error(console.error(error))
// }
// );


// export default {
//   getTasks: async () => {
//     const result = await currentAxios.get(`/items`);
//     return result.data;
//   },

//   addTask: async (name) => {
//     console.log('AddTask', name)
//     //TODO
//     const result = await currentAxios.post(`/items/${name}`);
//     return result.data;
//   },
 
//   setCompleted: async (id, name, isComplete) => {
//     console.log('setCompleted', { id, isComplete })
//     const result = await currentAxios.put(`/items/${id}`, { Name: name, IsComplete: isComplete });

//     return { result };
//   },

//   deleteTask: async (id) => {
//     console.log('deleteTask')
//     await currentAxios.delete(`/items/${id}`);
//   }
// };
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
//axios.defaults.baseURL = process.env.apiUrl;
const apiClient=axios.create({
  baseURL:`${process.env.REACT_APP_API_URL}/items`
})
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
//axios.create();

export default {
  getTasks: async () => {
    const result = await apiClient.get(``)
    return result.data;
  },

  addTask: async (name) => {
    // console.log('addTask', name)
    const result = await apiClient.post(``, { name: name, isComplete: false }).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  },

  setCompleted: async (id, isComplete) => {
    const result = await apiClient.put(`/${id}?isComplete=${isComplete}`).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  },

  deleteTask: async (id) => {
    // console.log('deleteTask')
    const result = await apiClient.delete(`/${id}`).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  }

};

apiClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log("OK");
  console.log("response",response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.error("error",error);
  return Promise.reject(error);
});



