<script lang="ts">
  import {
    Article,
    Title,
    Byline,
    Abstract,
    Figure,
    Math,
    Code,
    Cite,
    Bibliography,
    Appendix
  } from '$lib/components';
  import type { FrontMatter, Citation } from '$lib/types';

  // Sample front matter data
  const frontMatter: FrontMatter = {
    title: 'Demo Article',
    description: 'A demonstration of the Distill template ported to SvelteKit',
    authors: [
      {
        name: 'Jane Researcher',
        personalURL: 'https://example.com/jane',
        affiliations: [
          { name: 'University of Science', url: 'https://example.edu' }
        ]
      },
      {
        name: 'John Developer',
        affiliations: [
          { name: 'Tech Institute' }
        ]
      }
    ],
    publishedDate: '2025-11-14',
    publishedDay: 14,
    publishedMonth: 'November',
    publishedYear: 2025,
    doi: '10.1234/example.doi'
  };

  // Sample citations
  const citations: Citation[] = [
    {
      key: '1',
      title: 'Attention Is All You Need',
      author: 'Vaswani, A., Shazeer, N., Parmar, N., et al.',
      journal: 'Advances in Neural Information Processing Systems',
      year: 2017,
      url: 'https://arxiv.org/abs/1706.03762'
    },
    {
      key: '2',
      title: 'Deep Learning',
      author: 'Goodfellow, I., Bengio, Y., & Courville, A.',
      year: 2016,
      url: 'https://www.deeplearningbook.org/'
    }
  ];

  // Complex math expressions
  const ramanujanFormula = String.raw`\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }`;

  const attentionFormula = String.raw`\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V`;
</script>

<svelte:head>
  <title>Distill Template Demo - SvelteKit</title>
  <meta name="description" content="Demo of Distill template ported to SvelteKit" />
</svelte:head>

<Title>
  <h1>A Demo of the Distill Template in SvelteKit</h1>
  <p>An example article demonstrating the Distill publishing framework ported to modern SvelteKit</p>
</Title>

<Byline {frontMatter} />

<Abstract>
  <p>
    This is a demonstration article showcasing the Distill template, successfully ported from
    web components to SvelteKit. The Distill template is a scientific and technical publishing
    framework designed for clarity and beauty. This port maintains the original's grid-based
    layout system while leveraging Svelte's reactive paradigm and modern web standards.
  </p>
</Abstract>

