var currentDate = new Date();
var time = parseInt(dayjs().format('H'));

$(document).ready(function () {
// save fxn button 
$('.saveBtn').click(function () {
  var timeBlockId = $(this).parent().attr('id');
// stores user inputs in local storage
  var value = $(this).siblings('textarea').val();
  localStorage.setItem('timeBlockId' + timeBlockId, value);
});
  // Sets current date on header 
  var current = dayjs();
  $('#currentDay').text(current.format('[Today is] MMMM dddd D, YYYY'));

  function loadShedule() {
    $('#8 .description').val(localStorage.getItem('timeBlockId8'))
    $('#9 .description').val(localStorage.getItem('timeBlockId9'))
    $('#10 .description').val(localStorage.getItem('timeBlockId10'));
    $('#11 .description').val(localStorage.getItem('timeBlockId11'));
    $('#12 .description').val(localStorage.getItem('timeBlockId12'));
    $('#13 .description').val(localStorage.getItem('timeBlockId13'));
    $('#14 .description').val(localStorage.getItem('timeBlockId14'));
    $('#15 .description').val(localStorage.getItem('timeBlockId15'));
    $('#16 .description').val(localStorage.getItem('timeBlockId16'));
    $('#17 .description').val(localStorage.getItem('timeBlockId17'));
  }

  // Sets color of the rows based on time

  var rows = document.getElementsByClassName('row');

  Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {

      if (time === rowHour) {
        row.classList.add('present');
      }
      else if (time < rowHour) {
        row.classList.add('future');
      }
      else {
        row.classList.add('past');
      }
    }
  });

loadShedule()

});