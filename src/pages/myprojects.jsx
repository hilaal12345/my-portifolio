import Footer from "../component/Footer"
import Header from "../component/Header"
import ProjectStyle from "../component/projectStyle"
// import img1 from '../images/img1.png'

import img3 from '../images/img1.png'
import img2 from '../images/p2.png'
import img1 from '../images/p3.png'
import img4 from '../images/p4.png'




function Myprojects(){
          return <>
          
          <Header/>
           <div className="flex justify-between px-10">
                    {/* < ProjectStyle img={img1}title="webdesign"/>
                    < ProjectStyle img={img1}title="webdesign"/>
                    < ProjectStyle img={img1}title="webdesign"/> */}

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
           <div className="flex justify-between px-10">
                    {/* < ProjectStyle img={img1}title="webdesign"/>
                    < ProjectStyle img={img1}title="webdesign"/>
                    < ProjectStyle img={img1}title="webdesign"/> */}

                       <a
  href="https://hilaal12345.github.io/Model-Shoes/"
  target="_blank"
  rel="noopener noreferrer"
>
  <ProjectStyle img={img4} title="webdesign" />
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
          <Footer/>

          
          
          
          </>
}
export default Myprojects