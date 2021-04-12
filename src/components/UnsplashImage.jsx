import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    z-index: 10;
    transition: background 0.35s ease;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Heading = styled.h3`
  font-size: 1rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1em;
  color: #fff;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.35s ease;
  cursor: zoom-in;
  text-transform: capitalize;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

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
