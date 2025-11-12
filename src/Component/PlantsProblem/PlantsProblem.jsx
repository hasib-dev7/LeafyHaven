import Hangingleaves from "../../assets/Hanging-leaves .avif";
import Yellowleaves from "../../assets/Yellow-leaves.avif";
import Rootrot from "../../assets/Root-rot.avif";
import Diseasespests from "../../assets/Diseases &-pests.avif";
const PlantsProblem = () => {
  return (
    <>
      <div className="bg-green-50  py-16 px-6 md:px-20">
        <div className=" mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 text-center">
            Plant problems? <span className="text-green-600">PLNTS Doctor</span>
            to the rescue!
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 text-center">
            Is your beauty showing signs she isn't so happy anymore? Think about
            drooping or yellow leaves, maybe even some weird, unfamiliar spots
            on her foliage? Hopefully, our wise PLNTS Doctor can help your plant
            recover and become stronger than ever! Explore our
            <span className="font-semibold text-green-700">
              'Diseases & Pests'
            </span>
            guide to recognize those annoying bugs — and save your green bestie
            with our helpful tips!
          </p>

          {/* Example card section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 p-4 text-center">
              <figure>
                <img
                  src={Hangingleaves}
                  alt="Hanging leaves"
                  className="rounded-lg mx-auto mb-4 w-full h-[250px]"
                />
              </figure>
              <h3 className="text-lg font-semibold text-green-700">
               Hanging leaves
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 p-4 text-center">
              <figure>
                <img
                  src={Yellowleaves}
                  alt="Yellow leaves"
                  className="rounded-lg mx-auto mb-4 w-full h-[250px]"
                />
              </figure>
              <h3 className="text-lg font-semibold text-green-700">
               Yellow leaves
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 p-4 text-center">
              <figure>
                <img
                  src={Rootrot}
                  alt="Root rot"
                  className="rounded-lg mx-auto mb-4 w-full h-[250px]"
                />
              </figure>
              <h3 className="text-lg font-semibold text-green-700">
                Root rot
              </h3>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 p-4 text-center">
              <figure>
                <img
                  src={Diseasespests}
                  alt="Diseases &-pests"
                  className="rounded-lg mx-auto mb-4 w-full h-[250px]"
                />
              </figure>
              <h3 className="text-lg font-semibold text-green-700">
               Diseases &-pests
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantsProblem;
