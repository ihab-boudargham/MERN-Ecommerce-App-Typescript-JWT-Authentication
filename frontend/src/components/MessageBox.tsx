import React, { ReactNode } from 'react';

type MessageBoxProps = {
  variant: string;
  children: ReactNode;
};

export default function MessageBox({ children }: MessageBoxProps) {
  return (
    <div
      className="bg-red-500 border-red-400 text-red-700 border px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold text-black">Error! </strong>
      <span className="block sm:inline text-black">{children}</span>
    </div>
  );
}
