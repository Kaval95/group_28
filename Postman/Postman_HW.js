
http://162.55.220.72:5005/first
1. Отправить запрос.
2. Статус код 200
3. Проверить, что в body приходит правильный string.

pm.test("The correct string comes to the body", function () {
    pm.response.to.have.body("This is the first responce from server!");
});



http://162.55.220.72:5005/user_info_3
1. Отправить запрос.
2. Статус код 200
3. Спарсить response body в json.
4. Проверить, что name в ответе равно name s request (name вбить руками.)

let respData = pm.response.json();

pm.test("Name", function () {
    pm.expect(respData.name).to.eql("Vlad");
});

5. Проверить, что age в ответе равно age s request (age вбить руками.)

let respData = pm.response.json();

pm.test("Age", function () {
    pm.expect(respData.age).to.eql("26");
});

6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)

let respData = pm.response.json();

pm.test("3_Salary", function () {
    pm.expect(respData.salary).to.eql(5000);
});

7. Спарсить request.
8. Проверить, что name в ответе равно name s request (name забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let nameData = reqData.name;

pm.test("4_Pars_Name", function () {
    pm.expect(respData.name).to.eql(nameData);
});

9. Проверить, что age в ответе равно age s request (age забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let ageData = reqData.age;

pm.test("5_Pars_Age", function () {
    pm.expect(respData.age).to.eql(ageData);
});

10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let salaryData = +reqData.salary;

pm.test("6_Pars_Age", function () {
    pm.expect(respData.salary).to.eql(salaryData);
});

11. Вывести в консоль параметр family из response.

let respData = pm.response.json();
let familyData = respData.family;
console.log(familyData);

12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)

let respData = pm.response.json();
let reqData = request.data;

pm.test("7_Salary 1.5 years = salary*4", function () {
    pm.expect(respData.family.u_salary_1_5_year).to.eql(reqData.salary * 4);
});



http://162.55.220.72:5005/object_info_3
1. Отправить запрос.
2. Статус код 200
3. Спарсить response body в json.
4. Спарсить request.
5. Проверить, что name в ответе равно name s request (name забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let nameData = reqData.name;

pm.test("1_Pars_Name_Req", function () {
    pm.expect(respData.name).to.eql(nameData);
});

6. Проверить, что age в ответе равно age s request (age забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let ageData = reqData.age;

pm.test("2_Pars_Age_Req", function () {
    pm.expect(respData.age).to.eql(ageData);
}); 

7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let salaryData = +reqData.salary;
console.log(salaryData)

pm.test("3_Pars_Salary_Req", function () {
    pm.expect(respData.salary).to.eql(salaryData);
});

8. Вывести в консоль параметр family из response.

let respData = pm.response.json();
let familyData = respData.family;
console.log(familyData);

9. Проверить, что у параметра dog есть параметры name.

let respData = pm.response.json();

pm.test("4_dog_have_name", function () {
    pm.expect(respData.family.pets.dog).to.have.property("name");
});

10. Проверить, что у параметра dog есть параметры age.

let respData = pm.response.json();

pm.test("4_dog_have_name", function () {
    pm.expect(respData.family.pets.dog).to.have.property("age");
});

11. Проверить, что параметр name имеет значение Luky.

let respData = pm.response.json();

pm.test("6_dog_have_name_Luky", function () {
    pm.expect(respData.family.pets.dog.name).to.eql("Luky");
});

12. Проверить, что параметр age имеет значение 4.

let respData = pm.response.json();

pm.test("6_dog_have_name_Luky", function () {
    pm.expect(respData.family.pets.dog.age).to.eql(4);
});



http://162.55.220.72:5005/object_info_4
1. Отправить запрос.
2. Статус код 200
3. Спарсить response body в json.
4. Спарсить request.
5. Проверить, что name в ответе равно name s request (name забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let nameData = reqData.name;

pm.test("2_name_pars_req", function () {
    pm.expect(respData.name).to.eql(nameData);
});

6. Проверить, что age в ответе равно age из request (age забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let ageData = +reqData.age;

pm.test("1_age_pars_req", function () {
    pm.expect(respData.age).to.eql(ageData);
});

7. Вывести в консоль параметр salary из request.

let reqData = pm.request.url.query.toObject();
let salaryData = reqData.salary;
console.log(salaryData);

8. Вывести в консоль параметр salary из response.

let respData = pm.response.json();
let respSalary = respData.salary;
console.log(respSalary);

9. Вывести в консоль 0-й элемент параметра salary из response.

let respData = pm.response.json();
let respSalary = respData.salary[0];
console.log(respSalary);

10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.

let respData = pm.response.json();
let respSalary = respData.salary[1];
console.log(respSalary);

11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.

let respData = pm.response.json();
let respSalary = respData.salary[2];
console.log(respSalary);

12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let reqSalaryData = +reqData.salary;

pm.test("3_salary_resp = salary_req", function () {
    pm.expect(respData.salary[0]).to.eql(reqSalaryData);
});

13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let reqSalaryData = String(reqData.salary * 2);

pm.test("3_salary_resp = salary_req", function () {
    pm.expect(respData.salary[1]).to.eql(reqSalaryData);
});

14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = pm.request.url.query.toObject();
let reqSalaryData = String(reqData.salary * 3);
console.log(reqSalaryData);

pm.test("3_salary_resp = salary_req", function () {
    pm.expect(respData.salary[2]).to.eql(reqSalaryData);
});

15. Создать в окружении переменную name
16. Создать в окружении переменную age
17. Создать в окружении переменную salary

18. Передать в окружение переменную name

let reqData = pm.request.url.query.toObject();
let nameKey = reqData.name;
pm.environment.set("name", nameKey);

19. Передать в окружение переменную age

let reqData = pm.request.url.query.toObject();
let ageKey = reqData.age;
pm.environment.set("age", ageKey);

20. Передать в окружение переменную salary

let reqData = pm.request.url.query.toObject();
let salaryKey = reqData.salary;
pm.environment.set("salary", salaryKey);

21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.

Сделал три способа:

let respData = pm.response.json();
let salData = respData.salary;

for (item of salData){
    console.log(item)
}

====

for (key in salData){
    console.log(salData[key])
}

====

for(i = 0; i < salData.length; i++){
    console.log(salData[i])
}



http://162.55.220.72:5005/user_info_2
1. Вставить параметр salary из окружения в request
2. Вставить параметр age из окружения в age
3. Вставить параметр name из окружения в name
4. Отправить запрос.
5. Статус код 200
6. Спарсить response body в json.
7. Спарсить request.

8. Проверить, что json response имеет параметр start_qa_salary
9. Проверить, что json response имеет параметр qa_salary_after_6_months
10. Проверить, что json response имеет параметр qa_salary_after_12_months
11. Проверить, что json response имеет параметр qa_salary_after_1.5_year
12. Проверить, что json response имеет параметр qa_salary_after_3.5_years

let respData = pm.response.json();

pm.test("1_check_salary", function () {
    pm.expect(respData).to.have.property("start_qa_salary");
    pm.expect(respData).to.have.property("qa_salary_after_6_months");
    pm.expect(respData).to.have.property("qa_salary_after_12_months");
    pm.expect(respData).to.have.property("qa_salary_after_1.5_year");
    pm.expect(respData).to.have.property("qa_salary_after_3.5_years");
});

13. Проверить, что json response имеет параметр person

let respData = pm.response.json();

pm.test("2_check_person", function () {
    pm.expect(respData).to.have.property("person");
});
  
14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("3_check_respSal == reqSal", function () {
    pm.expect(respData.start_qa_salary).to.eql(startSalary);
});

15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("3_check_respSal == reqSal", function () {
    pm.expect(respData.qa_salary_after_6_months).to.eql(startSalary * 2);
});

16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("5_check_respSal == reqSal*2.7", function () {
    pm.expect(respData.qa_salary_after_12_months).to.eql(startSalary * 2.7);
});

17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("6_check_respSal == reqSal*3.3", function () {
    pm.expect(respData["qa_salary_after_1.5_year"]).to.eql(startSalary * 3.3);
});

18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("7_check_respSal == reqSal*3.8", function () {
    pm.expect(respData["qa_salary_after_3.5_years"]).to.eql(startSalary * 3.8);
});

19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("8_check_u_name == reqSal(5000)", function () {
    pm.expect(respData.person.u_name[1]).to.eql(startSalary);
});


20. Проверить, что что параметр u_age равен age из request (age забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let ageReq = +reqData.age;

pm.test("8_check_u_name == reqSal(5000)", function () {
    pm.expect(respData.person.u_age).to.eql(ageReq);
});

21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)

let respData = pm.response.json();
let reqData = request.data;
let startSalary = +reqData.salary;

pm.test("9_check_respSal == reqSal*4.2", function () {
    pm.expect(respData.person.u_salary_5_years).to.eql(startSalary * 4.2);
});

22. Написать цикл который выведет в консоль по порядку элементы списка из параметра person.

let respData = pm.response.json();
let personData = respData.person;

for (i in personData){
    console.log(i + " = " + personData[i])
}