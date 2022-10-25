export class Key{
    constructor(public value: string) {}

    static uniqueKey(): Key {
        return new Key("uniqueKey");
    }
}