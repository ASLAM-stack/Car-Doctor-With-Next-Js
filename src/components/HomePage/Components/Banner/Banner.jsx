
import Slide from "./Component/slide";

const Banner = () => {
  const sliders = [
    {
      id: "slide1",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      id: "slide2",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      id: "slide3",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      id: "slide4",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  return (
    <div className="px-2">
      <div className="carousel w-full h-[700px] rounded-xl">
        {
          sliders.map((slide,index)=> <Slide key={index} id={slide.id} index={index} next={slide.next} prev={slide.prev} title={slide.title} description={slide.description} />)
        }
      </div>
      
    </div>
  );
};

export default Banner;
