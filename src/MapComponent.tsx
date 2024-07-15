import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L, { Icon } from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import coffeePoints from './data'
import { FC } from 'react';
import "./App.css"

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapComponent: FC<{}> = () => {
  return <MapContainer
  className="full-screen-map"
  center={[44.808823, 20.460263]}
  zoom={13}
  minZoom={13}
  maxZoom={18}
  style={{ height: '100vh', width: '100%' }}
  maxBounds={[[44.607492, 20.190475], [44.959623, 20.665777]]}
  scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />
  <MarkerClusterGroup>
    { 
      coffeePoints.map((item, index) => {
        return <Marker
        key={index}
        position={[item.pos[0], item.pos[1]]}
        icon={
          new Icon(
            {
              iconUrl: "https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-coffee-icon-icon-element-png-image_4237513.png",
              iconSize: [30, 30]
            }
          )
        }
      >
        <Popup>
          {item.name}
          <br />
          {item.description}
        </Popup>
      </Marker>
      })
  }
  </MarkerClusterGroup>
</MapContainer>
}

export default MapComponent;
