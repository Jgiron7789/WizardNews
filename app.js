const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank")
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"))

app.get("/", (req, res) => {

  const posts = postBank.list();

  const html = `<!DOCTYPE html>
  <html>
  <head>
  <title>Wizard News</title>
  </head>
  <body>
  <ul>
    ${posts.map(post => `
    <div>
      <h2>${post.title}</h2>
      <h3>${post.id}</h3>
    </div>`).join("")}
  </ul>
  </body>
  </html>`;

  res.send(html);
})


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
