import Map from '../components/map/Map';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Index.module.css'

export default function Index() {
  let testGeoJson = [
    {
      "type": "FeatureCollection",
      "properties": {
        "name": "Test"
      },
      "features": [
        {
          "type": "Feature",
          "properties": {
            "radius": 400,
            "color": "red"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              10.742,
              59.91 
            ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                  [
                      -80.724878,
                      35.265454
                  ],
                  [
                      -80.722646,
                      35.260338
                  ],
                  [
                      -80.720329,
                      35.260618
                  ],
                  [
                      -80.718698,
                      35.260267
                  ],
                  [
                      -80.715093,
                      35.260548
                  ],
                  [
                      -80.71681,
                      35.255361
                  ],
                  [
                      -80.710887,
                      35.255361
                  ],
                  [
                      -80.703248,
                      35.265033
                  ],
                  [
                      -80.704793,
                      35.268397
                  ],
                  [
                      -80.70857,
                      35.268257
                  ],
                  [
                      -80.712518,
                      35.270359
                  ],
                  [
                      -80.715179,
                      35.267696
                  ],
                  [
                      -80.721359,
                      35.267276
                  ],
                  [
                      -80.724878,
                      35.265454
                  ]
              ]
          ]
          }
        },
      ]
    },
    {
      "type": "FeatureCollection",
      "properties": {
        "name": "Test"
      },
      "features": [
        {
          "type": "Feature",
          "geometry": { "type": "Point", "coordinates": [10.722, 59.91] }
        }
      ]
    }
  ];
  
  return (
    <div className={styles.map}>
    <Sidebar/>
    <Map data={testGeoJson}/>
    </div>
    )
  };