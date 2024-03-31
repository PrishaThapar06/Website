// import React, {useState} from "react";
// import Navbar from "../Navbar/Navbar";
// import { Footer } from "../Footer/Footer";
// import siddhant from "../../images/siddhant2.jpg";
// import { FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const Contactus = () => {

//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can put the logic to send the form data
//     // to your backend or any other service

//     // Show the popup
//     setShowPopup(true);

//     // Reset the form fields
//     event.target.reset();

//     // Hide the popup after a few seconds
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 5000); // Adjust the time as per your requirement
//   };
  

  
//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-row sm:flex-col justify-center items-center w-screen bg-white">
//         {/* COMPONENT CODE */}
//         <div className="sm:block md:flex md:flex-row md:mt-[3rem] mx-auto my-4 px-4 lg:px-20">
//           <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//           <form action="https://formspree.io/f/xyyarywl" method="POST" onSubmit={handleSubmit}>
//             <div className="flex">
//               <h1 className="font-bold uppercase text-5xl">
//                 Send us a <br /> message
//               </h1>
//             </div>
//             <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="first name"
//                 placeholder="First Name*"
//                 autoComplete="off"
//                 required
//               />
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="second name"
//                 placeholder="Last Name*"
//                 autoComplete="off"
//                 required
//               />
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 autoComplete="off"
//                 required
//               />
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="number"
//                 name="number"
//                 placeholder="Phone*"
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="my-4">
//               <textarea
//                 name="message"
//                 placeholder="Message*"
//                 className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 defaultValue={""}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="my-2 w-1/2 lg:w-1/4">
//               <button
//               type="submit"
//                 className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
//                 focus:outline-none focus:shadow-outline"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//           </div>

//           <div className="w-full lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
//             <div className="flex flex-col text-white">
//               <div class="flex items-center gap-4">
//                 <img class="w-20 h-20 rounded-full" src={siddhant} alt="" />
//                 <div class="font-medium">
//                   <div>Mr. Siddhant Jain</div>
//                   <div class="text-sm text-gray-200">Founder</div>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <p className="text-gray-200 mt-3">
//                 I'm Siddhant Jain, a UK-based data scientist passionate about helping students coming to the UK. Our platform, FindMyUni, is designed to be a one-stop solution for the everyday challenges international students face. At FindMyUni, we believe in evaluating your true potential and aspirations, providing tailored advice to help you choose the best course and university that aligns with your goals. I would love to hear your feedback and encourage you to reach out if you need guidance or simply wish to chat.
//                 </p>
//               </div>
//               {/* <div className="flex my-4 w-2/3 lg:w-1/2">
//                 <div className="flex flex-col">
//                   <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
//                 </div>

