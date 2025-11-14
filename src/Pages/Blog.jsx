import Faq from "../Components/Faq";
import Suscribtion from "../Components/Suscribtion";
import Upcomming from "../Components/Upcomming";
import { Suspense } from 'react';
 
export default function Blog() {
  const comming =  fetch("./../../public/Upcomming.json")
  .then(res => res.json());
  return (
  <>
    <Suscribtion></Suscribtion>
    <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
      <Upcomming comming={comming}></Upcomming>
    </Suspense>
    <Faq></Faq>
  </>
  )
}
