import { DollarSign, Star } from "lucide-react";
import { Link } from "react-router";
const PlantCard = ({ plant }) => {
  //   console.log(plant);
  const { image, plantName, price, rating, plantId } = plant;
  return (
    <>
      <div className="p-5 rounded-xl shadow-md bg-white hover:scale-105 transition ease-in-out">
        <figure>
          <img src={image} alt="" className="w-full h-64 rounded-t-xl" />
        </figure>

        <div className="bg-white px-4 py-5 space-y-4">
          <h2 className="card-details-show-modal text-xl text-black font-semibold">
            {plantName}
          </h2>

          <div className="flex justify-between ">
            <p className="flex items-center gap-1">
              <Star color="#FACC15" />
              <span className="text-xl font-bold text-black">{rating}</span>
            </p>
            <p className="flex items-center gap-1">
            <DollarSign size={24} color="#1eff00" strokeWidth={1} />
              <span className="text-xl font-bold text-black">{price}</span>
            </p>
          </div>

          <Link to={`/plantsDetails/${plantId}`}>
            <button className="add-to-card-button w-full bg-[#16A34A] text-white font-semibold py-3 rounded-3xl hover:bg-[#15803D]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
