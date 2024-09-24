

function Contact() {
  return (
    <div className="py-8 lg:py-16 px-4 mx-96 max-w-screen-mdr">
      <form >
        {/* <label className=" gap-4 border-s-gray-300 border-solid" >Name</label>
        <input  type="text"></input> */}
        <div className="my-3">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="prachalit.parate@gmail.com" required />
        </div> 
        <divc className="my-3">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" required/>
          </divc>
          <div className="sm:col-span-2 my-3">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 my-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-blue-200 sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button> 
      </form>
    </div>
  )
}

export default Contact