// import img from '../image/muslim girl 3.jpg'
import Footer from '../component/Footer'
import Header from '../component/Header'
import sawir1 from '../images/muslim girl 3.jpg'

function About (){
          //desktop
          return <>
          <Header/>
           <div className="sm:flex hidden  mt-10 mb-72  h-[600px] px-32 py-20 space-x-10">
                    <img className='w-[400px] h-[680px] border-4 border-blue-600 p-2 ' src={sawir1} alt="" />
                    
                    <div className="w-[700px]">
                              
                              <h1 className="text-white text-3xl mt-5 font-semibold">I'm Modern <span className="text-blue-600">Web Designer</span></h1>
                              <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt saepe iste minus fugit quas veritatis rerum nostrum, illo maiores deleniti quo impedit numquam neque? Aperiam vitae, sapiente, officia natus voluptatem ducimus expedita magni ut porro suscipit temporibus! Laboriosam labore architecto unde repellat earum aliquam, alias hic. Accusamus doloribus iste nostrum officia earum iusto inventore nisi, a dolorem eveniet rerum officiis dolore fuga repellat atque, minima, itaque deserunt! Commodi, voluptatibus! Unde vero ab adipisci, id illo iusto dicta deleniti maiores aliquid. Reiciendis nobis ipsa incidunt facere nam debitis dolores rem accusantium itaque pariatur harum dolorem, consequuntur odio soluta quod minima?</p>
                              
                                        

                              <div className="flex space-x-44 mt-12">
                              <h4 className=" text-2xl font-semibold" >Name: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">Hiba Ali Mohamed</span>
                              </div>          

                    
                              <div className="flex space-x-48 mt-8">
                              <h4 className=" text-2xl font-semibold" >Age: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">20</span>
                              </div>

                              <div className="flex space-x-40 mt-8">
                              <h4 className=" text-2xl font-semibold" >Adress: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">Yaqshid,Banadir</span>
                              </div>

                              <div className="flex space-x-16 mt-8">
                              <h4 className=" text-2xl font-semibold" >Phone Number: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">+252619977139</span>
                              </div>

                              <div className="flex space-x-44 mt-8">
                              <h4 className=" text-2xl font-semibold" >Email: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">hibaalibile29@gmail.com</span>
                              </div>

                              <button className='px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg mt-8'>Download CV </button>


                    </div>

          </div>
           {/* mobile */}
           <div className="sm:hidden mb-72  h-[1100px] px-4 py-20  ">
                    
                    <div className="w-[500px]">
                              
                              <h1 className="text-white text-3xl mt-10 font-semibold ">I'm Modern <span className="text-blue-600">Web Designer</span></h1>
                                        <img className='w-[350px] h-[550px] border-4 border-blue-600 p-2 mt-10' src={sawir1} alt="" />

                              <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt saepe iste minus fugit quas veritatis rerum nostrum, illo maiores deleniti quo impedit numquam neque? Aperiam vitae, sapiente, officia natus voluptatem ducimus expedita magni ut porro suscipit temporibus! Laboriosam labore architecto unde repellat earum aliquam, alias hic. Accusamus doloribus iste nostrum officia earum iusto inventore nisi, a dolorem eveniet rerum officiis dolore fuga repellat atque, minima, itaque deserunt! Commodi, voluptatibus! Unde vero ab adipisci, id illo iusto dicta deleniti maiores aliquid. Reiciendis nobis ipsa incidunt facere nam debitis dolores rem accusantium itaque pariatur harum dolorem, consequuntur odio soluta quod minima?</p>
                              
                                        

                              <div className="flex space-x-44 mt-12">
                              <h4 className=" text-2xl font-semibold" >Name: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">Hiba Ali Mohamed</span>
                              </div>          

                    
                              <div className="flex space-x-48 mt-8">
                              <h4 className=" text-2xl font-semibold" >Age: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">20</span>
                              </div>

                              <div className="flex space-x-40 mt-8">
                              <h4 className=" text-2xl font-semibold" >Adress: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">Yaqshid,Banadir</span>
                              </div>

                              <div className="flex space-x-16 mt-8">
                              <h4 className=" text-2xl font-semibold" >Phone Number: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">+252619977139</span>
                              </div>

                              <div className="flex space-x-44 mt-8">
                              <h4 className=" text-2xl font-semibold" >Email: </h4>
                              <span className="text-gray-500  font-semibold mt-1  ">hibaalibile29@gmail.com</span>
                              </div>

                              <button className='px-6 py-3 bg-blue-600 text-black  font-semibold rounded-lg mt-8'>Download CV </button>


                    </div>

          </div>
          <Footer/>

          </>
}
export default About