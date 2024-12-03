import React from 'react';
import { projects } from '../data';
import { PinContainer } from './ui/Pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-10 relative" id="project">
      <h1 className="heading">
        A Collection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-[23rem] mt-10"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.url}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '#13162D' }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-full object-cover rounded-md"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center gap-2">
                  {item.iconLists.map((IconComponent, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      {IconComponent ? <Icon icon={IconComponent} /> : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

interface IconProps {
  icon: React.ElementType;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
  return <IconComponent className="text-yellow-600 text-xl" />;
};
