import { use } from "react";

export default function Comments({ comments }) {
  const comentData = use(comments);

  return (
    <section className="overflow-hidden py-10 w-full">

      {/* Animation inside the component */}
      <style>
        {`
          @keyframes smoothLoopRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .loop-scroll-right {
            display: flex;
            width: max-content;
            animation: smoothLoopRight 50s linear infinite;
          }
        `}
      </style>

      <h1 className="text-center font-black text-4xl my-10">User reviews</h1>

      <div className="relative w-full overflow-hidden">

        {/* Scrolling row */}
        <div className="loop-scroll-right">

          {/* Duplicate data for a seamless loop */}
          {[...comentData, ...comentData].map((comment, index) => (
            <div
              key={index}
              className="w-[280px] mx-3 bg-gray-900 border border-gray-700 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src={comment.profile_picture}
                  alt={comment.name}
                />
                <h2 className="text-lg font-semibold text-white">
                  {comment.name}
                </h2>
              </div>

              <p className="text-sm text-yellow-400 mb-2">
                Rating: {"⭐".repeat(comment.rating)}
              </p>

              <p className="text-sm text-gray-300">{comment.comment}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
