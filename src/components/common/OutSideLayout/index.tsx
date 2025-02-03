import { PropsWithChildren } from 'react';

export const OutSideLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-full min-h-screen bg-white-300">{children}</div>;
};
