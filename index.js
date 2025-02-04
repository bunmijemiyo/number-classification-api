require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

// Function to check if a number is perfect
const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

// Function to get a fun fact about the number
const getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available";
  }
};

// API Route
app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({
      number,
      error: true,
    });
  }

  const num = parseInt(number);
  const digitSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
  const properties = [];

  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    const funFact = await getFunFact(num);

    res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
