$(document).ready(function() {
    // Load JSON data
    $.getJSON('data.json', function(data) {
      // Render tabs
      var $tabLinks = $('.tab-links');
      var $tabContent = $('.tab-content');

      data.forEach(function(tab) {
        // Create tab link
        var $tabLink = $('<div class="tab-link">' + tab.title + '</div>');
        $tabLinks.append($tabLink);

        // Create tab content
        var $tabItem = $('<div class="tab-item"><div style="width:100px">' + tab.content + '</div></div>');
        $tabContent.append($tabItem);
      });

      // Add click event to tab links
      $('.tab-link').click(function() {
        // Remove active class from all tab links
        $('.tab-link').removeClass('active');

        // Add active class to clicked tab link
        $(this).addClass('active');

        // Show corresponding tab content
        var index = $('.tab-link').index(this);
        $('.tab-item').removeClass('active');
        $('.tab-item').eq(index).addClass('active');
      });

      // Set first tab as active
      $('.tab-link').eq(0).addClass('active');
      $('.tab-item').eq(0).addClass('active');
    });
  });