<script lang="ts">
  interface Props {
    key: string;
    bibtex?: string;
  }

  let { key, bibtex }: Props = $props();

  function handleClick() {
    // Scroll to bibliography entry or show hover card
    const bibEntry = document.getElementById(`bib-${key}`);
    if (bibEntry) {
      bibEntry.scrollIntoView({ behavior: 'smooth', block: 'center' });
      bibEntry.classList.add('highlighted');
      setTimeout(() => {
        bibEntry.classList.remove('highlighted');
      }, 2000);
    }
  }
</script>

<button class="citation" onclick={handleClick} type="button">
  [{key}]
</button>

<style>
  .citation {
    color: #668;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: none;
    display: inline;
  }

  .citation:hover {
    color: #446;
    text-decoration: underline;
  }
</style>
