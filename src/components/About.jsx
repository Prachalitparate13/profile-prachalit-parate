import {aboutMeData } from '../utils/data'
import Information from './Information'

function About() {
  return (
    <main className="flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 md:gap-5 justify-center pb-20">
        <h1 className="text-blue-400 text-3xl mt-20 mb-0"> Prachalit Parate</h1>
        <h1>
        <span className='text-blue-400 '></span> {aboutMeData.title}
        </h1>
        <Information/>
    </main>
  )
}

export default About