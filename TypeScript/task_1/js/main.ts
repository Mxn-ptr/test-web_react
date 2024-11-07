interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
};

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
  
console.log(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName));

interface StudentClassConstructor {
	new (firstName: string, lastName: string): IStudentClass;
}
  
interface IStudentClass {
workOnHomework(): string;
displayName(): string;
}
  
class StudentClass implements IStudentClass {
	constructor(private firstName: string, private lastName: string) {}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this.firstName;
	}
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName());
