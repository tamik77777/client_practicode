import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
// const apiUrl = "http://localhost:5209"

console.log(process.env.REACT_APP_API_URL)
axios.defaults.baseURL=process.env.REACT_APP_API_URL;
const currentAxios=axios.create({
  baseURL:process.env.REACT_APP_API_URL
});

currentAxios.interceptors.response.use(
  response=>response
  ,error=>{
  console.error(console.error(error))
}
);


export default {
  getTasks: async () => {
    const result = await currentAxios.get(`/items`);
    return result.data;
  },

  addTask: async (name) => {
    console.log('AddTask', name)
    //TODO
    const result = await currentAxios.post(`/items/${name}`);
    return result.data;
  },
 
  setCompleted: async (id, name, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    const result = await currentAxios.put(`/items/${id}`, { Name: name, IsComplete: isComplete });

    return { result };
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    await currentAxios.delete(`/items/${id}`);
  }
};