//                 <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
//               </div> */}
//               {/* <i className="fas fa-map-marker-alt pt-2 pr-2"> */}
//                 <div className="flex my-4 w-2/3 lg:w-1/2">
//                   {/* <div className="flex flex-col">
//                     <i className="fas fa-phone-alt pt-2 pr-2"></i>
//                   </div> */}
//                   {/* <i className="fas fa-phone-alt pt-2 pr-2"> */}
//                     <div className="flex flex-col">
//                       <h2 className="text-2xl">Connect</h2>
//                       <div className="flex flex-row gap-x-2">
//                       <a href="https://www.linkedin.com/in/siddhantjainn/" target="_blank">
//                         <button
//                           type="button"
//                           class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2"
//                         >
//                           <FaLinkedin />
//                           LinkedIn
//                         </button>
//                         </a>
//                       <a href="mailto:jainsiddhant214@gmail.com">
//                         <button
//                           type="button"
//                           class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2"
//                         >
//                           <MdEmail />
//                           Email
//                         </button>
//                         </a>
//                       </div>
//                     </div>
//                   {/* </i> */}
//                 </div>
//                 <div className="flex my-4 w-2/3 lg:w-1/2">
//                   <div className="flex flex-col">
//                     <i className="fas fa-phone-alt pt-2 pr-2"></i>
//                   </div>
//                   <i className="fas fa-phone-alt pt-2 pr-2">
//                     <div className="flex flex-col">
//                       {/* <h2 className="text-2xl">Call Us</h2>
//                       <div className="text-gray-400 flex flex-row gap-x-2">
//                         <p>Telephone:</p>
//                         <p>1234567890</p>
//                       </div>
//                       <div className="text-gray-400 flex flex-row gap-x-2">
//                         <p>Fax:</p>
//                         <p>1234567890</p>
//                       </div> */}
//                     </div>
//                   </i>
//                 </div>
//                 {/* <i className="fas fa-phone-alt pt-2 pr-2">
//                                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                                         <a
//                                             href="https://www.facebook.com/ENLIGHTENEERING/"
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
//                                         >
//                                             <i className="fab fa-facebook-f text-blue-900"></i>
//                                         </a>
//                                         <i className="fab fa-facebook-f text-blue-900">
//                                             <a
//                                                 href="https://www.linkedin.com/company/enlighteneering-inc-"
//                                                 target="_blank"
//                                                 rel="noreferrer"
//                                                 className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
//                                             >
//                                                 <i className="fab fa-linkedin-in text-blue-900"></i>
//                                             </a>
//                                             <i className="fab fa-linkedin-in text-blue-900"></i>
//                                         </i>
//                                     </div>
//                                     <i className="fab fa-facebook-f text-blue-900">
//                                         <i className="fab fa-linkedin-in text-blue-900"></i>
//                                     </i>
//                                 </i> */}
//               {/* </i> */}
//             </div>
//             {/* <i className="fas fa-map-marker-alt pt-2 pr-2">
//                             <i className="fas fa-phone-alt pt-2 pr-2">
//                                 <i className="fab fa-facebook-f text-blue-900">
//                                     <i className="fab fa-linkedin-in text-blue-900"></i>
//                                 </i>
//                             </i>
//                         </i> */}
//           </div>

//           <i className="fas fa-map-marker-alt pt-2 pr-2">
//             <i className="fas fa-phone-alt pt-2 pr-2">
//               <i className="fab fa-facebook-f text-blue-900">
//                 <i className="fab fa-linkedin-in text-blue-900"></i>
//               </i>
//             </i>
//           </i>
//         </div>
//         <i className="fas fa-map-marker-alt pt-2 pr-2">
//           <i className="fas fa-phone-alt pt-2 pr-2">
//             <i className="fab fa-facebook-f text-blue-900">
//               <i className="fab fa-linkedin-in text-blue-900">
//                 {/* COMPONENT CODE */}
//               </i>
//             </i>
//           </i>
//         </i>
//       </div>
//       <Footer />
//       {showPopup && (
//   <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
//     <p className="text-blue-500 font-semibold">Thank you for your feedback!</p>
//   </div>
// )}
//     </>
//   );
// };

// export default Contactus;


