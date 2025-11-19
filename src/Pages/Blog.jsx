import Faq from "../Components/Faq";
import Suscribtion from "../Components/Suscribtion";
import Upcomming from "../Components/Upcomming";
import { Suspense } from 'react';
import Comments from "../Components/Comments";
export default function Blog() {
  const comming = fetch("/upComming.json")
    .then(res => res.json());

    const comments = fetch("/comments.json")
    .then(res => res.json());
  return (
    <div className="text-white">
      <Suscribtion></Suscribtion>
      <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
        <Upcomming comming={comming}></Upcomming>
      </Suspense>
      <Faq></Faq>
      <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
      <Comments comments={comments}></Comments>
      </Suspense>
    </div>
  )
}
