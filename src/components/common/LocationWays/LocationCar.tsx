import Car from '@/components/common/Icon/Car';
import React from 'react';

const LocationCar = () => {
  return (
    <div className="font-GowunDodum flex flex-col gap-7 w-full">
      <div className="flex items-center gap-2 w-full">
        <Car size={25} color="#7ba2c7" />
        <span className="text-blue-500 font-semibold">자차</span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span>내비게이션 : '서울시청' 검색</span>
        <span>주소 검색 : 서울특별시 중구 세종대로 110</span>
      </div>
    </div>
  );
};

export default LocationCar;