import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import siddhant from "../../images/siddhant2.jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactus = () => {

  const [showPopup, setShowPopup] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Here you can put the logic to send the form data
  //   // to your backend or any other service

  //   // Show the popup
  //   setShowPopup(true);

  //   // Reset the form fields
  //   event.target.reset();

  //   // Hide the popup after a few seconds
  //   setTimeout(() => {
  //     setShowPopup(false);
  //   }, 5000); // Adjust the time as per your requirement
  // };
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pi4ojsj', 'template_123hm08', form.current, {
        publicKey: 'LzCdtIyR6oPvnqjMx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.preventDefault();
    // Here you can put the logic to send the form data
    // to your backend or any other service

    // Show the popup
    setShowPopup(true);

    // Reset the form fields
    e.target.reset();

    // Hide the popup after a few seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Adjust the time as per your requirement
  };


  
  return (
    <>
      <Navbar />
      <div className="flex flex-row sm:flex-col justify-center items-center w-screen bg-white">
        {/* COMPONENT CODE */}
        <div className="sm:block md:flex md:flex-row md:mt-[3rem] mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <form ref={form} onSubmit={sendEmail} 
          // onSubmit={handleSubmit}
          >
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="first name"
                placeholder="First Name*"
                autoComplete="off"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="second name"
                placeholder="Last Name*"
                autoComplete="off"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email*"
                autoComplete="off"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                name="number"
                placeholder="Phone*"
                autoComplete="off"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                name="message"
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
                autoComplete="off"
                required
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
              type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
          </div>

          <div className="w-full lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div class="flex items-center gap-4">
                <img class="w-20 h-20 rounded-full" src={siddhant} alt="" />
                <div class="font-medium">
                  <div>Mr. Siddhant Jain</div>
                  <div class="text-sm text-gray-200">Founder</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-200 mt-3">
                I'm Siddhant Jain, a UK-based data scientist passionate about helping students coming to the UK. Our platform, FindMyUni, is designed to be a one-stop solution for the everyday challenges international students face. At FindMyUni, we believe in evaluating your true potential and aspirations, providing tailored advice to help you choose the best course and university that aligns with your goals. I would love to hear your feedback and encourage you to reach out if you need guidance or simply wish to chat.
                </p>
              </div>
              {/* <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                </div>

                <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
              </div> */}
              {/* <i className="fas fa-map-marker-alt pt-2 pr-2"> */}
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  {/* <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div> */}
                  {/* <i className="fas fa-phone-alt pt-2 pr-2"> */}
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Connect</h2>
                      <div className="flex flex-row gap-x-2">
                      <a href="https://www.linkedin.com/in/siddhantjainn/" target="_blank">
                        <button
                          type="button"
                          class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2"
                        >
                          <FaLinkedin />
                          LinkedIn
                        </button>
                        </a>
                      <a href="mailto:jainsiddhant214@gmail.com">
                        <button
                          type="button"
                          class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2"
                        >
                          <MdEmail />
                          Email
                        </button>
                        </a>
                      </div>
                    </div>
                  {/* </i> */}
                </div>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      {/* <h2 className="text-2xl">Call Us</h2>
                      <div className="text-gray-400 flex flex-row gap-x-2">
                        <p>Telephone:</p>
                        <p>1234567890</p>
                      </div>
                      <div className="text-gray-400 flex flex-row gap-x-2">
                        <p>Fax:</p>
                        <p>1234567890</p>
                      </div> */}
                    </div>
                  </i>
                </div>
                {/* <i className="fas fa-phone-alt pt-2 pr-2">
                                    <div className="flex my-4 w-2/3 lg:w-1/2">
                                        <a
                                            href="https://www.facebook.com/ENLIGHTENEERING/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                                        >
                                            <i className="fab fa-facebook-f text-blue-900"></i>
                                        </a>
                                        <i className="fab fa-facebook-f text-blue-900">
                                            <a
                                                href="https://www.linkedin.com/company/enlighteneering-inc-"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                                            >
                                                <i className="fab fa-linkedin-in text-blue-900"></i>
                                            </a>
                                            <i className="fab fa-linkedin-in text-blue-900"></i>
                                        </i>
                                    </div>
                                    <i className="fab fa-facebook-f text-blue-900">
                                        <i className="fab fa-linkedin-in text-blue-900"></i>
                                    </i>
                                </i> */}
              {/* </i> */}
            </div>
            {/* <i className="fas fa-map-marker-alt pt-2 pr-2">
                            <i className="fas fa-phone-alt pt-2 pr-2">
                                <i className="fab fa-facebook-f text-blue-900">
                                    <i className="fab fa-linkedin-in text-blue-900"></i>
                                </i>
                            </i>
                        </i> */}
          </div>

          <i className="fas fa-map-marker-alt pt-2 pr-2">
            <i className="fas fa-phone-alt pt-2 pr-2">
              <i className="fab fa-facebook-f text-blue-900">
                <i className="fab fa-linkedin-in text-blue-900"></i>
              </i>
            </i>
          </i>
        </div>
        <i className="fas fa-map-marker-alt pt-2 pr-2">
          <i className="fas fa-phone-alt pt-2 pr-2">
            <i className="fab fa-facebook-f text-blue-900">
              <i className="fab fa-linkedin-in text-blue-900">
                {/* COMPONENT CODE */}
              </i>
            </i>
          </i>
        </i>
      </div>
      <Footer />
      {showPopup && (
  <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
    <p className="text-blue-500 font-semibold">Thank you for your feedback!</p>
  </div>
)}
    </>
  );
};

export default Contactus;
