DROP DATABASE IF EXISTS employee_management;
CREATE DATABASE employee_management;
USE employee_management;


-- employee table
Create Table employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT 
);

-- role table
Create Table role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    
);

Create Table department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)

)