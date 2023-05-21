/* #### PSEUDOCODE ###
    FUNCTION printData(data)
        output SET {
            "data": data,
            "success": true,
            "message": null
        }
        
        RETURN output
    End FUNCTION


    CONSTANT data SET [
        {
            "id": 0,
            "name": "Gundala",
            "hitPoints": 100,
            "strength": 10,
            "defense": 10,
            "intelligence": 10,
            "class": 1
        },
        {
            "id": 1,
            "name": "Arjuna",
            "hitPoints": 100,
            "strength": 10,
            "defense": 10,
            "intelligence": 10,
            "class": 1
        }
    ]

    PRINT printData(data)

*/


// #### Program ####
const data = [
    {
        "id": 0,
        "name": "Gundala",
        "hitPoints": 100,
        "strength": 10,
        "defense": 10,
        "intelligence": 10,
        "class": 1
    },
    {
        "id": 1,
        "name": "Arjuna",
        "hitPoints": 100,
        "strength": 10,
        "defense": 10,
        "intelligence": 10,
        "class": 1
    }
]


function printData(data) {
    return {
        data,
        success: true,
        message: null
    }
}

console.log(printData(data));