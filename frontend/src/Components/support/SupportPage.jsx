function Supportx(){
    return(
        <div className="bg-blue-600 px-48 py-32">
        <div className="flex justify-between ">
          <a href="/" className="text-white text-2xl">
            Support Portal
          </a>
          <a href="/" className="text-white underline underline-offset-8 text-xl">
            Track Ticket
          </a>
        </div>
        <div className="flex gap-10 ">
        <div className="mt-10 text-white w-3/5">
          <h1 className=" text-3xl">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Search for an answer or browse help topics to create a ticket"
            className="mt-4 px-5 py-3 rounded border-2 w-4/5"
          />
          <div className="flex flex-wrap mt-10 gap-6">
            <a href="/" className="text-white text-lg underline underline-offset-8">Track account opening</a>
            <a href="/" className="text-white text-lg underline underline-offset-8">Track segment activation</a>
            <a href="/" className="text-white text-lg underline underline-offset-8">Intraday margins</a>
            <a href="/" className="text-white text-lg underline underline-offset-8">Kite user manual</a>
          </div>
        </div>
        <div className="flex justify-center flex-col">
            <h1 className="text-xl text-white">Featured</h1>
            <ol className="mt-5 list-decimal" type="1" start="1">
                <li className="text-white text-lg underline underline-offset-4">Surveillance measure on scrips - December 2024</li>
                <li className="text-white text-lg underline underline-offset-4">Segment activation</li>
            </ol>
        </div>      
        </div>
      </div>
    )
}
export default Supportx;