import { useState, type FC } from 'react';
import cl from './ImageGallery.module.scss';
import clsx from 'clsx';

interface Props {
  images: string[];
  placeholder?: string;
}

export const ImageGallery: FC<Props> = ({ images, placeholder }) => {
  const [activeImgSrc, setActiveImgSrc] = useState(images.at(0));

  return (
    <>
      <div className={cl.gallery}>
        <img
          className={cl.gallery__img}
          src={activeImgSrc}
          alt="123"
          onError={(e) =>
            (e.currentTarget.src = placeholder || 'imgs/placeholder-car.webp')
          }
        />
      </div>

      <div className={cl['gallery-imgs']}>
        {images.map((src, indx) => (
          <img
            className={clsx([
              cl['gallery-imgs__img'],
              activeImgSrc === src ? cl['gallery-imgs__img_active'] : '',
            ])}
            key={`${src} - ${indx}`}
            src={src}
            alt={`${src}`}
            onClick={() => {
              setActiveImgSrc(src);
            }}
            onError={(e) =>
              (e.currentTarget.src = placeholder || 'imgs/placeholder-car.webp')
            }
          />
        ))}
      </div>
    </>
  );
};
