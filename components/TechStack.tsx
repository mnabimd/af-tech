import React from 'react';

import { workExperience } from '@/data';
import { Button } from './ui/MovingBorders';
import { InfiniteMovingCards } from './ui/InfiniteCards';
import Image from 'next/image';

const TechStack = () => {
   return (
      <div className="py-20 w-full">
         <h1 className="heading">
            Our <span className="text-purple">Tech-Stack</span>
         </h1>

         <InfiniteMovingCards
            renderItem={(item) => {
               return (
                  <li
                     //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
                     className="w-[20vw] max-w-full relative border border-b-0
        flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[20vw] items-center"
                     style={{
                        //   background:
                        //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
                        //   add these two
                        //   you can generate the color from here https://cssgradient.io/
                        background: 'rgb(4,7,29)',
                        backgroundColor:
                           'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
                     }}

                     // change to idx cuz we have the same name
                  >
                     <div className="border-black-10 items-center">
                        <img
                           src={item.imgSource}
                           alt={item.imgSource}
                           width={150}
                           height={150}
                           className="lg:w-32 md:w-20 w-16 mx-auto"
                        />

                        <p className="text-purple text-center text-2xl justfiy-center">
                           {item.name}
                        </p>
                     </div>
                  </li>
               );
            }}
            items={[
               { name: 'Angular', imgSource: '/images/logos/angular.png' },
               { name: 'React.JS', imgSource: '/images/logos/react.png' },
               { name: 'Vue', imgSource: '/images/logos/vue.png' },
               { name: 'Node', imgSource: '/images/logos/node.png' }
            ]}
         />
      </div>
   );
};

export default TechStack;
