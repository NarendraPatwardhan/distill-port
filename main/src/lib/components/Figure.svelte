<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  interface Props {
    children?: Snippet;
    caption?: Snippet;
    layout?: 'text' | 'page' | 'body-outset' | 'page-outset' | 'screen' | 'screen-inset';
    external?: boolean;
    id?: string;
  }

  let {
    children,
    caption,
    layout = 'page',
    external = false,
    id
  }: Props = $props();

  let figureElement: HTMLElement;
  let isOnScreen = $state(false);

  onMount(() => {
    // Optional: Add intersection observer for visibility tracking
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isOnScreen = entry.isIntersecting;
        }
      },
      { rootMargin: '0px', threshold: 0.01 }
    );

    if (figureElement) {
      observer.observe(figureElement);
    }

    return () => {
      if (figureElement) {
        observer.unobserve(figureElement);
      }
    };
  });

  const layoutClass = `l-${layout}`;
</script>

<figure
  bind:this={figureElement}
  class="distill-figure {layoutClass}"
  class:external
  class:onscreen={isOnScreen}
  {id}
>
  {@render children?.()}
  {#if caption}
    <figcaption>
      {@render caption()}
    </figcaption>
  {/if}
</figure>

<style>
  .distill-figure {
    contain: layout style;
    position: relative;
    margin-bottom: 2.5em;
    margin-top: 1.5em;
  }

  .distill-figure :global(img) {
    width: 100%;
  }

  .distill-figure.external :global(img) {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    padding: 18px;
    box-sizing: border-box;
  }

  figcaption {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 1.5em;
    margin-top: 0.5em;
  }

  @media(min-width: 1024px) {
    figcaption {
      font-size: 13px;
    }
  }

  figcaption :global(a) {
    color: rgba(0, 0, 0, 0.6);
  }

  figcaption :global(b),
  figcaption :global(strong) {
    font-weight: 600;
    color: rgba(0, 0, 0, 1.0);
  }
</style>
