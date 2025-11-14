<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Runtime } from '@observablehq/runtime';
  import { Inspector } from '@observablehq/inspector';

  interface Props {
    module: any;
    cell: string;
    inputs?: Record<string, any>;
  }

  let { module, cell, inputs = {} }: Props = $props();

  let container: HTMLDivElement;
  let runtime: Runtime;
  let main: any;

  onMount(async () => {
    // Create a new runtime
    runtime = new Runtime();

    // Load the notebook module
    main = runtime.module(module, (name: string) => {
      if (name === cell) {
        return new Inspector(container);
      }
    });

    // Set any input values
    for (const [key, value] of Object.entries(inputs)) {
      main.redefine(key, value);
    }
  });

  onDestroy(() => {
    if (runtime) {
      runtime.dispose();
    }
  });

  // Update inputs reactively
  $effect(() => {
    if (main) {
      for (const [key, value] of Object.entries(inputs)) {
        main.redefine(key, value);
      }
    }
  });
</script>

<div bind:this={container} class="observable-cell"></div>

<style>
  .observable-cell {
    margin: 2rem 0;
    max-width: 100%;
  }

  .observable-cell :global(svg) {
    max-width: 100%;
    height: auto;
  }

  .observable-cell :global(.observablehq) {
    font-family: 'Libre Baskerville', Georgia, serif;
  }
</style>
