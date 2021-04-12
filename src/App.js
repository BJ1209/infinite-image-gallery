import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import UnsplashImage from './components/UnsplashImage';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.infinite-scroll-component__outerdiv{
  width: 100%;
}
.infinite-scroll-component{
  &::-webkit-scrollbar{
    display: none !important;
  }
  & {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 
}
`;

const AppDiv = styled.div`
  padding: 1.5em 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  letter-spacing: 5px;
  font-weight: 400;
`;

const styles = {
  margin: '1.5em auto',
  width: '100%',
  display: 'grid',
  gridGap: '1em',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridAutoRows: '300px',
};

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    const api = 'https://api.unsplash.com';
    const accessKey = '--- YOUR ACCESS KEY HERE ---';
    axios
      .get(`${api}/photos/random?client_id=${accessKey}&count=20`)
      .then((res) => setImages([...images, ...res.data]))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <AppDiv>
      <GlobalStyles />
      <Heading>Image Gallery - React Infinite Scrolling</Heading>
      <InfiniteScroll
        style={styles}
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        {images.map((image) => (
          <UnsplashImage key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    </AppDiv>
  );
}

export default App;
