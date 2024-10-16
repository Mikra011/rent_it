import NavSearch from "./NavSearch"
import DarkMode from "./DarkMode"
import Logo from "./Logo"
import LinksDropDown from "./LinksDropDown"

export default function NavBar() {
    return (
        <nav className="border-b">
            <div
                className="
                container flex flex-col sm:flex-row sm:justify-between sm:items-center
                flex-wrap gap-4 py-8
                ">
                <Logo />
                <NavSearch />
                <div className="flex gap-4 items-center">
                    <DarkMode />
                    <LinksDropDown />
                </div>
            </div>
        </nav>

    )
}