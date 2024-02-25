import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <Link href="/" className="logo">
        <Image
          src={logo}
          alt="Notion logo"
        />
      </Link>
      <nav>
        <div className={s.left}>
          <button className="menu">Product</button>
          <button className="menu">Download</button>
          <button className="menu">Solutions</button>
          <button className="menu">Resources</button>
          <Link href="/pricing">Pricing</Link>
        </div>

        <div className={s.right}>
          <div className={s.innerLeft}>
            <Link href="/demo">Request a demo</Link>
          </div>
          <div className={s.innerRight}>
            <Link href="/login">Log in</Link>
            <Link href="/signup" className="primary">Get Notion free</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;