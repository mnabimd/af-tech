// @ts-nocheck
import { useState } from 'react';
import { IoCallOutline, IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import { cn } from '@/lib/utils';
import GridGlobe from './GridGlobe';
import animationData from '@/data/confetti.json';
import MagicButton from '../MagicButton';
import { useRouter } from 'next/navigation';

export const BentoGrid = ({
   className,
   children
}: {
   className?: string;
   children?: React.ReactNode;
}) => {
   return (
      <div
         className={cn(
            'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
            'p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200',
            className
         )}
      >
         {children}
      </div>
   );
};

export const BentoGridItem = ({
   className,
   id,
   title,
   description,
   img,
   imgClassName,
   titleClassName,
   spareImg
}: {
   className?: string;
   id: number;
   title?: string | React.ReactNode;
   description?: string | React.ReactNode;
   img?: string;
   imgClassName?: string;
   titleClassName?: string;
   spareImg?: string;
}) => {
   const router = useRouter();
   const leftLists = ['ERP', 'CMS', 'CQRS'];
   const rightLists = ['ASP.NET', 'Docker', 'CI/CD'];

   const [copied, setCopied] = useState(false);

   const defaultOptions = {
      loop: copied,
      autoplay: copied,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
      }
   };

   const handleCopy = () => {
      const text = 'rahmatnoori48@gmail.com';
      navigator.clipboard.writeText(text);
      setCopied(true);
   };

   return (
      <div
         className={cn(
            'relative overflow-hidden rounded-3xl border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between space-y-4',
            className,
            'hover:shadow-md '
         )}
      >
         <div className={`${id === 6 && 'flex justify-center'} h-full`}>
            <div className="w-full absolute ">
               {img && (
                  <img
                     src={img}
                     alt={img}
                     className={cn(imgClassName, 'object-cover object-center rounded-3xl')}
                  />
               )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
               {spareImg && (
                  <img
                     src={spareImg}
                     alt={spareImg}
                     className="object-cover object-center w-full h-full rounded-b-3xl"
                  />
               )}
            </div>

            <div
               className={cn(
                  titleClassName,
                  'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'
               )}
            >
               {/* Description */}
               <div className="font-sans text-lg lg:text-3xl max-w-100 font-bold text-gray-800 dark:text-white pb-10">
                  {id !== 5 && id !== 3 && <div>{description} </div>}
                  {id === 3 && <div className="max-w-64 ">{description} </div>}
                  {id === 5 && (
                     <div>
                        We offer a free, <span className="text-purple">no-obligation</span> audit of
                        your current software
                     </div>
                  )}
               </div>
               {/* Title */}
               <div className="font-sans text-lg lg:text-3xl max-w-98 font-bold text-gray-800 dark:text-white">
                  {title}
               </div>

               {id === 5 && (
                  <div className="text-center">
                     <MagicButton
                        title={'Book a free system audit'}
                        // otherClasses="!bg-gray-100 dark:bg-gray-900"
                     />
                  </div>
               )}

               {/* Globe */}
               {id === 2 && <GridGlobe />}

               {/* Tech stack */}
               {id === 3 && (
                  <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                     <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        {leftLists.map((item, i) => (
                           <span
                              key={i}
                              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                lg:opacity-100 rounded-lg text-center bg-gray-100 dark:bg-gray-800"
                           >
                              {item}
                           </span>
                        ))}
                        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-gray-100 dark:bg-gray-800"></span>
                     </div>
                     <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-gray-100 dark:bg-gray-800"></span>
                        {rightLists.map((item, i) => (
                           <span
                              key={i}
                              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                lg:opacity-100 rounded-lg text-center bg-gray-100 dark:bg-gray-800"
                           >
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               )}

               {id === 6 && (
                  <div className="mt-5 relative">
                     <div className={`absolute -bottom-5 right-0`}>
                        <Lottie options={defaultOptions} height={200} width={400} />
                     </div>

                     <MagicButton
                        handleClick={() => {
                           router.push('/contact');
                        }}
                        title={'Contact Us'}
                        icon={<IoCallOutline />}
                        position="left"

                        // otherClasses="!bg-gray-100 dark:bg-gray-900"
                     />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
