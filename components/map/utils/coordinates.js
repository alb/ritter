export function convertCoords(coordinates) {
    coordinates = coordinates.slice().reverse();

    coordinates.map(item =>{
        if(Array.isArray(item)) {
            return convertCoords(item);
        }
    })
    return coordinates;
}