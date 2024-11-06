interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 23,
	location: "Paris"
};

const student2: Student = {
	firstName: "Paul",
	lastName: "Dupont",
	age: 19,
	location: "New-York"
};

const studentsList: Student[] = [student1, student2];

function renderTable(studentsList: Student[]): void {
	const table = document.createElement("table");

	studentsList.forEach(student => {
		const row = document.createElement("tr");

		const nameCell = document.createElement("td");
		nameCell.textContent = student.firstName;

		const locationCell = document.createElement("td");
		locationCell.textContent = student.location;

		row.appendChild(nameCell);
		row.appendChild(locationCell);
		table.appendChild(row);
	});
	document.body.appendChild(table);
}

renderTable(studentsList);
