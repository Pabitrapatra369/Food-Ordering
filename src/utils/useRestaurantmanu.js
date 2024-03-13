import { useState } from "react";
import { manu_api } from "../utils/constants";
import { useEffect } from "react";
const useRestaurantManu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch( + resId);
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantManu;
