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




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
