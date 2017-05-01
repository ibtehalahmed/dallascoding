$(document).ready(function() {
    

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var events_array = [
        {
        title: 'Test1',
        start: new Date(2012, 8, 20),
        tip: 'Personal tip 1'},
        {
            title: 'Test2',
            start: new Date(2012, 8, 21),
            tip: 'Personal tip 2'}
        ];

  $('#calendar').fullCalendar({
    header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        events: events_array,
        eventRender: function(event, element) {
            element.attr('title', event.tip);
        },
        select: function (start, end, jsEvent, view) {
                    var abc = prompt('Enter Title');
                    var allDay = !start.hasTime && !end.hasTime;
                    var newEvent = new Object();
                    newEvent.title = abc;
                    newEvent.start = moment(start).format();
                    newEvent.allDay = false;
                    $('#calendar').fullCalendar('renderEvent', newEvent);
                    
                    
                    ///////////////////////////////////
                    
                    console.log('select start');
                    $('#mymodal1').modal({
                       show  : true
                    }).on('loaded.bs.modal', function(e) {
                        console.log('loaded');
                        $('#calendar').fullCalendar('unselect');
                    }).on('shown.bs.modal', function (e) {
                        console.log('shown ' + start.format('DD.MM.YYYY'));
                        $('#calendar').fullCalendar('unselect');
                    }).on('hidden.bs.modal', function(e) {
                        console.log('hidden ' + start.format('DD.MM.YYYY'));
                        $('#calendar').fullCalendar('unselect');
                    });
                        console.log('select end');
                        $('#calendar').fullCalendar('unselect');
                },

           dayClick: function(date, jsEvent, view) {
               console.log('Testing ...');
          },
            eventClick: function(calEvent, jsEvent, view) {
              $('#mymodal1').modal('show');
    },
  });
  

  $('#calendar2').fullCalendar({
  header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      selectable: true,
      events: events_array,
      eventRender: function(event, element) {
          element.attr('title', event.tip);
      },
      select: function (start, end, jsEvent, view) {
                  var abc = prompt('Enter Title');
                  var allDay = !start.hasTime && !end.hasTime;
                  var newEvent = new Object();
                  newEvent.title = abc;
                  newEvent.start = moment(start).format();
                  newEvent.allDay = false;
                  $('#calendar2').fullCalendar('renderEvent', newEvent);
                  
                  
                  ///////////////////////////////////
                  
                  console.log('select start');
                  $('#mymodal2').modal({
                     show  : true
                  }).on('loaded.bs.modal', function(e) {
                      console.log('loaded');
                      $('#calendar2').fullCalendar('unselect');
                  }).on('shown.bs.modal', function (e) {
                      console.log('shown ' + start.format('DD.MM.YYYY'));
                      $('#calendar2').fullCalendar('unselect');
                  }).on('hidden.bs.modal', function(e) {
                      console.log('hidden ' + start.format('DD.MM.YYYY'));
                      $('#calendar2').fullCalendar('unselect');
                  });
                  console.log('select end');
                  $('#calendar2').fullCalendar('unselect');
              },

         dayClick: function(date, jsEvent, view) {
             console.log('Testing ...');
        },
          eventClick: function(calEvent, jsEvent, view) {
            $('#mymodal2').modal('show');
  },

});
    $('#calendar-next-button').click(function() {

    $('#calendar').fullCalendar('next');
    });
    $('#calendar-prev-button').click(function() {

    $('#calendar').fullCalendar('prev');
    });
    $('#calendar-prevYear-button').click(function() {

    $('#calendar').fullCalendar('prevYear');
    });
    $('#calendar-nextYear-button').click(function() {

    $('#calendar').fullCalendar('nextYear');
    });
    $('#calendar-today-button').click(function() {
        $('#calendar').fullCalendar('today');
    });
    

  
});
