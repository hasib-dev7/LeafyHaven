import axios from "axios";
import { useEffect, useState } from "react";

const usePlantsExperts = () => {
  const [plantsExperst, setPlantsExperts] = useState([]);
  const [plantsExperstError, setPlantsExpertsError] = useState(null);
  useEffect(() => {
    const facthPlantsExperts = async () => {
      try {
        setPlantsExpertsError(null);
        const respons = await axios("../plantCareExperts.json");
        setPlantsExperts(respons.data);
      } catch (err) {
        setPlantsExpertsError(err);
      }
    };
    facthPlantsExperts();
  }, []);
  return [plantsExperst, plantsExperstError];
};

export default usePlantsExperts;
