<script lang="ts">
  import { onMount } from 'svelte';
  import Prism from 'prismjs';

  // Import common languages
  import 'prismjs/components/prism-python';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/components/prism-jsx';
  import 'prismjs/components/prism-tsx';
  import 'prismjs/components/prism-bash';
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-markdown';
  import 'prismjs/components/prism-css';
  import 'prismjs/components/prism-go';
  import 'prismjs/components/prism-rust';
  import 'prismjs/components/prism-julia';

  // Import Prism theme
  import 'prismjs/themes/prism.css';

  interface Props {
    code: string;
    language: string;
    block?: boolean;
  }

  let { code, language, block = false }: Props = $props();

  let highlightedCode = $state('');

  function highlightCode() {
    const lang = Prism.languages[language];

    if (!lang) {
      console.warn(`Prism does not support highlighting for language: "${language}"`);
      highlightedCode = code;
      return;
    }

    let processedCode = code;

    if (block) {
      // Normalize indentation for block code
      processedCode = processedCode.replace(/^\n/, '');
      const leadingWhitespace = processedCode.match(/^\s*/)?.[0] || '';
      if (leadingWhitespace) {
        const regex = new RegExp('^' + leadingWhitespace, 'gm');
        processedCode = processedCode.replace(regex, '');
      }
      processedCode = processedCode.trim();
    }

    highlightedCode = Prism.highlight(processedCode, lang, language);
  }

  onMount(() => {
    highlightCode();
  });

  // Re-highlight when code or language changes
  $effect(() => {
    if (code && language) {
      highlightCode();
    }
  });
</script>

{#if block}
  <pre class="language-{language}"><code class="language-{language}">{@html highlightedCode}</code></pre>
{:else}
  <code class="language-{language} inline-code">{@html highlightedCode}</code>
{/if}

<style>
  code.inline-code {
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    padding: 4px 7px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
  }

  pre code {
    display: block;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding: 0 0 0 36px;
    font-size: 14px;
    line-height: 1.5;
  }

  pre {
    margin-bottom: 20px;
    overflow-x: auto;
  }

  /* Mobile overflow handling */
  @media (max-width: 768px) {
    pre {
      overflow-x: scroll;
      -ms-overflow-style: none;
    }

    pre::-webkit-scrollbar {
      display: none;
    }
  }
</style>
