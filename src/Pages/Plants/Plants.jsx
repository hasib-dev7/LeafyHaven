import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import PlantCard from "../../Component/PlantCard/PlantCard";
import usePlants from "../../Hooks/usePlants";

const Plants = () => {
  const [plants, plantsLoading, error] = usePlants();

  if (plantsLoading) return <LoadingSpinner></LoadingSpinner>
  if (error) return <p className="text-red-500">Error : {error}</p>;
  return (
    <>
      <div className="py-5 md:py-8 lg:py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
          Our Beautiful <span className="text-green-600">Plants</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-center">
          Explore our collection of hand-picked indoor plants — perfect for your
          home, workspace, or garden. Each plant is nurtured with love and care
          to bring nature closer to you. 🌼
        </p>
        {/* plants card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant}></PlantCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plants;
