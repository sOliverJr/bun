import figlet from "figlet";

const server = Bun.serve({
  port: 3000,

  fetch(req: Request) {
    console.log(req)
    const url = new URL(req.url)

    if (req.method == "GET") {
      return new Response(figlet.textSync("Success!"));
    }else if (url.pathname == "/stop") {
      server.stop()
      return new Response(figlet.textSync("Shutting down..."))
    }else {
      console.log(req.headers.get("Content-Type"));
      return new Response(figlet.textSync("ah ah ah, that aint GET..."));
    }
  },

});

console.log(`Listening on http://localhost:${server.port}`);