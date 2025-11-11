import useCareTips from "../../Hooks/useCareTips";

const CareTips = () => {
  const [careTips, careTipsError] = useCareTips();
  if (careTipsError)
    return <p className="text-red-500">Error : {careTipsError}</p>;

  return (
    <>
   
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            Plant Care Tips
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mt-3">
            Simple and effective ways to keep your indoor plants healthy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {careTips.map((tip) => (
              <div
                key={tip.id}
                className="p-6 border border-slate-200 rounded-xl bg-green-50 hover:bg-green-100 transition"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {tip.title}
                </h3>
                <p className="text-slate-600 mt-2">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
};

export default CareTips;
