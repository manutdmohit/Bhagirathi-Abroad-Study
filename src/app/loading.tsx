'use client';
import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
};

const LoadingPage = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      color="#f63ba8"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
