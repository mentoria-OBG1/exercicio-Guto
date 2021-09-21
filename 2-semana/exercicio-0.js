const http = require("http");
const host = "localhost";
const port = 3000;

const app = http.createServer();

let names = [];
app.on("request", (request, response) => {

  if (request.url.startsWith("/") && request.method === "GET") {
    const queryString = request.url.split("?")[1];

    if (!queryString) {
      return response.end(JSON.stringify(names));
    }

    const name = queryString.split("=")[1];

    response.end(
      JSON.stringify({
        message: `Hello ${name}`,
      })
    );
  }

  if (request.url.startsWith("/json") && request.method === "POST") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        const json = JSON.parse(body);

        names.push(json.name);

        return response.end(
          JSON.stringify({
            message: `Name: ${json.name}`,
          })
        );
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
