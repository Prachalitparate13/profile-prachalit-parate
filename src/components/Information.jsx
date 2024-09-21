import { aboutMeData } from "../utils/data";
import { PHOTOURL } from "../utils/ProfileUtils";

function Information() {
  return (
    <div className="mx-auto max-w-auto flex flex-row gap-6 items-center">
        <img className="w-[400px] h-[400px] rounded-full" src={PHOTOURL}/>
        <div className="items-start flex flex-col ">
        {aboutMeData.bio.map((bio, index = 0) => {
        return <p dangerouslySetInnerHTML={{__html:bio.text}} className="text-left list-disc" key={index + 1}></p>;
      })}
      {/* <p className=" ">{aboutMeData.bio}</p> */}

      {/*  dangerouslySetInnerHTML={{__html: html}} */}
        </div>
      
    </div>
  );
}

export default Information;
