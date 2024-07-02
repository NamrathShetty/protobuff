const employee = []

employee.push({
    "name": "John",
    "salary": 1000,
    "id":1001
});

const rahul = {
    "name": "Rahul",
    "salary": 2000,
    "id":1002
};

employee.push(rahul)

employee.push({
    "name": "Raj",
    "salary": 3000,
    "id":1003
});

console.log(JSON.stringify(employee));