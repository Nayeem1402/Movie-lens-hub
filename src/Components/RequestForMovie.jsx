
export default function RequestForMovie() {
    return (
        <section className="w-full md:w-1/2">
                <h1 className="text-center font-black text-4xl my-10 w-full">Request For Movie</h1>
            <div className="w-full mx-auto flex flex-col gap-3">
               <h2> Movie name : <br /> <input type="text" placeholder="Enter the Movie name" className="input w-full" /></h2>
               <h2> Reles year : <br /> <input type="text" placeholder="Enter the Reles year" className="input  w-full" /></h2>
               <h2> Derectior name : <br /> <input type="text" placeholder="Enter the Derectior name" className="input  w-full" /></h2>
               <h2> Language : <br /> <input type="text" placeholder="Enter the Language" className="input  w-full" /></h2>
               
                <button className="btn bg-red-600 text-white text-lg mt-3 w-full hover:bg-white hover:text-red-600">Submit</button>
            </div>         
        </section>
    )
}
