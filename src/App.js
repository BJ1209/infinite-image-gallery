import { useState, useEffect } from 'react';
import axios from 'axios';
import UnsplashImage from './components/UnsplashImage';
import Loader from './components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppDiv, GlobalStyles, Heading } from './App.styes';

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
