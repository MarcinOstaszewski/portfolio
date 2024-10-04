import { getImageURL } from "../utils/imageUtil";
import { imagesData } from "../const/imagesData";

export default function Slider() {

  const Positions = [ "left_1", "central", "right_1" ] as const;

  type ClassNames = {
    [K in typeof Positions[number]]: string;
  }

  const imageClasses: ClassNames = {
    left_1: 'left-1/4 top-1/2 -translate-x-2/3 -translate-y-1/2 -rotate-3 w-44 h-44 ',
    central: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-48',
    right_1: 'left-3/4 top-1/2 -translate-x-1/3 -translate-y-1/2 rotate-3 w-44 h-44',
  }

  return (
    <div className="relative">
      <div className="w-full min-h-64 border-4 border-white  overflow-hidden text-sm">
        <div>
          {imagesData.map((img, index) => (
            <div className={`absolute bg-black bg-opacity-50 flex flex-col gap-y-2 overflow-hidde ${imageClasses[Positions[index]]} mx-auto p-2`}>
              <img
                className="h-24 object-center rounded-sm"
                src={getImageURL(img.src[0])}
                alt={img.description}
                key={img.id}
              />
              <p className="text-center">{img.description}</p>
            </div >
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-96 bg-teal-400 p-2">
          <div className="text-center bg-white text-teal-400">SLIDES</div>
      </div>
    </div>
  )
}