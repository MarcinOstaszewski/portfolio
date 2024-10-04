import { imagesData } from "../const/imagesData";
import SliderImage from "./SliderImage";

export default function Slider() {
  return (
    <div className="relative mt-6">
      <div className="w-full min-h-64 border-4 border-white  overflow-hidden text-sm">
        <div>
          {imagesData.map((img, index) => (
            <SliderImage img={img} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-96 bg-teal-400 p-2">
        <div className=" text-center font-extrabold bg-white text-teal-400">
          INTERACTIVE BROWSER APPS
        </div>
      </div>
    </div>
  )
}