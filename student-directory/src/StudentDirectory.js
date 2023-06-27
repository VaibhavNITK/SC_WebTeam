import React, { useState } from 'react';
import './StudentDirectory.css';
import studentData from './data/students';

function StudentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = studentData.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;
      return fullName.toLowerCase().includes(term.toLowerCase());
    });

    setFilteredStudents(filtered);
  };

  return (
    <div className="App">
      <h1>Student Directory</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="student-list">
        {filteredStudents.map((student) => (
          <div className="student-card" key={student.id}>
            <img src={student.profilePicture} alt="Profile" />
            <h2>{`${student.firstName} ${student.lastName}`}</h2>
            <p>Major: {student.major}</p>
            <p>Interests: {student.interests}</p>
            <p>Contact: {student.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDirectory;
