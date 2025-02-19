const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Sample route
app.get("/", (req, res) => {
    res.send("Hello, CI Pipeline!");
});

// Additional API endpoint for testing
app.get("/api/data", (req, res) => {
    res.json({ message: "Success" });
});

// Only start the server if NOT in a test environment
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app; // Export the app instance for testing
