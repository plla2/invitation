import { PropsWithChildren } from 'react';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center relative max-w-[430px] h-full mx-auto bg-white-200">{children}</div>
  );
};
