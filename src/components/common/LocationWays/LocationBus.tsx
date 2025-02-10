import Bus from '@/components/common/Icon/Bus';

const LocationBus = () => {
  return (
    <div className="font-GowunDodum flex flex-col gap-7 w-full">
      <div className="flex items-center gap-2 w-full">
        <Bus size={25} color="#7ba2c7" />
        <span className="text-blue-500 font-semibold">버스</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold">172(우리은행종로지점 방면)</span>
        <span>서울광장역 하차 → 데미타스커피 왼쪽 방면 → 도보 5분</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold">172(우리은행종로지점 방면)</span>
        <span>서울광장역 하차 → 데미타스커피 왼쪽 방면 → 도보 5분</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold">172(우리은행종로지점 방면)</span>
        <span>서울광장역 하차 → 데미타스커피 왼쪽 방면 → 도보 5분</span>
      </div>
    </div>
  );
};

export default LocationBus;
