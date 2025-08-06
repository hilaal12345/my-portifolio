function ProjectStyle(props){
          return <>
          <div className="mt-20">
                    <div className="bg-[#18016c] h-[400px] w-[350px] p-4 hover:bg-[#5d5df2] duration-500 shadow-lg hover:shadow-white">
                              <img className="w-[300px] h-[200px] ml-2" src={props.img}alt="" />
                              <h1 className="text-3xl font-semibold mt-5 text-blue-600">{props.title}</h1>
          
                              <div className="flex space-x-10  ">
                              <p className="mt-5 w-56  text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, ab!</p>
                              <div className="h-10 mt-8">
                              <i className="fa-solid fa-arrow-right py-2  w-8 bg-blue-600 "></i>
                              </div>
                              </div>
                     </div>    
          </div>
          
          
          </>
}
export default ProjectStyle