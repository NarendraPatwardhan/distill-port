// A simple Observable notebook defined inline
export function define(runtime: any, observer: any) {
  const main = runtime.module();

  main.variable(observer('viewof frequency')).define('viewof frequency', ['Inputs'], (Inputs: any) => {
    return Inputs.range([0.1, 5], { value: 1, step: 0.1, label: 'Frequency' });
  });

  main.variable(observer('frequency')).define('frequency', ['Generators', 'viewof frequency'], (Generators: any, viewof: any) => {
    return Generators.input(viewof);
  });

  main.variable(observer('viewof amplitude')).define('viewof amplitude', ['Inputs'], (Inputs: any) => {
    return Inputs.range([10, 100], { value: 50, step: 5, label: 'Amplitude' });
  });

  main.variable(observer('amplitude')).define('amplitude', ['Generators', 'viewof amplitude'], (Generators: any, viewof: any) => {
    return Generators.input(viewof);
  });

  main.variable(observer('chart')).define('chart', ['d3', 'frequency', 'amplitude'], (d3: any, frequency: number, amplitude: number) => {
    const width = 640;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const data = Array.from({ length: 100 }, (_, i) => ({
      x: i / 10,
      y: amplitude * Math.sin(frequency * i / 10)
    }));

    const svg = d3.create('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; font: 12px sans-serif;');

    const x = d3.scaleLinear()
      .domain(d3.extent(data, (d: any) => d.x))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([-100, 100])
      .range([height - margin.bottom, margin.top]);

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    const line = d3.line()
      .x((d: any) => x(d.x))
      .y((d: any) => y(d.y));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#a00000')
      .attr('stroke-width', 2)
      .attr('d', line);

    return svg.node();
  });

  main.variable(observer('d3')).define('d3', async () => {
    return await import('https://cdn.jsdelivr.net/npm/d3@7/+esm');
  });

  main.variable(observer('Inputs')).define('Inputs', async () => {
    return await import('https://cdn.jsdelivr.net/npm/@observablehq/inputs@0.10/+esm');
  });

  return main;
}
