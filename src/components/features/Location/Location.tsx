import Call from '@/components/common/Icon/Call';
import Copy from '@/components/common/Icon/Copy';
import KakaoMap from '@/components/common/Kakao/KakaoMap';
import NavigationButtons from '@/components/common/NavigationButtons/NavigationButtons';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Location = () => {
  return (
    <div className="flex flex-col items-center py-28 bg-blue-300 px-4">
      <motion.div className="flex flex-col gap-2 justify-center items-center text-blue-500 mb-10" variants={fadeInUp}>
        <span className="font-SometimesBold font-semibold tracking-wider text-test-100">LOCATION</span>
        <span className="font-GowunDodum font-semibold text-lg">오시는 길</span>
      </motion.div>
      <div className="flex flex-col items-center gap-2 font-GowunDodum">
        <div className="flex items-center gap-2">
          <span className="text-black-100">어디어디 컨벤션 5F, 어디홀 </span>
          <Call size={16} />
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-black-200 text-sm">서울 어디구 무슨로 36</span>
          <Copy size={16} color="#7ba2c7" />
        </div>
        <span className="text-black-200 text-xs">Tel. 02-0000-0000</span>
      </div>
      <div className="flex w-full justify-center mt-12 mb-14">
        <KakaoMap />
      </div>
      <div className="flex flex-col w-full px-3 font-GowunDodum gap-5 mb-10">
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">내비게이션</span>
          <span>사용하실 앱을 선택하시면 길안내가 시작됩니다.</span>
          <span className="text-black-200 text-xs">* 앱이 설치되어 있지 않을 경우 앱설치 페이지로 이동합니다.</span>
        </div>
        <NavigationButtons />
      </div>
    </div>
  );
};

export default Location;
