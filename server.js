/*
  Project Name: fastify-vite-solidjs
  License: MIT
  Created by: Lightnet
*/

import fs from 'fs'
import path from 'path'
import Fastify from "fastify";
//import FastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import FastifyExpress from '@fastify/express';

import { createServer as createViteServer } from 'vite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import routeAPIs from './src/server/api.js';

(async()=>{

  console.log("int web server...")

  const port = process.env.PORT || 3000;

  const fastify = Fastify({
    // Set this to true for detailed logging:
    logger: false,
  });

  //set up fastify express to use api
  await fastify.register(FastifyExpress);

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    //appType: './index.html' // don't include Vite's default HTML handling middlewares
    appType: 'custom' // don't include Vite's default HTML handling middlewares
  })

  // Use vite's connect instance as middleware
  await fastify.use(vite.middlewares)

  //route api url
  await fastify.register(routeAPIs, { prefix: '/api' })

  fastify.get("/", async function (request, reply) {
    try{
      //const url = request.originalUrl //express
      const url = request.url
      //console.log(url)
      let template = fs.readFileSync( path.resolve(__dirname, 'index.html'), 'utf-8')
      //console.log(template)//ok
      template = await vite.transformIndexHtml(url, template)
      const html = template;
      //console.log(html)
      reply.code(200);//ok
      reply.header('Content-Type','text/html');//html else default to json?
      return reply.send(html)
    }catch(e){
      console.log(e)
      return reply.send({hello:"world!"})
    }
  });
  
  

  // Run the server!
  fastify.listen({ port: port, host: "0.0.0.0" }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    //console.log(address)
    console.log(`Address: ${address}`)
    // Server is now listening on ${address}
    console.log(`Web Server http://localhost:${port}`)
    
  })

})();