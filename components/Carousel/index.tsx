import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import { Image as ImageType } from "@domainTypes/Product";
import Image from "next/image";

type Props = {
  images: Array<ImageType>;
  selectedImage?: number;
  size?: string;
};

const Carousel = (props: Props) => {
  const { images, selectedImage = 0, size = 350 } = props;

  return (
    <ReactResponsiveCarousel
      autoPlay={false}
      emulateTouch={true}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      selectedItem={selectedImage}
    >
      {images.map((image) => (
        <Image
          key={image.id}
          className="image"
          // layout="responsive"
          src={image.src}
          width={size}
          height={size}
          alt={image.name}
          priority={true}
          // placeholder="blur"
          // blurDataURL="/images/deafult-placeholder.png"
        />
      ))}
    </ReactResponsiveCarousel>
  );
};

export default Carousel;
