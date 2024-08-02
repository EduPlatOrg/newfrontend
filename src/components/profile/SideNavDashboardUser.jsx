import { useState } from 'react';
import {
  MdDashboard,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { PiNotepad } from 'react-icons/pi';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';
import ToolTip from '../ToolTip';

const navlinks = [
  { name: 'Dashboard', icon: MdDashboard, link: '' },
  { name: 'Mis Recursos', icon: PiNotepad, link: 'my-resources' },
  { name: 'Mis Eventos', icon: MdOutlineEventAvailable, link: 'my-events' },
  { name: 'Mis Comentrarios', icon: FaRegCommentDots, link: 'my-comments' },
];
const SideNavDashbordUser = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className=' h-full'>
      <div
        className={`bg-blue-gray-100 h-screen flex flex-grow ${
          open ? 'w-[200px]' : 'md:w-[80px] w-[50px]'
        } duration-200 pl-4 text-[#003A70] font-bold py- flex flex-col w-1/5  relative bg-gray-100`}>
        <div
          className='cursor-pointer self-end w-5 h-5 bg-[#003A70] rounded-full hidden md:flex items-center justify-center text-white'
          size={26}
          onClick={() => setOpen(!open)}>
          {open ? (
            <MdOutlineKeyboardDoubleArrowLeft />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight />
          )}
        </div>
        <div className='flex flex-col font-semibold'>
          {navlinks.map((item, index) => (
            <ToolTip
              key={index}
              label={open ? '' : item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) => {
                  return isActive
                    ? ' text-[#003A70] bg-white duration-500'
                    : ' hover:bg-white hover:text-[#003A70] text-black duration-300';
                }}>
                <div className='flex flex-row space-x-3 items-center justify-center md:justify-normal p-4'>
                  <div>
                    <item.icon
                      size={21}
                      className={'items-center'}
                    />
                  </div>

                  <div
                    style={{
                      transitionDelay: `${index + 2}00ms`,
                    }}
                    className={`duration-500 ${
                      !open && 'opacity-0 translate-x-3 overflow-hidden '
                    }`}>
                    {item.name}
                  </div>
                </div>
              </NavLink>
            </ToolTip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideNavDashbordUser;
