import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import '../_styles/accordion.css';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionWrapper = ({ items }) => (
   <Accordion.Root
      className="AccordionRoot bg-transparent"
      style={{
         width: '100%'
      }}
      type="single"
      defaultValue="item-1"
      collapsible
   >
      <Accordion.Item className="AccordionItem" value="item-1">
         <AccordionTrigger>
            What is your approach to quality assurance and testing?
         </AccordionTrigger>
         <AccordionContent>
            Quality assurance and testing is an important part of our Agile development processes.
            QA engineers participate in Sprint planning. They test the source code when a feature is
            ready, check improvements, help establish the CI/CD pipeline, and more.
         </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
         <AccordionTrigger>Do you have dedicated QA engineers on your team?</AccordionTrigger>
         <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
         </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
         <AccordionTrigger>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum doloremque
            beatae ad eaque ea sequi possimus quis dignissimos molestias explicabo asperiores ipsum
            deleniti, temporibus suscipit est natus esse nostrum!
         </AccordionTrigger>
         <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam numquam
               cum et asperiores dolor eius suscipit doloremque voluptatibus amet similique
               molestias, illo porro at adipisci! Voluptas iusto nostrum ab.
            </div>
         </Accordion.Content>
      </Accordion.Item>
   </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
   <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
         className={classNames('AccordionTrigger', className)}
         {...props}
         ref={forwardedRef}
      >
         {children}
         <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
   </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
   <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
   >
      <div className="AccordionContentText">{children}</div>
   </Accordion.Content>
));

export default AccordionWrapper;
