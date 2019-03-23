window.ReportsKit = {};

//$(document).ready(function() {
var ready = function() {
  $('.reports_kit_report').each(function(index, el) {
    var el = $(el)
    var reportClass = el.data('report-class');
    new ReportsKit[reportClass]().render({ 'el': el });
  });
 }
//});

$(document).on('turbolinks:load', ready);
