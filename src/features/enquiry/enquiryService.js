import axios from "axios";
import { base_url } from "../../utils/baseUrl";


const getEnquiries = async ()=>{
    const response = await axios.get(`${base_url}enquiry/getallenquiries`)
    return response.data;
}

const enquiryService = {
    getEnquiries,
}

export default enquiryService;


