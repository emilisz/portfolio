import sleep1 from './public/img/sleep1.webp'
import sleep2 from './public/img/sleep2.webp'
import sleep3 from './public/img/sleep3.webp'

import truth1 from './public/img/truth1.webp'
import truth2 from './public/img/truth2.webp'
import truth3 from './public/img/truth3.webp'
import truth4 from './public/img/truth4.webp'

import taxi1 from './public/img/taxi1.webp'
import taxi2 from './public/img/taxi2.webp'
import taxi3 from './public/img/taxi3.webp'
import taxi4 from './public/img/taxi4.webp'

import auto1 from './public/img/auto1.webp'
import auto2 from './public/img/auto2.webp'
import auto3 from './public/img/auto3.webp'

// console.log(sleep1.src);

export const data = [
  {
    id: 1,
    title: 'Truth or Dare generator',
    desc: 'Party game with many questions and dares to do',
    category: 'app',
    url: '',
    stack: ['React native', 'Expo'],
    images: [
      {
        original: truth1.src,
      },
      {
        original: truth2.src,
      },
      {
        original: truth3.src,
      },
      {
        original: truth4.src,
      },
    ],
  },
  {
    id: 2,
    title: 'Calm Sounds',
    desc: 'Sound app helping to relax and sleep better',
    category: 'app',
    url: '',
    stack: ['React native', 'Expo'],
    images: [
      {
        original: sleep1.src,
      },
      {
        original: sleep2.src,
      },
      {
        original: sleep3.src,
      },
    ],
  },
  {
    id: 3,
    title: 'Local Taxi website',
    desc: 'Landing page for local client. ',
    category: 'webpage',
    url: 'https://nice-taksi.lt/',
    stack: ['Wordpress', 'Elementor','Illustrator','Photoshop'],
    images: [
      {
        original: taxi1.src,
      },
      {
        original: taxi2.src,
      },
      {
        original: taxi3.src,
      },
      {
        original: taxi4.src,
      },
     
    ],
  },
  {
    id: 4,
    title: 'Local business website',
    desc: 'Landing page for local client. ',
    category: 'webpage',
    url: 'http://nupirksimeauto.lt/',
    stack: ['Wordpress', 'Elementor','Illustrator','Photoshop'],
    images: [
      {
        original: auto1.src,
      },
      {
        original: auto2.src,
      },
      {
        original: auto3.src,
      },
     
    ],
  },
]
