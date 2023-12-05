import React from 'react';
import '../App.scss';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import {TileLayer} from 'react-leaflet/TileLayer';

function OnlineMap(){
    const adres1 = [52.40563025023904, 16.889925211627073]// body lab one
    const adres2 = [52.492447,17.068203]// mielno 
    const adres3 = [52.405438,16.899113]//grunwaldzka
    const adres4 = [52.463200,16.903278]//medactive
    const adres5 = [52.390522,16.974997]//wielkopolskie centrum fizjoterapi
    return(
        <MapContainer center={[52.449571, 16.950552]} zoom={11} scrollWheelZoom={false}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={adres1} onClick={console.log('ClickedTest')}> 
  <Popup>
    {/* Body lab one */}
    <h5>Body Lab One</h5>
    <h6>ul.Marcelińska 27</h6>
    <h6>60-801 Poznań</h6>
    </Popup>
  </Marker>
     
  <Marker position={adres2}>
  <Popup>
    {/* Mielno */}
    <h5>Rehasteon Group</h5>
    <h6>ul.Łąkowa 1</h6>
    <h6>62-006 Mielno</h6>
    </Popup>
  </Marker>
  <Marker position={adres3}>
  <Popup>
    {/* Grunwaldzka  */}
    <h5>Rehasteon Group</h5>
    <h6>ul.Grunwaldzka 13</h6>
    <h6>60-782 Poznań</h6>
    </Popup>
  </Marker>
  <Marker position={adres4}>
  <Popup>
    {/* Medactive */}
    <h5>Fizjoterapia i Osteopatia Medactive</h5>
    <h6>ul.Stróżyńskiego 29</h6>
    <h6>60-688 Poznań</h6>
    </Popup>
  </Marker>
  <Marker position={adres5}>
  <Popup>
    {/* WCF wielkopolskie centrum fozjoterapi  */}
    <h5>Wielkopolskie Centrum Fizjoterapii</h5>
    <h6>osiedle Lecha 43</h6>
    <h6>61-294 Poznań</h6>
    </Popup>
  </Marker>
  </MapContainer>
    )
}
export default OnlineMap;






