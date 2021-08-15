## Ritter
<p align="center">
  A GeoJSON based map viewer written in React and NextJS
</p> 

<p align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/25285064/129495340-618ff2f0-5290-4689-b6d9-9f50626b6a03.png">
</p>

---

### Features 
 - Easy to use and extend
 - Custom and self-made dark map theme
 - Layer-based viewing with the ability to toggle layers
 - Able to render all geometry types specified in the [GeoJSON Specification](https://geojson.org/) 
 - All geometry types are stylable with custom colors (Full support for [Leaflet's Path class](https://leafletjs.com/reference-1.7.1.html#path) is in the works)

### Challenges
- Creating a custom theme for a map isn't easy and takes a bit of time to get the grips of it. Currently the map tiles are provided by Mapbox, but I plan to switch to a custom tileserver when I have the time to implement it so Ritter is vendor-independent.
- Getting `react-leaflet` and by extension Leaflet to work was fairly difficult. Often times there was no information on how to achieve specific things so I had to come up unique solutions to get everything working.
  - Getting the initial map to render correctly took some time (for example SSR with react-leaflet)
  - Updating what is rendered on the map without reloading the whole map was also fairly difficult

### What I'd like to improve
- Add support for `Multi` versions of GeoJSON geometries
- Switch to a local tileserver for tile generation
- Add support to graphically edit the GeoJSON data
- Allow more detailed viewing of the data
  - e.g. `flyTo` a specific geometry
  - Information about the geometry
  - Support for popups
