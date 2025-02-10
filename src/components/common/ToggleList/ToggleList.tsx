import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChevronDown from '@/components/common/Icon/ChevronDown';
import ChevronUp from '@/components/common/Icon/ChevronUp';
import Copy from '@/components/common/Icon/Copy';
import KakaoPay from '@/components/common/Icon/KakaoPay';
import { toggleListHusData, toggleListWifeData } from '@/constants/ToggleListData';

const dropdownVariants = {
  hidden: { opacity: 0, height: 0, overflow: 'hidden' },
  visible: { opacity: 1, height: 'auto', overflow: 'hidden', transition: { duration: 0.5 } },
  exit: { opacity: 0, height: 0, overflow: 'hidden', transition: { duration: 0.5 } },
};

export default function ToggleList() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 py-4 px-4 w-full font-Pretendard my-8">
      <div className="w-full">
        <button
          onClick={() => setIsOpen1(!isOpen1)}
          className="w-full bg-white-200 text-black-200 py-3 shadow-md rounded flex items-center justify-between px-3"
        >
          <span></span>
          <span>신랑측</span>
          {isOpen1 ? <ChevronUp size={16} color="#292929" /> : <ChevronDown size={16} color="#292929" />}
        </button>

        <AnimatePresence mode="wait">
          {isOpen1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="bg-blue-300 border border-blue-200 flex flex-col gap-3 rounded mt-2 p-3 shadow"
            >
              {toggleListHusData.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 rounded bg-white-100 p-4 shadow">
                  <div className="flex justify-between text-black-200 text-sm">
                    <span>{item.grade}</span>
                    <span>{item.name}</span>
                  </div>
                  <div className="flex justify-between bg-white-300 py-2 px-4 rounded">
                    <div className="flex flex-col gap-1 text-sm">
                      <span>{item.bank}</span>
                      <span>{item.account}</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Copy size={18} color="#7a7a7a" />
                      <KakaoPay size={45} color="#7a7a7a" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full">
        <button
          onClick={() => setIsOpen2(!isOpen2)}
          className="w-full bg-white-200 text-black-200 py-3 shadow-md rounded flex items-center justify-between px-3"
        >
          <span></span>
          <span>신부측</span>
          {isOpen2 ? <ChevronUp size={16} color="#292929" /> : <ChevronDown size={16} color="#292929" />}
        </button>

        <AnimatePresence>
          {isOpen2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="bg-blue-300 border border-blue-200 flex flex-col gap-3 rounded mt-2 p-3 shadow"
            >
              {toggleListWifeData.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 rounded bg-white-100 p-4 shadow">
                  <div className="flex justify-between text-black-200 text-sm">
                    <span>{item.grade}</span>
                    <span>{item.name}</span>
                  </div>
                  <div className="flex justify-between bg-white-300 py-2 px-4 rounded">
                    <div className="flex flex-col gap-1 text-sm">
                      <span>{item.bank}</span>
                      <span>{item.account}</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Copy size={18} color="#7a7a7a" />
                      <KakaoPay size={45} color="#7a7a7a" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
