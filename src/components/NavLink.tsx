import React from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavItemProp {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProp) => {
  const router = useRouter();
  const isActive = router.asPath == href;

  return (
    <NextLink href={href}>
      <span
        className={cn(
          isActive
            ? "font-semibold text-gray-800 underline underline-offset-8 dark:text-zinc-100"
            : "font-normal text-gray-600 hover:underline hover:underline-offset-8 dark:text-zinc-400",
          "text-blue cursor-pointer p-2 transition-all"
        )}
      >
        {text}
      </span>
    </NextLink>
  );
  
};

export { NavItem };
