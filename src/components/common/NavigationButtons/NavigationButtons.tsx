const NavigationButtons = () => {
  const destination = '서울시청';
  const destinationCoordinates = { lat: 37.5665, lon: 126.978 };

  const handleNaverClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const naverUrl = isMobile
      ? `nmap://route?destination=${encodeURIComponent(destination)}`
      : `https://map.naver.com/v5/directions/?route=1&destination=${encodeURIComponent(destination)}`;
    window.open(naverUrl, '_blank');
  };

  const handleKakaoClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const kakaoUrl = isMobile
      ? `kakaomap://route?sp=&ep=${encodeURIComponent(destination)}`
      : `https://map.kakao.com/link/to/${encodeURIComponent(destination)}`;
    window.open(kakaoUrl, '_blank');
  };

  const handleTMapClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const tMapUrl = `tmap://route?lat=${destinationCoordinates.lat}&lon=${destinationCoordinates.lon}`;
      window.open(tMapUrl, '_blank');
    } else {
      alert('PC에서는 티맵 경로를 지원하지 않습니다. 모바일에서 사용해주세요.');
    }
  };

  return (
    <div className="flex w-full justify-between gap-2 font-GowunDodum font-semibold text-sm">
      <button
        onClick={handleNaverClick}
        className="flex gap-2 items-center justify-center bg-white-200 py-2 px-4 rounded-md border border-blue-500 w-28"
      >
        <img src="/images/icons/naver.png" width={20} height={20} alt="네이버" />
        <span>네이버</span>
      </button>
      <button
        onClick={handleKakaoClick}
        className="flex gap-2 items-center justify-center bg-white-200 py-2 px-4 rounded-md border border-blue-500 w-28"
      >
        <img src="/images/icons/kakao.png" width={20} height={20} alt="카카오" />
        <span>카카오</span>
      </button>
      <button
        onClick={handleTMapClick}
        className="flex gap-2 items-center justify-center bg-white-200 py-2 px-4 rounded-md border border-blue-500 w-28"
      >
        <img src="/images/icons/tmap.png" width={20} height={20} alt="티맵" />
        <span>티맵</span>
      </button>
    </div>
  );
};

export default NavigationButtons;
