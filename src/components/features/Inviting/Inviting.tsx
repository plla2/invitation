import { AnimatePresence, motion } from 'framer-motion';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { useCallback, useEffect, useState } from 'react';
import Call from '@/components/common/Icon/Call';
import Modal from '@/components/common/Modal/Modal';
import Xmark from '@/components/common/Icon/Xmark';
import Tab from '@/components/common/Tab/Tab';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const Inviting = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const onDismiss = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <motion.div
      className="my-36 flex flex-col items-center w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex flex-col gap-2 justify-center items-center text-blue-500 mb-10" variants={fadeInUp}>
        <span className="font-SometimesBold font-semibold tracking-wider text-test-100">INVITATION</span>
        <span className="font-GowunDodum font-semibold text-lg">소중한 분들을 초대합니다</span>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <VideoSection />
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center gap-10 font-GowunDodum font-medium text-black-200 py-10"
        variants={staggerContainer}
      >
        {[
          ['저희 두 사람의 작은 만남이', '사랑의 결실을 이루어', '소중한 결혼식을 올리게 되었습니다.'],
          ['평생 서로 귀하게 여기며', '첫 마음 그대로 존중하고 배려하며 살겠습니다.'],
          ['오로지 믿음과 사랑을 약속하는 날', '오셔서 축복해 주시면 더 없는 기쁨으로', '간직하겠습니다.'],
        ].map((texts, index) => (
          <motion.div key={index} className="flex flex-col items-center justify-center gap-2" variants={fadeInUp}>
            {texts.map((text, i) => (
              <motion.p key={i} variants={fadeInUp}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        ))}
        <motion.div variants={fadeInUp} className="mx-12 rounded-md">
          <img className="w-full h-full object-cover rounded-md" src="/invite.jpg" alt="초대사진" decoding="async" />
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col gap-10 font-GowunDodum font-semibold">
        <motion.div
          className="flex flex-col gap-2 justify-center mt-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full grid grid-cols-[1fr_0.5fr_1fr] gap-1 font-GowunDodum font-medium">
            <span className="text-black-200 font-semibold">아버지 &#8226; 어머니</span>
            <span className="text-black-200">의 아들</span>
            <span className="text-black-200 font-semibold text-center">정건우</span>
          </div>
          <div className="w-full grid grid-cols-[1fr_0.5fr_1fr] gap-1 font-GowunDodum font-medium">
            <span className="text-black-200 font-semibold">아버지 &#8226; 어머니</span>
            <span className="text-black-200">의 딸</span>
            <span className="text-black-200 font-semibold text-center">박현희</span>
          </div>
          {/* <motion.span initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.3 }}>
            신랑 정건우
          </motion.span>
          <span>&#8226;</span>
          <motion.span initial={{ x: 50 }} animate={{ x: 0 }} transition={{ delay: 0.3 }}>
            신부 박현희
          </motion.span> */}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-center text-blue-500 gap-2 border border-blue-200 bg-blue-300 py-2 rounded-lg"
          onClick={handleModal}
        >
          <Call size={14} />
          <motion.span>연 락 하 기</motion.span>
        </motion.button>
      </motion.div>
      <AnimatePresence mode="wait">
        {modalOpen && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="flex justify-center items-center h-full font-GowunDodum"
          >
            <Modal setModalOpen={setModalOpen} onDismiss={onDismiss}>
              <motion.button className="absolute right-3 top-3" onClick={onDismiss}>
                <Xmark size={20} color="#7ba2c7" />
              </motion.button>
              <div className="flex flex-col gap-1 items-center mb-8">
                <span className="font-SometimesBold font-semibold text-xs tracking-widest text-test-100">CONTACT</span>
                <span className="font-semibold text-blue-500 tracking-widest">연락하기</span>
              </div>
              {/* <div className="w-full mb-9">
                <p className="w-full border-b border-blue-500 pb-1 text-sm text-blue-500">신랑측 연락처</p>
                <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-2 my-5">
                  <span className="text-sm text-blue-500">신랑</span>
                  <span className="font-semibold text-test-400">정건우</span>
                  <div className="flex items-center gap-3">
                    <Call size={20} />
                    <Message size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-2 my-5">
                  <span className="text-sm text-blue-500">신랑 아버지</span>
                  <span className="text-test-400 font-semibold">아버지</span>
                  <div className="flex items-center gap-3">
                    <Call size={20} />
                    <Message size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-2 my-5">
                  <span className="text-sm text-blue-500">신랑 어머니</span>
                  <span className="text-test-400 font-semibold">어머니</span>
                  <div className="flex items-center gap-3">
                    <Call size={20} />
                    <Message size={20} />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="w-full border-b border-blue-500 pb-1 text-sm text-blue-500">신부측 연락처</p>
                <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-2 my-5">
                  <span className="text-sm text-blue-500 w-[66.5px]">신부</span>
                  <span className="text-test-400 font-semibold">박현희</span>
                  <div className="flex items-center gap-3">
                    <Call size={20} />
                    <Message size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-2 my-5">
                  <span className="text-sm text-blue-500">신부 아버지</span>
                  <span className="text-test-400 font-semibold">아버지</span>
                  <div className="flex items-center gap-3">
                    <Call size={20} />
                    <Message size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-2 my-5">
                  <span className="text-sm text-blue-500">신부 어머니</span>
                  <span className="text-test-400 font-semibold">어머니</span>
                  <div className="flex items-center gap-3">
                    <Call size={20} />
                    <Message size={20} />
                  </div>
                </div>
              </div> */}
              <Tab />
            </Modal>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Inviting;
