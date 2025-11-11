import axios from "axios";
import { useEffect, useState } from "react";

const useCareTips = () => {
  const [careTips, setCareTips] = useState([]);
  const [careTipsError, setCareTipsError] = useState(null);
  useEffect(() => {
    const fatchCareTips = async () => {
      try {
        setCareTipsError(null);
        const respons = await axios("../plantsCaretips.json");
        setCareTips(respons.data);
      } catch (err) {
        setCareTipsError(err.messsage);
      }
    };
    fatchCareTips();
  }, []);
  return [careTips, careTipsError];
};

export default useCareTips;
