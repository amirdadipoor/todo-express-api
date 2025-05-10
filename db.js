const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'] // ✅ enable logging
})
// use `prisma` in your application to read and write data in your DB

module.exports = prisma;