import React from 'react';
import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';


interface NavItemProp {
  href: string,
  text: string
}

const NavItem = ({ href, text }: NavItemProp) => {
  const router = useRouter();
  const isActive = router.asPath == href;
  
  return (
    <NextLink
      href={href}
      
    >
      <span className={cn(
        isActive
          ? 'font-semibold underline underline-offset-8 text-gray-800 dark:text-zinc-100'
          : 'font-normal hover:underline hover:underline-offset-8 text-gray-600 dark:text-zinc-400',
        'p-2  transition-all cursor-pointer '
      )}>{text}</span>
    </NextLink>
  );
}

export { NavItem }