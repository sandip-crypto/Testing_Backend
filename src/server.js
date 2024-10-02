// const express = require("express"); // common js, which works synchronously or uses synchronous loading
import express from "express"; // ES module js, which works asynchronously or uses asynchronous loading
const app = express();

// Get a list of five jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Skeleton Fight",
      content:
        "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 2,
      title: "Scarecrow Award",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Talking Walls",
      content:
        "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    },
    {
      id: 4,
      title: "Sad Math Book",
      content:
        "Why did the math book look sad? Because it had too many problems.",
    },
    {
      id: 5,
      title: "Fake Spaghetti",
      content: "What do you call fake spaghetti? An 'impasta'!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at https://localhost:${port}`);
});
