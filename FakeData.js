const UserList = [
    {
        id: 1,
        name: "Vasyli",
        username: "bongcloud",
        age: 22,
        nationality: "ESTONIA",
        friends: [
            {
                id: 2,
                name: "Anna",
                username: "lollipopsicle",
                age: 19,
                nationality: "GERMANY",
            }
        ]
    },
    {
        id: 2,
        name: "Anna",
        username: "lollipopsicle",
        age: 19,
        nationality: "GERMANY",
        friends: [
            {
                id: 1,
                name: "Vasyli",
                username: "bongcloud",
                age: 22,
                nationality: "ESTONIA",
            }
        ]
    },
    {
        id: 3,
        name: "Kanye",
        username: "godmusic",
        age: 44,
        nationality: "US",
        friends: []
    }
]

const MovieList = [
    {
        id: 1,
        title: "Godfellas",
        year: 1990,
        producedBy: "Martin Scorsese",
        isInTheaters: false,
    },
    {
        id: 2,
        title: "Reservoir Dogs",
        producedBy: "Quentin Tarantino",
        year: 1992,
        isInTheaters: false,
    },
    {
        id: 3,
        title: "Dunkirk",
        producedBy: "Christipher Nolan",
        year: 2017,
        isInTheaters: true
    },
]

module.exports = {UserList, MovieList}
