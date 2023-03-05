const http = require("http");


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hello World</h1>")
});

const PORT  = process.env.PORT || 1000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
