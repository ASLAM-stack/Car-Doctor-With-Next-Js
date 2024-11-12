 
import Headig from "@/components/shared/Headig";
import React from "react";

 

 

const Team = () => {
   
  const workers = [
    {
      id: 1,
      name: "John Smith",
      position: "Mechanic",
      experience: "5 years",
      specialization: "Engine repair"
    },
    {
      id: 2,
      name: "Emma Johnson",
      position: "Technician",
      experience: "3 years",
      specialization: "Electrical systems"
    },
    {
      id: 3,
      name: "Alex Brown",
      position: "Body Repair Specialist",
      experience: "7 years",
      specialization: "Bodywork and painting"
    },
    {
      id: 4,
      name: "Olivia Garcia",
      position: "Tire Technician",
      experience: "2 years",
      specialization: "Tire and wheel alignment"
    },
    {
      id: 5,
      name: "Liam Wilson",
      position: "Diagnostics Expert",
      experience: "6 years",
      specialization: "Computer diagnostics"
    },
    {
      id: 6,
      name: "Sophia Miller",
      position: "Transmission Specialist",
      experience: "4 years",
      specialization: "Transmission systems"
    },
    
  ];
  return (
    <div className="mt-24">
      <Headig
        heading={"Team"}
        title={"Meet Our Team"}
        discription={
          "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <div>
         
      </div>
    </div>
  );
};

export default Team;
