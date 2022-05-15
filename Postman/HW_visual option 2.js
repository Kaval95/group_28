 http://162.55.220.72:5005/first
 Method: GET
 1. Отправить запрос.
 2. Статус код 200

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

 3. Проверить, что в body приходит правильный string.

pm.test("The correct string comes to the body", function () {
    pm.response.to.have.body("This is the first responce from server!");
});



 http://162.55.220.72:5005/user_info_3
 Method: POST
 request form data: 
 name: str
 age: int
 salary: int

response: 
{'name': name,
          'age': age,
          'salary': salary,
          'family': {'children': [['Alex', 24], ['Kate', 12]],
                     'u_salary_1_5_year': salary * 4}}
 1. Отправить запрос.
 2. Статус код 200

pm.test("1_Status code is 200", function () {
    pm.response.to.have.status(200);
});

 3. Спарсить response body в json.

let respData = pm.response.json();

 4. Проверить, что name в ответе равно name s request (name вбить руками.)

pm.test("2_respName = Vlad", function () {
    pm.expect(respData.name).to.eql("Vlad");
});

 5. Проверить, что age в ответе равно age s request (age вбить руками.)

pm.test("3_respAge = 26", function () {
    pm.expect(respData.age).to.eql("26");
});

 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)

pm.test("4_respSalary = 5000", function () {
    pm.expect(respData.salary).to.eql(5000);
});

 7. Спарсить request.

let reqData = request.data;

 8. Проверить, что name в ответе равно name s request (name забрать из request.)

pm.test("5_respName = reqName", function () {
    pm.expect(respData.name).to.eql(reqData.name);
});

 9. Проверить, что age в ответе равно age s request (age забрать из request.)

pm.test("6_respAge = reqAge", function () {
    pm.expect(respData.age).to.eql(reqData.age);
});

 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

pm.test("7_respSalary = reqSalary", function () {
    pm.expect(respData.salary).to.eql(Number(reqData.salary));
});

 11. Вывести в консоль параметр family из response.

console.log(respData.family);

 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)

pm.test("8_resp.Salary 1.5 years = req.salary*4", function () {
    pm.expect(respData.family.u_salary_1_5_year).to.eql(reqData.salary * 4);
});



 http://162.55.220.72:5005/object_info_3
 Method: GET
 request url params: 
 name: str
 age: int
 salary: int

 response: 
 {'name': name,
           'age': age,
           'salary': salary,
           'family': {'children': [['Alex', 24], ['Kate', 12]],
                     'pets': {'cat':{'name':'Sunny',
                                     'age': 3},
                              'dog':{'name':'Luky',
                                     'age': 4}},
                     'u_salary_1_5_year': salary * 4}
          }
 1. Отправить запрос.
 2. Статус код 200

pm.test("1_Status code is 200", function () {
    pm.response.to.have.status(200);
});

 3. Спарсить response body в json.

let respData = pm.response.json();

 4. Спарсить request.

let reqData = pm.request.url.query.toObject();

 5. Проверить, что name в ответе равно name s request (name забрать из request.)

pm.test("2_respName = reqName", function () {
    pm.expect(respData.name).to.eql(reqData.name);
});

 6. Проверить, что age в ответе равно age s request (age забрать из request.)

pm.test("3_respAge = reqAge", function () {
    pm.expect(respData.age).to.eql(reqData.age);
});

 7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

pm.test("4_respSalary = reqSalary", function () {
    pm.expect(respData.salary).to.eql(Number(reqData.salary));
});

 8. Вывести в консоль параметр family из response.

console.log(respData.family);

 9. Проверить, что у параметра dog есть параметры name.

pm.test("5_dog_have_name", function () {
    pm.expect(respData.family.pets.dog).to.have.property("name");
});

 10. Проверить, что у параметра dog есть параметры age.

pm.test("6_dog_have_age", function () {
    pm.expect(respData.family.pets.dog).to.have.property("age");
});

 11. Проверить, что параметр name имеет значение Luky.

pm.test("7_dog_have_name = Luky", function () {
    pm.expect(respData.family.pets.dog.name).to.eql("Luky");
});

 12. Проверить, что параметр age имеет значение 4.

pm.test("8_dog_have_age = 4", function () {
    pm.expect(respData.family.pets.dog.age).to.eql(4);
});



 http://162.55.220.72:5005/object_info_4
 Method: GET
 request url params: 
 name: str
 age: int
 salary: int

 response: 
 {'name': name,
           'age': int(age),
           'salary': [salary, str(salary * 2), str(salary * 3)]}
 1. Отправить запрос.
 2. Статус код 200

pm.test("1_Status code is 200", function () {
    pm.response.to.have.status(200);
});

 3. Спарсить response body в json.

let respData = pm.response.json();

 4. Спарсить request.

let reqData = pm.request.url.query.toObject();

 5. Проверить, что name в ответе равно name s request (name забрать из request.)

pm.test("2_respName = reqName", function () {
    pm.expect(respData.name).to.eql(reqData.name);
});

 6. Проверить, что age в ответе равно age из request (age забрать из request.)

pm.test("3_respAge = reqAge", function () {
    pm.expect(respData.age).to.eql(Number(reqData.age));
});

 7. Вывести в консоль параметр salary из request.

