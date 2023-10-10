import './navbar.css'

export default function NavBar(){
    return(
        <nav>
            <ul className='nav-options'>
                <li className='options'><a href='/' className='link'>home</a></li>
                <li className='options'><a href='/form' className='link'>add new manga</a></li>
                <li className='options'><a href='/readings' className='link'>readings</a></li>
            </ul>
        </nav>
    )
}