import { Link } from 'react-router-dom'
import  imgeone from '../images/muslim girl.png'
import GraphicDesigner from '../pages/graphicdesigner'
// import Header from './Header'
// import Section2 from './section2'
function Herro(){
         //desktop
          return <>
          <div className="sm:flex hidden  bg-[#070021]  h-[600px] px-32 py-20   space-x-32">
          <div className="w-[500px] ">
                    <h2 className="text-blue-600">HELLO!</h2>
                    <h1 className="text-white text-5xl mt-5 font-semibold">I'M <span className='text-blue-600'>HIBA ALI BILE</span> </h1>
                    <p className="text-white mt-12 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                           Atque aut quibusdam aliquid consequuntur placeat beatae 
                                            quod explicabo, dolores commodi, recusandae blanditiis ut fugiat nihil vitae velit neque nemo voluptas quasi vel 
                                          voluptatem? Beatae corrupti repellat magni autem odio 
                                          voluptates consequuntur dolor? Labore
                                           maiores facilis deserunt dolore eaque eos magnam!</p>
                    <div className='space-y-10  space-x-10'>
  
                  <Link to={"/GraphicDesigner"}>  <button className='px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg  hover:bg-[#a8a8ff] duration-500'> Veiw Work  </button></Link>
                    <button className='px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg  hover:bg-[#a8a8ff] duration-500'>Hire Me </button>
                    </div>
  
          </div>
          <img className='w-[400px] h-[600px] -mt-20' src={imgeone} alt="" />
  
  
          
  
          </div>

          {/*mobile*/}
          <div className="sm:hidden  bg-[#070021]  h-[1200px] px-6 py-20 ">
          <div className="w-[500px] ">
                    <h2 className="text-blue-600">HELLO!</h2>
                    <h1 className="text-white text-5xl mt-5 font-semibold">I'M <span className='text-blue-600'><br />HIBA ALI BILE</span> </h1>
                    <p className="text-white mt-12 w-96 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                           Atque aut quibusdam aliquid consequuntur placeat beatae 
                                            quod explicabo, dolores commodi, recusandae blanditiis ut fugiat nihil vitae velit neque nemo voluptas quasi vel 
                                          voluptatem? Beatae corrupti repellat magni autem odio 
                                          voluptates consequuntur dolor? Labore
                                           maiores facilis deserunt dolore eaque eos magnam!</p>
                    <div className='space-y-10  space-x-10'>
  
                  <Link to={"/GraphicDesigner"}>  <button className='px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-[#a8a8ff] duration-500 shadow-lg hover:shadow-white'> Veiw Work  </button></Link>
                    <button className='px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg  hover:bg-[#a8a8ff] duration-500 shadow-lg hover:shadow-white'>Hire Me </button>
                    </div>
  
          </div>
          <img className='w-[400px] h-[600px] mt-10 ml-[10px]' src={imgeone} alt="" />
  
  
          
  
          </div>

          
          </>
}

export default Herro