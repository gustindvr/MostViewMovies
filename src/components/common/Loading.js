import PacmanLoader from 'react-spinners/PacmanLoader';

const override = {
  display: 'block',
  margin: '50px auto',
};

const Loading = () => <PacmanLoader color='yellow' css={override} size={70} />;

export default Loading;
