import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 50px;
  width: 50px;
  border: solid 5px #cfd0d1;
  border-bottom-color: #222;
  border-radius: 50%;
  animation: 1s linear infinite spinner;
  margin: 2.5em auto;

  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`;
const Loader = () => {
  return <StyledDiv></StyledDiv>;
};

export default Loader;
