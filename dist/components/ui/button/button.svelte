<script lang="ts">import { Button as ButtonPrimitive } from "bits-ui";
import { cn } from "../../../logic/utils";
import { buttonVariants } from ".";
let className = void 0;
export let variant = "default";
export let size = "default";
export let builders = [];
export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
