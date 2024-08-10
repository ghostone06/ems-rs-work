import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const CreateUpdateEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();
    const [errors, setErrors] =useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const navigator = useNavigate();

    useEffect(() =>{
        getEmployee(id).then((resp)=>{
            setFirstName(resp.data.firstName);
            setLastName(resp.data.lastName);
            setEmail(resp.data.email);
        }).catch((err)=>{
            console.log(err);
        })
    }, [id])

    function handleFirstName (e) {
        validateForm();
        setFirstName(e.target.value);
    } 

    function handleLastName (e) {
        validateForm();
        setLastName(e.target.value); 
    } 

    function handleEmail (e) {
        validateForm();
        setEmail(e.target.value);
    } 

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName,lastName,email}
            // console.log(employee)
    
            if(id){
                updateEmployee(id,employee).then((resp)=>{
                    // console.log(resp.data);
                    navigator('/employees'); 
                }).catch((err) => {
                    console.error(err);
                })
            }
            else {
                createEmployee(employee).then((resp) =>{
                    // console.log(resp.data);
                    navigator('/employees');
                }).catch((err) => {
                    console.error(err);
                })
            }
        }
    }

    function validateForm(){
let valid = true;

const errorsCopy={... errors}

errorsCopy.firstName = firstName.trim() ? '' :'First name is required';
errorsCopy.lastName = lastName.trim() ? '' : 'Last name is required';
errorsCopy.email = email.trim() ? '' : 'Email is required';

valid = firstName.trim() && lastName.trim() && email.trim();

setErrors(errorsCopy);
return valid;
    }

    function pageTitle(){
return id == null ? <h2 className="text-center">Add Employee</h2> : <h2 className="text-center">Update Employee</h2>
    }

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
                <form action="">
                    <div className="form-group mb-2">
                        <label className="form-label">First Name:</label>
                        <input type="text" placeholder='First Name' name="firstName" value={firstName} className={`form-control ${errors.firstName ? 'is-invalid': ''}`} onChange={handleFirstName}/>
                        {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                        <label className="form-label">Last Name:</label>
                        <input type="text" placeholder='Last Name' name="lastName" value={lastName} className={`form-control ${errors.lastName ? 'is-invalid': ''}`} onChange={handleLastName}/>
                        {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                        <label className="form-label">Email:</label>
                        <input type="text" placeholder='Email' name="email" value={email} className={`form-control ${errors.email ? 'is-invalid': ''}`} onChange={handleEmail}/>
                        {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                    </div>

                    <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUpdateEmployeeComponent