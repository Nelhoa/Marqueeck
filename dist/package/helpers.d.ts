export declare const scrollState: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<{
        distance: number;
        percentage: number;
        direction: string;
        velocity: number;
    }>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    updateDistanceAndDirection: (distance: number, direction: string, velocity: number, maxScrollTop: number) => void;
    setVelocity: (velocity: number) => void;
    checkScrollSpeed: (newPos: number) => number;
};
export declare const scrollHandler: (event: UIEvent & {
    currentTarget: EventTarget & HTMLDivElement;
}) => void;
export declare const factorDamper: (velocity: number, damper?: number) => number;
export declare function pingPongHelper(min: number, max: number, duration: number): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    readonly value: undefined;
};
