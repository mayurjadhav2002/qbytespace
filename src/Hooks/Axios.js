import { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = (param) => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    axios.defaults.baseURL= `${process.env.REACT_APP_BASE_BACKEND_URL}/software/`;
    const getData = async(link) =>{
        try{
setLoading(true);
const res = await axios(link);
setData(res.data.data);

        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getData(param);
    }, [param])
  return {

    data, loading, error, getData: link=> getData(link)
  }
  
}

export default Axios