console.log(reqData.salary);

 8. Вывести в консоль параметр salary из response.

console.log(respData.salary);

 9. Вывести в консоль 0-й элемент параметра salary из response.

console.log(respData.salary[0]);

 10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.

console.log(respData.salary[1]);

 11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.

console.log(respData.salary[2]);

 12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)

pm.test("4_salary_resp[0] = salary_req", function () {
    pm.expect(respData.salary[0]).to.eql(Number(reqData.salary));
});

 13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)

pm.test("5_salary_resp[1] = salary_req*2", function () {
    pm.expect(respData.salary[1]).to.eql(String(reqData.salary * 2));
});

 14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)

pm.test("6_salary_resp[2] = salary_req*3", function () {
    pm.expect(respData.salary[2]).to.eql(String(reqData.salary * 3));
});

 15. Создать в окружении переменную name.

pm.environment.set("name");

 16. Создать в окружении переменную age.

pm.environment.set("age");

 17. Создать в окружении переменную salary.

pm.environment.set("salary");

 18. Передать в окружение переменную name.

pm.environment.set("name", reqData.name);

 19. Передать в окружение переменную age.

pm.environment.set("age", reqData.age);

 20. Передать в окружение переменную salary.

pm.environment.set("salary", reqData.salary);

 21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.

for (item of respData.salary){
    console.log(item)
}



 http://162.55.220.72:5005/user_info_2
 Method: POST
 request form data: 
 name: str
 age: int
 salary: int

 response: 
 {'start_qa_salary': salary,
           'qa_salary_after_6_months': salary * 2,
           'qa_salary_after_12_months': salary * 2.7,
           'qa_salary_after_1.5_year': salary * 3.3,
           'qa_salary_after_3.5_years': salary * 3.8,
           'person': {'u_name': [user_name, salary, age],
                      'u_age': age,
                      'u_salary_5_years': salary * 4.2}
 1. Вставить параметр salary из окружения в request
 2. Вставить параметр age из окружения в age
 3. Вставить параметр name из окружения в name
 4. Отправить запрос.
 5. Статус код 200

pm.test("1_Status code is 200", function () {
    pm.response.to.have.status(200);
});

 6. Спарсить response body в json.

let respData = pm.response.json();

 7. Спарсить request.

let reqData = request.data;

 8. Проверить, что json response имеет параметр start_qa_salary.

pm.test("2_check_start_qa_salary", function () {
    pm.expect(respData).to.have.property("start_qa_salary");
});

 9. Проверить, что json response имеет параметр qa_salary_after_6_months.

pm.test("3_check_qa_salary_after_6_months", function () {
    pm.expect(respData).to.have.property("qa_salary_after_6_months");
});

 10. Проверить, что json response имеет параметр qa_salary_after_12_months.

pm.test("4_check_qa_salary_after_12_months", function () {
    pm.expect(respData).to.have.property("qa_salary_after_12_months");
});

 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year.

pm.test("5_check_qa_salary_after_1.5_year", function () {
    pm.expect(respData).to.have.property("qa_salary_after_1.5_year");
});

 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years.

pm.test("6_check_qa_salary_after_3.5_years", function () {
    pm.expect(respData).to.have.property("qa_salary_after_3.5_years");
});

 13. Проверить, что json response имеет параметр person.

pm.test("7_check_have_person", function () {
    pm.expect(respData).to.have.property("person");
});

 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)

pm.test("8_check_start_qa_salary == reqSal", function () {
    pm.expect(respData.start_qa_salary).to.eql(Number(reqData.salary));
});

 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)

pm.test("9_check_qa_salary_after_6_monthsl == reqSal*2", function () {
    pm.expect(respData.qa_salary_after_6_months).to.eql(reqData.salary * 2);
});

 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)

pm.test("10_check_qa_salary_after_12_months == reqSal*2.7", function () {
    pm.expect(respData.qa_salary_after_12_months).to.eql(reqData.salary * 2.7);
});

 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)

pm.test("11_check_qa_salary_after_1.5_year == reqSal*3.3", function () {
    pm.expect(respData["qa_salary_after_1.5_year"]).to.eql(reqData.salary * 3.3);
});

 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)

pm.test("12_check_qa_salary_after_3.5_years == reqSal*3.8", function () {
    pm.expect(respData["qa_salary_after_3.5_years"]).to.eql(reqData.salary * 3.8);
});

 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)

pm.test("13_check_u_name == reqSal(5000)", function () {
    pm.expect(respData.person.u_name[1]).to.eql(Number(reqData.salary));
});

 20. Проверить, что что параметр u_age равен age из request (age забрать из request.)

pm.test("14_check_u_age == reqAge", function () {
    pm.expect(respData.person.u_age).to.eql(Number(reqData.age));
});

 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)

pm.test("15_check_u_salary_5_years == reqSal*4.2", function () {
    pm.expect(respData.person.u_salary_5_years).to.eql(reqData.salary * 4.2);
});

 22. Написать цикл который выведет в консоль по порядку элементы списка из параметра person.

for (i in respData.person){
    console.log(i + " = " + respData.person[i])
}
