<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<article class="base-grid distill-article">
  {@render children?.()}
</article>

<style>
  .distill-article {
    contain: layout style;
    overflow-x: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 2rem;
    color: rgba(0, 0, 0, 0.8);
  }

  .distill-article :global(> *) {
    grid-column: text;
  }

  @media(min-width: 768px) {
    .distill-article {
      font-size: 16px;
    }
  }

  @media(min-width: 1024px) {
    .distill-article {
      font-size: 1.06rem;
      line-height: 1.7em;
    }
  }

  /* Headings */

  .distill-article :global(.marker) {
    text-decoration: none;
    border: none;
    counter-reset: section;
    grid-column: kicker;
    line-height: 1.7em;
  }

  .distill-article :global(.marker:hover) {
    border: none;
  }

  .distill-article :global(.marker span) {
    padding: 0 3px 4px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    top: 4px;
  }

  .distill-article :global(.marker:hover span) {
    color: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  }

  .distill-article :global(h2) {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25em;
    margin: 2rem 0 1.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
  }

  @media(min-width: 1024px) {
    .distill-article :global(h2) {
      font-size: 36px;
    }
  }

  .distill-article :global(h3) {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4em;
    margin-bottom: 1em;
    margin-top: 2em;
  }

  @media(min-width: 1024px) {
    .distill-article :global(h3) {
      font-size: 20px;
    }
  }

  .distill-article :global(h4) {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.4em;
  }

  /* Typography */

  .distill-article :global(a) {
    color: inherit;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }

  .distill-article :global(a:hover) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  }

  .distill-article :global(.link) {
    text-decoration: underline;
    cursor: pointer;
  }

  .distill-article :global(p),
  .distill-article :global(ul),
  .distill-article :global(ol),
  .distill-article :global(blockquote) {
    margin-top: 0;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
  }

  .distill-article :global(blockquote) {
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    padding-left: 2em;
    font-style: italic;
    color: rgba(0, 0, 0, 0.6);
  }

  .distill-article :global(ul),
  .distill-article :global(ol) {
    padding-left: 24px;
  }

  .distill-article :global(li) {
    margin-bottom: 1em;
    margin-left: 0;
    padding-left: 0;
  }

  .distill-article :global(li:last-child) {
    margin-bottom: 0;
  }

  .distill-article :global(pre) {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .distill-article :global(hr) {
    grid-column: screen;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .distill-article :global(section) {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  /* Tables */

  .distill-article :global(table) {
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .distill-article :global(table th) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .distill-article :global(table td) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .distill-article :global(table tr:last-of-type td) {
    border-bottom: none;
  }

  .distill-article :global(table th),
  .distill-article :global(table td) {
    font-size: 15px;
    padding: 2px 8px;
  }

  .distill-article :global(table tbody :first-child td) {
    padding-top: 2px;
  }

  /* Aside/side notes */

  .distill-article :global(aside) {
    grid-column: gutter;
    font-size: 12px;
    line-height: 1.6em;
    color: rgba(0, 0, 0, 0.6);
  }

  /* Citations */

  .distill-article :global(.citation) {
    color: #668;
    cursor: pointer;
  }
</style>
