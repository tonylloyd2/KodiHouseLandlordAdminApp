import axios  from "axios";
import { base_url } from "../../utils/baseUrl";

const getCategories = async()=>{
    const response = await axios.get(`${base_url}productcategory/getallproductcategories`)
    return response.data;
};

const categoryService ={
    getCategories,
}

export default  categoryService;