import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const KakaoMap = () => {
  return (
    <Map center={{ lat: 37.5664056, lng: 126.9778222 }} style={{ width: '400px', height: '300px' }} level={3}>
      <MapMarker position={{ lat: 37.5664056, lng: 126.9778222 }} />
      <ZoomControl position="BOTTOMRIGHT" />
    </Map>
  );
};

export default KakaoMap;
