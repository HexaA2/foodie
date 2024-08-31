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



    function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  } else {
    // Set the default tab as active if no event is provided
    document.querySelector(`.tablinks[onclick="openTab(event, '${tabName}')"]`).className += " active";
  }
}

// Automatically open the first tab by default on page load
document.addEventListener("DOMContentLoaded", function() {
  var firstTab = document.querySelector('.tab .tablinks');
  if (firstTab) {
    var firstTabName = firstTab.getAttribute('onclick').match(/'([^']+)'/)[1];
    openTab(null, firstTabName);
  }
});

// Add event listener to the table body or the entire table
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#main_course_table tbody').addEventListener('click', function(event) {
      const row = event.target.closest('tr');
      if (row && row.dataset.url) {
          window.location.href = row.dataset.url;
      }
  });
});