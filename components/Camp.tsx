import React from 'react'
interface CampProps {
  backgroundImage:string;
  title:string;
  subtitle:string;
  peoplejoined:string;
}
 const Campsite = ({backgroundImage, title, subtitle, peoplejoined}: CampProps) =>{
  return(
    <div className='h-full w-full min-w-[1100px] ${backgroundimage}'>camp site 1</div>
  )
 }
export const Camp = () => {
  return (
  <section className='border-2 border-green-500 2xl:max-container 
   relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
    <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
      overflow-x-auto lg:h-[400px] xl:h-[640px]'>
      <Campsite 
      backgroundImage = "bg-bg-img-1"
      title = "Cozy Truno Camp"
      subtitle = "welcome home"
      peoplejoined = "50k joined"
      />

    </div>
  </section>
  )
}
