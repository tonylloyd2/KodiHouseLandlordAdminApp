import axios  from "axios";
import { base_url } from "../../utils/baseUrl";

const getBrands =async ()=>{
    const response = await axios.get(`${base_url}productbrand/getallproductbrands`)
    return response.data;
};
const brandService ={
    getBrands,
}

export default brandService;