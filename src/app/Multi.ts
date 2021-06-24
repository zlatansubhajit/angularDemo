export interface Company {
    id: number;
    name: string;
    origin: string;
    product: string;
    revenue: number;
    people: number;
    ceo: string;
    established: number;
}

export interface Country {
    id: number;
    name: string;
    capital: string;
    continent: string;
    government: string;
    population: number;
    currency: string;
    terrain: string;
}
