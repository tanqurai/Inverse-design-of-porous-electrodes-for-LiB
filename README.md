# Inverse Design of Lithium-Ion Battery Microstructures using Physics-Constrained Generative AI

This repository contains the web-based demonstration and resources for our research on the inverse design of NMC532 microstructures using a physically-constrained conditional Generative Adversarial Network (GAN).

## Demo Webpage

The webpage provides an interactive visualization of our results:

1. A 3D plot of the training dataset volumes (visualizing porosity, active material volume fraction, and tortuosity factor).
2. A 3D render of a generated NMC532 microstructure.

### How to open the demo

To see the demo, you can go to [this link](https://tanqurailab.github.io/Inverse-design-of-porous-electrodes-for-LiB).

Alternatively, you can open the demo locally by cloning this repo onto your machine and serving the files using an HTTP server (opening just the `index.html` won't fully work because of the CORS restrictions when loading local files).

If you have Python 3 installed, you can open a terminal in this directory and run:

```
python -m http.server 8000
```

Then, open your web browser and navigate to `http://localhost:8000`. (If the port 8000 is being used, you can choose any other one.)

Alternatively, you can use Node.js (`npx serve`) or VS Code's "Live Server" extension.

## Dataset Reference

The dataset used for the training is [Li-ion battery cathode and anode microstructures](https://www.nlr.gov/transportation/battery-microstructure-library-data) made available by the National Laboratory of the Rockies.

## Acknowledgements

This work was funded by the Ministry of Science and Higher Education of the Republic of Kazakhstan (Grant AP27510161).

## Contacts

You can visit [our website](https://tanqurailab.kz) to see more of our work and find the contact information, or just email our PI, [Dr. Assiya Yermukhambetova](https://research.nu.edu.kz/en/persons/assiya-yermukhambetova/), [ayermukhambetova@nu.edu.kz](mailto:ayermukhambetova@nu.edu.kz)
