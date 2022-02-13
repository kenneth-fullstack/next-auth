const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
