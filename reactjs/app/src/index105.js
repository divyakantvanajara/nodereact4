import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function PersonDetail(person)
{
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header'>
                        <h3>{person.name}</h3>
                    </div>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <tr>
                                <td width='25%'>Date Of Birth</td>
                                <td>{person.dob}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{person.gender}</td>
                            </tr>
                            <tr>
                                <td>Blood Groop</td>
                                <td>{person.bloodgroop}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{person.mobile}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{person.email}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{person.weight}</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>{person.height}</td>
                            </tr>
                            <tr>
                                <td>Hobbies</td>
                                <td>{person.hobbies}</td>
                            </tr>
                            <tr>
                                <td>Education</td>
                                <td>{person.education}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
//create javascript object   
let person = {
  name : 'Divyakant vanajara',
  dob:'21/02/2023',
  gender:'Male',
  bloodgroop:'o+ve',
  mobile:8866591868,
  email:'divyakant.1452@gmail.com',
  weight:85,
  height:'172cm',
  hobbies:'cricket',
  education:'BE computer'
}
root.render(PersonDetail(person));