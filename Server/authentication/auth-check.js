const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header('Authorization').split(" ")[1];
        if (token) {
            verify(token, "qwe1234", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                }
                else {
                    next();
                }
            });
        }
    }
    catch (err) {
        return res.status(401).json({
            success: 0,
            message: "Access denied ! unauthorized user"
        });
    }
}