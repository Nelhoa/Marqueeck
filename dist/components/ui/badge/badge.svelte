<script lang="ts">import { cn } from "../../../logic/utils";
import { badgeVariants } from ".";
let className = void 0;
export let href = void 0;
export let variant = "default";
export { className as class };
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	{...$$restProps}
>
	<slot />
</svelte:element>
