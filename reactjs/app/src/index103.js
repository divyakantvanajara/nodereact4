import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (<div className='container'>
    <div className='row'>
        <div className='col-6 offset-3'>
            <div className='card shadow'>
                <div className='card-header text-bg-secondary'>
                    <h3>Forget Password</h3>
                </div>
                <div className='card-body'>
                    <form>
                    <div className='mb-3'>
                            <input type='email' className='form-control' placeholder='Email' />
                        </div>
                        
                        <div className='mb-3 text-end'>
                            <input type='button' className='btn btn-secondary' value='Forget Password' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>)
root.render(output);

