import Link from "next/link";
import React from "react";
import { NavLink } from "react-bootstrap";

export default function NavBar() {
  return (
    <nav>
      <NavLink as={Link} href="/">
        Home
      </NavLink>
      <NavLink as={Link} href="/user">
        user
      </NavLink>
      <NavLink as={Link} href="/clientSideComponent">
        CSR
      </NavLink>
      <Link href="/serverSideComponent">SSR</Link> |
      <Link href="/staticSiteComponent">SSG</Link> |
      <Link href="/product">products</Link> | <Link href="/search">Search</Link>
    </nav>
  );
}
