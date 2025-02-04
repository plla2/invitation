import { PropsWithChildren } from 'react';

export const OutSideLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-full bg-white-300">{children}</div>;
};
