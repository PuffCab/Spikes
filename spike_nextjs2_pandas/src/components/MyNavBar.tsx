"use client";
import styles from "@/components/MyNavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "react-bootstrap";

function MyNavBar() {
  const path = usePathname();
  console.log("path :>> ", path);
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Nav.Link href="/" as={Link}>
            Home
          </Nav.Link>
        </li>
        <li>
          <Link href={"/characters"}>Characters</Link>
        </li>
        <li>
          <Link href={"/staticpage"}>Static Page</Link>
        </li>
        <li>
          <Link href={"/ISR"}>ISR page</Link>
        </li>
        <li>
          <Link href={"/dynamic"}>Dynamic page</Link>
        </li>
        <li>
          <Link href={"/hellothere"}>Hello there page</Link>
        </li>
        <li>
          <Link href={"/fanPage/1"}>ID 1</Link>
        </li>
        <li>
          <Link href={"/fanPage/2"}>ID 2</Link>
        </li>
        <li>
          <Link href={"/fanPage/3"}>ID 3</Link>
        </li>
        <li>
          <Link href={"/profile"}>user Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNavBar;
