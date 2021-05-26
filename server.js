const express = require("express");
const { ConnectionError } = require("./config/connection");
const sequelize = require("./config/connection");

function menu() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by role",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
        "exit",
      ],
      name: "choice",
    })
    .then((res) => {
      switch (res.choice) {
        case "View all employees": {
          getAllEmployees();
          break;
        }
        case "View all employees by department": {
          getDepartment();
          break;
        }
        case "View all employees by role": {
          getRole();
          break;
        }
        case "View all employees by manager": {
          getManager();
          break;
        }
        case "Add employee": {
          getManager();
          break;
        }
        case "Remove employee": {
          getManager();
          break;
        }
        case "Update employee role": {
          getManager();
          break;
        }
        case "Update employee manager": {
          getManager();
          break;
        }
        case "exit": {
          ConnectionError.end();
          break;
        }
      }
    });
}

const getAllEmployees = () => {
  connection.query(
    "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id",
    (err, res) => {
      if (err) throw err;
      console.table(res);
      menu();
    }
  );
};

const getDepartment = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Which department?",
      choices: ["Legal", "Finance", "IT", "Sales", "Management"],
      name: "departments",
    })
    .then((res) => {
      switch (res.departments) {
        case "Legal": {
          connection.query(
            //select all employees where role id is 1 or 2 which are members of the Legal department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 1 OR role_id = 2",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "Finance": {
          connection.query(
            //select all employees where role id is 2 or 3 which are members of the Finance department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 3 OR role_id = 4",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "IT": {
          connection.query(
            //select all employees where role id is 5 which are members of the IT department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 5",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "Sales": {
          connection.query(
            //select all employees where role id is 6 or 7 which are members of the Sales department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 6 OR role_id = 7",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "Management": {
          connection.query(
            //select all employees where role id is 8 which are members of the Management department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 8",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
      }
    });
};
