;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (Number(salary) < 500)
        return new Teacher;
    return new Director;
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director)
        console.log(employee.workDirectorTasks());
    else
        console.log(employee.workTeacherTasks());
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    if (todayClass == "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
