import Call from '@/components/common/Icon/Call';
import Message from '@/components/common/Icon/Message';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Tab = () => {
  const [active, setActive] = useState(0);

  const tabClickHandler = (idx: number) => {
    setActive(idx);
  };

  const tabContArr = [
    {
      title: '신랑측',
      content: [
        { role: '신랑', name: '정건우' },
        { role: '신랑 아버지', name: '아버지' },
        { role: '신랑 어머니', name: '어머니' },
      ],
    },
    {
      title: '신부측',
      content: [
        { role: '신부', name: '박현희' },
        { role: '신부 아버지', name: '아버지' },
        { role: '신부 어머니', name: '어머니' },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="flex border-b border-blue-200 mx-5">
        {tabContArr.map((tab, index) => (
          <motion.li
            key={index}
            className={`w-full text-center pb-1 cursor-pointer ${
              active === index ? 'border-b-2 border-blue-100 text-black-200' : 'text-gray-400'
            }`}
            onClick={() => tabClickHandler(index)}
          >
            {tab.title}
          </motion.li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full flex flex-col gap-7 my-8"
        >
          {tabContArr[active].content.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md"
            >
              <span className="text-sm text-blue-500">{item.role}</span>
              <span className="font-semibold text-test-400">{item.name}</span>
              <div className="flex items-center gap-3">
                <a href="tel:01000000000">
                  <Call size={20} />
                </a>
                <Message size={20} />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tab;
