// import { getStudentsApi, addStudentsAPI } from './api.js';
import * as api from './api.js';

const localStudents = [];
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
    const newStudentData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value
    };
    localStudents.push(newStudentData);
    console.log("New student added to local array:", newStudentData);
    renderTable(localStudents);
});

renderTable(localStudents);