<Article>
  <h2>Introduction</h2>
  <p>
    The Distill template was originally created to provide a clean, elegant way to publish
    research articles on the web <Cite key="1" />. This SvelteKit port brings the template's
    powerful layout system and typography into the modern JavaScript ecosystem.
  </p>

  <p>
    Unlike traditional web components, Svelte components compile to highly optimized vanilla
    JavaScript, resulting in smaller bundle sizes and better performance. This makes the template
    more accessible for researchers and developers alike.
  </p>

  <aside>
    This is a side note. In the Distill grid system, aside elements appear in the margin on
    larger screens, providing additional context without disrupting the main text flow.
  </aside>

  <h2>Mathematical Expressions</h2>
  <p>
    The template supports beautiful mathematical typesetting using KaTeX. Inline math like
    <Math content="E = mc^2" /> renders seamlessly within text.
  </p>

  <p>Display equations are also supported:</p>

  <div class="l-body">
    <Math content={ramanujanFormula} block={true} />
  </div>

  <h2>Code Examples</h2>
  <p>
    Syntax highlighting is provided through Prism.js, supporting many popular programming
    languages. Here's a simple Python example:
  </p>

  <div class="l-body">
    <Code
      language="python"
      code={`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Calculate the 10th Fibonacci number
result = fibonacci(10)
print(f"The 10th Fibonacci number is: {result}")`}
      block={true}
    />
  </div>

  <p>And here's a TypeScript example:</p>

  <div class="l-body">
    <Code
      language="typescript"
      code={`interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (name: string, email: string): User => {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email
  };
};`}
      block={true}
    />
  </div>

  <h2>Figures and Visualizations</h2>
  <p>
    Figures can span different column widths using the layout system. The grid provides several
    named regions: <code>text</code>, <code>body-outset</code>, <code>page</code>, and
    <code>screen</code>.
  </p>

  <Figure layout="page">
    {#snippet children()}
      <svg width="100%" height="300" viewBox="0 0 800 300" style="background: white;">
        <!-- Grid lines -->
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="800" height="300" fill="url(#grid)" />

        <!-- Data visualization: A simple line chart -->
        <g transform="translate(60, 40)">
          <!-- Axes -->
          <line x1="0" y1="200" x2="700" y2="200" stroke="#333" stroke-width="2"/>
          <line x1="0" y1="0" x2="0" y2="200" stroke="#333" stroke-width="2"/>

          <!-- Y-axis labels -->
          <text x="-10" y="5" text-anchor="end" font-size="12" fill="#666">100</text>
          <text x="-10" y="105" text-anchor="end" font-size="12" fill="#666">50</text>
          <text x="-10" y="205" text-anchor="end" font-size="12" fill="#666">0</text>

          <!-- X-axis labels -->
          <text x="0" y="220" text-anchor="middle" font-size="12" fill="#666">0</text>
          <text x="175" y="220" text-anchor="middle" font-size="12" fill="#666">25</text>
          <text x="350" y="220" text-anchor="middle" font-size="12" fill="#666">50</text>
          <text x="525" y="220" text-anchor="middle" font-size="12" fill="#666">75</text>
          <text x="700" y="220" text-anchor="middle" font-size="12" fill="#666">100</text>

          <!-- Data line (smoothly curved) -->
          <path
            d="M 0,150 Q 100,100 175,80 T 350,60 Q 450,50 525,70 T 700,100"
            fill="none"
            stroke="#4285f4"
            stroke-width="3"
            stroke-linecap="round"
          />

          <!-- Data points -->
          <circle cx="0" cy="150" r="4" fill="#4285f4"/>
          <circle cx="175" cy="80" r="4" fill="#4285f4"/>
          <circle cx="350" cy="60" r="4" fill="#4285f4"/>
          <circle cx="525" cy="70" r="4" fill="#4285f4"/>
          <circle cx="700" cy="100" r="4" fill="#4285f4"/>

          <!-- Confidence interval -->
          <path
            d="M 0,170 Q 100,120 175,95 T 350,75 Q 450,65 525,85 T 700,115
               L 700,85 Q 625,55 525,55 T 350,45 Q 250,40 175,65 T 0,130 Z"
            fill="#4285f4"
            opacity="0.1"
          />

          <!-- Axis labels -->
          <text x="350" y="250" text-anchor="middle" font-size="14" fill="#333" font-weight="500">Epoch</text>
          <text x="-30" y="100" text-anchor="middle" font-size="14" fill="#333" font-weight="500" transform="rotate(-90, -30, 100)">Accuracy (%)</text>
        </g>
      </svg>
    {/snippet}
    {#snippet caption()}
      <strong>Figure 1:</strong> Training accuracy over epochs with confidence intervals.
      The shaded region represents the standard deviation across multiple runs.
      This demonstrates how figures can contain elegant data visualizations.
    {/snippet}
  </Figure>

  <h2>Layout System</h2>
  <p>
    The Distill grid system is built on CSS Grid with named columns. Content can be placed in
    different regions to achieve various effects:
  </p>

  <ul>
    <li><strong>Text column:</strong> The default column for body text (current width)</li>
    <li><strong>Body-outset:</strong> Slightly wider than text, good for small figures</li>
    <li><strong>Page:</strong> Full page width, excluding margins</li>
    <li><strong>Screen:</strong> Full screen width, for impactful visualizations</li>
  </ul>

  <blockquote>
    "The goal of the Distill template is to make it easy to create beautiful, responsive
    scientific articles on the web." — Distill Team
  </blockquote>

  <h2>Deep Learning Applications</h2>
  <p>
    Modern deep learning has transformed numerous fields <Cite key="2" />. The transformer
    architecture <Cite key="1" />, in particular, has enabled breakthrough performance in
    natural language processing, computer vision, and beyond.
  </p>

  <h3>Attention Mechanism</h3>
  <p>
    The attention mechanism can be expressed mathematically as:
  </p>

  <div class="l-body">
    <Math
      content={attentionFormula}
      block={true}
    />
  </div>

  <p>
    Where <Math content="Q" />, <Math content="K" />, and <Math content="V" /> represent
    the query, key, and value matrices respectively, and <Math content="d_k" /> is the
    dimension of the key vectors.
  </p>

  <h2>Conclusion</h2>
  <p>
    This port demonstrates that the Distill template's design principles translate well to
    modern frameworks like SvelteKit. The combination of Svelte's reactivity, TypeScript's
    type safety, and Tailwind's utility classes creates a powerful foundation for scientific
    publishing on the web.
  </p>

  <p>
    The components are modular and reusable, making it easy to create new articles with
    consistent styling and behavior. Future enhancements could include interactive
    visualizations, real-time collaboration features, and improved accessibility.
  </p>
</Article>

<Appendix>
  <h2>Appendix</h2>
  <h3>Implementation Notes</h3>
  <p>
    This port was created to modernize the Distill template while maintaining its core design
    principles. All components are implemented as Svelte 5 components using the latest runes API.
  </p>

  <h3>Acknowledgments</h3>
  <p>
    This work is based on the original Distill template created by the Distill team. We thank
    them for their pioneering work in scientific web publishing.
  </p>

  <Bibliography {citations} />
</Appendix>

<style>
  aside {
    grid-column: gutter;
    font-size: 12px;
    line-height: 1.6em;
    color: rgba(0, 0, 0, 0.6);
  }

  @media(max-width: 768px) {
    aside {
      grid-column: text;
      border-left: 2px solid rgba(0, 0, 0, 0.1);
      padding-left: 1em;
      margin: 1em 0;
    }
  }
</style>
