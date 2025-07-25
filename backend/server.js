// server.js
const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/booking');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('🎓 Classroom Booking Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
