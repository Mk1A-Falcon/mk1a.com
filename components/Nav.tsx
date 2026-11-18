import Link from "next/link";

function Nav() {
  return(
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/post">Post</Link>
      <Link href="/signin">Sign in</Link>
      <Link href="/contacts">Contacts</Link>
    </nav>
  );
}

export default Nav;