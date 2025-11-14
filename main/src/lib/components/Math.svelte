<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  interface Props {
    content?: string;
    block?: boolean;
  }

  let { content, block = false }: Props = $props();

  let containerElement: HTMLElement;

  onMount(() => {
    if (containerElement && content) {
      try {
        katex.render(content, containerElement, {
          displayMode: block,
          throwOnError: false,
          trust: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        containerElement.textContent = content;
      }
    }
  });

  // Re-render when content changes
  $effect(() => {
    if (containerElement && content) {
      try {
        katex.render(content, containerElement, {
          displayMode: block,
          throwOnError: false,
          trust: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        containerElement.textContent = content;
      }
    }
  });
</script>

<span
  bind:this={containerElement}
  class="katex-container"
  class:block
></span>

<style>
  .katex-container {
    display: inline-block;
    contain: style;
  }

  .katex-container.block {
    display: block;
  }

  /* Mobile overflow handling */
  @media (max-width: 768px) {
    .katex-container.block {
      overflow-x: scroll;
      -ms-overflow-style: none;
    }

    .katex-container.block::-webkit-scrollbar {
      display: none;
    }
  }
</style>
