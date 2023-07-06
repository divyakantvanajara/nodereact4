import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserHome from './UserHome';
import UserCategory from './UserCategory';
import UserProductlist from './UserProductlist';
import UserProduct  from './UserProduct';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Logout from './Logout';
import UserChangYourPassword from './UserChangYourPassword';
import UserForgotYourPassword from './UserForgotYourPassword';

import UserCart from './UserCart';
import UserCheckout from './UserCheckout'

import { BrowserRouter,Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={< UserHome />} />
                    <Route path='/category' element={<UserCategory />} />
                    <Route path='/product_list/:categoryid' element={<UserProductlist />} />
                    <Route path='/product/:productid' element={< UserProduct />} />
                    <Route path='/register' element={< UserRegister/>} />
                   
                    <Route path='/cart' element={< UserCart/>} />
                    <Route path='/checkout' element={< UserCheckout/>} />
                    <Route path='/logout' element={<Logout />} />
                   
                    <Route path='/login' element={<UserLogin />} />
                    <Route path='/user_change_your_password' element={<UserChangYourPassword/>} />
                    <Route path='/user_forgot_your_password' element={<UserForgotYourPassword />} />
                    
            
            </Routes>
        </BrowserRouter>
    );
}
root.render(<MyRouter />);