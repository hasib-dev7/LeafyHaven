import usePlantsExperts from "../../Hooks/usePlantsExperts";

const PlantsExperts = () => {
  const [plantsExperst, plantsExperstError] = usePlantsExperts();
  if (plantsExperstError)
    return <p className="text-red-500">Error : {plantsExperstError}</p>;
  // console.log(plantsExperst);
  return (
    <>
      <div className="">
        <h2 className="text-3xl font-semibold mb-4 text-center">Meet Our Green Experts</h2>
        <p className="text-gray-600 mb-8 text-center">
          Trusted plant lovers ready to help your plants thrive.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plantsExperst.map((p) => (
            <article
              key={p.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.img}
                  alt={`${p.name} portrait`}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <p className="text-sm text-green-700 font-semibold">
                    {p.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">{p.bio}</p>
              <div className="mt-4">
                <button className="text-sm px-3 py-1 border rounded-full text-green-800 border-green-200 hover:bg-green-50">
                  Book a consult
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantsExperts;
