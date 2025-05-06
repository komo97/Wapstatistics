/*
  Project Name: fastify-vite-solidjs
  License: MIT
  Created by: Lightnet
*/

//route api

export default function routeAPIs(fastify, opts, done) {
  fastify.get('/echo', (request, reply)=>{

    return reply.send({hello:"world!"})
  })
  done()
}