const post = require("../schema/PostSchema");

const postController = async (request, response) => {
  try {
    const data = await new post(request.body);
    data.save();
    response.status(200).json("Blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = { postController };
