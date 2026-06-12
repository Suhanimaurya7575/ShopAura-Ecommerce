import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

  const token_decode = jwt.verify(
  token,
  process.env.JWT_SECRET
);

const allowedAdmins = [
  process.env.ADMIN_EMAIL,
  process.env.DEMO_ADMIN_EMAIL,
];

if (!allowedAdmins.includes(token_decode.email)) {
  return res.json({
    success: false,
    message: "Not Authorized Login Again",
  });
}

next();

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;