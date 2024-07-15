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
          <Link href={"characters"}>Characters</Link>
        </li>
        <li>
          <Link href={"staticpage"}>Static Page</Link>
        </li>
        <li>
          <Link href={"hellothere"}>Hello there page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNavBar;
