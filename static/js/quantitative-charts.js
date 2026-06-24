(function () {
  "use strict";

  const COLORS = {
    base: "#D9EAF8",
    oursCoarse: "#6BAEE8",
    oursFine: "#2F7FD0",
    oracle: "#E2E8F0",
    text: "#1E293B",
    muted: "#64748B",
    best: "#1D4ED8",
  };

  const CHARTS = [
    {
      id: "quant-reg-scannet",
      title: "Quantitative comparison of Gaussian Splatting Registration",
      badge: "ScanNet-GSReg Dataset",
      subtitle: "Lower is better for all metrics.",
      type: "registration",
      decimals: 3,
      metrics: [
        {
          label: "RRE (°) ↓",
          logScale: false,
          values: {
            "GaussReg* (Coarse)": 3.403,
            "GaussReg* (w/ Fine)": 2.827,
            "PhotoReg (Coarse)": 7.825,
            "PhotoReg (w/ Fine)": 7.366,
            "Liu et al.*": 2.595,
            "Graph-GSReg (Ours, Coarse)": 3.247,
            "Graph-GSReg (Ours, w/ Fine)": 1.97,
          },
        },
        {
          label: "RTE ↓",
          logScale: false,
          values: {
            "GaussReg* (Coarse)": 0.061,
            "GaussReg* (w/ Fine)": 0.042,
            "PhotoReg (Coarse)": 0.082,
            "PhotoReg (w/ Fine)": 0.072,
            "Liu et al.*": 0.045,
            "Graph-GSReg (Ours, Coarse)": 0.039,
            "Graph-GSReg (Ours, w/ Fine)": 0.025,
          },
        },
        {
          label: "RSE ↓",
          logScale: false,
          values: {
            "GaussReg* (Coarse)": 0.034,
            "GaussReg* (w/ Fine)": 0.032,
            "Liu et al.*": 0.013,
            "Graph-GSReg (Ours, Coarse)": 0.013,
          },
        },
        {
          label: "Time (s) ↓",
          logScale: true,
          values: {
            "GaussReg* (Coarse)": 3.7,
            "GaussReg* (w/ Fine)": 4.8,
            "PhotoReg (Coarse)": 16.231,
            "PhotoReg (w/ Fine)": 585.216,
            "Liu et al.*": 5.041,
            "Graph-GSReg (Ours, Coarse)": 2.784,
            "Graph-GSReg (Ours, w/ Fine)": 3.658,
          },
        },
      ],
    },
    {
      id: "quant-reg-uhumans2",
      title: "Quantitative comparison of Gaussian Splatting Registration",
      badge: "uHumans2 Dataset",
      subtitle: "Lower is better for all metrics.",
      type: "registration",
      decimals: 3,
      metrics: [
        {
          label: "RRE (°) ↓",
          logScale: false,
          values: {
            "TEASER++ & ICP": 9.099,
            "MAC (FPFH)": 108.089,
            "MAC (FCGF)": 60.021,
            "PhotoReg (Coarse)": 15.895,
            "PhotoReg (w/ Fine)": 9.959,
            "Graph-GSReg (Ours, Coarse)": 1.748,
            "Graph-GSReg (Ours, w/ Fine)": 0.711,
          },
        },
        {
          label: "RTE ↓",
          logScale: false,
          values: {
            "TEASER++ & ICP": 0.071,
            "MAC (FPFH)": 0.652,
            "MAC (FCGF)": 0.335,
            "PhotoReg (Coarse)": 0.154,
            "PhotoReg (w/ Fine)": 0.077,
            "Graph-GSReg (Ours, Coarse)": 0.01,
            "Graph-GSReg (Ours, w/ Fine)": 0.006,
          },
        },
        {
          label: "ATE (m) ↓",
          logScale: false,
          values: {
            "TEASER++ & ICP": 1.669,
            "MAC (FPFH)": 17.118,
            "MAC (FCGF)": 8.862,
            "PhotoReg (Coarse)": 6.916,
            "PhotoReg (w/ Fine)": 2.754,
            "Graph-GSReg (Ours, Coarse)": 0.243,
            "Graph-GSReg (Ours, w/ Fine)": 0.192,
          },
        },
        {
          label: "Time (s) ↓",
          logScale: true,
          values: {
            "TEASER++ & ICP": 4.57,
            "MAC (FPFH)": 6.359,
            "MAC (FCGF)": 5.462,
            "PhotoReg (Coarse)": 17.814,
            "PhotoReg (w/ Fine)": 342.754,
            "Graph-GSReg (Ours, Coarse)": 1.805,
            "Graph-GSReg (Ours, w/ Fine)": 3.782,
          },
        },
      ],
    },
    {
      id: "quant-merge-scannet",
      title: "Quantitative comparison of Gaussian Splatting merging results",
      badge: "ScanNet-GSReg Dataset",
      subtitle: "Higher is better for PSNR and SSIM. Lower is better for LPIPS.",
      type: "merging",
      decimals: 4,
      metrics: [
        {
          label: "PSNR ↑",
          higherIsBetter: true,
          values: {
            Oracle: 22.2913,
            "GT reg · PhotoReg": 20.1588,
            "GT reg · GaussReg": 20.9512,
            "GT reg · Graph-GSReg (Ours)": 21.8954,
            "Graph-GSReg reg · PhotoReg": 19.3298,
            "Graph-GSReg reg · GaussReg": 20.1133,
            "Graph-GSReg reg · Graph-GSReg (Ours)": 21.5248,
          },
        },
        {
          label: "SSIM ↑",
          higherIsBetter: true,
          values: {
            Oracle: 0.8566,
            "GT reg · PhotoReg": 0.8117,
            "GT reg · GaussReg": 0.8306,
            "GT reg · Graph-GSReg (Ours)": 0.8465,
            "Graph-GSReg reg · PhotoReg": 0.7926,
            "Graph-GSReg reg · GaussReg": 0.8089,
            "Graph-GSReg reg · Graph-GSReg (Ours)": 0.8304,
          },
        },
        {
          label: "LPIPS ↓",
          higherIsBetter: false,
          values: {
            Oracle: 0.3347,
            "GT reg · PhotoReg": 0.3844,
            "GT reg · GaussReg": 0.3551,
            "GT reg · Graph-GSReg (Ours)": 0.3484,
            "Graph-GSReg reg · PhotoReg": 0.4026,
            "Graph-GSReg reg · GaussReg": 0.3715,
            "Graph-GSReg reg · Graph-GSReg (Ours)": 0.3698,
          },
        },
      ],
    },
    {
      id: "quant-merge-uhumans2",
      title: "Quantitative comparison of Gaussian Splatting merging results",
      badge: "uHumans2 Dataset",
      subtitle: "Higher is better for PSNR and SSIM. Lower is better for LPIPS.",
      type: "merging",
      decimals: 4,
      metrics: [
        {
          label: "PSNR ↑",
          higherIsBetter: true,
          values: {
            Oracle: 32.0999,
            "GT reg · PhotoReg": 20.9777,
            "GT reg · GaussReg": 23.341,
            "GT reg · Graph-GSReg (Ours)": 25.4032,
            "Graph-GSReg reg · PhotoReg": 20.7897,
            "Graph-GSReg reg · GaussReg": 23.1519,
            "Graph-GSReg reg · Graph-GSReg (Ours)": 25.2425,
          },
        },
        {
          label: "SSIM ↑",
          higherIsBetter: true,
          values: {
            Oracle: 0.9218,
            "GT reg · PhotoReg": 0.7081,
            "GT reg · GaussReg": 0.7368,
            "GT reg · Graph-GSReg (Ours)": 0.7608,
            "Graph-GSReg reg · PhotoReg": 0.7048,
            "Graph-GSReg reg · GaussReg": 0.7321,
            "Graph-GSReg reg · Graph-GSReg (Ours)": 0.7607,
          },
        },
        {
          label: "LPIPS ↓",
          higherIsBetter: false,
          values: {
            Oracle: 0.1416,
            "GT reg · PhotoReg": 0.3316,
            "GT reg · GaussReg": 0.2871,
            "GT reg · Graph-GSReg (Ours)": 0.2801,
            "Graph-GSReg reg · PhotoReg": 0.337,
            "Graph-GSReg reg · GaussReg": 0.2904,
            "Graph-GSReg reg · Graph-GSReg (Ours)": 0.2868,
          },
        },
      ],
    },
  ];

  function isClose(a, b) {
    return Math.abs(a - b) < 1e-9;
  }

  function registrationColor(method) {
    if (method.startsWith("Graph-GSReg") && method.includes("w/ Fine")) return COLORS.oursFine;
    if (method.startsWith("Graph-GSReg") && method.includes("Coarse")) return COLORS.oursCoarse;
    return COLORS.base;
  }

  function mergingColor(method) {
    if (method === "Oracle") return COLORS.oracle;
    if (method.includes("(Ours)")) return COLORS.oursFine;
    return COLORS.base;
  }

  function isOurs(method, type) {
    if (type === "registration") return method.startsWith("Graph-GSReg");
    return method.includes("(Ours)");
  }

  function getBestMethods(rows, metric, type) {
    if (type === "merging") {
      const groups = { gt: [], graph: [] };
      rows.forEach((row) => {
        if (row.method === "Oracle") return;
        if (row.method.startsWith("GT reg")) groups.gt.push(row);
        if (row.method.startsWith("Graph-GSReg reg")) groups.graph.push(row);
      });
      const best = new Set();
      const higher = metric.higherIsBetter;
      [groups.gt, groups.graph].forEach((group) => {
        if (!group.length) return;
        const target = higher
          ? Math.max(...group.map((r) => r.value))
          : Math.min(...group.map((r) => r.value));
        group.forEach((row) => {
          if (isClose(row.value, target)) best.add(row.method);
        });
      });
      return best;
    }

    const target = Math.min(...rows.map((r) => r.value));
    const best = new Set();
    rows.forEach((row) => {
      if (isClose(row.value, target)) best.add(row.method);
    });
    return best;
  }

  function barWidthPercent(value, values, logScale) {
    const usable = 74;
    if (logScale) {
      const positive = values.filter((v) => v > 0);
      const min = Math.min(...positive);
      const max = Math.max(...positive);
      const axisMin = min * 0.55;
      const axisMax = max * 3.8;
      const logMin = Math.log10(axisMin);
      const logMax = Math.log10(axisMax);
      const logVal = Math.log10(value);
      if (logMax === logMin) return usable;
      const pct = ((logVal - logMin) / (logMax - logMin)) * usable;
      return Math.max(pct, 2);
    }
    const max = Math.max(...values);
    return (value / (max * 1.48)) * usable;
  }

  function formatValue(value, decimals) {
    return value.toFixed(decimals);
  }

  function buildMetric(metric, chart) {
    const rows = Object.entries(metric.values).map(([method, value]) => ({ method, value }));
    const values = rows.map((r) => r.value);
    const bestMethods = getBestMethods(rows, metric, chart.type);
    const logScale = Boolean(metric.logScale);

    const metricEl = document.createElement("div");
    metricEl.className = "quant-metric";

    const title = document.createElement("h3");
    title.className = "quant-metric-title";
    title.textContent = metric.label;
    metricEl.appendChild(title);

    const axis = document.createElement("div");
    axis.className = "quant-axis";
    axis.setAttribute("aria-hidden", "true");
    metricEl.appendChild(axis);

    const bars = document.createElement("div");
    bars.className = "quant-bars";

    rows.forEach((row) => {
      const ours = isOurs(row.method, chart.type);
      const isBest = bestMethods.has(row.method);
      const color = chart.type === "registration" ? registrationColor(row.method) : mergingColor(row.method);
      const width = barWidthPercent(row.value, values, logScale);
      const formatted = formatValue(row.value, chart.decimals);

      const rowEl = document.createElement("div");
      rowEl.className = "quant-bar-row" + (ours ? " is-ours" : "") + (isBest ? " is-best" : "");
      rowEl.tabIndex = 0;
      rowEl.setAttribute("role", "button");
      rowEl.setAttribute("aria-label", metric.label + ": " + row.method + " " + formatted);

      const label = document.createElement("span");
      label.className = "quant-label";
      label.textContent = row.method;

      const track = document.createElement("div");
      track.className = "quant-bar-track";

      const bar = document.createElement("div");
      bar.className = "quant-bar";
      bar.style.width = width + "%";
      bar.style.backgroundColor = color;

      const value = document.createElement("span");
      value.className = "quant-value";
      value.textContent = formatted;
      value.style.marginLeft = "calc(" + width + "% + 0.35rem)";

      track.appendChild(bar);
      track.appendChild(value);

      if (isBest) {
        const badge = document.createElement("span");
        badge.className = "quant-best";
        badge.textContent = "Best";
        track.appendChild(badge);
      }

      const tooltip = document.createElement("span");
      tooltip.className = "quant-tooltip";
      tooltip.textContent = row.method + " · " + formatted;
      track.appendChild(tooltip);

      rowEl.appendChild(label);
      rowEl.appendChild(track);
      bars.appendChild(rowEl);
    });

    metricEl.appendChild(bars);
    return metricEl;
  }

  function renderChart(chart) {
    const container = document.getElementById(chart.id);
    if (!container) return;

    const root = document.createElement("div");
    root.className = "quant-chart";

    const header = document.createElement("header");
    header.className = "quant-chart-header";
    header.innerHTML =
      '<h2 class="quant-chart-title">' +
      chart.title +
      '</h2><p class="quant-chart-badge">' +
      chart.badge +
      '</p><p class="quant-chart-subtitle">' +
      chart.subtitle +
      "</p>";
    root.appendChild(header);

    chart.metrics.forEach((metric) => {
      root.appendChild(buildMetric(metric, chart));
    });

    container.appendChild(root);
  }

  function initQuantitativeCharts() {
    CHARTS.forEach(renderChart);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuantitativeCharts);
  } else {
    initQuantitativeCharts();
  }
})();
