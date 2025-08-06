import Footer from "../component/Footer"
import Header from "../component/Header"
import img1 from "../images/MUMTAAZ.jpg"


import img2 from "../images/kabo 1.png"
import img3 from "../images/HILAAC RESTURANT.jpg"
import img4 from "../images/safanet1.png"
import img5 from "../images/shouse.png"
import img6 from "../images/Presentation1.jpg"
import img7 from "../images/just book-01.png"
import img8 from "../images/A5 MockUp just book.png"

// import img4 from "../images/safanet1.png"
// import img5 from ".//images/safanet1.png "
// // import img2 from ".//images/ "
// import img2 from ".//images/ "
// import img2 from ".//images/ "


function GraphicDesigner(){

          return <>
          {/* //desktob*/}
          <Header/>
          <div className="hidden sm:block"  >
                    <h1 className="text-5xl mt-20 text-blue-600 text-center">My Designes</h1>
                    <div className="flex justify-center space-x-10 mt-20">
                              <img className="w-[350px] h-[400px] rounded-lg" src={img1} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img7} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img3} alt="" />

                    </div>
                    <div className="flex justify-center space-x-10 mt-20">
                              <img className="w-[350px] h-[400px] rounded-lg" src={img4} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img5} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img6} alt="" />

                    </div>
                  

          </div>

          {/* mobile */}
          <div className="sm:hidden">
                     <h1 className="text-5xl mt-20 text-blue-600 text-center">My Designes</h1>
                    <img className="w-[350px] h-[450px] rounded-lg mt-10 mx-5" src={img8} alt="" />

                    <div className="flex justify-between px-3 mt-20">
                              <img className="w-[170px] h-[200px] rounded-lg" src={img1} alt="" />
                              <img className="w-[170px] h-[200px] rounded-lg" src={img7} alt="" />
                             

                    </div>
                    <div className="flex justify-between px-2 mt-20">
                               <img className="w-[170px] h-[200px] rounded-lg" src={img5} alt="" />
                              <img className="w-[170px] h-[200px] rounded-lg" src={img6} alt="" />

                    </div>
                    <div className="flex justify-between px-2 mt-20">
                               <img className="w-[170px] h-[200px] rounded-lg" src={img2} alt="" />
                              <img className="w-[170px] h-[200px] rounded-lg" src={img3} alt="" />

                    </div>
          </div>
          <Footer/>
          
          
          </>
}
export default GraphicDesigner