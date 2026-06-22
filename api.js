export const mockStudentDb = [
    { id: 696969, firstName: "Franz", lastName: "Domantay", email:"franz@gmail.com"},
    { id: 676767, firstName: "Nasd", lastName: "asdas", email:"asd@gmail.com" },
];

export function getStudentsAPI() {
    return mockStudentDb;
    // console.log(mockStudentDb);
}

export function addStudentsAPI(newStudentData) {
    const newId = Date.now();
    const savedStudent = { id: newId, firstName: newStudentData.firstName, lastName: newStudentData.lastName, email: newStudentData.email };
    mockStudentDb.push(savedStudent);
    console.log("Added student:", savedStudent);
    return savedStudent;
}

export default {
    getStudentsAPI,
    addStudentsAPI
};


// console.log("TEST CASE 1");
// getStudentsAPI();

// console.log("TEST CASE 2");
// addStudentsAPI({ 
//     firstName: "Light", 
//     lastName: "Yagami", 
//     email: "light.yagami@gmail.com" 
// });

// console.log("TEST CASE 3");
// getStudentsAPI();




