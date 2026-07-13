import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { generateBlueprint } from "../services/api";

const steps = [
  "Analyzing Startup Idea",
  "Validating Market",
  "Researching Competitors",
  "Building Business Model",
  "Estimating Budget",
  "Generating Blueprint",
];

function Loading() {

  const navigate = useNavigate();
  const location = useLocation();

  const idea = location.state?.idea || "";

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

const hasRequested = useRef(false);
  useEffect(() => {
   if (hasRequested.current) return;
hasRequested.current = true;
    if (!idea) {
      navigate("/");
      return;
    }


    let step = 0;


    const interval = setInterval(() => {

      if (step < steps.length - 1) {

        step++;

        setCurrentStep(step);

        setProgress(((step + 1) / steps.length) * 100);

      }

    }, 900);



    const fetchBlueprint = async () => {

      try {

        const response = await generateBlueprint(idea);


        console.log(
          "FULL API RESPONSE:",
          response
        );


        const blueprint = response.blueprint;

         console.log("FULL API RESPONSE:", response);
        console.log(
          "FINAL BLUEPRINT SENT:",
          blueprint
        );


        clearInterval(interval);


        setCurrentStep(steps.length - 1);

        setProgress(100);



        setTimeout(() => {


          navigate("/dashboard", {

            state: {
              blueprint: blueprint
            }

          });


        }, 1000);



      } catch(error) {


        console.error(
          "Blueprint generation error:",
          error
        );


        alert(
          "Failed to generate blueprint."
        );


        navigate("/");


      }

    };


    fetchBlueprint();



    return () => clearInterval(interval);


  }, [idea, navigate]);



  return (

    <section className="relative flex min-h-screen items-center justify-center bg-[#04050B] px-6">

      <div className="w-full max-w-xl">


        <motion.h1

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="mb-10 text-center text-4xl font-bold text-white"

        >

          Generating Your Startup Blueprint

        </motion.h1>



        <div className="mb-8 h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div

            animate={{
              width:`${progress}%`
            }}

            transition={{
              duration:0.5
            }}

            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"

          />

        </div>




        <div className="space-y-5">


          {steps.map((step,index)=>(

            <motion.div

              key={step}

              animate={{
                opacity:index <= currentStep ? 1 : 0.35
              }}

              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-5 py-4 backdrop-blur-md"

            >

              <span className="text-white">
                {step}
              </span>


              {index < currentStep ? (

                <span className="text-green-400 text-xl">
                  ✓
                </span>


              ) : index === currentStep ? (

                <motion.div

                  animate={{
                    rotate:360
                  }}

                  transition={{
                    repeat:Infinity,
                    duration:1,
                    ease:"linear"
                  }}

                  className="h-5 w-5 rounded-full border-2 border-cyan-400 border-t-transparent"

                />


              ) : (

                <span className="text-gray-600">
                  ○
                </span>

              )}


            </motion.div>

          ))}


        </div>



        <p className="mt-10 text-center text-gray-400">

          Powered by{" "}

          <span className="text-cyan-400">
            IBM Granite
          </span>

        </p>


      </div>


    </section>

  );

}


export default Loading;