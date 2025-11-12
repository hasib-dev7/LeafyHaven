import Hero from "../../Component/HeroSection/Hero";
import PlantCard from "../../Component/PlantCard/PlantCard";
import usePlants from "../../Hooks/usePlants";
import CareTips from "../../Component/CareTips/CareTips";
import PlantsExperts from "../../Component/PlantsExperts/PlantsExperts";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import PlantsProblem from "../../Component/PlantsProblem/PlantsProblem";

const Home = () => {
  const [plants, plantsLoading, error] = usePlants();

  if (plantsLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500">Error : {error}</p>;

  const plantsHomePage = plants.slice(0, 6);

  return (
    <>
      {/* hero section */}
      <section className="pt-6">
        <Hero></Hero>
      </section>
      {/* home pager title and card section */}
      <section className="py-10">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-slate-800 leading-tight text-center">
            Bring Nature Into Your Living Space
          </h1>

          <p className="mt-4 text-slate-600 text-lg md:text-xl w-full md:w-8/12 lg:w-10/12 mx-auto leading-relaxed text-center pb-10">
            Discover a curated collection of indoor plants designed to refresh
            your environment and uplift your mood. From care tips to expert
            guidance, GreenNest helps you nurture greenery effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plantsHomePage.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant}></PlantCard>
          ))}
        </div>
      </section>
      {/* care tips section */}
      <section className="py-16">
        <CareTips></CareTips>
      </section>
      {/* plants experts section */}
      <section className="pb-16">
        <PlantsExperts></PlantsExperts>
      </section>
     {/*  */}
     <PlantsProblem></PlantsProblem>
    </>
  );
};

export default Home;
