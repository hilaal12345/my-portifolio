import Footer from "../component/Footer"
import Header from "../component/Header"
import img1 from "../images/MUMTAAZ.jpg"


import img2 from "../images/kabo 1.png"
import img3 from "../images/HILAAC RESTURANT.jpg"

// import img4 from "../images/safanet1.png"
// import img5 from ".//images/safanet1.png "
// // import img2 from ".//images/ "
// import img2 from ".//images/ "
// import img2 from ".//images/ "


function GraphicDesigner(){

          return <>

          <Header/>
          <div  >
                    <h1 className="text-5xl mt-20 text-blue-600 text-center">My projects</h1>
                    <div className="flex justify-center space-x-10 mt-20">
                              <img className="w-[350px] h-[400px] rounded-lg" src={img1} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img2} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img3} alt="" />

                    </div>
                    <div className="flex justify-center space-x-10 mt-20">
                              <img className="w-[350px] h-[400px] rounded-lg" src={img1} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img2} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img3} alt="" />

                    </div>
                    <div className="flex justify-center space-x-10 mt-20">
                              <img className="w-[350px] h-[400px] rounded-lg" src={img1} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img2} alt="" />
                              <img className="w-[350px] h-[400px] rounded-lg" src={img3} alt="" />

                    </div>

          </div>
          <Footer/>
          
          
          </>
}
export default GraphicDesigner