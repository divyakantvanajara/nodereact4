
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Page extends React.Component {
  render()
  {
      return(
          <div className='container'>
              <div className='row'>
                  <div className='col-12'>
                      <h3>Class Component example</h3>
                      <p>class container and class Component
                      </p>
                  </div>
              </div>
          </div>
      );
  }
}
root.render(<Page />);