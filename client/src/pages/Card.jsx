

// import React, { useState } from "react";
// import data from "../assets/data"; // ✅ correct path

// const Card = () => {
//   const [dog, setDog] = useState(data);

//   return (
//     <div className="w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-auto">
//       {dog.map((item, index) => (
//         <div
//           key={index}
//           className="w-[300px] h-[430px] border border-gray-300 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
//         >
//           {/* Fixed Image with border */}
//           <div className="w-full h-[220px] flex items-center justify-center border-b border-gray-300 bg-gray-50">
//             <img
//               src={item.img}
//               alt={item.name}
//               className="h-full object-contain"
//             />
//           </div>

//           {/* Card Content */}
//           <div className="p-4 text-center flex flex-col justify-between h-[200px]">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {item.name}
//               </h2>
//               <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
//             </div>

//             {/* Buttons */}
//             <div className="mt-4 flex justify-between gap-3">
//               <button className="flex-1 border border-green-500 text-green-600 rounded-lg py-2 hover:bg-green-500 transition hover:text-amber-50">
//                 Add to Cart 🛒
//               </button>
//               <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//                 Buy 💰
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;




import React, { useState } from "react";
import data from "../assets/data"; // ✅ correct path

const Card = () => {
  const [dog, setDog] = useState(data);

  return (
    <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-auto">
      {dog.map((item, index) => (
        <div
          key={index}
          className="w-[300px] h-[430px] border border-gray-300 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 mx-auto"
        >
          {/* Fixed Image with border */}
          <div className="w-full h-[220px] flex items-center justify-center border-b border-gray-300 bg-gray-50">
            <img
              src={item.img}
              alt={item.name}
              className="h-full object-contain"
            />
          </div>

          {/* Card Content */}
          <div className="p-4 text-center flex flex-col justify-between h-[200px]">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-between gap-3 flex-wrap sm:flex-nowrap">
              <button className="flex-1 border border-green-500 text-green-600 rounded-lg py-2 hover:bg-green-500 transition hover:text-amber-50">
                Add to Cart 🛒
              </button>
              <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Buy 💰
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
