<script lang="ts">
  import { onMount } from 'svelte';
  import { Runtime } from '@observablehq/runtime';

  let container: HTMLDivElement;
  let sliderContainer: HTMLDivElement;
  let runtime: Runtime;

  onMount(async () => {
    runtime = new Runtime();

    const module = runtime.module();

    // Define a slider input
    module.variable(sliderContainer).define('viewof frequency', ['Inputs'], (Inputs: any) => {
      return Inputs.range([0.1, 5], {
        value: 1,
        step: 0.1,
        label: 'Frequency',
        description: 'Adjust the frequency of the sine wave'
      });
    });

    // Get the value from the slider
    module.variable().define('frequency', ['Generators', 'viewof frequency'], (Generators: any, viewof: any) => {
      return Generators.input(viewof);
    });

    // Create the chart
    module.variable(container).define('chart', ['d3', 'frequency'], async (d3: any, frequency: number) => {
      const width = 640;
      const height = 300;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      const data = Array.from({ length: 100 }, (_, i) => ({
        x: i / 10,
        y: 50 * Math.sin(frequency * i / 10)
      }));

      const svg = d3.create('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height])
        .attr('style', 'max-width: 100%; height: auto; font: 12px Libre Baskerville, serif;');

      const x = d3.scaleLinear()
        .domain(d3.extent(data, (d: any) => d.x))
        .range([margin.left, width - margin.right]);

      const y = d3.scaleLinear()
        .domain([-60, 60])
        .range([height - margin.bottom, margin.top]);

      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(10));

      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(5));

      const line = d3.line()
        .x((d: any) => x(d.x))
        .y((d: any) => y(d.y))
        .curve(d3.curveNatural);

      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#a00000')
        .attr('stroke-width', 2.5)
        .attr('d', line);

      return svg.node();
    });

    // Import d3
    module.variable().define('d3', async () => {
      return await import('d3');
    });

    // Import Observable Inputs
    module.variable().define('Inputs', async () => {
      const inputs = await import('https://cdn.jsdelivr.net/npm/@observablehq/inputs@0.10/+esm');
      return inputs;
    });
  });

  onMount(() => {
    return () => {
      if (runtime) runtime.dispose();
    };
  });
</script>

<div class="interactive-demo">
  <div bind:this={sliderContainer} class="controls"></div>
  <div bind:this={container} class="visualization"></div>
</div>

<style>
  .interactive-demo {
    margin: 2.5rem 0;
    max-width: 100%;
  }

  .controls {
    margin-bottom: 1.5rem;
  }

  .visualization :global(svg) {
    max-width: 100%;
    height: auto;
  }

  .controls :global(form) {
    font-family: 'Libre Baskerville', Georgia, serif;
  }

  .controls :global(input[type='range']) {
    width: 100%;
    max-width: 400px;
  }
</style>
