// // import jwt from "jsonwebtoken";

// // const authUser = async (req, res, next) => {
// //   const token = req.headers.token;
// //   if (!token && req.headers.authorization) {
// //     const authHeader = req.headers.authorization;
// //     if (authHeader.startsWith("Bearer ")) {
// //       token = authHeader.split(" ")[1]; // Extract the token from `Bearer <token>`
// //     }
// //   }

// //   if (!token) {
// //     return res.json({ success: false, message: "Not Authorized Login Again" });
// //   }

// //   try {
// //     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
// //     console.log("generatr token ", token);
// //     req.body.userId = token_decode.id;
// //     next();
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// export default authUser;

import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export default authUser;
