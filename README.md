# belly-button-challenge
## Background
In this project, we build an interactive dashboard to explore the **Belly Button Biodiversity dataset**, which catalogs the microbial species (also called Operational Taxonomic Units or OTUs) that inhabit human navels. The dataset reveals that only a small number of microbial species are present in over 70% of the sampled individuals, while the remaining species are relatively rare.
The objective of this dashboard is to allow users to explore the OTUs found in different people’s belly buttons, visualize the data, and display metadata associated with each individual sample.

## Project Overview
This project involves creating a web-based dashboard with the following features:
1. **Horizontal Bar Chart** displaying the top 10 OTUs found in an individual’s sample. 
![Dashboard](https://github.com/user-attachments/assets/74e6d778-76f3-43d1-99ee-088ad86c6f68)

3. **BubbleChart** that plots the OTUs for each sample.
![bacteria samples](https://github.com/user-attachments/assets/808b1529-03c5-497b-816d-bdc689afb7ec)

4. **Metadata Display** showing key demographic information of the sample.
The dashboard will update dynamically when the user selects a new sample from a dropdown menu.
![dropdown](https://github.com/user-attachments/assets/bb47fd8f-69da-408f-aac2-023bae238323)


## File Structure
belly-button-challenge/
├── index.html
├── samples.json
├── static/
│   ├── css/
│   ├── images/
│   └── js/
└── README.md
- `index.html`: The HTML structure for the dashboard.
- `samples.json`: JSON file containing the data.
- `static/js/`: JavaScript files (including your code to handle D3.js and Plotly.js).
- `static/css/`: CSS files for styling the dashboard.


## Acknowledgements
- Classmates: I recieved coding and debuging help from multiple classmates during breakout sessions.
- Internet Search: I utilized Google Search and slack overflow to research coding concepts, algorithms, and best practices.
- Support Staff: I recieved help from my instructor and class TA during office hours for help with debugging errors and further explanation for complex code segments.
- AI: I leveraged Gemini AI and ChatGPT to generate code suggestions, debug errors, and provide explanations for complex code segments.
- Please note: While these tools were invaluable in my development process, the final code is the result of my analysis, testing, and refinement.



