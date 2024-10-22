<script lang="ts">import { cn } from "../../../logic/utils";
let className = void 0;
export { className as class };
</script>

<tfoot
	class={cn("bg-primary font-medium text-primary-foreground", className)}
	{...$$restProps}
>
	<slot />
</tfoot>
