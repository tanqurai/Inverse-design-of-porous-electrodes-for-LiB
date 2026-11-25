document.addEventListener('DOMContentLoaded', () => {
    
    // Path to the CSV file
    const csvFilePath = 'data/training_volumes.csv';

    // Fetch the CSV file and plot the data
    fetch(csvFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(csvText => {
            // Parse CSV text using PapaParse
            Papa.parse(csvText, {
                header: true,         // Treat first row as headers
                dynamicTyping: true,  // Automatically convert numbers
                skipEmptyLines: true,
                complete: function(results) {
                    const data = results.data;
                    renderPlot(data);
                }
            });
        })
        .catch(error => {
            console.error('Error loading the CSV file:', error);
            document.getElementById('plot-container').innerHTML = 
                `<p style="color: red; text-align: center;">Error loading data. Make sure you are serving this via an HTTP server (e.g., python -m http.server).</p>`;
        });

    function renderPlot(data) {
        // Extract data for each axis
        const porosity = [];
        const activeVol = [];
        const tortuosity = [];

        data.forEach(row => {
            if (row.porosity !== undefined && row.active_vol !== undefined && row.tortuosity !== undefined) {
                porosity.push(row.porosity);
                activeVol.push(row.active_vol);
                tortuosity.push(row.tortuosity);
            }
        });

        // Setup the Plotly trace
        const trace = {
            x: porosity,
            y: activeVol,
            z: tortuosity,
            mode: 'markers',
            marker: {
                size: 6,
                color: tortuosity, // Optional: color by tortuosity for better visual depth
                colorscale: 'Viridis',
                opacity: 0.8
            },
            type: 'scatter3d',
            // Custom hover text mapping x -> ε, y -> α, z -> τ
            hovertemplate: 
                '<b>ε:</b> %{x}<br>' +
                '<b>α:</b> %{y}<br>' +
                '<b>τ:</b> %{z}<extra></extra>' // <extra></extra> hides the secondary box with trace name
        };

        const plotData = [trace];

        // Setup the Plotly layout
        const layout = {
            template: 'simple_white',
            font: {
                family: "'Inter', system-ui, sans-serif"
            },
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            },
            scene: {
                xaxis: {
                    title: 'Porosity (ε)'
                },
                yaxis: {
                    title: 'Active material volume fraction (α)'
                },
                zaxis: {
                    title: 'Tortuosity factor (τ)'
                }
            }
        };

        // Configuration to make it responsive
        const config = {
            responsive: true,
            displayModeBar: false // Hides the top right tool bar for a cleaner look
        };

        Plotly.newPlot('plot-container', plotData, layout, config);
    }
});
