const http = require ('http')
const fs = require('fs/promises')
const nodemailer = require("nodemailer");


const getFiles = async() => {
    const js  = await fs.readFile("./dist/changePage.bundle.js")
    const html = await fs.readFile("./index.html")
    const graph1 = await fs.readFile("./daddy/logo.jpg")
    const pageCss = await fs.readFile("./Page.css")
    const background = await fs.readFile("./daddy/wood.png")
    const wood = await fs.readFile("./daddy/woood.png")
    const floor = await fs.readFile("./daddy/podloga.jpg")
    const kitchen = await fs.readFile("./daddy/kuchnia.jpg")
    const wardrobe = await fs.readFile("./daddy/meble.jpg")
    const stairs = await fs.readFile("./daddy/schody.jpg")
    return [wood,js,html,graph1,pageCss,background,floor,kitchen,wardrobe,stairs]
}

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: 'd.dduraj@gmail.com',
        pass: 'mlxo iles aups tiel'
    },
  });
  
  const main =async() =>{
    const response = fetch("http://send-mail")
    let info = await transporter.sendMail({
      from: inputMail,
      to: to,
      subject: subject,
      text:inputName
    })
    info = (await response).json()
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error);


http.createServer(async(req,res) =>{
    const  [wood,js,htmljs,graph1,pageCss,background,floor,kitchen,wardrobe,stairs] = await getFiles()

    switch(req.url){
        case '/':
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(htmljs)
        res.end()
        break
        case '/js':
        res.writeHead(200, {'Content-Type' : 'text/javascript'})
        res.write(js)
        res.end()
        break
        case '/send-mail':
        res.end()
        break
        case '/daddy/logo.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(graph1)
        res.end()
        break
        case '/Page.css':
        res.writeHead(200, {'Content-Type' : 'text/css'})
        res.write(pageCss)
        res.end()
        break
        case '/daddy/wood.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(background)
        res.end()
        break
        case '/daddy/kuchnia.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(kitchen)
        res.end()
        break
        case '/daddy/podloga.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(floor)
        res.end()
        break
        case '/daddy/schody.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(stairs)
        res.end()
        break
        case '/daddy/meble.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(wardrobe)
        res.end()
        break
        case '/daddy/woood.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(wood)
        res.end()
        break
        default:
        res.writeHead(404)
        res.write("sajonara")
        res.end()
    }
}).listen(8008)