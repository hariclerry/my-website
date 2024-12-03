import React from 'react';
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGmail,
} from '@tabler/icons-react';
import { FloatingDock } from './ui/FloatingDock';

export function FloatingDockContainer() {
  const links = [
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-purple dark:text-purple" />
      ),
      href: 'https://github.com/hariclerry?tab=repositories',
    },

    {
      title: 'LinkedIn',
      icon: (
        <IconBrandLinkedin className="h-full w-full text-purple dark:text-purple" />
      ),
      href: 'https://www.linkedin.com/in/harriet-ayugi-05744b99/',
    },
    {
      title: 'Email',
      icon: (
        <IconBrandGmail className="h-full w-full text-purple dark:text-purple" />
      ),
      href: `mailto:harrietayugi24@gmail.com`,
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
