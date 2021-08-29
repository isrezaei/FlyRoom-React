var fakerData = require('faker');

export default function FakerData()
{

    const ArrayFaker =[]


    for (let i = 0 ; i < 20 ; i++)
    {
        ArrayFaker.push
        ({
            name : fakerData.name.firstName(),
            lastName : fakerData.name.lastName(),
            avatar : fakerData.image.avatar(),
            time : fakerData.date.recent().toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit'})
        })
    }

    return ArrayFaker

}