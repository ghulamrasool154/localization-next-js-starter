"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className, ...rest }) => {
  const pathname = usePathname();
  let convertArray = pathname.split("/");
  let lang = convertArray[1];

  return (
    <Link href={`/${lang}${href}`} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
