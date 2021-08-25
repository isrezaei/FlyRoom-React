var faker = require('faker');


export default function MessageFaker (){

    const FakeMessage = []

    for (let i = 0 ; i < 20 ; i++)
    {
        FakeMessage.push({
            sentence : faker.lorem.sentence(),
            checked : faker.random.boolean()
        })
    }

    return FakeMessage
}