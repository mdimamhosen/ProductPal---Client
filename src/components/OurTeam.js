import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Jhon Milton",
      position: "CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lara Croft",
      position: "Managing Director",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "K.S. Sumon",
      position: "HR",
      imageUrl:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aatik Tasneem",
      position: "Marketing Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kazi Mizan",
      position: "Sales Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1672825464495-f08d8efb81ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ivana Cajina",
      position: "Customer Support",
      imageUrl:
        "https://images.unsplash.com/photo-1672825523661-80df832c6a1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-5">
      <p className="flex text-richblack-5 flex-col justify-center items-center md:text-2xl text-lg lg:text-4xl font-bold mt-11 mb-2">
        Our Team
      </p>

      <p className="text-richblack-25 text-center md:text-sm text-sm w-11/12 mx-auto">
        Meet the talented individuals behind our success.
      </p>

      <div className="lg:w-[80%] w-11/12 grid grid-cols-2 lg:grid-cols-3 gap-4 m-auto my-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg h-[300px] group"
          >
            <img
              className="w-full grayscale h-full object-cover cursor-pointer rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
              src={member.imageUrl}
              alt={member.name}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-bold">
                {member.name} <br /> <small>{member.position}</small>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
