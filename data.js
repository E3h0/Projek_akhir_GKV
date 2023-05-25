$(document).ready(function(){
  chart = document.getElementById('bar-chart');
  pie = document.getElementById('pie-chart');
  var data = [
  {
    "x": [
      "Aceh",
      "Sumatera Utara",
      "Sumatera Barat",
      "Riau",
      "Jambi",
      "Sumatera Selatan",
      "Bengkulu",
      "Lampung",
      "Kep. Bangka Belitung",
      "Kep. Riau"
    ],
    "y": [
      11220,
      32189,
      19472,
      10045,
      8208,
      8942,
      5098,
      13500,
      2166,
      3943
    ],
    "type": "bar",
    "name": "Kacang Panjang",
    "line": {
      "color": "#322388",
      "shape": "spline"
    },
    "hovertemplate": "Kacang Panjang <b>%{y}</b><extra></extra>",
    "marker": {
      "color": "#322388"
    }
  },
  {
    "x": [
      "Aceh",
      "Sumatera Utara",
      "Sumatera Barat",
      "Riau",
      "Jambi",
      "Sumatera Selatan",
      "Bengkulu",
      "Lampung",
      "Kep. Bangka Belitung",
      "Kep. Riau"
    ],
    "y": [
      73444,
      193862,
      133190,
      16735,
      47133,
      28497,
      39638,
      37987,
      6955,
      4282
    ],
    "type": "bar",
    "name": "Cabai Besar",
    "line": {
      "color": "#107733",
      "shape": "spline"
    },
    "hovertemplate": "Cabai Besar<b>%{y}</b><extra></extra>",
    "marker": {
      "color": "#107733"
    }
  },
  {
    "x": [
      "Aceh",
      "Sumatera Utara",
      "Sumatera Barat",
      "Riau",
      "Jambi",
      "Sumatera Selatan",
      "Bengkulu",
      "Lampung",
      "Kep. Bangka Belitung",
      "Kep. Riau"
    ],
    "y": [
      64782,
      61160,
      33356,
      8627,
      13588,
      11645,
      11476,
      10558,
      3386,
      2230
    ],
    "type": "bar",
    "name": "Cabai Rawit",
    "line": {
      "color": "#B50000",
      "shape": "spline"
    },
    "hovertemplate": "Cabai Rawit <b>%{y}</b><extra></extra>",
    "marker": {
      "color": "#B50000"
    }
  },
  {
    "x": [
      "Aceh",
      "Sumatera Utara",
      "Sumatera Barat",
      "Riau",
      "Jambi",
      "Sumatera Selatan",
      "Bengkulu",
      "Lampung",
      "Kep. Bangka Belitung",
      "Kep. Riau"
    ],
    "y": [
      20781,
      162744,
      113491,
      158,
      19652,
      10620,
      23033,
      19096,
      536,
      235
    ],
    "type": "bar",
    "name": "Tomat",
    "line": {
      "color": "#490202",
      "shape": "spline"
    },
    "hovertemplate": "Tomat <b>%{y}</b><extra></extra>",
    "marker": {
      "color": "#490202"
    }
  },
];

  var layout = {
    title: 'Produksi Sayuran di Pulau Sumatera pada Tahun 2020',
    xaxis: { title: 'Provinsi' },
    yaxis: { title: 'Produksi (Ton)' },
    barmode: 'stack',
    plot_bgcolor: '#F8F8F8',
    paper_bgcolor: '#F8F8F8',
    font: {
      family: 'Arial, sans-serif',
      size: 14,
      color: '#333333'
    },
    legend: {
      x: 1,
      y: 1,
      bgcolor: '#F8F8F8',
      bordercolor: '#CCCCCC',
      borderwidth: 1
    },
    margin: {
      l: 60,
      r: 20,
      t: 80,
      b: 80
    }
  };
  Plotly.newPlot(chart, data, layout);

  // pie
  var pieData = [
  {
      x: [
        'Kacang Panjang',
        'Cabai Besar',
        'Cabai Rawit',
        'Tomat'
      ],
      y: [
        11220,
        73444,
        64782,
        20781
      ],
      name: 'Aceh'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          32189,
          193862,
          61160,
          162744
        ],
      name: 'Sumatera Utara'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          19472,
          133190,
          33356,
          113491
        ],
      name: 'Sumatera Barat'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          10045,
          16735,
          8627,
          158
        ],
      name: 'Riau'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          8208,
          47133,
          13588,
          19652
        ],
      name: 'Jambi'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          8942,
          28497,
          11645,
          10620
        ],
      name: 'Sumatera Selatan'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          5098,
          39638,
          11476,
          23033
        ],
      name: 'Bengkulu'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          13500,
          37987,
          10558,
          19096
        ],
      name: 'Lampung'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          2166,
          6955,
          3386,
          536
        ],
      name: 'Kep. Bangka Belitung'
    },
    {
      x: [
          'Kacang Panjang',
          'Cabai Besar',
          'Cabai Rawit',
          'Tomat'
        ],
      y: [
          3943,
          4181,
          2230,
          235
        ],
      name: 'Kep. Riau'
    }
  // Data for other provinces...
];

// Function to update the pie chart
function updateChart(province) {
    var selectedData = pieData.find(data => data.name === province);

    var trace = {
      labels: selectedData.x,
      values: selectedData.y,
      type: 'pie'
    };

    var layout = {
      title: 'Komposisi Produksi Sayuran di Provinsi ' + province,
      texposition: "outside",
      textinfo: 'label'
    };

    var data = [trace];

    Plotly.newPlot('chartContainer', data, layout);
  }

  // Event listener for dropdown change
  var dropdown = document.getElementById('provinceDropdown');
  dropdown.addEventListener('change', function() {
    var selectedProvince = dropdown.value;
    updateChart(selectedProvince);
});

});