const fs = require("fs");

module.exports = (request, response) => {
  console.log(request.params);
  let users = JSON.parse(fs.readFileSync("mock-api/users/GET.json"));

  let user = users.find((user) => user.id == request.params.user_id);
  response.json({
    id: user.id,
    name: user.name,
  });
};
