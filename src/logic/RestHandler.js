const BASE_URL = "http://localhost:3001/api/employees/"

export const getEmployees = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data
}

export const createEmployee = async (currentEmployee) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentEmployee)
    })
    const data = await response.json()
    return data
}

export const updateEmployee = async (currentEmployee) => {
    const response = await fetch(BASE_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentEmployee)
    })
    const data = await response.json()
    return data
}

export const deleteEmployee = async (employee_id) => {

    const response = await fetch(`${BASE_URL}${employee_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}