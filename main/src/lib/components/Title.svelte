<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    status?: string;
  }

  let { children, status }: Props = $props();
</script>

<div class="base-grid distill-title">
  {#if status}
    <div class="status">
      <span>{status}</span>
    </div>
  {/if}
  {@render children?.()}
</div>

<style>
  .distill-title {
    padding: 2rem 0 1.5rem;
    contain: layout style;
    overflow-x: hidden;
  }

  @media(min-width: 768px) {
    .distill-title {
      padding: 4rem 0 1.5rem;
    }
  }

  .distill-title :global(h1) {
    grid-column: text;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1em;
    margin: 0 0 0.5rem;
  }

  @media(min-width: 768px) {
    .distill-title :global(h1) {
      font-size: 50px;
    }
  }

  .distill-title :global(p) {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.55em;
    grid-column: text;
  }

  .status {
    margin-top: 0px;
    font-size: 12px;
    color: #009688;
    opacity: 0.8;
    grid-column: kicker;
  }

  .status span {
    line-height: 1;
    display: inline-block;
    padding: 6px 0;
    border-bottom: 1px solid #80cbc4;
    font-size: 11px;
    text-transform: uppercase;
  }
</style>
