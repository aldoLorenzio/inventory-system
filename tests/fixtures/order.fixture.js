const { v4 } = require('uuid')
const {faker}= require('@faker-js/faker')
const prisma = require('../../prisma')
const { userOne } = require('./user.fixture')

const orderOne = {
    id: v4(),
    date: faker.date.recent(),
    customerName: faker.person.fullName(),
    customerEmail: faker.internet.email(),
    userId: userOne.id
}

const insertOrder = async(order) => {
    await prisma.order.createMany({
        data: order,
        skipDuplicates: true
    })
}

module.exports ={
    orderOne,
    insertOrder
}