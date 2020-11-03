const model = require("../../models/user");

module.exports = {
  Query: {
    user: (parent, args, context, info) => model.getUser(args.id),
  },
};