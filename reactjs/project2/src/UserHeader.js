import {Link, Outlet} from "react-router-dom"
import Cookies from 'js-cookie';
function UserHeader ()
{
  let isLoggedIn = Cookies.get('isLoggedIn');
  let temp = null;
  if(isLoggedIn === undefined)
  {
    temp =(<><li className="lvl1 parent megamenu">
    <Link to="/register">Register<i className="an an-angle-down" /></Link>
    </li>
    <li className="lvl1 parent megamenu">
       <Link to="/login">Login<i className="an an-angle-down" /></Link>
    </li></>)
  }
    else
    {
      temp =(<> <li className="lvl1 parent megamenu">
      <Link to="/user_change_your_password">Chang Your Password<i className="an an-angle-down" /></Link>
   </li>
   <li className="lvl1 parent megamenu">
   <Link to="/logout">logout<i className="an an-angle-down" /></Link>
                       </li></>)
    }
  
    return(<div>
        
       
        {/* Main Header */}
        <div className="header-section classicHeader clearfix animated hdr-sticky">
          {/* Desktop Header */}
          <div className="header-1 classic-style">
           
           
            {/* Header */}
            <div className="header-wrap d-flex">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-8 d-block d-lg-none">
                    <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Menu"><i className="icon an an-times" /><i className="icon an an-bars" /></button>
                    {/* Mobile Search */}
                    <div className="site-header__search d-block d-lg-none mobile-search-icon">
                      <button type="button" className="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"><i className="icon an an-search" /></button>
                    </div>
                    {/* End Mobile Search */}
                  </div>
                  {/* Desktop Logo */}
                  <div className="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
                    <a href="index.html"><img src="theme/assets/images/logo.png" alt="Diva Multipurpose Html Template" title="Diva Multipurpose Html Template" /></a>
                  </div>
                  {/* End Desktop Logo */}
                  {/* Desktop Navigation */}
                  <div className="col-2 col-sm-3 col-md-3 col-lg-8 d-none d-lg-block">
                    {/* Desktop Menu */}
                    <nav className="grid__item" id="AccessibleNav">
                      <ul id="siteNav" className="d-flex flex-wrap site-nav medium center hidearrow">
                        <li className="lvl1 parent megamenu">
                          <Link to="/">Home <i className="an an-angle-down" /></Link>
                         
                        </li>
                        <li className="lvl1 parent megamenu">
                          <Link to="/category">Shop<i className="an an-angle-down" /></Link>
                       </li>
                       
                       {temp}

                       <li className="lvl1 parent megamenu">
                          <Link to="/cart">Cart<i className="an an-angle-down" /></Link>
                       </li>
                      
                       <li className="lvl1 parent megamenu">
                          <Link to="/checkout">Checkout<i className="an an-angle-down" /></Link>
                       </li>
                       
                      </ul>
                    </nav>
                    {/* End Desktop Menu */}
                  </div>
                  {/* End Desktop Navigation */}
                  {/* Right Side */}
                  <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                    <div className="right-action d-flex-align-center justify-content-end">
                     
                    
                     
                    </div>
                  </div>
                  {/* End Right Side */}
                </div>
              </div>
            </div>
            {/* End Header */}
          </div>
          {/* End Desktop Header */}
        </div>
        {/* End Main Header */}
    </div>

    )
  }
export default UserHeader