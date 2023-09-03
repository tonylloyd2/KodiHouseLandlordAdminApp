import axios from "axios";
import { base_url } from "../../utils/baseUrl";


  const getBlogCategory = async()=>{
    const response = await axios.get(`${base_url}blogcategory/getallblogcategories`)
    return response.data;
}

const bCategoryService ={
    getBlogCategory
};


export default bCategoryService;