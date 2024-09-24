import { useEffect } from 'react'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

function Map () {
  useEffect(() => {
    const mapCenter = [14.997845, 120.655602]
    const mapDefaultZoom = 18
    const mapMinZoom = mapDefaultZoom
    const mapMaxZoom = 20

    const mapBase = leaflet.map('map', {
      center: mapCenter,
      zoom:mapDefaultZoom,
      minZoom: mapMinZoom,
      maxZoom: mapMaxZoom,
    })
    
    leaflet
      .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(mapBase);
  }, [])
  
  const mapReservedHeight = { height: 400 }
  
  return (
    <div className='map-container'>
      <div id="map" style={mapReservedHeight}></div>
    </div>
  )
}

export default Map