import React from 'react'
import { logout } from '../../Api/AllApi'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
    const handelLogout = () => {
        logout();
        navigate('/login');
    }
  return (
        <nav className="navbar navbar-header navbar-expand navbar-light">
            <a className="sidebar-toggler" href="#"><span className="navbar-toggler-icon"></span></a>
            <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex align-items-center navbar-light ml-auto">
                    <li>
                        <button type='button' className='btn btn-link' onClick={handelLogout}>Logout</button>
                    </li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                            <div className="avatar mr-1">
                                <img src="assets_admin/images/avatar/avatar-s-1.png" alt="" srcSet=""/>
                            </div>
                            <div className="d-none d-md-block d-lg-inline-block">Hi, Saugi</div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i data-feather="user"></i> Account</a>
                            <a className="dropdown-item active" href="#"><i data-feather="mail"></i> Messages</a>
                            <a className="dropdown-item" href="#"><i data-feather="settings"></i> Settings</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i data-feather="log-out"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Header