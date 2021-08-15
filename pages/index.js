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
          "properties": {
            "color": "blue"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  10.727751106023788,
                  59.920075734634274
                ],
                [
                  10.726186037063599,
                  59.919082249949
                ],
                [
                  10.724705457687378,
                  59.91810621302931
                ],
                [
                  10.723560154438019,
                  59.91734526075238
                ],
                [
                  10.723066627979279,
                  59.916970155948846
                ],
                [
                  10.722999572753906,
                  59.91672008372466
                ],
                [
                  10.722779631614685,
                  59.91571977598627
                ],
                [
                  10.7227286696434,
                  59.91550330757515
                ],
                [
                  10.722951292991638,
                  59.91541456856387
                ],
                [
                  10.72427362203598,
                  59.91548448416835
                ],
                [
                  10.732454359531403,
                  59.91526935876093
                ],
                [
                  10.732805728912354,
                  59.915438770135914
                ],
                [
                  10.733071267604828,
                  59.91561086969503
                ],
                [
                  10.734221935272217,
                  59.9165775686035
                ],
                [
                  10.732049345970154,
                  59.917214848451955
                ],
                [
                  10.731512904167175,
                  59.91836568570022
                ],
                [
                  10.731512904167175,
                  59.9186668327852
                ],
                [
                  10.72810783982277,
                  59.92005556947628
                ],
                [
                  10.727751106023788,
                  59.920075734634274
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
          "geometry": {
            "type": "Point",
            "coordinates": [
              10.722,
              59.91
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "color": "orange"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                10.724844932556152,
                59.914084799511556
              ],
              [
                10.722398757934569,
                59.912342170139205
              ]
            ]
          }
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