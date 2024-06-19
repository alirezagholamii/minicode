const http = require('http');  
//create a server object:  
  
const server = http.createServer(function (req, res) {
        const date = new Date()
        const d = date.toLocaleString('fa-ir')
        const ip = req.socket.remoteAddress.replace('::ffff:','');
        console.log("req! "+ date.toLocaleString('en-uk'))
        console.log("IP Address is: " + ip );
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const str = `Hello World!
  <br />
  ${d}
  <br />
  <br />
   Your IP Address: <code>${ip}</code>
  `
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Yo</title>
      <style>
          body {
              font-family: Arial, Helvetica, sans-serif;
          }
          section {
              margin: 1rem;
          }
      </style>
  </head>
  <body>
      <section>
          <p>${str}</p>
      </section>
  </body>
  </html>`
    res.write(html); //write a response to the client  
    res.end(); //end the response  
})

server.listen(80);

  console.log(`Server running at port 80`);

// Console will print the message  


