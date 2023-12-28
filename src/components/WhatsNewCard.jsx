import React from "react";

const WhatsNewCard = ({ image, title, description, icon }) => {
  return (
    <>
      <div className="sm:col-span-3">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 
                  items-center"
        >
          <div className="">
            <img
              className="w-full h-[250px] object-cover rounded-lg my-2"
              src={image}
              alt={title}
            />
          </div>
          <div className="sm:col-span-2 ">
            <div
              className="bg-gray-400/20 py-2 px-3 mb-2 
                     inline-flex items-center gap-4 text-xl rounded-lg"
            >
              {" "}
              {icon}
            </div>
            <h1 className="my-2">{title}</h1>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNewCard;
