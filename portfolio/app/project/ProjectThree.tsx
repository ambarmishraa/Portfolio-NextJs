 
 import React from 'react';
 import Image from 'next/image';
 
 const ProjectThree = () => {
     return (
         <section className="relative w-full h-screen overflow-hidden bg-black">
 
             {/* 1. Background Split (Row 1 only) */}
             {/* <div className="absolute inset-0 flex flex-col z-0">
                 <div className="h-[100%] flex flex-col items-center justify-end">
                     <div className="w-full bg-black h-full z-20 px-10 flex flex-col items-center justify-end pt-6">
                         <p className="text-white text-lg mb-2 ">GET STARTED</p>
                         <p className="text-[16vw] font-black leading-none flex  h-[100vh]">PROJECTS</p>
                     </div>
                 </div>
             </div> */}
 
 
 
 
             {/* Row 2 (Bottom overlay with stacked text) */}
             <div className="absolute bottom-0 left-0 w-full h-full bg-white z-20 flex justify-end ">
 
                 {/* 3. Giant Background Text Layer */}
                 <div className="absolute inset-0 flex z-10 pointer-events-none overflow-hidden mt-10">
                     <div className="flex whitespace-nowrap animate-marquee-left">
 
                         <h1 className="text-[4vw] font-black leading-none flex random-color">
                             <span className="outline-text-black mr-10">FINANCE APP - </span>
                             <span className="outline-text-white mr-20">EXPENSE TRACKER APP</span>
                         </h1>
 
                         {/* Duplicate for seamless loop */}
                         <h1 className="text-[4vw] font-black leading-none flex random-color">
                             <span className="outline-text-black mr-10">FINANCE APP - </span>
                             <span className="outline-text-white mr-20">EXPENSE TRACKER APP</span>
                         </h1>
 
                     </div>
                 </div>
 
 
                 <div className="w-1/2 bg-white h-full" />
                 <div className="w-1/2 bg-black h-full" />
             </div>
 
 
 
             <div className="absolute bottom-10 left-[5%] w-[90%] h-[75%] z-20 flex flex-col items-center justify-center px-10 pb-6 project-random-color">
 
                 <div className="absolute bottom-0 w-[50%] h-full bg-white z-20 flex justify-end ">
                     <div className="w-1/2 project-random-color h-full relative overflow-hidden">
                         <div className="absolute inset-0 z-10">
                             <div className="w-full h-full">
                                 <Image
                                     src="/projectTwo-1.png"
                                     alt="Amandeep Illustration"
                                     fill
                                     className="object-cover object-[30%_center]"
                                     priority
                                 />
                             </div>
                         </div>
                     </div>
                     <div className="w-1/2 project-random-color h-full relative overflow-hidden">
                         <div className="absolute inset-0 z-10">
                             <div className="w-full h-full ">
                                 <Image
                                     src="/projectTwo-2.png"
                                     alt="Amandeep Illustration"
                                     fill
                                     className="object-cover object-[70%_center]"
                                     priority
                                 />
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
 
         </section>
     );
 };
 
 export default ProjectThree;
 
 
 