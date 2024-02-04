import React, { ReactNode } from 'react';

type MessageBoxProps = {
  variant: 'red' | 'yellow' | 'green';
  children: ReactNode;
};

export default function MessageBox({ variant, children }: MessageBoxProps) {
  return (
    <div
      className={`bg-${variant}-100 border-${variant}-400 text-${variant}-700 border px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">{children}</span>
    </div>
  );
}
