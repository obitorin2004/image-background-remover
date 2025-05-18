import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.headers['authorization']?.replace('Bearer ', '').trim();
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: decoded.id }; // Attach the decoded user ID to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Please authenticate." });
    }
};

export default auth;