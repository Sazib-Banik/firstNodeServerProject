let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if (req.url=='/' || req.url=='/home'){
        const data = fs.readFileSync('./public/index.html', 'utf8');
        res.end(data);
    }else if(req.url=='/about'){
        const data = fs.readFileSync('./public/about.html', 'utf8');
        res.end(data);
    }else if(req.url=='/contact'){
        const data = fs.readFileSync('./public/contact.html', 'utf8');
        res.end(data);
    }else if(req.url=='/blog'){
        const data = fs.readFileSync('./public/blog.html', 'utf8');
        res.end(data);
    }else{
        const data = fs.readFileSync('./public/404.html', 'utf8');
        res.end(data);
    }
})
server.listen(3000);
console.log('Server Run Success');