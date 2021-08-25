import {fa} from "faker/lib/locales";

var faker = require('faker');

export default function FakerData()
{

    const ArrayFaker =[]


    for (let i = 0 ; i < 20 ; i++)
    {
        ArrayFaker.push
        ({
            name : faker.name.firstName(),
            lastName : faker.name.lastName(),
            avatar : faker.image.avatar(),
            checked : faker.random.boolean() ? 'send' : 'recive',
            sentence : faker.lorem.sentence(),
            time : faker.date.recent().toLocaleTimeString()
        })
    }

    return ArrayFaker

}