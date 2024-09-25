/**
 * Main entry point for the application.
 * @module App
 */

import express from "express";
import path from "path";
import fs from "fs"


const app = express();

const __rootname = process.cwd();

// Middleware to serve static files from any directory
app.use((req, res, next) => {
    const requestedPath = path.join(__rootname, req.path);
    
    // Check if the requested file exists
    fs.stat(requestedPath, (err, stats) => {
        if (err) {
            return next();
        }
        
        if (stats.isFile()) {
            res.sendFile(requestedPath);
        } else {
            next();
        }
    });
});

app.get("*", (_req, res) => {
    res.sendFile(path.resolve("index.html"));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});