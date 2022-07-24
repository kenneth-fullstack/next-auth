const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "costpriceuae.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
