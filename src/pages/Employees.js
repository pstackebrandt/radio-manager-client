
import { useState } from "react";
import { useLoaderData, } from "react-router-dom";
import { createEmployee, updateEmployee, deleteEmployee } from "../logic/RestHandler";

function Employees() {
    const employees = useLoaderData();
    const NO_ID = -1;

    const [currentEmployee, setCurrentEmployee] = useState({
        employee_id: NO_ID,
        full_name: '',
        information: '',
        department: '',
        job: ''
    })


    function ShowEmployees() {
        return (
            <div className="employees">
                <ul>
                    {
                        employees.map(employee => (
                            <li key={employee.employee_id}>
                                <b>Id:</b> {employee.employee_id}<br />
                                <b>FullName:</b> {employee.full_name}<br />
                                <b>Information:</b> {employee.information}<br />
                                <b>Department:</b> {employee.department}<br />
                                <b>Job:</b> {employee.job}<br />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )

    }

    function handleOnChange(event) {
        const { name, value } = event.target;
        setCurrentEmployee({ ...currentEmployee, [name]: value })
    }

    function handleEmployeeSubmit(event) {
        event.preventDefault();

        console.log(currentEmployee);

        if (currentEmployee.employee_id === NO_ID) {
            createEmployee(currentEmployee);
        } else {
            if (
                currentEmployee.full_name === '' &&
                currentEmployee.information === '' &&
                currentEmployee.department === '' &&
                currentEmployee.job === ''
            ) {
                deleteEmployee(currentEmployee.employee_id);

            } else {
                updateEmployee(currentEmployee);
            }
        }

        window.location.reload();

    }


    return (
        <div className="App">
            <h2>Employees</h2>

            <ShowEmployees />

            <div className="employee-form">
                <form onSubmit={(event) => handleEmployeeSubmit(event)}>
                    <label htmlFor="employee_id">Employee ID</label><br /><br />
                    <input
                        id="employee_id"
                        name="employee_id"
                        type="text"
                        value={currentEmployee.employee_id}
                        onChange={(event) => handleOnChange(event)}
                    /><br /><br />

                    <label htmlFor="full_name">Full Name</label><br /><br />
                    <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={currentEmployee.full_name}
                        onChange={(event) => handleOnChange(event)}
                    /><br /><br />

                    <label htmlFor="information">Information</label><br /><br />
                    <input
                        id="information"
                        name="information"
                        type="text"
                        value={currentEmployee.information}
                        onChange={(event) => handleOnChange(event)}
                    /><br /><br />

                    <label htmlFor="department">Department</label><br /><br />
                    <input
                        id="department"
                        name="department"
                        type="text"
                        value={currentEmployee.department}
                        onChange={(event) => handleOnChange(event)}
                    /><br /><br />

                    <label htmlFor="job">Job</label><br /><br />
                    <input
                        id="job"
                        name="job"
                        type="text"
                        value={currentEmployee.job}
                        onChange={(event) => handleOnChange(event)}
                    /><br /><br />

                    <button type="submit">Submit</button>

                </form>

            </div>
        </div>
    )
}
export default Employees;