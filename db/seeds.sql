INSERT INTO department(name) 
VALUES ("HR"), ("Finance"), ("Legal"), ("Engineering"), ("Sales");

INSERT INTO dep_role (title, salary, department_id)
VALUES ("HR Specialist", 80000, 1),
("Lead Engineer", 150000, 4),
("Lawyer", 200000, 3),
("Sales Lead", 200000, 5),
("Accountant", 120000, 2),
("Salesperson", 75000, 5),
("Software Engineer", 100000, 4);

INSERT INTO employee (first_name, last_name, dep_role_id, manager_id)
VALUES ("Michael", "Scott", 4, NULL),
("Dwight", "Schrute", 2, NULL),
("Jim", "Halpert", 6, 1),
("Pam", "Beesly", 6, 1),
("Angela", "Martin", 7, 2),
("Andy", "Bernard", 3, NULL),
("Kelly", "Kapoor", 1, 1),
("Stanley", "Hudson", 7, 2),
("Holly", "Flax", 6, 1),
("Erin", "Hannon", 5, 1)