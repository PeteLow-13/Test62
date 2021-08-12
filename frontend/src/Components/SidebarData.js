import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as ImIcons from 'react-icons/im';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'destinations',
    path: '/locationselect',
    icon: <SiIcons.SiOpenstreetmap />,
    cName: 'nav-text',
  },
  {
    title: 'about us',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <ImIcons.ImMail2 />,
    cName: 'nav-text',
  },
];
