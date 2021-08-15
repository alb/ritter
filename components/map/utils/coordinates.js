export function convertCoords(coordinates) {
    coordinates = coordinates.reverse();

    coordinates.map(item =>{
        if(Array.isArray(item)) {
            return convertCoords(item);
        }
    })
    return coordinates;
}