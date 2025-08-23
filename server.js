const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware to parse JSON bodies
app.use(express.json());
// Use routes
app.use('/api', taskRoutes);
// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({error: 'Route not found!'});
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});