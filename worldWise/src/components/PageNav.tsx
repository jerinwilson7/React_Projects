import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'
import Logo from './Logo'

export const PageNav = () => {
  return (
    <nav className={styles.nav}>

        <Logo/>

        <ul>
            
            <li>
                <NavLink to='/pricing'>Pricing</NavLink>
            </li>
            <li>
                <NavLink to='/product'>Product</NavLink>
            </li>
            <li>
                <NavLink to='/login' className={styles.ctaLink}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

// ndnf jdialnfiidf njdi gil para tel tel tel nt pi chat wind prem nee mm


