import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut, cubicInOut } from 'svelte/easing';
function createScrollState() {
    let lastPos = null;
    let timer = null;
    const velocityGuard = 4;
    const delay = 300;
    const initialState = { distance: 0, percentage: 0, direction: 'static', velocity: 0 };
    const { subscribe, update } = writable(initialState);
    const scrollVelocity = tweened(0, {
        duration: delay, // Add the duration option
        easing: cubicOut
    });
    scrollVelocity.subscribe(($velocity) => {
        update(($scrollState) => ({ ...$scrollState, velocity: $velocity }));
    });
    function checkScrollSpeed(newPos) {
        let delta = 0;
        if (lastPos !== null)
            delta = newPos - lastPos;
        lastPos = newPos;
        if (timer !== null)
            clearTimeout(timer);
        timer = setTimeout(() => {
            lastPos = null;
            scrollVelocity.set(0, { duration: delay }); // Set the velocity back to 0 after 1 second
        }, delay); // Change the delay to 1000ms (1 second)
        if (delta >= -velocityGuard && delta <= velocityGuard) {
            return 0;
        }
        else {
            return delta;
        }
    }
    return {
        subscribe,
        updateDistanceAndDirection: (distance, direction, velocity, maxScrollTop) => {
            const percentage = +(((distance / maxScrollTop) * 100).toFixed(2));
            if (!(velocity > -velocityGuard && velocity < velocityGuard)) {
                update(($scrollState) => ({ ...$scrollState, distance, direction, percentage }));
            }
            else {
                update(($scrollState) => ({ ...$scrollState, distance, direction: 'static', percentage }));
            }
        },
        setVelocity: (velocity) => {
            scrollVelocity.set(velocity);
        },
        checkScrollSpeed
    };
}
export const scrollState = createScrollState();
export const scrollHandler = (event) => {
    const newPos = event.currentTarget.scrollTop;
    const distance = newPos;
    const velocity = scrollState.checkScrollSpeed(newPos);
    const direction = velocity >= 0 ? 'down' : 'up';
    const maxScrollTop = event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    scrollState.updateDistanceAndDirection(distance, direction, velocity, maxScrollTop);
    scrollState.setVelocity(velocity);
};
export const factorDamper = (velocity, damper = 7) => {
    if (velocity <= 5 && velocity >= -5) {
        return 1;
    }
    else {
        return Math.abs(velocity) / damper;
    }
};
// * PingPong
export function pingPongHelper(min, max, duration) {
    const internalStore = writable(min);
    const pingPongValue = tweened(min, {
        duration,
        easing: cubicInOut
    });
    function startPingPong(min, max) {
        pingPongValue
            .update((value) => {
            const target = value === min ? max : min;
            return target;
        })
            .then(() => startPingPong(min, max));
    }
    pingPongValue.subscribe((value) => {
        internalStore.set(value);
    });
    startPingPong(min, max);
    return {
        subscribe: internalStore.subscribe,
        get value() {
            let currentValue;
            internalStore.subscribe((value) => {
                currentValue = value;
            })();
            return currentValue;
        }
    };
}
