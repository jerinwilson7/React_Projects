import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import {  useEffect, useState } from 'react'
import { useCities } from '../contexts/CitiesContext'
import { useNavigate, } from 'react-router-dom'
import { useGeolocation } from '../hooks/useGeoLocation'
import { Button } from './Button'
import { useUrlPosition } from '../hooks/useUrlHooks'


export const Map = () => {

  const {cities} = useCities()

  const [mapPosition,setMapPosition] = useState<[number,number]>([40,0])
  

  const [mapLat,mapLng] = useUrlPosition()

  const {
    isLoading:isLoadingPosition,
    getPosition,
    position:geoLocationPosition
  } = useGeolocation()

  useEffect(()=>{
    if(mapLat && mapLng) setMapPosition([mapLat,mapLng])
  },[mapLat,mapLng])

  useEffect(()=>{
    if(geoLocationPosition)
      setMapPosition([geoLocationPosition.lat,geoLocationPosition.lng])
  },[geoLocationPosition])

  return (
    <div 
    className={styles.mapContainer}>
    {!geoLocationPosition && <Button type='position' onClick={getPosition}>
      {isLoadingPosition ? 'Loading...':"Use your position"}
    </Button>}


  <MapContainer
  //  center={[mapLat,mapLng]}
   center={mapPosition}
    zoom={6}
     scrollWheelZoom={true}
      className={styles.map}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
    {
  cities.map((city)=>(
    <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
      <Popup>
        <span>{city.emoji}</span>
        <span>{city.cityName}</span>
      </Popup>
    </Marker>
  ))
  }

  <ChangeCenter position={mapPosition}/>
  <DetectClick/>
  </MapContainer>


    </div>
  )
}

const ChangeCenter = ({position}: { position: [number, number] })=>{
  const map = useMap()
  map.setView(position)
  return null
}

const DetectClick=()=>{
  const navigate = useNavigate();

  useMapEvents({
    click:(e:L.LeafletMouseEvent)=>{
      console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    }
  })
  return null
}

// 