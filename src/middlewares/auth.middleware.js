import jwt from "jsonwebtoken"

export const verifyJWT = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log("verifyJWT");

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        next();
    } catch (err) {
        console.error("Token verification error:", err.message);
        res.status(401).json({ msg: "Invalid token" });
    }
};
