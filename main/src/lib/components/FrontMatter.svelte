<script lang="ts">
  import type { FrontMatter } from '$lib/types';

  interface Props {
    data: FrontMatter;
  }

  let { data }: Props = $props();

  // This component doesn't render anything visible,
  // but stores the front matter data for use by other components
  // In the original Distill, this parses JSON from a script tag
  // In Svelte, we can just pass the data directly as props
</script>

<!--
  FrontMatter component - stores metadata about the article.
  In the original Distill template, this would parse a JSON script tag.
  In SvelteKit, we simply pass the front matter data as props.
-->
<div style="display: none;" data-frontmatter={JSON.stringify(data)}></div>
