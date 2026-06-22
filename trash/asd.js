console.log("Hello from CodeRunner!");

function add(a, b) {
    return a + b;
}

const result = add(2, 3);
console.log("2 + 3 =", result);

mockStudentDb = [1, 2, 3, 4, 5];

function getStudentsAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
                { id: 3, name: "Charlie" }
            ]);
        }, 1000);
    });
}