
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Person extends React.Component {
    constructor (props)
    {
        super(props);
        this.state = {
            name :this.props.name,
            email:this.props.email,
            contact:this.props.contact,
            height:this.props.height,
            weight:this.props.weight
        }
    }
  render()
  {
      return(
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <p>
                                Name:   {this.state.name}<br/>
                                email:  {this.state.email}<br/>
                                contact:{this.state.contact}<br/>
                                height: {this.state.height}<br/>
                                weight: {this.state.weight}<br/>
                            </p>
                        </div>
                    </div>
                      
                  </div>
              </div>
          </div>
      );
  }
}
root.render(<Person name='divyakant' email='divyakant@gmail.com'contact='123456789'height='172cm'weight='85' />);