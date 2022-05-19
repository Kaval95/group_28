SQL HomeWork 2

 1. Создать таблицу employee

create table employees (
	id serial primary key,
	employee_name varchar(50) not null
);

 2.	Наполнить таблицу employee 70 строками.

insert into employees (employee_name)
values ('Thomas'); - .... и + еще 69 имен.

 3. Создать таблицу salary_1

create table salary_1 (
	id serial primary key,
	monthly_salary int not null
);

 3.Наполнить таблицу salary 16 строками.

insert into salary_1 (monthly_salary)
values (1000); - .... и + еще 15 значений.

 4. Создать таблицу employee_salary.

create table employee_salary (
	id serial primary key,
	employee_id int not null,
	salary_1_id int not null
);

 5. Наполнить таблицу employee_salary 40 строками:
- в 10 строк из 40 вставить несуществующие employee_id.

insert into employee_salary (employee_id, salary_id)
	values (1,12), (80,12); - .... и + еще 38 значений.

 6. Создать таблицу roles.

create table roles (
id serial primary key,
role_name int unique not null
);

 7. Поменять тип столба role_name с int на varchar(30).

ALTER TABLE roles ALTER COLUMN role_name TYPE varchar(30);

 8. Наполнить таблицу roles 20 строками:

insert into roles (role_name)
	values ('Junior Python developer'),
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

create table roles_employee (
	id serial primary key,
	employee_id int unique not null,
	role_id int not null,
	foreign key (employee_id)
		references employees(id),	
	foreign key (role_id)
		references roles(id)
);

 10. Наполнить таблицу roles_employee 40 строками:

insert into roles_employee (employee_id, role_id)
	values (1,14); - .... и + еще 39 значений.


 11. Вывести всех работников чьи зарплаты есть в базе, вместе с зарплатами.

select employees.employee_name, salary.monthly_salary from employees 
join employee_salary on employees.id = employee_salary.employee_id
join salary on salary.id = employee_salary.salary_id;

 12. Вывести всех работников у которых ЗП меньше 2000.

select employees.employee_name, salary.monthly_salary from employees 
join employee_salary on employees.id = employee_salary.employee_id
join salary on salary.id = employee_salary.salary_id
where monthly_salary < 2000;

 13. Вывести все зарплатные позиции, но работник по ним не назначен (ЗП есть, но не понятно кто её получает).

select employees.employee_name, salary.monthly_salary from employee_salary left
join employees on employees.id = employee_salary.employee_id
join salary on salary.id = employee_salary.salary_id;

 14. Вывести все зарплатные позиции  меньше 2000 но работник по ним не назначен (ЗП есть, но не понятно кто её получает).

select employees.employee_name, salary.monthly_salary from employee_salary left join employees
on employees.id = employee_salary.employee_id
join salary
on salary.id = employee_salary.salary_id
where monthly_salary < 2000;

 15. Вывести всех работников с названиями их должности.

select employees.employee_name, role_name from employees join roles_employee
on employees.id = roles_employee.employee_id
join roles
on roles.id = roles_employee.role_id;

 16. Вывести имена и должность только Java разработчиков.

select employees.employee_name, role_name from employees join roles_employee
on employees.id = roles_employee.employee_id
join roles
on roles.id = roles_employee.role_id
where role_name like '%Java %';

 17. Вывести имена и должность только Python разработчиков.

select employees.employee_name, role_name from employees join roles_employee
on employees.id = roles_employee.employee_id
join roles
on roles.id = roles_employee.role_id
where role_name like '%Python%';

 18. Вывести имена и должность всех QA инженеров.

select employees.employee_name, role_name from employees join roles_employee
on employees.id = roles_employee.employee_id
join roles
on roles.id = roles_employee.role_id
where role_name like '%QA%';

 19. Вывести имена и должность ручных QA инженеров.

select employees.employee_name, role_name from employees join roles_employee
on employees.id = roles_employee.employee_id
join roles
on roles.id = roles_employee.role_id
where role_name like '%Manual QA%'

 20. Вывести имена и должность автоматизаторов QA

select employees.employee_name, role_name from employees join roles_employee
on employees.id = roles_employee.employee_id
join roles
on roles.id = roles_employee.role_id
where role_name like '%Automation QA%';