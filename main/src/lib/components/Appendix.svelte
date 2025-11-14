<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="base-grid distill-appendix">
  {@render children?.()}
</div>

<style>
  .distill-appendix {
    contain: layout style;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);
    padding: 2rem 0 0;
    margin-top: 3rem;
  }

  .distill-appendix :global(> *) {
    grid-column: text;
  }

  .distill-appendix :global(h2),
  .distill-appendix :global(h3) {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.4em;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  .distill-appendix :global(h3) {
    font-size: 0.9rem;
  }

  .distill-appendix :global(a) {
    color: rgba(0, 0, 0, 0.6);
  }

  .distill-appendix :global(a:hover) {
    color: rgba(0, 0, 0, 0.8);
  }
</style>
