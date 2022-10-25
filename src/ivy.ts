import { Widget } from "./api/widget";

export class Ivy {
    static wrapWidget(host: HTMLElement, widget: Widget) {
        host.appendChild(widget.build());
    }
}
