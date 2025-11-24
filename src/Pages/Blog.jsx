import { Suspense } from "react";
import Upcomming from "../Components/Upcomming";
import Faq from "../Components/Faq";
import News from "../Components/News";
export default function Blog() {
  const comming = fetch("/upComming.json")
    .then(res => res.json());

  const news = fetch("/news.json")
    .then(res => res.json());
  return (
    <div className="text-white mt-20">
     <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
         <News news={news}></News>
      </Suspense>
      <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
        <Upcomming comming={comming}></Upcomming>
      </Suspense>
      <Faq></Faq>
     
    </div>
  )
}
