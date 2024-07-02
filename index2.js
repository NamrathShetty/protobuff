const Schema = require("./employee_pb");
const fs = require("fs");

const usher = new Schema.Employee();
usher.setId(1);
usher.setName("Usher");
usher.setSalary(100000);

const rick = new Schema.Employee();
rick.setId(2);
rick.setName("Rick");
rick.setSalary(100000);

const deigo = new Schema.Employee();
deigo.setId(3);
deigo.setName("Deigo");
deigo.setSalary(100000);

const employees = new Schema.Employees();
employees.addEmployees(usher);
employees.addEmployees(rick);
employees.addEmployees(deigo);

const bytes = employees.serializeBinary();

console.log("Bytes :",bytes);
fs.writeFileSync("employeesbinary", bytes);
const employees2 = new Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());