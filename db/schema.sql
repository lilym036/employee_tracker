DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- My sql tables
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT, 
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE dep_role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  dep_role_id INT,
  manager_id INT, 
  FOREIGN KEY (dep_role_id)
  REFERENCES dep_role(id)
  ON DELETE SET NULL
);

