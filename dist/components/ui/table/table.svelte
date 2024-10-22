<script lang="ts">import { cn } from "../../../logic/utils";
let className = void 0;
export { className as class };
</script>

<div class="w-full overflow-auto">
	<table
		class={cn("w-full caption-bottom text-sm", className)}
		{...$$restProps}
	>
		<slot />
	</table>
</div>
