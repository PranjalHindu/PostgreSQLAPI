const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Your Postgres pool connection
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.json('WELCOME to Library Management API');
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/totalcounts', async (req, res) => {
  try {
    const usersResult = await pool.query(`SELECT COUNT(user_id) AS total_users FROM Users`);
    const booksResult = await pool.query(`SELECT COUNT(book_id) AS total_books FROM Books`);
    const categoriesResult = await pool.query(`SELECT COUNT(category_id) AS total_categories FROM Categories`);
    const bookCategoriesResult = await pool.query(`SELECT COUNT(id) AS total_book_categories FROM Book_Categories`);
    const borrowingsResult = await pool.query(`SELECT COUNT(borrowing_id) AS total_borrowings FROM Borrowings`);
    const reservationsResult = await pool.query(`SELECT COUNT(reservation_id) AS total_reservations FROM Reservations`);
    const staffResult = await pool.query(`SELECT COUNT(staff_id) AS total_staff FROM Staff`);
    const finesResult = await pool.query(`SELECT COUNT(fine_id) AS total_fines FROM Fines`);
    const feedbackResult = await pool.query(`SELECT COUNT(feedback_id) AS total_feedbacks FROM Feedback`);
    const transactionsResult = await pool.query(`SELECT COUNT(transaction_id) AS total_transactions FROM Transactions`);

    const counts = {
      users: usersResult.rows[0].total_users,
      books: booksResult.rows[0].total_books,
      categories: categoriesResult.rows[0].total_categories,
      bookCategories: bookCategoriesResult.rows[0].total_book_categories,
      borrowings: borrowingsResult.rows[0].total_borrowings,
      reservations: reservationsResult.rows[0].total_reservations,
      staff: staffResult.rows[0].total_staff,
      fines: finesResult.rows[0].total_fines,
      feedbackCount: feedbackResult.rows[0].total_feedbacks,
      transactions: transactionsResult.rows[0].total_transactions
    };

    res.json(counts);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

const PORT = process.env.PORT || 6005;
app.listen(PORT, () => {
  console.log(`Library Management API running on port ${PORT}`);
});
