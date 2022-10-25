import { Key } from "./key";
import { Widget } from "./widget";

export abstract class StatelessWidget extends Widget{
    constructor(public key: Key) {
        super(key);
    }

    abstract build(): HTMLElement;
}