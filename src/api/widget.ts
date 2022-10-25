import { Key } from "./key";

export abstract class Widget {
    constructor(public key: Key) {}
    abstract build(): HTMLElement;
}
