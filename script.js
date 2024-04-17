document.addEventListener('DOMContentLoaded', function () {
  const toggleDisplay = (buttonId, projectId) => {
    const button = document.getElementById(buttonId);
    const projectTiles = document.querySelectorAll(`#${projectId} .projects-grid > a`);
    
    button.addEventListener('click', function () {
      const isExpanded = button.textContent.includes('Show less');
      projectTiles.forEach((tile, index) => {
        if (index >= 6) { // Toggle visibility beyond the first 6
          tile.style.display = isExpanded ? 'none' : 'block';
        }
      });
      button.innerHTML = isExpanded ? 'Show all<i class="fas fa-chevron-right"></i>' : 'Show less<i class="fas fa-chevron-left"></i>';
    });
  };

  toggleDisplay('show-all-ml', 'ml-projects');
  toggleDisplay('show-all-web', 'web-projects');
});

