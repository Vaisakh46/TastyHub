import { useEffect ,useState} from "react";

import { MENU_API_URL } from "../utils/constants";




// custom hook for fetching data 

const useRestuarantMenu = (resId) => {
    
    const [resInfo,setresInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData =  async () => {
        const data =  await fetch(MENU_API_URL + resId +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json?.data);
    }

    return (resInfo);

}

export default useRestuarantMenu;