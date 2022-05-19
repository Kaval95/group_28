SQL HomeWork 2

 1. Создать таблицу employee

CREATE TABLE employees (
	id serial primary key,
	employee_name varchar(50) NOT NULL
);

 2.	Наполнить таблицу employee 70 строками.

INSERT INTO employees (employee_name)
	VALUES ('Thomas'); - .... и + еще 69 имен.

 3. Создать таблицу salary_1

CREATE TABLE salary_1 (
	id serial primary key,
	monthly_salary int NOT NULL
);

 3. Наполнить таблицу salary 16 строками.

INSERT INTO salary_1 (monthly_salary)
	VALUES  (1000); - .... и + еще 15 значений.

 4. Создать таблицу employee_salary.

CREATE TABLE employee_salary (
	id serial primary key,
	employee_id int NOT NULL,
	salary_1_id int NOT NULL
);

 5. Наполнить таблицу employee_salary 40 строками:
- в 10 строк из 40 вставить несуществующие employee_id.

INSERT INTO employee_salary (employee_id, salary_id)
	VALUES  (1,12), (80,12); - .... и + еще 38 значений.

 6. Создать таблицу roles.

CREATE TABLE roles (
id serial primary key,
role_name int unique NOT NULL
);

 7. Поменять тип столба role_name с int на varchar(30).

ALTER TABLE roles ALTER COLUMN role_name TYPE varchar(30);

 8. Наполнить таблицу roles 20 строками:

INSERT INTO roles (role_name)
	VALUES  ('Junior Python developer'),
	       ('Middle Python developer'),
	       ('Senior Python developer'),
	       ('Junior Java developer'),
	       ('Middle Java developer'),
	       ('Senior Java developer'),
	       ('Junior JavaScript developer'),
	       ('Middle JavaScript developer'),
	       ('Senior JavaScript developer'),
	       ('Junior Manual QA engineer'),
	       ('Middle Manual QA engineer'),
	       ('Senior Manual QA engineer'),
	       ('Project Manager'),
	       ('Designer'),
	       ('HR'),
	       ('CEO'),
	       ('Manager'),
	       ('Junior Automation QA engineer'),
	       ('Middle Automation QA engineer'),
	       ('Senior Automation QA engineer');

 9. Создать таблицу roles_employee.

CREATE TABLE roles_employee (
	id serial primary key,
	employee_id int unique NOT NULL,
	role_id int NOT NULL,
	foreign key (employee_id)
		references employees(id),	
	foreign key (role_id)
		references roles(id)
);

 10. Наполнить таблицу roles_employee 40 строками.

INSERT INTO roles_employee (employee_id, role_id)
	VALUES (1,14); - .... и + еще 39 значений.

 11. Вывести всех работников чьи зарплаты есть в базе, вместе с зарплатами.

SELECT employees.employee_name, salary.monthly_salary FROM employees 
JOIN employee_salary ON employees.id = employee_salary.employee_id
JOIN salary ON salary.id = employee_salary.salary_id;

 12. Вывести всех работников у которых ЗП меньше 2000.

SELECT employees.employee_name, salary.monthly_salary FROM employees 
JOIN employee_salary ON employees.id = employee_salary.employee_id
JOIN salary ON salary.id = employee_salary.salary_id
WHERE monthly_salary < 2000;

 13. Вывести все зарплатные позиции, но работник по ним не назначен (ЗП есть, но не понятно кто её получает).

SELECT employees.employee_name, salary.monthly_salary FROM employee_salary left
JOIN employees ON employees.id = employee_salary.employee_id
JOIN salary ON salary.id = employee_salary.salary_id;

 14. Вывести все зарплатные позиции  меньше 2000 но работник по ним не назначен (ЗП есть, но не понятно кто её получает).

SELECT employees.employee_name, salary.monthly_salary FROM employee_salary left 
JOIN employees ON employees.id = employee_salary.employee_id
JOIN salary ON salary.id = employee_salary.salary_id
WHERE monthly_salary < 2000;

 15. Вывести всех работников с названиями их должности.

SELECT employees.employee_name, role_name FROM employees 
JOIN roles_employee ON employees.id = roles_employee.employee_id
JOIN roles ON roles.id = roles_employee.role_id;

 16. Вывести имена и должность только Java разработчиков.

SELECT employees.employee_name, role_name FROM employees
JOIN roles_employee ON employees.id = roles_employee.employee_id
JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Java %';

 17. Вывести имена и должность только Python разработчиков.
 
SELECT employees.employee_name, role_name FROM employees
JOIN roles_employee ON employees.id = roles_employee.employee_id
JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Python%';

 18. Вывести имена и должность всех QA инженеров.

SELECT employees.employee_name, role_name FROM employees
JOIN roles_employee ON employees.id = roles_employee.employee_id
JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%QA%';

 19. Вывести имена и должность ручных QA инженеров.

SELECT employees.employee_name, role_name FROM employees
JOIN roles_employee ON employees.id = roles_employee.employee_id
JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Manual QA%'

 20. Вывести имена и должность автоматизаторов QA

SELECT employees.employee_name, role_name FROM employees
JOIN roles_employee ON employees.id = roles_employee.employee_id
JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Automation QA%';
