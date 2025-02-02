// Card.tsx
import React from 'react';
import { type Icon } from 'iconsax-react';
import Link from 'next/link';

interface CardProps {
  icon: Icon;
  header: string;
  text: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, header, text, date }) => {
  return (
    <div
      className={`w-[900px] h-[140px] bg-[#FFFFFF] p-4 flex items-center justify-between rounded-md`}
    >
      <div className="flex items-center gap-3">
        <div className="content-center bg-[#4221B0] w-[50px]  h-[50px] rounded-full">
          <Icon size={35} aria-hidden variant="Bold" color='"FFFFFF' />
        </div>
        <div className="w-[710px]">
          <h2 className="text-lg font-semibold">{header}</h2>
          <p className="mt-1">{text}</p>
          <span className="text-[#8D0000]">Due Date: {date}</span>
        </div>
      </div>
      <Link
        href=""
        className="bg-[#0D0723] text-white px-4 py-2 items-center justify-center rounded-md"
      >
        EDIT
      </Link>
    </div>
  );
};

export default Card;
