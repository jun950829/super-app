import { useEffect, useRef, useState } from 'react';

function useMap() {
    const mapRef = useRef<HTMLElement | null | any>(null);
    const [myLocation, setMyLocation] = useState<
        { latitude: number; longitude: number } | string
    >('');

    useEffect(() => {
        // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
        if (false) {
        // if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((position) => {
            setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        });
        } else {
            // window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
            setMyLocation({ latitude: 37.51748510380373, longitude: 127.04005437575869 });
        }
    }, []);

    useEffect(() => {
        if (typeof myLocation !== 'string') {
            // 현재 위치 추적
            let currentPosition = [myLocation.latitude, myLocation.longitude];

            
            // Naver Map 생성
            mapRef.current = new naver.maps.Map('map', {
                center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
                zoomControl: true,
            });

            let Marker = new naver.maps.Marker({
                position : new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
                map : mapRef.current
            })
        }
    }, [myLocation]);

    return {
        myLocation,
    };
}

export default useMap;