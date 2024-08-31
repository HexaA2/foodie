
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

  document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll("tr[data-url]");

    rows.forEach(function(row) {
        row.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            window.location.href = url;
        });
    });
});

function sortTableByColumn(tableId, columnIndex, dataType) {
  const table = document.querySelector(`#${tableId}`);
  if (!table) return;

  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const header = table.querySelector(`th[data-column="${dataType}"]`);

  // Toggle sort direction
  const isAscending = header.getAttribute('data-sort-direction') === 'asc';
  header.setAttribute('data-sort-direction', isAscending ? 'desc' : 'asc');

  rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim();
      const cellB = rowB.children[columnIndex].textContent.trim();
      let valueA, valueB;

      if (dataType === 'price') {
          valueA = parseFloat(cellA.replace(/[$,]/g, ''));
          valueB = parseFloat(cellB.replace(/[$,]/g, ''));
      } else if (dataType === 'score' || dataType === 'calories') {
          valueA = parseFloat(cellA);
          valueB = parseFloat(cellB);
      } else {
          valueA = cellA.toLowerCase();
          valueB = cellB.toLowerCase();
      }

      if (isAscending) {
          return valueA > valueB ? 1 : -1;
      } else {
          return valueA < valueB ? 1 : -1;
      }
  });

  // Re-append sorted rows to the table body
  rows.forEach(row => tbody.appendChild(row));
}


document.addEventListener('DOMContentLoaded', function() {
  // Verify that the event listener is being added
  console.log('DOM fully loaded and parsed');

  const tableBody = document.querySelector('tbody');
  
  // Ensure that the table body element is found
  if (tableBody) {
      tableBody.addEventListener('click', function(event) {
          const row = event.target.closest('tr');
          
          // Ensure that a row was clicked and has a data-url attribute
          if (row && row.dataset.url) {
              console.log('Redirecting to:', row.dataset.url);
              window.location.href = row.dataset.url;
          } else {
              console.log('Clicked element is not a row or missing data-url');
          }
      });
  } else {
      console.error('Table body not found');
  }
});