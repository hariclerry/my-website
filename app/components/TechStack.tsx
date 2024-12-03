import React from 'react';
import { stacks } from '@/app/data';

const TechStack = () => {
  return (
    <section id="stack" className="py-20">
      <h1 className="heading">
        Tech <span className="text-purple">Stack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-start py-10 gap-10">
        {stacks.map((item) => (
          <span
            key={item.id}
            className="flex lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#1b1b30] gap-2 items-center"
          >
            {item.icon ? <Icon icon={item.icon} /> : null}
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
              style={{
                color: '#BEC1DD',
                margin: '1vh 0',
              }}
            >
              {item.name}
            </p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

interface IconProps {
  icon: React.ElementType;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
  return <IconComponent className="text-4xl text-blue-700" />;
};
