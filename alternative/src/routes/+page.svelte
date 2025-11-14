<script lang="ts">
  import Sidenote from '$lib/components/Sidenote.svelte';
  import MarginNote from '$lib/components/MarginNote.svelte';
  import InteractiveChart from '$lib/components/InteractiveChart.svelte';

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

    <h2>Interactive Visualizations with Observable</h2>

    <p>
      Modern web technologies allow us to go beyond static images. Below is an interactive visualization powered by <em>Observable</em><Sidenote>Observable (observablehq.com) is a platform for reactive, interactive JavaScript notebooks. Its runtime can be embedded in any web page.</Sidenote>, demonstrating how we can embed live, reactive content within our essays. Try adjusting the frequency slider to see the sine wave update in real-time.
    </p>

    <figure>
      <InteractiveChart />
      <figcaption>
        <strong>Figure 1:</strong> An interactive sine wave visualization. The frequency can be adjusted using the slider above the chart. This demonstrates Observable's reactive programming model—when you change the input, the visualization automatically updates.
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

    <h2>The Power of Reactive Documents</h2>

    <p>
      The true innovation of this design is the integration of Observable's runtime. This allows us to embed reactive, interactive computations directly in our essays, making them living documents<MarginNote>Bret Victor has long advocated for "explorable explanations"—documents where readers can immediately see the consequences of changing assumptions.</MarginNote> that readers can explore and manipulate.
    </p>

    <p>
      Unlike traditional static documents, these essays can respond to reader input, update visualizations in real-time, and demonstrate concepts through interaction rather than mere description. The visualization above exemplifies this: it's not a static image but a live computation that reacts to your input.
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
