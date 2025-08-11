import { Desktop, Mobile } from "./Nav";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const navItems = [
        {
            label: "nav.products",
            href: "/products",
        },
        {
            label: "nav.industry",
            href: "/industry",
        },
        {
            label: "nav.projects",
            href: "/projects",
        },
        {
            label: "nav.contact",
            href: "/contact",
        }
    ];
  return (
    <header className="header">
        <div className="container">
            <Link href="/" className="header__logo">
                <Image src="/imgs/logo.png" alt="Logo" fill className="object-contain" />
            </Link>
            <Desktop navItems={navItems} />
            <Mobile navItems={navItems} />
            <div className="hidden lg:block">
                <LangSwitcher />
            </div>
        </div>
    </header>
  );
};

export default Header;