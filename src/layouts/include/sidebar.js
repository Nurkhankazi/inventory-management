import React from 'react'
import { Link,useLocation, } from 'react-router-dom'
function Sidebar() {

	const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
  return (
	<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" style={{textAlign: 'center', fontWeight: 'bold'}}>
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <svg
                  width="25"
                  viewBox="0 0 25 42"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                      id="path-1"></path>
                    <path
                      d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                      id="path-3"></path>
                    <path
                      d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                      id="path-4"></path>
                    <path
                      d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                      id="path-5"></path>
                  </defs>
                  <g id="g-app-brand" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                      <g id="Icon" transform="translate(27.000000, 15.000000)">
                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                          <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                          </mask>
                          <use fill="#696cff" xlinkHref="#path-1"></use>
                          <g id="Path-3" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-3"></use>
                            <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-3"></use>
                          </g>
                          <g id="Path-4" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-4"></use>
                            <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-4"></use>
                          </g>
                        </g>
                        <g
                          id="Triangle"
                          transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
                          <use fill="#696cff" xlinkHref="#path-5"></use>
                          <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-5"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bold ms-2">Inventory</span>
            </a>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
         
            
            <li className="menu-item active open">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Dashboards">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Dashboard") ? 'active' : ''}`}>
                    <Link to="/" className="sidebar-link nav-link">Dashboard
                    </Link>
                  </li>
                </div>
              </a>
            </li>

            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Products" aria-expanded="false" aria-controls="Products">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <span className="menu-title">Products</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Products">
                <ul className="nav flex-column sub-menu">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/products/add") ? 'active' : ''}`}>
                    <Link to="/Products/add" className="sidebar-link nav-link">
                        <span className="menu-title">Product Add</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/products") ? 'active' : ''}`}>
                    <Link to="/products" className="sidebar-link nav-link">
                        <span className="menu-title">Product list</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Categories") ? 'active' : ''}`}>
                    <Link to="/Categories" className="sidebar-link nav-link">
                        <span className="menu-title">Product Categories</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Orders" aria-expanded="false" aria-controls="Orders">
              <i className="menu-icon tf-icons bx bx-list-check"></i>
                <span className="Form Validation">Orders</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Orders">
                <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Order/add") ? 'active' : ''}`}>
                    <Link to="/Order/add" className="sidebar-link nav-link">
                        <span className="menu-title">Order Add</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/order") ? 'active' : ''}`}>
                    <Link to="/order" className="sidebar-link nav-link">
                        <span className="menu-title">Order list</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Order_history") ? 'active' : ''}`}>
                    <Link to="/Order_history" className="sidebar-link nav-link">
                        <span className="menu-title">Order history</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Suppliers" aria-expanded="false" aria-controls="Suppliers">
              <i className="menu-icon tf-icons bx bx-detail"></i>
                <span className="Form Layouts">Suppliers</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Suppliers">
                <ul className="nav flex-column sub-menu">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Suppliers/add") ? 'active' : ''}`}>
                    <Link to="/suppliers/add" className="sidebar-link nav-link">
                        <span className="menu-title">Supplier Add</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/suppliers") ? 'active' : ''}`}>
                    <Link to="/suppliers" className="sidebar-link nav-link">
                        <span className="menu-title">Supplier list</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Settings" aria-expanded="false" aria-controls="Settings">
              <i className="menu-icon tf-icons bx bx-file"></i>
              <span className="Documentation">Purchase</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Settings">
                <ul className="nav flex-column sub-menu">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/User_management") ? 'active' : ''}`}>
                    <Link to="/User_management" className="sidebar-link nav-link">
                        <span className="menu-title">Purchase Add</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Notifications") ? 'active' : ''}`}>
                    <Link to="/Notifications" className="sidebar-link nav-link">
                        <span className="menu-title">Purchase list</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>

                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Inventory" aria-expanded="false" aria-controls="Inventory">
              <i className="menu-icon tf-icons bx bx-grid"></i>
                <span className="Datatables">Inventory</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Inventory">
                <ul className="nav flex-column sub-menu">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Stock_levels") ? 'active' : ''}`}>
                    <Link to="/Stock_levels" className="sidebar-link nav-link">
                        <span className="menu-title">Stock levels</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Stock_Adjustment") ? 'active' : ''}`}>
                    <Link to="/Stock_Adjustment" className="sidebar-link nav-link">
                        <span className="menu-title">Stock Adjustment</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>

                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Users" aria-expanded="false" aria-controls="Users">
              <i className="menu-icon tf-icons bx bx-table"></i>
                <span className="Tables">Users</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Users">
                <ul className="nav flex-column sub-menu">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/User_Add") ? 'active' : ''}`}>
                    <Link to="/User_Add" className="sidebar-link nav-link">
                        <span className="menu-title">User Add</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/User_list") ? 'active' : ''}`}>
                    <Link to="/User_list" className="sidebar-link nav-link">
                        <span className="menu-title">User list</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            
            <li className="menu-item">
              <a className="menu-link menu-toggle" data-bs-toggle="collapse" href="#Report" aria-expanded="false" aria-controls="Report">
              <i className="menu-icon tf-icons bx bx-support"></i>
              <span className="Support">Report</span>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="Report">
                <ul className="nav flex-column sub-menu">
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Seles_report") ? 'active' : ''}`}>
                    <Link to="/Seles_report" className="sidebar-link nav-link">
                        <span className="menu-title">Sales Report</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                        
                    </Link>
                  </li>
                  <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Supplier_reports") ? 'active' : ''}`}>
                    <Link to="/Supplier_reports" className="sidebar-link nav-link">
                        <span className="menu-title">Supplier Reports</span>
                        <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>

                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            

          </ul>
        </aside>
  )
}

export default Sidebar