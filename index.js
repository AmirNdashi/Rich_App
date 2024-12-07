const http =  require('http');
const server = http.createServer((req, res) => {
    const {url} = req;
    console.log(url);
    if(url === '/'){
        res.end('Hello from node.js');
    }else if(url === '/home'){
        res.end('The Home Page');
    }else if(url === '/contact'){
        res.end('The contact Page');
    }else if(url === '/services'){
        res.end('The services Page');
    }else if(url === '/favourites'){
        res.end('The favourites Page');
    }else{
        res.writeHead(404)
        res.end('Not found');
    }
    // console.log(req.url);
    // res.end("Hello  Node.js");
});





server.listen(3000, () => {
    console.log('Server running on port 3000');
});