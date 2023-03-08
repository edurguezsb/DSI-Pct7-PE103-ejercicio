import { Streamable } from "./Streamable";

export abstract class BasicStreamableCollection<T> implements Streamable {
    constructor(protected collection: T[]) {}

    abstract searchName(name: string): T[];
    abstract searchYear(year: number): T[];
}