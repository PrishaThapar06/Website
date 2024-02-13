import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import kartikey from "../../images/Kartikey.png";
import siddhant from "../../images/sidhanth-Photoroom.png-Photoroom.png";
import prisha from "../../images/prisha-Photoroom.png-Photoroom.png";
import monika from "../../images/monika-Photoroom.png-Photoroom.png";
import manoj from "../../images/manoj.jpeg";
import khushi from "../../images/khushi-Photoroom.png-Photoroom.png";
import NewFooter from "../NewFooter/NewFooter";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Why Us?
              </h2>
              <p className="mt-6 text-gray-600">
                Welcome to Find My Uni, your ultimate guide to pursuing higher
                education abroad! We stand out from the crowd with our unique
                approach to assisting aspiring students in their journey towards
                academic excellence and personal growth. Why choose us?
                Personalized Guidance: We believe in evaluating your true
                potential and aspirations, providing tailored advice to help you
                choose the best course and university that aligns with your
                goals. Comprehensive Resources: Our website offers a one-stop
                solution, from exploring top universities and courses to
                enhancing your resume for better prospects, ensuring a holistic
                approach to your overseas education journey. Global Network:
                Connect with student ambassadors who share their experiences,
                making it easier for you to envision your life abroad and get
                firsthand insights into the student community. Settlement
                Support: We go beyond admission by offering information and
                support for settling down in a new country. From accommodation
                to local tips, we've got you covered. Unbiased Recommendations:
                Unlike others in the market, we don't have exclusive tie-ups
                that compromise your potential. We value your achievements and
                focus on finding the best fit for your academic and career
                aspirations. Choose Find My Uni for a transformative overseas
                education experience that goes beyond conventional norms,
                empowering you to make informed decisions and thrive in your
                academic journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <>
        {/* component */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
              We have the best equipment
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Meet Our Dynamic Team
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={siddhant}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mr. Siddhant Jain
                </p>
                <p className="text-base text-gray-400 font-normal">Founder</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={kartikey}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mr. Kartikey Bhardwaj
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Lead Backend devloper
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={prisha}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Miss. Prisha Thapar
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Lead Frontend devloper
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={manoj}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mr. Manoj Jain
                </p>
                <p className="text-base text-gray-400 font-normal">Advisor</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={monika}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mrs. Monika Jain
                </p>
                <p className="text-base text-gray-400 font-normal">Advisor</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={khushi}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Miss. Khushi Jain
                </p>
                <p className="text-base text-gray-400 font-normal">Advisor</p>
              </div>
            </div>
          </div>
        </section>
      </>
      <NewFooter />
    </>
  );
};

export default About;
