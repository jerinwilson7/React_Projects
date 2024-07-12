import { Logo } from "./Logo"
import { Results } from "./Results"
import { Search } from "./Search"



export const NavBar = () => {
  return (
    <nav className="nav-bar">
    <Logo/>
    <Search/>
   <Results/>
  </nav>
  )
}
