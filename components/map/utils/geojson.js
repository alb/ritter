import { useState, useEffect } from 'react';
import { LayerGroup, Circle, Marker, Polygon, Polyline } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { convertCoords } from './coordinates';
import styles from '../../../styles/CustomMarker.module.css';
import colors from  './colors';

export function GeoJSON(data, key) {
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

    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        setCoordinates(convertCoords(feature.geometry.coordinates));
    }, [])

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
            <Polyline pathOptions={pathOptions} positions={coordinates} />
        )
    }
}