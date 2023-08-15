import Agent from '../schemas/agent.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import agent from '../schemas/agent.js';
import testData from '../data/testData.js';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_FROM,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_ACCESS_TOKEN,
    }
});

export const login = async (req, res) => {
    const {email} = req.body;

    // check if email exist
    const agent = await Agent.findOne({ email });
    // console.log(agent);
    if (!agent) {
        return res.status(404).send("email not found");
    }
    
    // generate random 6 character code
    const code = crypto.randomBytes(3).toString("hex").toUpperCase();
    const token = jwt.sign({ code: code, agentId: agent._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_LOGIN_EXPIRES_IN });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Arc Secure Login Code",
        text: `Your login code is: ${code}.`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({ message: "Please check your email for the login code.", token });
};

export const confirmLogin = async (req, res) => {
    const { token, code } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        if (decoded.code === code) {
            // Issue a new JWT for user authentication
            const authToken = jwt.sign({ agentId: decoded.agentId }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_AUTH_EXPIRES_IN });
            
            res.status(200).send({ message: "Successfully logged in", authToken });
        } else {
            res.status(401).send('Invalid code.');
        }
    } catch (err) {
        res.status(401).send("Invalid or expired token.");
    }
};

// check token expiration 

export const checkToken = async (req, res) => {

    const { token } = req.body;
    
    if (!token) {
        return res.status(400).send({ valid: false, message: "No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        res.status(401).send({ valid: false, message: "Token is expired or invalid." });
    } catch(e) {
        res.send({ valid: true, message: "Token is valid." });
    }
};

//  safeCode api 

export const getSafetyCode = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];  // Bearer <token>
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const agentId = decoded.agentId;
            const agent = await Agent.findOne({ _id: agentId });
            res.status(200).send({safetyCode: agent.safetyCode});
        } catch(err) {
            res.status(401).send("Token is not valid");
        }
    } else {
        res.status(401).send("Authorization header missing");
    }
};

export const updateSafetyCode = async (req, res) => {
    const authHeader = req.headers.authorization;
    const {safetyCode} = req.body;
    if (authHeader) {
        const token = authHeader.split(' ')[1];  // Bearer <token>

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const agentId = decoded.agentId;
            const agent = await Agent.findOneAndUpdate({ _id: agentId }, {safetyCode: safetyCode});
            res.status(200).send({message: "update safetyCode successfully!"});
        } catch(err) {
            res.status(401).send("Token is not valid");
        }
    } else {
        res.status(401).send("Authorization header missing");
    }
}




// add test data and clean test data

export async function seedData() {
    const agents = testData;

    await Agent.insertMany(agents)
        .then(() => {
            console.log('Test data seeded.');
        })
        .catch(err => {
            console.error('Error seeding data:', err);
        });
};

export async function clearData() {
    await Agent.deleteMany({})
        .then(() => {
            console.log('Data cleared.');
        })
        .catch(err => {
            console.error('Error clearing data:', err);
        });
};

export async function initializeDatabase() {
    const res1 = await clearData();
    const res2 = await seedData();
}