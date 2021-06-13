import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import { Image as ImageType } from "@domainTypes/Product";
import Image from "next/image";

type Props = {
  images: Array<ImageType>;
};

const Carousel = (props: Props) => {
  const { images } = props;

  return (
    <ReactResponsiveCarousel
      autoPlay={false}
      emulateTouch={true}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
    >
      {images.map((image) => (
        <Image
          className="image"
          layout="responsive"
          src={image.src}
          width="300"
          height="300"
          alt={image.name}
          priority={true}
        />
      ))}
    </ReactResponsiveCarousel>
  );
};

export default Carousel;