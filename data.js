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

import coffee1 from './public/img/coffee1.webp'
import coffee2 from './public/img/coffee2.webp'
import coffee3 from './public/img/coffee3.webp'
import coffee4 from './public/img/coffee4.webp'

import solo1 from './public/img/solo1.webp'
import solo2 from './public/img/solo2.webp'
import solo3 from './public/img/solo3.webp'
import solo4 from './public/img/solo4.webp'

// console.log(sleep1.src);

export const data = [
  {
    id: 1,
    title: 'Truth or Dare generator',
    desc: 'Party game with many questions and dares to do',
    category: 'app',
    url: 'https://play.google.com/store/apps/details?id=com.emiliszzz.truth_or_dare_app',
    stack: ['React native', 'Expo'],
    images: [
      {
        original: truth1.src,
        originalAlt:'Truth or Dare generator'
      },
      {
        original: truth2.src,
         originalAlt:'Truth or Dare generator'
      },
      {
        original: truth3.src,
         originalAlt:'Truth or Dare generator'
      },
      {
        original: truth4.src,
         originalAlt:'Truth or Dare generator'
      },
    ],
  },
  {
    id: 2,
    title: 'Calm Sounds',
    desc: 'Sound app helping to relax and sleep better',
    category: 'app',
    url: 'https://play.google.com/store/apps/details?id=calm_sounds_sleep_meditate.apk',
    stack: ['React native', 'Expo'],
    images: [
      {
        id:1,
        original: sleep1.src,
        originalAlt:'Calm Sounds'
      },
      {
        id:2,
        original: sleep2.src,
          originalAlt:'Calm Sounds'
      },
      {
        id:3,
        original: sleep3.src,
          originalAlt:'Calm Sounds'
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
        id:1,
        original: taxi1.src,
        originalAlt:'Nice taxi'
      },
      {
        id:2,
        original: taxi2.src,
        originalAlt:'Nice taxi'
      },
      {
        original: taxi3.src,
        originalAlt:'Nice taxi'
      },
      {
        id:3,
        original: taxi4.src,
        originalAlt:'Nice taxi'
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
        id:1,
        original: auto1.src,
        originalAlt:'Landing page'
      },
      {
        id:2,
        original: auto2.src,
        originalAlt:'Landing page'
      },
      {
        id:3,
        original: auto3.src,
        originalAlt:'Landing page'
      },
     
    ],
  },
  {
    id: 5,
    title: 'Coffee place web template',
    desc: 'Landing page for coffee bar. ',
    category: 'web template',
    url: 'https://crush-coffee.vercel.app/',
    stack: ['HTML5', 'Tailwindcss'],
    images: [
      {
        id:1,
        original: coffee1.src,
        originalAlt:'Coffee venue'
      },
      {
        id:2,
        original: coffee2.src,
        originalAlt:'Coffee venue'
      },
      {
        id:3,
        original: coffee3.src,
        originalAlt:'Coffee venue'
      },
     
    ],
  },
  {
    id: 6,
    title: 'Solo pica',
    desc: 'Pizza venue website',
    category: 'website',
    url: 'https://solo-pica.vercel.app/',
    stack: ['NextJS','React', 'Tailwindcss','Stripe'],
    images: [
      {
        id:1,
        original: solo1.src,
        originalAlt:'Solo pica'
      },
      {
        id:2,
        original: solo2.src,
        originalAlt:'Solo pica'
      },
      {
        id:3,
        original: solo3.src,
        originalAlt:'Solo pica'
      },
      {
        id:4,
        original: solo4.src,
        originalAlt:'Solo pica'
      },
     
    ],
  },
]
