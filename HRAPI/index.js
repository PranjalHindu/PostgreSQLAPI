const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Root test route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ serverTime: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// 1. Get all Departments
app.get('/departments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Departments');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching departments:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 2. Get all Courses
app.get('/courses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Courses');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 3. Get all Subjects
app.get('/subjects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Subjects');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching subjects:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 4. Get all Semesters
app.get('/semesters', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Semesters');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching semesters:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 5. Get all Students
app.get('/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Students');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 6. Get all Teachers
app.get('/teachers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Teachers');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching teachers:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 7. Get all Grades
app.get('/grades', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Grades');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching grades:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 8. Get all Marks
app.get('/marks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Marks');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching marks:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 9. Get all Classrooms
app.get('/classrooms', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Classrooms');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching classrooms:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 10. Get all Attendance
app.get('/attendance', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Attendance');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching attendance:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// 1. Create Department
app.post('/departments', async (req, res) => {
  try {
    const { dept_id, name } = req.body;
    const result = await pool.query(
      'INSERT INTO Departments (dept_id, name) VALUES ($1, $2) RETURNING *',
      [dept_id, name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating department:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 2. Create Course
app.post('/courses', async (req, res) => {
  try {
    const { course_id, name, dept_id } = req.body;
    const result = await pool.query(
      'INSERT INTO Courses (course_id, name, dept_id) VALUES ($1, $2, $3) RETURNING *',
      [course_id, name, dept_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating course:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 3. Create Subject
app.post('/subjects', async (req, res) => {
  try {
    const { subject_id, name, course_id } = req.body;
    const result = await pool.query(
      'INSERT INTO Subjects (subject_id, name, course_id) VALUES ($1, $2, $3) RETURNING *',
      [subject_id, name, course_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating subject:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 4. Create Semester
app.post('/semesters', async (req, res) => {
  try {
    const { semester_id, name } = req.body;
    const result = await pool.query(
      'INSERT INTO Semesters (semester_id, name) VALUES ($1, $2) RETURNING *',
      [semester_id, name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating semester:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 5. Create Student
app.post('/students', async (req, res) => {
  try {
    const { student_id, name, course_id, semester_id } = req.body;
    const result = await pool.query(
      'INSERT INTO Students (student_id, name, course_id, semester_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [student_id, name, course_id, semester_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating student:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 6. Create Teacher
app.post('/teachers', async (req, res) => {
  try {
    const { teacher_id, name, dept_id } = req.body;
    const result = await pool.query(
      'INSERT INTO Teachers (teacher_id, name, dept_id) VALUES ($1, $2, $3) RETURNING *',
      [teacher_id, name, dept_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating teacher:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 7. Create Grade
app.post('/grades', async (req, res) => {
  try {
    const { grade_id, letter, min_marks, max_marks } = req.body;
    const result = await pool.query(
      'INSERT INTO Grades (grade_id, letter, min_marks, max_marks) VALUES ($1, $2, $3, $4) RETURNING *',
      [grade_id, letter, min_marks, max_marks]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating grade:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 8. Create Mark
app.post('/marks', async (req, res) => {
  try {
    const { mark_id, student_id, subject_id, semester_id, score } = req.body;
    const result = await pool.query(
      'INSERT INTO Marks (mark_id, student_id, subject_id, semester_id, score) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [mark_id, student_id, subject_id, semester_id, score]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating mark:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 9. Create Classroom
app.post('/classrooms', async (req, res) => {
  try {
    const { room_id, room_number, capacity } = req.body;
    const result = await pool.query(
      'INSERT INTO Classrooms (room_id, room_number, capacity) VALUES ($1, $2, $3) RETURNING *',
      [room_id, room_number, capacity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating classroom:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 10. Create Attendance
app.post('/attendance', async (req, res) => {
  try {
    const { attendance_id, student_id, subject_id, date, present } = req.body;
    const result = await pool.query(
      'INSERT INTO Attendance (attendance_id, student_id, subject_id, date, present) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [attendance_id, student_id, subject_id, date, present]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating attendance:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
