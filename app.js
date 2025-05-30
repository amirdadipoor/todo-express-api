const express = require('express');
const taskRouter = require('./routes/taskRouter');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});