import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

export const AppDiv = styled.div`
  padding: 1.5em 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  letter-spacing: 5px;
  font-weight: 400;
`;

export const styles = {
  margin: '1.5em auto',
  width: '100%',
  display: 'grid',
  gridGap: '1em',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridAutoRows: '300px',
};
