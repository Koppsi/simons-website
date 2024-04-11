// skills-chart.js

// Daten für das Balkendiagramm
const skillsProgrammingLanguagesData = {
  labels: ['HTML', 'CSS', 'Liquid', 'Bootstrap', 'Java', 'JavaScript', 'C#', 'SQL', 'React', 'Haskell', 'R'],
  datasets: [{
      axis: 'y',
      label: 'Kenntnisse in Prozent',
      data: [75, 73, 70, 62, 58, 50, 48, 45, 25, 20, 20],
      backgroundColor: [
          'rgba(67, 127, 199, 0.6)',
          'rgba(179, 123, 164, 0.6)',
          // Weitere Farben für die anderen Balken
      ],
      borderColor: [
          'rgba(67, 127, 199, 1)',
          'rgba(179, 123, 164, 1)',
          // Weitere Farben für die anderen Balken
      ],
      borderWidth: 1
  }]
};

const skillsSoftwareData = {
  labels: ['Word', 'LateX', 'Unity', 'Figma', 'PowerPoint', 'Excel', 'Photoshop/Gimp', 'Adobe Xd', 'Davinci Resolve'],
  datasets: [{
      axis: 'y',
      label: 'Kenntnisse in Prozent',
      data: [68, 68, 60, 60, 55, 50, 40, 40, 32],
      backgroundColor: [
          'rgba(67, 127, 199, 0.6)',
          'rgba(179, 123, 164, 0.6)'
      ],
      borderColor: [
          'rgba(67, 127, 199, 1)',
          'rgba(179, 123, 164, 1)'
      ],
      borderWidth: 1
  }]
};

const ctxProgrammingLangauges = document.getElementById('skillsProgrammingLanguagesChart').getContext('2d');
const chartProgrammingLanguages = new Chart(ctxProgrammingLangauges, {
  type: 'bar',
  data: skillsProgrammingLanguagesData,
  options: {
      indexAxis: 'y',
      plugins: {
          legend: {
              display: false,
          },
          tooltip: {
            enabled: false,
          }
      },
      scales: {
          x: {
              beginAtZero: true,
              max: 100,
          }
      }
  }
});

const ctxSoftware = document.getElementById('skillsSoftwareChart').getContext('2d');
const chartSoftware = new Chart(ctxSoftware, {
  type: 'bar',
  data: skillsSoftwareData,
  options: {
      indexAxis: 'y',
      plugins: {
          legend: {
              display: false,
          },
          tooltip: {
            enabled: false,
          }
      },
      scales: {
          x: {
              beginAtZero: true,
              max: 100,
          }
      }
  }
});