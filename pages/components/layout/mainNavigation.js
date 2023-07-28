import Link from "next/link"
import classes from './mainNavigation.module.css'

function MainNavigation(){
    return(
        <div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about/about-us'>About</Link></li>
                <li><Link href='/contact/contact-us'>Contact</Link></li>
                <li><Link href='/admin/adminDashboard'>Admin Dashboard</Link></li>
                <li><Link href='/users'>Users Dashboard</Link></li>
                <li><Link href='/users/users-login'>Users Login</Link></li>
            </ul>
        </div>
    )
}

export default MainNavigation