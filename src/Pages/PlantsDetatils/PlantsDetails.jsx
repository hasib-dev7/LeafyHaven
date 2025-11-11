import { useParams } from "react-router";
import usePlants from "../../Hooks/usePlants";
import { DollarSign, Star } from "lucide-react";
import { toast } from "react-toastify";

const PlantsDetails = () => {
  const { id } = useParams();
  const [plants, plantsLoading, error] = usePlants();
  if (plantsLoading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error}</p>;
  // find plant card details id
  const plantsDetail = plants.find((p) => String(p.plantId) === id);
  const { image, plantName, description, price, rating, availableStock } =
    plantsDetail;
  // console.log(plantsDetail);
  // Book Consultation form
  const handleBook=(e)=>{
    e.preventDefault()
    e.target.reset()
   toast.success(`"Consultation Booked Successfully!" ${plantName}`)
  }
  return (
    <>
      <div className="card bg-base-100 w-full my-5 md:my-8 lg:my-10">
        <figure>
          <img className="w-full h-[500px]" src={image} alt={plantName} />
        </figure>
        <div className="card-body">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">
            {plantName}
          </h2>
          <p className="text-[16px] lg:text-lg">{description}</p>
          {/* <div className="divider"></div> */}

          <div className="flex justify-between items-center text-lg md:text-xl font-bold pt-2">
            <p className="flex-none flex items-center ">
              Price :
              <DollarSign size={24} color="#1eff00" strokeWidth={1} />
              {price}
            </p>
            <p className="flex-1 text-center">Rating : {rating}</p>
            <p className="flex-none">Available Stock : {availableStock}</p>
          </div>
        </div>
        {/* from section */}
        <div className="divider"></div>
        <div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
            <div className="card-body">
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Book a Consultation
                </h2>
                <p className="text-gray-600 mb-4">
                  Want expert advice on caring for this plant? Book a free
                  consultation below.
                </p>
              </div>
              <form onSubmit={handleBook}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input type="text" className="input" placeholder="Enter Your Name" required/>
                  {/* email */}
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Enter Your Email" required/>

                  <button className="btn btn-neutral mt-4">Book Now</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantsDetails;
