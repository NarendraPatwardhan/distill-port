<script lang="ts">
  import type { Citation } from '$lib/types';

  interface Props {
    citations: Citation[];
  }

  let { citations }: Props = $props();
</script>

<div class="bibliography">
  <h3>References</h3>
  <ol>
    {#each citations as citation}
      <li id="bib-{citation.key}" class="citation-entry">
        <span class="citation-authors">{citation.author}</span>
        {#if citation.title}
          <span class="citation-title">"{citation.title}"</span>
        {/if}
        {#if citation.journal}
          <span class="citation-journal"><em>{citation.journal}</em></span>
        {/if}
        {#if citation.year}
          <span class="citation-year">({citation.year})</span>
        {/if}
        {#if citation.doi}
          <a href="https://doi.org/{citation.doi}" class="citation-doi">DOI: {citation.doi}</a>
        {:else if citation.url}
          <a href={citation.url} class="citation-url">Link</a>
        {/if}
      </li>
    {/each}
  </ol>
</div>

<style>
  .bibliography {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .bibliography h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.8);
  }

  .bibliography ol {
    padding-left: 2rem;
    list-style-type: decimal;
  }

  .citation-entry {
    margin-bottom: 1em;
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.7);
    transition: background-color 0.3s ease;
  }

  .citation-entry:global(.highlighted) {
    background-color: rgba(255, 235, 59, 0.3);
  }

  .citation-authors {
    font-weight: 500;
  }

  .citation-title {
    margin-left: 0.3em;
  }

  .citation-journal,
  .citation-year {
    margin-left: 0.3em;
  }

  .citation-doi,
  .citation-url {
    margin-left: 0.5em;
    color: #004276;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 68, 118, 0.3);
  }

  .citation-doi:hover,
  .citation-url:hover {
    border-bottom: 1px solid rgba(0, 68, 118, 0.8);
  }
</style>
