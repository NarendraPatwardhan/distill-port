<script lang="ts">
  import type { FrontMatter } from '$lib/types';

  interface Props {
    frontMatter: FrontMatter;
  }

  let { frontMatter }: Props = $props();
</script>

<div class="base-grid distill-byline">
  <div class="byline grid">
    <div class="authors-affiliations grid">
      <h3>Authors</h3>
      <h3>Affiliations</h3>
      {#each frontMatter.authors as author}
        <p class="author">
          {#if author.personalURL}
            <a class="name" href={author.personalURL}>{author.name}</a>
          {:else}
            <span class="name">{author.name}</span>
          {/if}
        </p>
        <p class="affiliation">
          {#each author.affiliations as affiliation, i}
            {#if affiliation.url}
              <a class="affiliation" href={affiliation.url}>{affiliation.name}</a>
            {:else}
              <span class="affiliation">{affiliation.name}</span>
            {/if}
            {#if i < author.affiliations.length - 1}, {/if}
          {/each}
        </p>
      {/each}
    </div>
    <div>
      <h3>Published</h3>
      {#if frontMatter.publishedDate}
        <p>{frontMatter.publishedMonth} {frontMatter.publishedDay}, {frontMatter.publishedYear}</p>
      {:else}
        <p><em>Not published yet.</em></p>
      {/if}
    </div>
    <div>
      <h3>DOI</h3>
      {#if frontMatter.doi}
        <p><a href="https://doi.org/{frontMatter.doi}">{frontMatter.doi}</a></p>
      {:else}
        <p><em>No DOI yet.</em></p>
      {/if}
    </div>
  </div>
</div>

<style>
  .distill-byline {
    contain: style;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0.8rem;
    line-height: 1.8em;
    padding: 1.5rem 0;
    min-height: 1.8em;
  }

  .byline {
    grid-template-columns: 1fr 1fr;
    grid-column: text;
  }

  @media(min-width: 768px) {
    .byline {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .authors-affiliations {
    grid-column-end: span 2;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1em;
  }

  @media(min-width: 768px) {
    .authors-affiliations {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 0.6rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    text-transform: uppercase;
  }

  p {
    margin: 0;
  }

  a {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    border-bottom: none;
  }

  a:hover {
    text-decoration: underline;
    border-bottom: none;
  }

  p.author {
    font-weight: 500;
  }
</style>
