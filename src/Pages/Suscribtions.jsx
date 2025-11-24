    import ElectricBorder from "../Components/Border";
    import Comments from './../Components/Comments';

    import { Suspense } from "react";
    
    export default function Suscribtions() {
        const comments = fetch("/comments.json")
            .then(res => res.json());
        return (
            <section className="mt-18 mx-auto w-10/12 text-white">
                <h1 className="text-3xl font-bold text-center wrap-normal pt-6">Join Our Premium site
                </h1>


                {/* card section  */}

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {/* card 1 */}
                    <ElectricBorder
                        color="#DC2626"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}

                        className="w-[250px] mx-auto mt-10 p-8"
                    >

                        {/* card 1  */}
                        <div className=" transition-all transform hover:-translate-y-2 hover:border-pink-500 shadow-lg rounded-xl p-8 flex flex-col items-center justify-center ">
                            <h1 className="text-4xl font-bold">10.00$  </h1>
                            <h1 className="text-xl text-gray-400 mt-3"> For 1 Month</h1>
                            <button className="bg-red-600 px-5 py-2 rounded-xl mt-10 hover:text-red-600 hover:bg-white">Subscribe</button>
                        </div>

                    </ElectricBorder>


                    {/* card 2*/}
                    <ElectricBorder
                        color="#DC2626"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}

                        className="w-[250px] mx-auto mt-10 p-8"
                    >
                        <div className=" transition-all transform hover:-translate-y-2 hover:border-pink-500 shadow-lg rounded-xl p-8 flex flex-col items-center justify-center ">
                            <h1 className="text-4xl font-bold">20.00$  </h1>
                            <h1 className="text-xl text-gray-400 mt-3"> For 3 month</h1>
                            <div>
                                <button className="bg-red-600 px-5 py-2 rounded-xl mt-10 hover:text-red-600 hover:bg-white">Subscribe</button>
                            </div>
                        </div>

                    </ElectricBorder>


                    {/* card 3 */}
                    <ElectricBorder
                        color="#DC2626"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                        hoverable={true}

                        className="w-[250px] mx-auto mt-10 p-8"
                    >


                        <div className=" transition-all transform hover:-translate-y-2 hover:border-pink-500  shadow-lg rounded-xl p-8 flex flex-col items-center justify-center ">
                            <h1 className="text-4xl font-bold">50.00$  </h1>
                            <h1 className="text-xl text-gray-400 mt-3"> For 1 Year</h1>
                            <button className="bg-red-600 px-5 py-2 rounded-xl mt-10 hover:text-red-600 hover:bg-white">Subscribe</button>
                        </div>

                    </ElectricBorder>
                </section>

                <p className="text-gray-400 text-xl py-10 text-center">Get unlimited access to our premium content, including the latest movies and TV shows in high quality. Enjoy ad-free streaming, exclusive releases, and personalized recommendations tailored to your preferences. Join now and elevate your entertainment experience to the next level!</p>


                { <div>
                    <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
                    <Comments comments={comments} ></Comments>
                    </Suspense>
                </div> }

            </section>
        )
    }
