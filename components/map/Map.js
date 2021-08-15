import React from 'react';
import dynamic from 'next/dynamic';
import Loader from './Loader';

const LoadedMap = dynamic(import('./LeafletMap'), {
  ssr: false,
  loading: () => <Loader />,
});

const Map = () => <LoadedMap />;

export default Map;
