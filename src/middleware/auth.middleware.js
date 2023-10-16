// const jwt = require("jsonwebtoken");

// module.exports.validateToken = (req, res, next) => {
//   console.log(req);
//   const authHeader = req.headers.authorization;
//   const token = authHeader.split(" ")[1];
//   if (!token)
//     return res.status(401).json({
//       message: "Auth failed",
//     });

//   jwt.verify(token, "secret_long_password", (err, user) => {
//     if (err)
//       return res.status(401).json({
//         message: "Token not valid",
//         data: err,
//       });
//     req.user = user;
//     next();
//   });
// };

const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  console.log(req.token);
  const token = req.token;
  if (!token)
    return res.status(401).json({
      message: "Auth failed",
    });

  jwt.verify(token, "secret_long_password", (err, user) => {
    if (err)
      return res.status(401).json({
        message: "Token not valid",
        data: err,
      });
    req.user = user;
    next();
  });
};
