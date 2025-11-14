<script lang="ts">
  import Sidenote from '$lib/components/Sidenote.svelte';
  import MarginNote from '$lib/components/MarginNote.svelte';
  import ObservableCell from '$lib/components/ObservableCell.svelte';
  import { Runtime } from '@observablehq/runtime';

  // Create a simple inline Observable notebook
  const notebook = {
    modules: [
      {
        id: 'interactive-demo',
        variables: [
          {
            name: 'chart',
            inputs: ['d3', 'width'],
            value: (d3: any, width: number) => {
              const height = 400;
              const margin = { top: 20, right: 30, bottom: 30, left: 40 };

              // Generate some data
              const data = Array.from({ length: 50 }, (_, i) => ({
                x: i,
                y: Math.sin(i / 5) * 50 + 100 + Math.random() * 20
              }));

              const svg = d3.create('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('viewBox', [0, 0, width, height])
                .attr('style', 'max-width: 100%; height: auto;');

              const x = d3.scaleLinear()
                .domain([0, data.length - 1])
                .range([margin.left, width - margin.right]);

              const y = d3.scaleLinear()
                .domain([0, d3.max(data, (d: any) => d.y)])
                .nice()
                .range([height - margin.bottom, margin.top]);

              const line = d3.line()
                .x((d: any) => x(d.x))
                .y((d: any) => y(d.y))
                .curve(d3.curveNatural);

              svg.append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x));

              svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y));

              svg.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', '#a00000')
                .attr('stroke-width', 2)
                .attr('d', line);

              svg.selectAll('circle')
                .data(data)
                .join('circle')
                .attr('cx', (d: any) => x(d.x))
                .attr('cy', (d: any) => y(d.y))
                .attr('r', 3)
                .attr('fill', '#a00000')
                .attr('opacity', 0.6);

              return svg.node();
            }
          },
          {
            name: 'd3',
            value: async () => {
              const d3 = await import('d3');
              return d3;
            }
          },
          {
            name: 'width',
            value: 640
          }
        ]
      }
    ]
  };

  // For now, let's create a simple D3 visualization directly
  import { onMount } from 'svelte';

  let chartContainer: HTMLDivElement;

  onMount(async () => {
    const d3 = await import('d3');

    const width = Math.min(640, chartContainer.clientWidth);
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const data = Array.from({ length: 50 }, (_, i) => ({
      x: i,
      y: Math.sin(i / 5) * 50 + 100 + Math.random() * 20
    }));

    const svg = d3
      .select(chartContainer)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; font-family: inherit;');

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d: any) => d.y)!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d: any) => x(d.x))
      .y((d: any) => y(d.y))
      .curve(d3.curveNatural);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#a00000')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d: any) => x(d.x))
      .attr('cy', (d: any) => y(d.y))
      .attr('r', 3)
      .attr('fill', '#a00000')
      .attr('opacity', 0.6);
  });
</script>

<svelte:head>
  <title>Elegant Data Essays</title>
  <meta name="description" content="Tufte-inspired design with Observable cells" />
</svelte:head>

<article>
  <h1>The Art of Data Presentation</h1>
  <p class="subtitle" style="font-style: italic; margin-top: -1rem; font-size: 1.8rem;">
    A Demonstration of Elegant Typography and Interactive Visualization
  </p>

  <section>
    <p>
      Edward Tufte's work<Sidenote>Edward R. Tufte, <em>The Visual Display of Quantitative Information</em> (Graphics Press, 1983).</Sidenote> has long inspired designers and data visualizers to prioritize clarity, precision, and elegance in their presentations. This essay demonstrates a modern interpretation of Tufte's design principles, combining classical typography with contemporary interactive elements.
    </p>

    <p>
      The foundation of good design lies in respecting the reader's intelligence and time. Every element on the page should serve a purpose<MarginNote>This is a margin note. Unlike sidenotes, margin notes don't have numbers and are used for asides and commentary.</MarginNote>, and decoration for its own sake should be avoided. As Tufte famously advocated, we should maximize the data-ink ratio—the proportion of ink devoted to displaying data versus other elements.
    </p>

    <h2>Interactive Visualizations</h2>

    <p>
      Modern web technologies allow us to go beyond static images. Below is an interactive visualization created with D3.js, demonstrating how we can embed live, reactive content within our essays.
    </p>

    <figure>
      <div bind:this={chartContainer} style="margin: 2rem 0;"></div>
      <figcaption>
        <strong>Figure 1:</strong> A sinusoidal pattern with random noise. The data is generated programmatically and rendered using D3.js. Notice how the visualization integrates seamlessly with the typography.
      </figcaption>
    </figure>

    <h2>Typography and Spacing</h2>

    <p>
      The choice of typeface significantly impacts readability. This page uses <em>Libre Baskerville</em>, a serif font that echoes the classical proportions of traditional book typography<Sidenote>Libre Baskerville is an open-source font based on the American Type Founder's Baskerville from 1941.</Sidenote>. The generous line spacing (leading) and relatively narrow measure (line length) make extended reading more comfortable.
    </p>

    <p>
      Sidenotes are preferable to footnotes<Sidenote>Footnotes force the reader to jump to the bottom of the page and back, breaking the flow of reading. Sidenotes keep related information adjacent to the main text.</Sidenote> because they preserve the flow of reading. On smaller screens, these notes collapse into toggleable elements, ensuring the design remains functional across devices.
    </p>

    <h2>The Power of Restraint</h2>

    <blockquote>
      <p>
        "Above all else show the data."
      </p>
      <footer>— Edward Tufte</footer>
    </blockquote>

    <p>
      This principle guides every design decision. The color palette is minimal—mostly black text on a warm off-white background, with red used sparingly for emphasis and links. The layout is generous with white space, allowing each element room to breathe.
    </p>

    <p>
      Tables, when used, should be clean and scannable:
    </p>

    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Accuracy</th>
          <th>Time (ms)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Baseline</td>
          <td>87.3%</td>
          <td>145</td>
        </tr>
        <tr>
          <td>Improved</td>
          <td>92.1%</td>
          <td>132</td>
        </tr>
        <tr>
          <td>Optimal</td>
          <td>95.8%</td>
          <td>128</td>
        </tr>
      </tbody>
    </table>

    <h2>Observable Integration</h2>

    <p>
      The true innovation of this design is the integration of Observable's runtime<MarginNote>Observable (observablehq.com) is a platform for creating interactive, reactive notebooks using JavaScript.</MarginNote>. This allows us to embed reactive, interactive computations directly in our essays, making them living documents that readers can explore and manipulate.
    </p>

    <p>
      Unlike traditional static documents, these essays can respond to reader input, update visualizations in real-time, and demonstrate concepts through interaction rather than mere description. This bridges the gap between explanation and exploration.
    </p>

    <h2>Conclusion</h2>

    <p>
      By combining Tufte's timeless design principles with modern web technologies, we can create documents that are both beautiful and functional. The goal is not to impress with technical prowess, but to communicate ideas with maximum clarity and minimum distraction.
    </p>

    <p>
      The measure of success is simple: does the design help or hinder understanding? Every pixel should serve the reader's comprehension. In this way, design becomes invisible—not because it is absent, but because it is so perfectly suited to its purpose that it disappears into the content itself.
    </p>
  </section>
</article>

<style>
  article {
    padding: 5rem 0;
  }

  .subtitle {
    font-weight: 300;
    color: #555;
  }

  section {
    margin-top: 3rem;
  }

  figure {
    margin: 3rem 0;
  }
</style>
