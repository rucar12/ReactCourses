interface User {
    name: string;
    age: number;
    occupation: string;
    
}

interface Admin {
    name: string;
    age: number;
    role: string;
    
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(persons: Person) {
    let additionalInformation: string;
    if ("role" in persons) {
        additionalInformation = persons.role;
    } else {
        additionalInformation = persons.occupation;
    }
    console.log(` - ${persons.name}, ${persons.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
