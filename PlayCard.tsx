import React from 'react';
import clsx from 'clsx';
import { IconType } from 'react-icons';

interface CardProps {
  value: string;
  symbol: IconType; // store the component itself
}

const Card: React.FC<CardProps> = ({ value, symbol: Symbol }) => {
  return (
    <div className="w-full bg-black/80 h-full border border-blue-400 rounded-2xl shadow-md flex flex-col justify-between p-2 z-10 text-blue-600">
      <div className={clsx('text-3xl flex items-start')}>
        <span className='flex flex-col justify-center items-center'>
          {value} <span><Symbol /></span>
        </span>
      </div>
      <div className="flex items-center justify-center text-7xl">
        <Symbol />
      </div>
      <div className={clsx('text-3xl self-end transform rotate-180 flex flex-col')}>
        <span className='flex flex-col justify-center items-center'>
          {value} <span><Symbol /></span>
        </span>
      </div>
    </div>
  );
};

export default Card;
