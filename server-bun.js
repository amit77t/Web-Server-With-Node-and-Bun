import {serve} from 'bun'
serve({
    fetch(request) {    
        const url= new URL(request.url);
        if(url.pathname === "/"){
            return new Response("Hello World", {status: 200});
        }
        else if(url.pathname === "/contact"){
            return new Response("About Page", {status: 200});
        }
        else{
            return new Response("404: Page Not Found", {status: 404});
        }
    },

    port: 3000,
    hostname: "127.0.0.1"
});


