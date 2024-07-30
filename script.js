document.addEventListener('DOMContentLoaded', function() {
    const clickableRows = document.querySelectorAll('#infoTable .clickable');
    
    clickableRows.forEach(row => {
      row.addEventListener('click', function() {
        // Toggle the next sibling row with class 'details'
        const detailsRow = this.nextElementSibling;
        if (detailsRow && detailsRow.classList.contains('details')) {
          detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var ratingBars = document.querySelectorAll(".rating-bar");
    var totalValue = 0;

    ratingBars.forEach(function(bar) {
        var value = parseInt(bar.getAttribute("data-value"));
        var color = getColor(value);
        bar.style.width = value + "%";
        bar.style.backgroundColor = color;
        totalValue += value;
    });

    var averageValue = totalValue / ratingBars.length;
    document.getElementById("average-value").innerText = averageValue.toFixed(1);
    var averageColor = getColor(averageValue);
    var averageScoreElement = document.querySelector(".average-score");
    averageScoreElement.style.backgroundColor = averageColor;

    function getColor(value) {
        if (value >= 90) return "#009392"; 
        if (value >= 75) return "#39B185"; 
        if (value >= 60) return "#9CCB86"; 
        if (value >= 50) return "#E9E29C"; 
        if (value >= 40) return "#EEB479";
        if (value >= 30) return "#E88471 ";
        return "#CF597E"; // Red
    }
    });

    