// import { getStudentsApi, addStudentsAPI } from './api.js';
import * as api from './api.js';

var localStudents = [];
const tableBody = document.getElementById('studentTableBody');

api.getStudentsAPI().forEach(student => {
    localStudents.push(student);
});

console.log("Local Students:", localStudents);

const renderTable = (localStudents) => {
    tableBody.innerHTML = '';
    localStudents.forEach((student, index) => {
        console.log(`Rendering student: ${student.firstName} ${student.lastName} (${student.email})`);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `;
        tableBody.appendChild(row);
    });
};

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //just clears input everytime
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName || !lastName || !email) {
        alert('please fill out all of the input');
        return;
    }

    const StudentData = {
        firstName,
        lastName,
        email
    };

    // localStudents.push(StudentData);
    api.addStudentsAPI(StudentData);
    console.log("student added to local array:", StudentData);
    renderTable(localStudents);
    studentForm.reset();
});

// renderTable(localStudents);

const initApp = () => {
    console.log("APP INIT");
    localStudents = api.getStudentsAPI();
    renderTable(localStudents);
}

initApp();