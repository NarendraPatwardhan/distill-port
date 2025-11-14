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

  pre {
    margin-bottom: 20px;
    overflow-x: auto;
    background: transparent;
  }

  pre code {
    display: block;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding: 0 0 0 36px;
    font-size: 14px;
    line-height: 1.5em;
    background: transparent;
  }

  /* Prism theme adjustments for Distill */
  pre code :global(.token.comment),
  pre code :global(.token.prolog),
  pre code :global(.token.doctype),
  pre code :global(.token.cdata) {
    color: slategray;
  }

  pre code :global(.token.punctuation) {
    color: #999;
  }

  pre code :global(.token.property),
  pre code :global(.token.tag),
  pre code :global(.token.boolean),
  pre code :global(.token.number),
  pre code :global(.token.constant),
  pre code :global(.token.symbol),
  pre code :global(.token.deleted) {
    color: #905;
  }

  pre code :global(.token.selector),
  pre code :global(.token.attr-name),
  pre code :global(.token.string),
  pre code :global(.token.char),
  pre code :global(.token.builtin),
  pre code :global(.token.inserted) {
    color: #690;
  }

  pre code :global(.token.operator),
  pre code :global(.token.entity),
  pre code :global(.token.url),
  pre code :global(.language-css .token.string),
  pre code :global(.style .token.string) {
    color: #a67f59;
  }

  pre code :global(.token.atrule),
  pre code :global(.token.attr-value),
  pre code :global(.token.keyword) {
    color: #07a;
  }

  pre code :global(.token.function),
  pre code :global(.token.class-name) {
    color: #dd4a68;
  }

  pre code :global(.token.regex),
  pre code :global(.token.important),
  pre code :global(.token.variable) {
    color: #e90;
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
