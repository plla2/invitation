import { PropsWithChildren } from 'react';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col relative max-w-[430px] mx-auto bg-white-200 overflow-x-hidden">{children}</div>;
};
