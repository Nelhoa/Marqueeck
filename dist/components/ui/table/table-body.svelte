<script lang="ts">import { cn } from "../../../logic/utils";
let className = void 0;
export { className as class };
</script>

<tbody class={cn("[&_tr:last-child]:border-0", className)} {...$$restProps}>
	<slot />
</tbody>
