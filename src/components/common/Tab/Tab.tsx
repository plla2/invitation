import Call from '@/components/common/Icon/Call';
import Message from '@/components/common/Icon/Message';
import { useState } from 'react';

const Tab = () => {
  const [active, setActive] = useState(0);

  const tabClickHandler = (idx: number) => {
    setActive(idx);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={`w-full text-center pb-1 text-black-200 ${active === 0 ? 'border-b-2 border-blue-100' : ''}`}
          onClick={() => tabClickHandler(0)}
        >
          신랑측
        </li>
      ),
      tabContent: (
        <div className="w-full flex flex-col gap-7 my-8">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md">
            <span className="text-sm text-blue-500">신랑</span>
            <span className="font-semibold text-test-400">정건우</span>
            <div className="flex items-center gap-3">
              <a href="tel:01000000000">
                <Call size={20} />
              </a>
              <Message size={20} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md">
            <span className="text-sm text-blue-500">신랑 아버지</span>
            <span className="text-test-400 font-semibold">아버지</span>
            <div className="flex items-center gap-3">
              <a href="tel:01000000000">
                <Call size={20} />
              </a>
              <Message size={20} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md">
            <span className="text-sm text-blue-500">신랑 어머니</span>
            <span className="text-test-400 font-semibold">어머니</span>
            <div className="flex items-center gap-3">
              <a href="tel:01000000000">
                <Call size={20} />
              </a>
              <Message size={20} />
            </div>
          </div>
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          className={`w-full text-center pb-1 text-black-200 ${active === 1 ? 'border-b-2 border-blue-100' : ''}`}
          onClick={() => tabClickHandler(1)}
        >
          신부측
        </li>
      ),
      tabContent: (
        <div className="w-full flex flex-col gap-7 my-8">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md">
            <span className="text-sm text-blue-500">신부</span>
            <span className="font-semibold text-test-400">박현희</span>
            <div className="flex items-center gap-3">
              <a href="tel:01000000000">
                <Call size={20} />
              </a>
              <Message size={20} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md">
            <span className="text-sm text-blue-500">신부 아버지</span>
            <span className="text-test-400 font-semibold">아버지</span>
            <div className="flex items-center gap-3">
              <a href="tel:01000000000">
                <Call size={20} />
              </a>
              <Message size={20} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center px-4 py-5 bg-blue-300 shadow-lg rounded-md">
            <span className="text-sm text-blue-500">신부 어머니</span>
            <span className="text-test-400 font-semibold">어머니</span>
            <div className="flex items-center gap-3">
              <a href="tel:01000000000">
                <Call size={20} />
              </a>
              <Message size={20} />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="flex border-b border-blue-200 mx-5">
        {tabContArr.map((section) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[active].tabContent}</div>
    </div>
  );
};

export default Tab;
