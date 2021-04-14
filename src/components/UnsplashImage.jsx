import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Div, Heading } from './Unsplash.styles';

const UnsplashImage = ({ image }) => {
  const {
    alt_description,
    urls: { regular },
  } = image;

  return (
    <Div>
      <Heading>{alt_description}</Heading>
      <LazyLoadImage
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={regular}
        alt={alt_description}
      />
    </Div>
  );
};

export default UnsplashImage;
