// import { Link } from "react-router-dom"
import { Link } from 'react-router-dom'
import img3 from '../images/img1.png'
import img2 from '../images/p2.png'
import img1 from '../images/p3.png'


import ProjectStyle from "./projectStyle"
function Section2(){

          // disktop
         
          return <>
          <div className="sm:flex hidden mt-20 px-10 justify-between"> 
                    <p className='ml-[530px] text-blue-600  mt-10'>My work</p>
                    
                    <Link to={"/projects"}> <button className="bg-[#070021] font-semibold px-8 py-3 text-blue-500">more</button></Link>
                 {/* <button className="bg-yellow-300 font-semibold px-10 py-4">more</button> */}
          
          </div>
          <h1 className="hidden sm:block mt-4 font-semibold text-5xl  text-center text-white">My projects</h1>
          <div className="sm:flex hidden justify-between px-10">
                    {/* <link ></link> */}
                    <a
  href="https://hilaal12345.github.io/Model-Shoes/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img1} title="webdesign" />
</a>
                    <a
  href="https://hilaal12345.github.io/Resturant/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img2} title="web Resturan" />
</a>
                    <a
  href="https://hilaal12345.github.io/company/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img3} title="web Company" />
</a>



                    
                   
        
 



          </div>
          {/* mobile */}
          <div className='sm:hidden'>
          <div className=" sm:hidden  mt-20 px-2 flex justify-between"> 
                    {/* <p className='ml-[530px] text-blue-600  mt-10'>My work</p> */}
                    
                 {/* <button className="bg-yellow-300 font-semibold px-10 py-4">more</button> */}
          
          <h1 className="smt-4 font-semibold text-5xl   text-left text-white">My projects</h1>
                    <Link to={"/projects"}> <button className="bg-blue-500 font-semibold px-8 py-3 text-white  ">more</button></Link>
          </div>
          <div className="justify-between px-6">
                    {/* <link ></link> */}
                    <a
  href="https://hilaal12345.github.io/Model-Shoes/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img1} title="webdesign" />
</a>
                    <a
  href="https://hilaal12345.github.io/Resturant/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img2} title="web Resturan" />
</a>
                    <a
  href="https://hilaal12345.github.io/company/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img3} title="web Company" />
</a>



                    
                   
        
 



          </div>

          </div>
          
          
          
          
          </>
}

export default Section2