INSERT INTO department(name) 
VALUES ("HR"), ("Finance"), ("Legal"), ("Engineering"), ("Marketing");

INSERT INTO dep_role (title, salary, department_id)
VALUES ("HR Specialist", 80000, 1),
("Lead Engineer", 150000, 4),
("Lawyer I", 200000, 3),
("Lawyer II", 200000, 3),
("Accountant", 120000, 2);

INSERT INTO employee (first_name, last_name, dep_role_id, manager_id)
VALUES ()