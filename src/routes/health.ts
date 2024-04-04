import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

export const health = async (app: FastifyInstance) => {
    app
    .withTypeProvider<ZodTypeProvider>()
    .get('/healthz', async (request: any, reply: any) => {
        return reply.status(200).send("OK!")
    })
}