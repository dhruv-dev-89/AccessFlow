import React from 'react'
import BounceCards from './BounceCards'
const WorkflowSection = () => {

  const data = [
  {
    id: "01",
    title: "Request Access",
    description: "Submit a request for the resource you need.",
    bgColor: "rgba(255, 255, 255, 0.55)",
    textColor: "#172554",
    accentColor: "#2563EB",
  },
  {
    id: "02",
    title: "Get Approval",
    description: "Your request is reviewed by an authorized approver.",
    bgColor: "rgba(224, 242, 254, 0.55)",
    textColor: "#172554",
    accentColor: "#0284C7",
  },
  {
    id: "03",
    title: "Access Granted",
    description: "Get access once your request is approved.",
    bgColor: "rgba(237, 233, 254, 0.60)",
    textColor: "#312E81",
    accentColor: "#6D28D9",
  },
  {
    id: "04",
    title: "Automatic Expiry",
    description: "Access expires when the approved duration ends.",
    bgColor: "rgba(240, 249, 255, 0.55)",
    textColor: "#172554",
    accentColor: "#0891B2",
  },
];
  return (
    <div className="relative mx-auto flex w-full flex-col items-center gap-4 px-4 py-8 sm:px-6">
      <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
        How AccessFlow Works
        <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
          Step by step.
        </span>
      </h2>
      <p className="max-w-2xl text-center text-sm leading-7 text-slate-600 sm:text-base">
        From access requests to approvals and automatic expiry, manage your
        organization's resources securely in one place.
      </p>
      <div className='hidden lg:flex'>
        <BounceCards cardData={data}
        containerWidth={900}
        containerHeight={400}
        cardSize={280}
        spread={115}
        rotation={15}
        enableHover={true}/>
      </div>
      <div className=' lg:hidden'>
        <BounceCards cardData={data}
        containerWidth={350}
        containerHeight={300}
        cardSize={190}
        spread={45}
        rotation={10}
        enableHover={true}/>
      </div>
      
    </div>
  );
}

export default WorkflowSection;