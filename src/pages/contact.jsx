// import React from "react";
// import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";

import Footer from "../component/Footer";
import Header from "../component/Header";

function Contact() {
  //desktob
  return <>

  <Header/>

    <div className="bg-[#070021] px-10 py-10 md:flex md:justify-between gap-10 min-h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-5">
        <h1 className=" text-5xl font-extrabold">GET IN TOUCH</h1>

        <p className="font-semibold text-lg">
          Please fill up the form to send us an email or contact us on our social media account.
        </p>

        <p className="font-semibold text-lg">
          Got questions or ready to make a reservation? Contact Coffee Spot via phone, email, or visit us in person for a warm welcome. Stay connected with us on Facebook and Instagram for updates, special offers, and behind-the-scenes content. Your satisfaction is our priority.
        </p>

        <div>
          <p className="font-bold text-xl">Email:</p>
          <p className="text-blue-500 font-semibold">hibaalibile29@gmail.com</p>
        </div>

        <div>
          <p className="font-bold text-xl">Contact Number:</p>
          <p className="text-blue-500 font-semibold">+252 619977139</p>
        </div>

        <div>
          <p className="font-bold text-xl mb-2">Social Links:</p>
          <div className="flex gap-4">
                        <a
href="https://wa.me/252619977139" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-500 text-white px-10 py-3 rounded-md shadow-md hover:bg-[#1e1e6e] duration-300 shadow-2xl hover:shadow-white"
>
   <i class="fa-brands fa-whatsapp  text-white"></i>
</a>
                    <div className="bg-blue-500 px-3 py-3 rounded-xl hover:bg-[#1e1e6e] duration-300 shadow-2xl hover:shadow-white"><i class="fa-brands fa-facebook-f text-white"></i></div>
                    {/* <div className="bg-black px-3 py-3 rounded-xl"><i class="fa-brands fa-whatsapp text-white"></i></div> */}
                    <div className="bg-blue-500 px-3 py-3 rounded-xl hover:bg-[#1e1e6e] duration-300 shadow-2xl hover:shadow-white"><i class="fa-brands  fa-instagram text-white"></i></div>
                    <div className="bg-blue-500 px-3 py-3 rounded-xl hover:bg-[#1e1e6e] duration-300 shadow-2xl hover:shadow-white"><i class="fa-brands fa-tiktok text-white"></i></div>
                
                    

          </div>
        
        </div>
      </div>

      {/* Right Side */}
      <form className="md:w-1/2 space-y-4 mt-10 md:mt-0">
        <div className="flex gap-4">
          <input type="text" placeholder="First Name" className="border w-full px-4 py-2" />
          <input type="text" placeholder="Last Name" className="border w-full px-4 py-2" />
        </div>
        <input type="email" placeholder="Email" className="border w-full px-4 py-2" />
        <input type="text" placeholder="Subject(optional)" className="border w-full px-4 py-2" />
        <textarea placeholder="messege(optional)" className="border w-full px-4 py-2 h-40 resize-none" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-10 py-3 rounded-md shadow-md hover:bg-[#1e1e6e] duration-300 shadow-2xl hover:shadow-white"
        >
          Submit
        </button>
      </form>
    </div>



    <Footer/>
  </>;
}

export default Contact;
