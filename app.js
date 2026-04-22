import http from 'http';

const { PORT } = process.env;


const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname;
    const query = parsed.query;

    res.setHeader('Content-Type', 'application/json');

});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});