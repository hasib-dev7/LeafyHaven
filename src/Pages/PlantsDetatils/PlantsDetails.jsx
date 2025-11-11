import { useParams } from "react-router";
import usePlants from "../../Hooks/usePlants";
import { DollarSign, Star } from "lucide-react";

const PlantsDetails = () => {
  const { id } = useParams();
  const [plants, plantsLoading, error] = usePlants();
  if (plantsLoading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error}</p>;
  // find plant card details id
  const plantsDetail = plants.find((p) => String(p.plantId) === id);
  const { image, plantName, description, price, rating, availableStock } =
    plantsDetail;
  console.log(plantsDetail);
  return (
    <>
      <div className="card bg-base-100 w-full mt-5">
        <figure>
          <img className="w-full h-[500px]" src={image} alt={plantName} />
        </figure>
        <div className="card-body">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">
            {plantName}
          </h2>
          <p className="text-[16px] lg:text-lg">{description}</p>
          <div className="divider"></div>

          <div className="flex justify-between items-center text-lg md:text-xl font-bold">
            <p className="flex-none flex items-center ">
              Price :
              <DollarSign size={24} color="#1eff00" strokeWidth={1} />
              {price}
            </p>
            <p className="flex-1 text-center">Rating : {rating}</p>
            <p className="flex-none">Available Stock : {availableStock}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantsDetails;
