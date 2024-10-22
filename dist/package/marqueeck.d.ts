import type { MarqueeckOptions, PublicMarqueeckOptions, Props, SlideAttributes } from "./types";
import type { ActionReturn } from "svelte/action";
export declare const defaults: MarqueeckOptions;
/**
 * A Svelte action that animates a marqueeck slide.
 *
 * @param {HTMLDivElement} node - The node where the action is applied.
 * @param {MarqueeckOptions} options - The options for the marqueeck slide.
 *
 * @returns {ActionReturn<MarqueeckOptions, SlideAttributes>} - An object with an `update` method and a `destroy` method.
 *
 * The `update` method is called whenever the `options` parameter changes, immediately after Svelte has applied updates to the markup.
 * The `destroy` method is called after the element is unmounted.
 *
 * The `update` method also restarts the animation if it was not initially still.
 * The `destroy` method removes the event listeners when the action is destroyed.
 *
 * The action can emit custom events and apply custom attributes to the element it is applied to.
 *
 * @example
 * <div use:marqueeckSlide={{ direction: "right", gap: 10 }} />
 */
export declare function marqueeckSlide(node: HTMLDivElement, options: MarqueeckOptions): ActionReturn<MarqueeckOptions, SlideAttributes>;
export declare const optionsMerger: (options: PublicMarqueeckOptions, props?: Props) => MarqueeckOptions;
