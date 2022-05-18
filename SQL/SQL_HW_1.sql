SQL_HW_1

 1. Вывести все поля и все строки.
SELECT * FROM students;

 2. Вывести только Id пользователей.
SELECT id FROM students;

 3. Вывести только имя пользователей.
SELECT name FROM students;

 4. Вывести только email пользователей.
SELECT email FROM students; 

 5. Вывести имя и email пользователей.
SELECT name, email FROM students;

 6. Вывести id, имя, email и дату создания пользователей.
SELECT id, name, email, created_on FROM students;

 7. Вывести пользователей, где password 12333.
SELECT * FROM students
WHERE password = '12333';

 8. Вывести пользователей, которые были созданы 2021-03-26 00:00:00.
SELECT * FROM students
WHERE created_on = '2021-03-26 00:00:00';

 9. Вывести пользователей, где в имени есть слово Анна.
SELECT * FROM students
WHERE name LIKE '%Anna%';

 10. Вывести пользователей, где в имени в конце есть 8.
SELECT * FROM students
WHERE name LIKE '%8';

 11. Вывести пользователей, где в имени в есть буква а.
SELECT * FROM students
WHERE name LIKE '%a%';

 12. Вывести пользователей, которые были созданы 2021-07-12 00:00:00.
SELECT * FROM students
WHERE created_on = '2021-07-12 00:00:00';

 13. Вывести пользователей, которые были созданы 2021-07-12 00:00:00 и имеют пароль 1m313.
SELECT * FROM students
WHERE created_on = '2021-07-12 00:00:00'
AND password = '1m313';
 
 14. Вывести пользователей, которые были созданы 2021-07-12 00:00:00 и у которых в имени есть слово Andrey.
SELECT * FROM students
WHERE created_on = '2021-07-12 00:00:00'
AND name LIKE '%Andrey%';

 15. Вывести пользователей, которые были созданы 2021-07-12 00:00:00 и у которых в имени есть цифра 8.
SELECT * FROM students
WHERE created_on = '2021-07-12 00:00:00'
AND name LIKE '%8%';

 16. Вывести пользователей у которых id равен 110.
SELECT * FROM students
WHERE id = 110;

 17. Вывести пользователей у которых id равен 153.
SELECT * FROM students
WHERE id = 153;

 18. Вывести пользователей у которых id больше 140.
SELECT * FROM students
WHERE id > 140;

 19. Вывести пользователей у которых id меньше 130.
SELECT * FROM students
WHERE id < 130;

 20. Вывести пользователей у которых id меньше 127 или больше 188.
SELECT * FROM students
WHERE id < 127
OR id > 188;

 21. Вывести пользователей у которых id меньше либо равно 137.
SELECT * FROM students
WHERE id <= 137;

 22. Вывести пользователей у которых id больше либо равно 137.
SELECT * FROM students
WHERE id >= 137;

 23. Вывести пользователей у которых id больше 180 но меньше 190.
SELECT * FROM students
WHERE id > 180
AND id < 190;

 24. Вывести пользователей у которых id между 180 и 190.
SELECT * FROM students
WHERE id BETWEEN 180 and 190;

 25. Вывести пользователей, где password равен 12333, 1m313, 123313.
SELECT * FROM students
WHERE password IN ('12333', '1m313', '123313');

 26. Вывести пользователей, где created_on равен 2020-10-03 00:00:00, 2021-05-19 00:00:00, 2021-03-26 00:00:00.
SELECT * FROM students
WHERE created_on IN ('2020-10-03 00:00:00', '2021-05-19 00:00:00', '2021-03-26 00:00:00');

 27. Вывести минимальный id.
SELECT min(id) FROM students;

 28. Вывести максимальный id.
SELECT max(id) FROM students;

 29. Вывести количество пользователей.
SELECT COUNT(id) FROM students;

 30. Вывести id пользователя, имя, дату создания пользователя. Отсортировать по порядку возрастания даты добавления пользоватлеля.
SELECT id, name, created_on FROM students
ORDER BY created_on ASC;

 31. Вывести id пользователя, имя, дату создания пользователя. Отсортировать по порядку убывания даты добавления пользоватлеля.
SELECT id, name, created_on FROM students
ORDER BY created_on DESC;

 32. Посчитайте сумму всех значений из столбца square.
SELECT SUM(square) FROM continents;

 33. Сделайте выборку названий фильмов и их режиссёров (фильмы без режиссеров не должны быть в выборке).
SELECT film.name, director.director_name FROM film
JOIN director
ON film.director_id = director.id;

 34. Кто является режиссёром фильма godfather и lord of the rings3? (вывести имя фильма и режиссёра).
SELECT film.name, director.director_name FROM film
JOIN director
ON film.director_id = director.id
WHERE film.name = 'godfather'
OR film.name = 'lord of the rings3'; 

