import Hero from "../../Component/HeroSection/Hero";
import usePlants from "../../Hooks/usePlants";

const Home = () => {
  const [plants, plantsLoading, error] = usePlants();
  if (plantsLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error : {error}</p>;

  const plantsHomePage = plants.slice(0, 6);
  console.log(plantsHomePage);
  return (
    <div>
      <Hero></Hero>
      {plantsHomePage.map((plant) => (
        <div>
          <img src={plant.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
