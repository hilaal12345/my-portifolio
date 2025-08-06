
import img1 from "../images/img1.png"
import cover from "../images/cover.png"
import { useState } from "react"
function Footer(){
        
          const [About,setAbout]=useState(false)
          const handleIsOpen=()=>{
                     if(About===false){
                    setAbout(true)
                     }

                    else{
                              setAbout(false)
                              
                    }
          }
          const [Information,setinfo]=useState(false)
          const infoIsOpen=()=>{
                     if(Information===false){
                    setinfo(true)
                     }

                    else{
                              setinfo(false)
                              
                    }
          }
          const [Account,setAccount]=useState(false)
          const AcountIsOpen=()=>{
                     if(Account===false){
                    setAccount(true)
                     }

                    else{
                              setAccount(false)
                              
                    }
          }
          const [Store,setStore]=useState(false)
          const StoreIsOpen=()=>{
                     if(Store===false){
                    setStore(true)
                     }

                    else{
                              setStore(false)
                              
                    }
          }
          const [Contact,setContact]=useState(false)
          const ContactIsOpen=()=>{
                     if(Contact===false){
                    setContact(true)
                     }

                    else{
                              setContact(false)
                              
                    }
          }




          return <>
          <div className='hidden sm:block mt-20 '>
          <div className='bg-cover bg-center h-[600px] w-full' style={{backgroundImage:`url(${cover})`}}>
          <div className='flex justify-between px-20 py-10' >
          <div className='flex space-x-6'>
                    <i class="fa-solid fa-bars text-orange-500 text-5xl mt-3 "></i>

                    <div className='text-white'>
                              <p className='text-2xl font-semibold'>Join our newslatter and get offres</p>
                              <p>sing up our newslatter</p>
                    </div>
                   
          </div> 

          <div className=''>
                    <button className='bg-white px-16 py-3'>Enter your Email</button>
                    <button className='bg-orange-600 text-white px-12 py-3 font-semibold'>Subscribe</button>
          </div> 

          </div>





          <div className='bg-blue-950 h-[500px] f-full py-16 px-10  '>
                    <div className='flex justify-between '>
                    <div className='w-[300px] text-white  '>
                             <p className='text-3xl font-semibold'>About Us</p>
                             <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                               Dolor perferendis veniam suscipit maxime. Eaque pariatur minus quos, ratione quibusdam reiciendis.</p>
                              <div className='mt-6 space-x-6 text-2xl'>
                                         <i class="fa-regular fa-user"></i>
                                         <i class="fa-regular fa-user"></i>
                                         <i class="fa-regular fa-user"></i>
                                         <i class="fa-regular fa-user"></i>

                              </div>
                    </div>

                    <div className='text-white'>
                              <p className='text-3xl font-semibold'>Information</p>
                              <ul className='mt-5'>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                              </ul>
                            
                              

                    </div>
                    <div className='text-white'>
                              <p className='text-3xl font-semibold'>Acount</p>
                              <ul className='mt-5'>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                              </ul>
                            
                              

                    </div>
                    <div className='text-white'>
                              <p className='text-3xl font-semibold'>Store</p>
                              <ul className='mt-5'>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                              </ul>
                            
                              

                    </div>
                    <div className='text-white'>
                              <p className='text-3xl font-semibold'>Store</p>
                              <p className='mt-5'>If you have any query,please comtact us</p>
                              <p className='text-orange-600 mt-3'>hiba29@gmail.com</p>

                              <div className='flex space-x-3 mt-4'>
                                        <i class="fa-regular fa-user"></i>
                                        <p>mogadishu,Somalia</p>
                              </div>
                              <div className='flex space-x-3 mt-4'>
                                        <i class="fa-regular fa-user"></i>
                                        <p>+252619977139</p>
                              </div>



                            
                              

                    </div>


          </div>
          <div className='mt-20'> <hr /></div>

          <div className='text-center mt-4 '>
                    <img className='w-[220px] h-[100px] ml-[640px]' src={img1} alt="" />
                    <p className='text-white '>coppyright.2025 All Reversed</p>
          </div>
          
          </div>


          </div>

          
          </div>




          {/* mobile */}

          <div className='sm:hidden mt-20  '>
          <div className='bg-cover bg-center h-[600px] w-full' style={{backgroundImage:`url(${img1})`}}>
          <div className='px-5 py-10' >
          <div className='flex space-x-2'>
                    <i class="fa-solid fa-bars text-orange-500 text-3xl mt-2 "></i>

                    <div className='text-white'>
                              <p className='text-1xl font-semibold'>Join our newslatter and get offres</p>
                              <p>sing up our newslatter</p>
                    </div>
                   
          </div> 

          <div className='mt-10'>
                    <button className='bg-white px-8 py-3'>Enter your Email</button>
                    <button className='bg-orange-600 text-white px-6 py-3 font-semibold'>Subscribe</button>
          </div> 

          </div>





          <div className='bg-blue-950 h-[680px] f-full py-16 px-10  '>
                    <div className=' text-center'>
                    <div className='w-[300px] text-white  '>
                             <p className='text-2xl font-normal  bg-gray-500 px-3 w-[280px] py-3'>About Us <i onClick={handleIsOpen} class="fa-solid fa-chevron-down ml-20 "></i></p>
                             
                             <div style={{display:About===true? "block":" "}} onClick={handleIsOpen} className='text-left hidden'>
                             <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                               Dolor perferendis veniam suscipit maxime. Eaque pariatur minus quos, ratione quibusdam reiciendis.</p>
                              <div className='mt-6 space-x-6 text-2xl'>
                                         <i class="fa-regular fa-user"></i>
                                         <i class="fa-regular fa-user"></i>
                                         <i class="fa-regular fa-user"></i>
                                         <i class="fa-regular fa-user"></i>

                              </div>
                              </div>
                    </div>

                    <div className='text-white mt-5'>
                              <p className='text-2xl font-normal  bg-gray-500 px-6 py-3'>Information <i onClick={infoIsOpen} class="fa-solid fa-chevron-down ml-12"></i></p>
                              <div style={{display:Information===true? "block":" "}} onClick={infoIsOpen} className='text-left hidden'>
                              <ul className='mt-5'>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                              </ul>
                              </div>
                            
                              

                    </div>
                    <div className='text-white mt-5'>
                              <p className='text-2xl font-normal  bg-gray-500 px-6 py-3'>Acount<i onClick={AcountIsOpen} class="fa-solid fa-chevron-down ml-24"></i></p>
                              <div style={{display:Account===true? "block":" "}} onClick={AcountIsOpen} className='text-left hidden'>

                    
                              <ul className='mt-5'>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                              </ul>
                              </div>
                            
                              

                    </div>
                    <div className='text-white mt-5'>
                              <p className='text-2xl font-normal  bg-gray-500 px-6 py-3'>Store <i onClick={ StoreIsOpen} class="fa-solid fa-chevron-down ml-28"></i></p>
                               <div style={{display:Store===true? "block":" "}} onClick={StoreIsOpen} className='hidden text-left'>
                              <ul className='mt-5'>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                                        <li>About</li>
                              </ul>
                               </div>
                            
                              

                    </div>
                    <div className='text-white mt-4 '>
                              <p className='text-2xl font-normal bg-gray-500 px-6 py-3'>Contact<i onClick={ContactIsOpen} class="fa-solid fa-chevron-down ml-24"></i></p>
                              <div style={{display:Contact===true? "block":" "}} onClick={ContactIsOpen} className='text-left hidden'> 
                              <p className='mt-5'>If you have any query,please comtact us</p>
                              <p className='text-orange-600 mt-3'>hiba29@gmail.com</p>

                              <div className='flex space-x-3 mt-4'>
                                        <i class="fa-regular fa-user"></i>
                                        <p>mogadishu,Somalia</p>
                              </div>
                              <div className='flex space-x-3 mt-4'>
                                        <i class="fa-regular fa-user"></i>
                                        <p>+252619977139</p>
                              </div>
                              </div>



                            
                              

                    </div>


          </div>
          <div className='mt-20'> <hr /></div>

          <div className='text-center mt-4 '>
                    <img className='w-[220px] h-[100px] ml-6 ' src={img1} alt="" />
                    {/* <img src={card} alt="" /> */}
                    <p className='text-white '>coppyright.2025 All Reversed</p>
          </div>
          
          </div>


          </div>

          
          </div>
          
          </>
}
export default Footer