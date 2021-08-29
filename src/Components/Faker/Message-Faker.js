import fakerData from "faker";

var faker = require('faker');


export default function MessageFaker (Current){

    const FakeMessage = []

    for (let i = 0 ; i < Current ; i++)
    {
        FakeMessage.push({
            sentence : faker.lorem.sentence(),
            checked : faker.datatype.boolean(),
            time : fakerData.date.recent().toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit'})
        })
    }

    return FakeMessage
}