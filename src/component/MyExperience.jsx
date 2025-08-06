import { Link } from "react-router-dom"

function MyExperience(){
          //disktop
          return<>
          <div className="hidden sm:block mt-32 px-10 ">
                    <p className="text-blue-600 ml-[400px]">EXPERIENCES</p>
                    <h1 className="text-white text-center font-medium text-5xl  ">MY WORK EXPERIENCES</h1>
          <div className="flex mt-10 justify-around">
                    <div className=" text-center">
                             <i className="fa-solid fa-code text-blue-700 text-5xl "></i>
                             <h1 className="text-3xl font-semibold mt-5">Developer</h1>
                             <p className="w-72 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni natus porro sint, modi delectus! Deserunt quas velit quos, fugiat quis doloribus quaerat modi voluptate, consectetur quod libero ad dignissimos?</p>
                            <Link to={"/projects"}><button className="bg-blue-500 mt-10 text-[#070021] px-5 py-2 rounded-2xl hover:bg-[#9696ff] duration-500 shadow-lg hover:shadow-white ">See more</button></Link>  
                    </div>
                    <div className=" text-center">
                             <i className="fa-solid fa-code text-blue-700 text-5xl "></i>
                             <h1 className="text-3xl font-semibold mt-5">Graphic Designer</h1>
                             <p className="w-72 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni natus porro sint, modi delectus! Deserunt quas velit quos, fugiat quis doloribus quaerat modi voluptate, consectetur quod libero ad dignissimos?</p>
                         < Link to={"/GraphicDesigner"}><button className="bg-blue-500 mt-10 text-[#070021] px-5 py-2 rounded-2xl hover:bg-[#9696ff] duration-500 shadow-lg hover:shadow-white ">See more</button></Link>
                         {/* <link> to={"GraphicDesigner"} <button className="bg-[#070021] mt-10 text-blue-500 px-5 py-2 rounded-2xl hover:bg-[#bg-[#9696ff]] duration-500 shadow-lg hover:shadow-white ">See more</button></link> */}
                    </div>
                    <div className=" text-center">
                             <i className="fa-solid fa-code text-blue-700 text-5xl "></i>
                             <h1 className="text-3xl font-semibold mt-5">Marketing</h1>
                             <p className="w-72 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni natus porro sint, modi delectus! Deserunt quas velit quos, fugiat quis doloribus quaerat modi voluptate, consectetur quod libero ad dignissimos?</p>
                              <button className="bg-blue-500 mt-10 text-[#070021] px-5 py-2 rounded-2xl hover:bg-[#9696ff] duration-500 shadow-lg hover:shadow-white ">See more</button>
                    </div>

                    


          </div>

          </div>
          {/* mobile */}
           <div className="sm:hidden mt-32 px-10 ">
                    <p className="text-blue-600 ml-[40px]">EXPERIENCES</p>
                    <h1 className="text-white text-center font-medium text-5xl  ">MY WORK EXPERIENCES</h1>
          <div className=" mt-20 space-y-10">
                    <div className=" text-center">
                             <i className="fa-solid fa-code text-blue-700 text-5xl "></i>
                             <h1 className="text-3xl font-semibold mt-5">Developer</h1>
                             <p className="w-72 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni natus porro sint, modi delectus! Deserunt quas velit quos, fugiat quis doloribus quaerat modi voluptate, consectetur quod libero ad dignissimos?</p>
                            <Link to={"/projects"}><button className="bg-blue-500 mt-10 text-[#070021] px-5 py-2 rounded-2xl hover:bg-[#9696ff] duration-500 shadow-lg hover:shadow-white ">See more</button></Link>  
                    </div>
                    <div className=" text-center">
                             <i className="fa-solid fa-code text-blue-700 text-5xl "></i>
                             <h1 className="text-3xl font-semibold mt-5">Graphic Designer</h1>
                             <p className="w-72 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni natus porro sint, modi delectus! Deserunt quas velit quos, fugiat quis doloribus quaerat modi voluptate, consectetur quod libero ad dignissimos?</p>
                         < Link to={"/GraphicDesigner"}><button className="bg-blue-500 mt-10 text-[#070021] px-5 py-2 rounded-2xl hover:bg-[#9696ff] duration-500 shadow-lg hover:shadow-white ">See more</button></Link>
                         {/* <link> to={"GraphicDesigner"} <button className="bg-[#070021] mt-10 text-blue-500 px-5 py-2 rounded-2xl hover:bg-[#bg-[#9696ff]] duration-500 shadow-lg hover:shadow-white ">See more</button></link> */}
                    </div>
                    <div className=" text-center">
                             <i className="fa-solid fa-code text-blue-700 text-5xl "></i>
                             <h1 className="text-3xl font-semibold mt-5">Marketing</h1>
                             <p className="w-72 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magni natus porro sint, modi delectus! Deserunt quas velit quos, fugiat quis doloribus quaerat modi voluptate, consectetur quod libero ad dignissimos?</p>
                              <button className="bg-blue-500 mt-10 text-[#070021] px-5 py-2 rounded-2xl hover:bg-[#9696ff] duration-500 shadow-lg hover:shadow-white ">See more</button>
                    </div>

                    


          </div>

          </div>
          
          
          
          </>

}
export default MyExperience