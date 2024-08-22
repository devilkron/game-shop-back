const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'admin', password, email: 'admin@gmail.com' ,role:'ADMIN'},
  { username : 'o', password, email: 'o@mail.com',role:'ADMIN' },
  { username : 'earth', password, email: 'earth@gmail.com',role:'USER' },
  { username : 'korneiei', password, email: 'k@mail.com',role:'USER' },
]



const run = async () => {
  await prisma.user.createMany({
    data : userData
  })

}

run()
