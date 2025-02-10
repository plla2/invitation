import { motion } from 'framer-motion';
import ToggleList from '@/components/common/ToggleList/ToggleList';

const Account = () => {
  return (
    <div className="flex flex-col items-center pt-28 pb-20 bg-white-300 px-4">
      <motion.div className="flex flex-col gap-2 justify-center items-center text-blue-500 mb-10">
        <span className="font-SometimesBold font-semibold tracking-wider text-test-100">ACCOUNT</span>
        <span className="font-GowunDodum font-semibold text-lg">마음 전하실 곳</span>
      </motion.div>
      <div className="flex flex-col items-center gap-2 font-GowunDodum text-black-200">
        <span>참석이 어려우신 분들을 위해</span>
        <span>계좌번호를 기재했습니다</span>
        <span>너그러운 마음으로 양해 부탁드립니다</span>
      </div>
      <ToggleList />
    </div>
  );
};

export default Account;
