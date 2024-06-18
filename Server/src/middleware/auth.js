import jwt from "jsonwebtoken";

export const isAuth = async (
  req,
  res,
  next
) => {
  const userToken = req["headers"]["authorization"]
    ?.replace("Bearer", "")
    .trim();
  try {
    const accessTokenKey = process.env.SECRET_KEY;
    const isToken = await jwt.verify(userToken, accessTokenKey);
    if (isToken) {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      statusCode: 500,
      error,
    });
  }
};
