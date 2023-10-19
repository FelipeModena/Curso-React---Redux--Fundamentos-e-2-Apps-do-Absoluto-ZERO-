import React from "react";
import students from "../../data/students";
export default function ListStudents(props) {
  const studentsJSX = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} - {student.grade}
      </li>
    );
  });

  return (
    <div>
      <ul>{studentsJSX}</ul>
    </div>
  );
}
