// filen name: RestHandler.js
// besserer Name: EmployeeRestHandler.js

// Komponenten, um mit einer REST API zu interagieren, die Mitarbeiterdaten verwaltet. 

// Basis-URL für die Mitarbeiter-API
const BASE_URL = "http://localhost:3001/api/employees/";

// Funktion, um alle Mitarbeiter abzurufen
export const getEmployees = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

// Funktion, um einen neuen Mitarbeiter zu erstellen
export const createEmployee = async (currentEmployee) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentEmployee)
    });
    const data = await response.json();
    return data;
}

// Funktion, um einen bestehenden Mitarbeiter zu aktualisieren
export const updateEmployee = async (currentEmployee) => {
    const response = await fetch(BASE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentEmployee)
    });
    const data = await response.json();
    return data;
}

// Funktion, um einen Mitarbeiter zu löschen
export const deleteEmployee = async (employee_id) => {
    const response = await fetch(`${BASE_URL}${employee_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
}
