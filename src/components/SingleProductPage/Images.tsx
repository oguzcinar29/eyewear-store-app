import { useState } from "react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Images({ images }: any) {
  const [img, setImg] = useState<string>("");

  const changeImage = (indx: number) => {
    setImg(images[indx]);
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <img
          onClick={() => changeImage(0)}
          className={
            images && img !== images[0]
              ? "w-40 h-40  max-lg:max-w-20 max-lg:max-h-20"
              : "w-40 h-40 max-lg:max-w-20 max-lg:max-h-20  border border-black"
          }
          src={images && images[0]}
          alt=""
        />
        <img
          onClick={() => changeImage(1)}
          className={
            images && img !== images[1]
              ? "w-40 h-40 max-lg:max-w-20 max-lg:max-h-20"
              : "w-40 h-40 max-lg:max-w-20 max-lg:max-h-20 border border-black"
          }
          src={images && images[1]}
          alt=""
        />
        <img
          onClick={() => changeImage(2)}
          className={
            images && img !== images[2]
              ? "w-40 h-40 max-lg:max-w-20 max-lg:max-h-20"
              : "w-40 h-40 max-lg:max-w-20 max-lg:max-h-20 border border-black"
          }
          src={images && images[2]}
          alt=""
        />
      </div>
      <div>
        <Zoom>
          <img
            className="w-full h-[500px] max-lg:max-h-[264px] cursor-auto"
            src={img ? img : images && images[0]}
            alt=""
          />
        </Zoom>
      </div>
    </>
  );
}
