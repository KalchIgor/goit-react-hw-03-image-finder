import { Vortex } from 'react-loader-spinner';
import { LoaderBackdrop, PendingLion } from './Loader.styled';
import lion from 'Assets/lion-cartoon.png';

/*
<Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
*/

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
      <PendingLion src={lion} alt="lion" />
    </LoaderBackdrop>
  );
};