import ProjectCard from "./ProjectCard"
// import { VERBASYNCPHOTOURL } from "../utils/ProfileUtils"
import {projectsData} from "../utils/data"

function Project() {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      {projectsData.map((val)=>{
        return (
          <ProjectCard key={val.index} imgURL={val.img} title={val.title}description={val.description} />
        )
      })}
      
    </div>
  )
}

export default Project
