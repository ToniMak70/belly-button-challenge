// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let result = metadata.filter(sampleObj => sampleObj.id == sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("")` to clear any existing metadata
    panel.html("");

    // Inside a loop, append new tags for each key-value pair in the filtered metadata
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field
    let samples = data.samples;
    console.log(samples);

    // Filter the samples for the object with the desired sample number
    let result = samples.filter(sampleObj => sampleObj.id == sample)[0];
    console.log(result);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    console.log(otu_ids);

    let otu_labels = result.otu_labels;
    console.log(otu_labels);

    let sample_values = result.sample_values;
    console.log(sample_values);

    // Build a Bubble Chart
    let bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Viridis'
      }
    }];

    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {title: 'OTU ID'},
      hovermode: 'closest'
    };

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let barData = [{
      type: 'bar',
      x: sample_values.slice(0, 10).reverse(),
      y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      orientation: 'h'
    }];

    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: {title: 'Sample Values'},
      yaxis: {title: 'OTU ID'}
    };

    // Build a Bar Chart
    Plotly.newPlot('bar', barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the names field
    let sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    sampleNames.forEach((sample) => {
      selector.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init()