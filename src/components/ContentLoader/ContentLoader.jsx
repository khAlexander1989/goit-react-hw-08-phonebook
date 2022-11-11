import { BarLoader } from 'react-spinners';

export function ContentLoader() {
  const override = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return <BarLoader cssOverride={override} color="#3171E7" />;
}
