const http = require("http");
const checkImages = require("./checkImages.js");
const { readFile } = require("fs").promises;
async function startServer() {
  const linkListPath = "./linklist.txt";
  const linkListContent = await readFile(linkListPath, "utf8");
  const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const lines = linkListContent.split("\n");
    for (const line of lines) {
      const [name, url] = line.split(",");
      await checkImages(name, url);
    }
    res.end("\n");
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}
startServer();
