import { FeatureGroup } from "react-leaflet"
import { LayerGroup, Circle, Marker, Polygon, Polyline } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { convertCoords } from './utils/coordinates';
import styles from '../../styles/CustomMarker.module.css';
import colors from  './utils/colors';

export default function GeoJson(props) {
    let iterableLayers = props.data.filter(layer => {
        return !layer.properties.hidden;
    })

    return (
        <FeatureGroup>
            { iterableLayers.map((layer, index) => (
                <GeoJSON data={layer} index={index} key={index}/>
            ))}
        </FeatureGroup>
    )
}

function GeoJSON(props) {
    let key = props.index;
    let data = props.data;

    return (
        <LayerGroup key={key}>
            {data.features.map((feature, index) => {  
                return processFeature(feature, index)
            })}
        </LayerGroup>
    );
}

let processFeature = (feature, index) => {
    let pathOptions = {};
    let coordinates = convertCoords(feature.geometry.coordinates);

    if(feature.properties?.color) {
        let color = feature.properties.color;

        pathOptions = {
            color: colors[color]
        }
    }

    if(feature.geometry.type === "Point" && feature.properties?.radius) {
        return (
            <Circle
                center={coordinates}
                pathOptions={pathOptions}
                radius={feature.properties.radius}
                key={index}
            />
        );
    }

    if(feature.geometry.type === "Point") {
        const customMarkerIcon = divIcon({className: styles.marker, iconSize: null});
    
        return (
            <Marker position={coordinates} icon={customMarkerIcon} key={index}/>
        );
    }

    if(feature.geometry.type === "Polygon") {
        return (
            <Polygon pathOptions={pathOptions} positions={coordinates} key={index}/>
        )
    }

    if(feature.geometry.type === "LineString") {
        return (
            <Polyline pathOptions={pathOptions} positions={coordinates} key={index}/>
        )
    }
}