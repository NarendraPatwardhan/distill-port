<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  let noteId = $state(`mn-${Math.random().toString(36).substr(2, 9)}`);
</script>

<label for={noteId} class="margin-toggle">⊕</label>
<input type="checkbox" id={noteId} class="margin-toggle" style="display: none;" />
<span class="marginnote">
  {@render children?.()}
</span>
