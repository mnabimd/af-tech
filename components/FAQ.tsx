import React from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';
import AccodrionWrapper from './ui/AccordionWrapper';

const FAQ = () => {
   return (
      <div className="py-20 w-full">
         <h1 className="heading mb-10">FAQ</h1>

         <div>
            <AccodrionWrapper
               items={[
                  {
                     q: 'What is your approach to quality assurance and testing?',
                     a: 'Quality assurance and testing is an important part of our Agile development processes. QA engineers participate in Sprint planning. They test the source code when a feature is ready, check improvements, help establish the CI/CD pipeline, and more.'
                  },
                  {
                     q: 'What s is your approach to quality assurance and testing?',
                     a: 'Quality assurance and testing is an important part of our Agile development processes. QA engineers participate in Sprint planning. They test the source code when a feature is ready, check improvements, help establish the CI/CD pipeline, and more.'
                  },
                  {
                     q: 'What is your approach to quality assurance and testing?',
                     a: 'Quality assurance and testing is an important part of our Agile development processes. QA engineers participate in Sprint planning. They test the source code when a feature is ready, check improvements, help establish the CI/CD pipeline, and more.'
                  }
               ]}
            />
         </div>
      </div>
   );
};

export default FAQ;
