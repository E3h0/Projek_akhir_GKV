<!DOCTYPE html>
<html lang="en">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" 
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" 
  crossorigin="anonymous">
  </script>
<head>
  <meta charset="UTF-8">
  <title>Data Visualization Dashboard with Plotly.js</title>
  <script src='https://cdn.plot.ly/plotly-latest.min.js'></script>
  <script src="data.js"></script>
</head>
<body>
  <div id="bar-chart"></div>
  <br>

  <!-- Dropdown menu -->
  <select id="provinceDropdown">
    <option value="">Pilih Provinsi</option>
    <option value="Aceh">Aceh</option>
    <option value="Sumatera Utara">Sumatera Utara</option>
    <option value="Sumatera Barat">Sumatera Barat</option>
    <option value="Riau">Riau</option>
    <option value="Jambi">Jambi</option>
    <option value="Sumatera Selatan">Sumatera Selatan</option>
    <option value="Bengkulu">Bengkulu</option>
    <option value="Lampung">Lampung</option>
    <option value="Kep. Bangka Belitung">Kep. Bangka Belitung</option>
    <option value="Kep. Riau">Kep. Riau</option>
  </select>
  
  <!-- Container for the pie chart -->
  <div id="chartContainer"></div>
</body>
</html>
