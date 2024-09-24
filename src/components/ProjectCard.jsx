


const ProjectCard = (props) => {

  const { key, imgURL, title,description,gitlink}=props
  return (
    <div key={key} className="flex justify-center h-4/3 flex-col items-center  rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <a href={gitlink} target="_blank">
      <img src={imgURL} alt="image" className="w-screen h-72 center" />
      </a>
      <h2  className="text-center p-2 text-blue-400">
        {/* {projectsData[0].title} */}
        {title}
      </h2>
      <h3 className=" p-4  text-center">
        {/* {projectsData[0].description} */}
        {description}
        </h3>
    </div>
//     <div 
//   key={key} 
//   className="flex flex-col items-center bg-white rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:scale-105"
// >
//   <img 
//     src={imgURL} 
//     alt="image" 
//     className="w-80 h-72 object-cover rounded-t-xl"
//   />
  
//   <h2 
//     className="text-center p-2 text-blue-600 text-lg font-semibold"
//   >
//     {title}
//   </h2>
  
//   <h3 
//     className="w-80 p-4 text-center text-gray-600 text-base"
//   >
//     {description}
//   </h3>
// </div>
  )
}

export default ProjectCard