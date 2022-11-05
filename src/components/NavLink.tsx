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
            ? "font-semibold text-gray-800  dark:text-zinc-100"
            : "font-normal hover-underline-animation  after:bg-gray-800 after:dark:bg-zinc-400  dark:text-zinc-400",
          "cursor-pointer"
        )}
      >
        {text}
      </span>
    </NextLink>
  );
  
};

export { NavItem };
