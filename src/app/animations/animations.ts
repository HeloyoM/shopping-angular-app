
import { animate, style, transition, trigger } from "@angular/animations";

export let fade =
    trigger("fade", [
        transition('void => *', [
            style({ backgroundColor: '#9ed2f1', opacity: 1 }),
            animate(1000)
        ])
    ])
