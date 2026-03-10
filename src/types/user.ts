export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    image: string;

    address: {
        address: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };

    company: {
        name: string;
        title: string;
        department: string;
    };
}
