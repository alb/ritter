import { MapContainer, TileLayer, Circle, AttributionControl } from 'react-leaflet'
import { GeoJSON } from './utils/geojson';
import styles from '../../styles/Leaflet.module.css';
import 'leaflet/dist/leaflet.css';

export default function Map(props) {
    let layers = props.data.map((layer, index) => GeoJSON(layer, index));

    return (
        <div>
            <MapContainer className={styles.map} center={[59.91, 10.742]} zoom={14} zoomControl={false} attributionControl={false}>
                <TileLayer
                    attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
                    url="https://api.mapbox.com/styles/v1/aronb/cks4d6uo37kkb18p6u1y879w2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJvbmIiLCJhIjoiY2tzNGJ6bm8yMDBybTJwcWkzYXNmdXMzNiJ9.MMbl9_N-ms2hcNbKULkyUQ"
                />
                { layers }
                <AttributionControl position="bottomright" prefix={false} />
            </MapContainer>
            <div className={styles.mapboxAttr}/>
        </div>
    )
};