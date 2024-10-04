import { imageClasses, ImageDataType, Positions } from "../const/imagesData";
import { getImageURL } from "../utils/imageUtil";

export default function SliderImage({ img, index }: { img: ImageDataType, index: number }) {
  return (
    <a href={img.url}>
      <div className={`absolute bg-black bg-opacity-50 flex flex-col gap-y-2 overflow-hidde ${imageClasses[Positions[index]]} mx-auto p-2`}>
        <img
          className="h-24 object-center rounded-sm"
          src={getImageURL(img.src[0])}
          alt={img.description}
          key={img.id}
        />
        <p className="text-center">{img.description}</p>
      </div >
    </a>
  )
}