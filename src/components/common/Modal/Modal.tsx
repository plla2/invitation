import React, { MouseEventHandler, useCallback, useEffect, useRef } from 'react';

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  onDismiss: () => void;
}

const Modal = ({ children, onDismiss }: Props) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        onDismiss();
      }
    },
    [onDismiss, overlay],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black-200 bg-opacity-40 flex justify-center items-center"
      onClick={onClick}
    >
      <div
        className="bg-blue-50 shadow-xl px-4 py-6 flex flex-col items-center rounded-md w-[300px] relative"
        ref={wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
