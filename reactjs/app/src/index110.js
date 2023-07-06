
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Page extends React.Component {
    constructor (props)
    {
        super(props);
        this.state = {
            name :'the Easylearn Acedamey ',
            email:'theeasylearn@gmail.com',
            contact:'5989686648'
        }
    }
  render()
  {
      return(
          <div className='container'>
              <div className='row'>
                  <div className='col-12'>
                      <h3>Example of  Component constructor</h3>
                      <p>
                        class Name : {this.state.name}<br/>
                        email Id : {this.state.email}<br/>
                        contact No :{this.state.contact}
                      </p>
                  </div>
              </div>
          </div>
      );
  }
}
root.render(<Page />);