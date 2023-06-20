import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
router.use(express.json());

import NewUser from "../models/users-model.js";

const signUpController = async (req, res) => {
  const { email, fullName, password } = req.body;
  if (email && fullName && password) {
    // console.log(req.body);
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    const newUserData = new NewUser({
      email,
      fullName,
      password: hashedPassword,
    });
    const existingData = await NewUser.findOne({ email });

    if (!existingData) {
      await newUserData
        .save()
        .then(() => {
          return res.status(201).json({ message: "user created" });
        })
        .catch((error) => {
          console.error("Error Creating New User:", error);
          return res.status(500).json({ error: error });
        });
    } else {
      // console.log(req.body);
      return res.status(409).json({ message: "user exists" });
    }
  } else {
    return res.status(401).json({ message: "required all details" });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    // Check if user exists in the database
    const user = await NewUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate and sign a JSON Web Token (JWT)
    const token = jwt.sign({ userID: user._id, email }, "mysecrettobescret", {
      expiresIn: "1h",
    });

    // Set the token as a cookie in the response
    res.cookie("token", token, { httpOnly: true });

    // Return a success message
    res.json({ message: "Login successful", token: token });
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const loginVerifyController = (req, res) => {
  const { token } = req.body;
  try {
    const decodedToken = jwt.verify(token, "mysecrettobescret");
    var currentTimestamp = new Date().getTime() / 1000;
    var tokenIsNotExpired = decodedToken.exp > currentTimestamp;

    if (tokenIsNotExpired) {
      return res.status(200).json({ message: "token verified" });
    } else {
      return res.status(401).json({ error: "token expired" });
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};

export { signUpController, loginController, loginVerifyController };
