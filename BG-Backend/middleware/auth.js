// import jwt from "jsonwebtoken";
// import axios from "axios";

// const auth = async (req, res, next) => {
//     try {
//         // Extract the token from the Authorization header
//         const token = req.headers['authorization']?.replace('Bearer ', '').trim();
//         if (!token) {
//             return res.status(401).json({ success: false, message: "Unauthorized" });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = { userId: decoded.id }; // Attach the decoded user ID to the request object
//         next(); // Proceed to the next middleware or route handler
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ error: "Please authenticate." });
//     }
// };

// // Example using axios
// const token = /* get your JWT token from login or cookies */
// const formData = new FormData();
// formData.append('image', image);

// await axios.post(`${backendUrl}/api/images/remove-bg`, formData, {
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'multipart/form-data'
//   }
// });

// export default auth;




import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        const token = req.headers['authorization']?.replace('Bearer ', '').trim();
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: decoded.id };
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Please authenticate." });
    }
};

export default auth;

imageRouter.post('/remove-bg', upload.single('image'), removeBgImage);