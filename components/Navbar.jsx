import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const List = ['Contact', 'Work', 'Gallery', 'About', 'Home'];

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-white mde">
              Programing-School
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {List.map((item, index) => (
            <Link key={index} href={`#${item}`} passHref>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
