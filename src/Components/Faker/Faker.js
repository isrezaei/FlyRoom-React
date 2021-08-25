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
            time : faker.date.recent().toLocaleTimeString()
        })
    }

    return ArrayFaker

}