import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([])

   const navigator = useNavigate();

   useEffect(() => {
getAllEmployees();
   }, [])

   function getAllEmployees(){
    listEmployees().then((resp)=>{
        setEmployees(resp.data);
    }).catch((err)=>{
        console.error(err);
    })
   }

   function addNewEmployee(){
navigator('/add-employee')
   }

   function updateEmployee(id){
navigator(`/edit-employee/${id}`)
   }

   function removeEmployee(e){
    console.log(e)

        deleteEmployee(e).then(() =>{
            getAllEmployees();     
        })
}

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
<table className='table table-striped table-bordered'>
        <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {employees.map(employee=>
                <tr key={employee.id}>
                    {/* <td>{employee.id}</td> */}
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                        <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger m-2' onClick={() => removeEmployee(employee.id)}>Delete</button>
                    </td>
                </tr> 
            )}
        </tbody>
    </table>
    </div>
    
  )
}

export default ListEmployeeComponent