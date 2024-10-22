<script lang="ts">import { cn } from "../../../logic/utils";
let className = void 0;
export { className as class };
</script>

<caption
	class={cn("mt-4 text-sm text-muted-foreground", className)}
	{...$$restProps}
>
	<slot />
</caption>
