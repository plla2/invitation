import Subway from '@/components/common/Icon/Subway';

const LocationSubway = () => {
  return (
    <div className="font-GowunDodum flex flex-col gap-7 w-full">
      <div className="flex items-center gap-2 w-full">
        <Subway size={25} color="#7ba2c7" />
        <span className="text-blue-500 font-semibold">지하철</span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[#0052A4] font-semibold">1호선(시청역)</span>
          <span>{`시청역 5번 출구 > 도보 1분`}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#00A84D] font-semibold">2호선(시청역)</span>
          <span>{`시청역 5번 출구 > 도보 1분`}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationSubway;
