import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../Images/logo.png'
import {auth} from './db/DBConfig'
import {useNavigate} from 'react-router-dom'

export const Navbar = ({user,totalProducts}) => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            navigate('/login');
        })
    }

    return (
        <div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                    {/* <img src={logo} alt="logo"/> */}
                </div>
            </div>
            <div className='rightside'>

                {!user&&<>
                    <div><Link className='navlink' to="/">Home</Link></div>
                    <div><Link className='navlink' to="About"> About</Link></div>
                    <div><Link className='navlink' to="Menu"> Menu</Link></div>
                    <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink' to="login">LOGIN</Link></div>
                </>} 

                {user&&<>
                    <div><Link className='navlink' to="/">Home</Link></div>
                    <div><Link className='navlink' to="About"> About</Link></div>
                    <div><Link className='navlink' to="Menu"> Menu</Link></div>
                    <div><Link className='navlink' to="/">Logged in as: {user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="cart">
                            <img src="Menu-Pictures/cart.png"/>
                        </Link>
                        <span className='cart-indicator'>{totalProducts}</span>
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                     
                                
            </div>
        </div>

    )
}