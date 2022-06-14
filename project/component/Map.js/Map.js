import React, { useState, useEffect } from 'react'

const Map = () => {

  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const $script = document.createElement('script');
    console.log($script);
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f6030893c8db256b0171d97340aeda47`
    $script.type = `text/javascript`;
    $script.addEventListener("load", () => setMapLoaded(true));
    console.log(mapLoaded);
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) {
      console.log('not loaded');
      return;
    }

    kakao.maps.load(() => {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      }
  
      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴}
    })
  }, [mapLoaded]);
  
  
  return (
    <div id="map" style={{width: '800px', height: '440px'}}></div>
  )

}

export default Map