import { useState } from "react"
import { Link } from "react-router-dom"

// import { Link } from "react-router-dom"
function Header(){
         
           const [isOpen,setIsOpen]=useState(false)
            const handleIsOpen=()=>{
              if(isOpen===false){
                setIsOpen(true)
          
              }
              else{
                setIsOpen(false)
          
              }
              
            }
//          desktop
          return <>

           <div className="sm:flex hidden justify-between px-10 bg-[#070021]">
          <h1 className="text-3xl text-white font-semibold">logo</h1>
           <div className="">
                    <ul className="flex  text-white space-x-10 text-2xl text-center   mt-2">
                              
                                <Link to={"/"}><li>Home <i class="fa-solid fa-chevron-down">  </i> </li></Link>
                                {/* <li>Home <i class="fa-solid fa-chevron-down">  </i> </li> */}
                    <Link to={"/About"}><li>About <i class="fa-solid fa-chevron-down">  </i> </li></Link>

                             <Link to={"/contact"}><li>Contact <i class="fa-solid fa-chevron-down">  </i> </li></Link>
                    </ul>


          </div>


    
  </div>

  {/* mobile */}
  <div className="sm:hidden justify-between px-10 bg-[#070021]">
          <div className="flex justify-between ">

          <h1 className="text-3xl text-white font-semibold mt-5">Hiba</h1>

                     <i onClick={handleIsOpen} class="fa-solid fa-bars text-white mt-5 text-3xl"></i>
          </div>
           <div style={{display:isOpen===true? "block":" "}} onClick={handleIsOpen} className=" hidden">

                    <ul className="bg- bg-[#070021] text-white space-x-10 text-2xl text-center   mt-5">
                              
                                <Link to={"/"}><li>Home <i class="fa-solid fa-chevron-down">  </i> </li></Link>
                                {/* <li>Home <i class="fa-solid fa-chevron-down">  </i> </li> */}
                    <Link to={"/About"}><li>About <i class="fa-solid fa-chevron-down">  </i> </li></Link>

                             <Link to={"/contact"}><li>Contact <i class="fa-solid fa-chevron-down">  </i> </li></Link>
                    </ul>


          </div>


    
  </div>
          
          </>
}

export default Header