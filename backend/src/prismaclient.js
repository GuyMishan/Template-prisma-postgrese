const { PrismaClient } = require('@prisma/client');

const prismaclient = new PrismaClient();

module.exports = prismaclient;
