import React from "react";

const Tabels = ({ employeeData }) => {
  return (
    <table className="table">
      <thead className="thead_light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employeeData &&
          employeeData.map((emp) => {
            return (
              <tr key={emp.id}>
                <td data-label="ID">{emp.id}</td>
                <td data-label="Name">{emp.employee_name}</td>
                <td data-label="Age">{emp.employee_age}</td>
                <td data-label="Salary">{emp.employee_salary}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Tabels;
