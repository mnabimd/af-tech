import React from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';

const FeelsLikeYou = () => {
   const points = [
      <span>
         Market plans cannot be implemented due to lack of{' '}
         <span className="text-purple"> technical support</span>
      </span>,
      <span>
         It is <span className="text-purple">difficult</span> to attract ideal customers, let alone
         <span className="text-purple"> convert them</span>
      </span>,
      <span>
         It feels that the <span className="text-purple"> development of the company </span>
         is extremely difficult
      </span>
   ];

   return (
      <div className="py-20 w-full">
         <h1 className="heading mb-10">
            Does this sound <span className="text-purple">like you?</span>
         </h1>

         <div>
            {points.map((item, i) => {
               return (
                  <div className="justify-center items-center">
                     <FaCircleChevronRight
                        style={{
                           display: 'inline',
                           justifyContent: 'center',
                           alignItems: 'center'
                        }}
                        size={'25px'}
                        color="purple"
                     />
                     <span className="ml-5 text-3xl font-mono">{item}</span>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default FeelsLikeYou;
