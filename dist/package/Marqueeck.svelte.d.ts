import type { PublicMarqueeckOptions } from './types';
import './marqueeck.css';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const Marqueeck: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    [x: string]: any;
    options?: PublicMarqueeckOptions | undefined;
    isMouseHovering?: boolean | undefined;
    still?: boolean | undefined;
    extend?: boolean | undefined;
    onClick?: ((event: MouseEvent | KeyboardEvent) => void) | undefined;
    ribbonClasses?: string | undefined;
    childClasses?: string | undefined;
    stickyClasses?: string | undefined;
    separatorClasses?: string | undefined;
    hoverClasses?: string | undefined;
}, {
    default: {
        hovered: boolean;
    };
    separator: {};
    stickyStart: {};
    stickyEnd: {};
}>, {
    hover: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        hovered: boolean;
    };
    separator: {};
    stickyStart: {};
    stickyEnd: {};
}, {}, string>;
type Marqueeck = InstanceType<typeof Marqueeck>;
export default Marqueeck;
