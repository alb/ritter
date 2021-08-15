import { useDispatch } from 'react-redux';
import { setGeoJson } from '../store/features/geoSlice';
import Map from '../components/map/Map';
import Sidebar from '../components/Sidebar';

import demoData from '../public/demoGeoJson.json';

export default function Index() {
  const dispatch = useDispatch();

  dispatch(setGeoJson(demoData));

  return (
    <div>
      <Sidebar />
      <Map />
    </div>
  );
}
