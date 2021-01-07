import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RouterLink = ({href, activeClassName, children}) => {

  const router = useRouter();

  let activeClass = '';
  if(router.pathname === href)
    activeClass = activeClassName ? activeClassName : 'active';
  return <Link href={href}><a className={activeClass}>{children}</a></Link>
}

export default RouterLink;
