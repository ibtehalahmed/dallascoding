$('#calendar').fullCalendar({
	defaultDate: '2017-06-01',
	header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
    events: [
			    {
            title  : 'Coding Course 1',
            start  : '2017-06-10T11:30:00',
            end    : '2017-06-10T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-06-10T13:00:00',
            end    : '2017-06-10T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-06-17T11:30:00',
            end    : '2017-06-17T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-06-17T13:00:00',
            end    : '2017-06-17T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-06-24T11:30:00',
            end    : '2017-06-24T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-06-24T13:00:00',
            end    : '2017-06-24T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-08T11:30:00',
            end    : '2017-07-08T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-08T13:00:00',
            end    : '2017-07-081T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-15T11:30:00',
            end    : '2017-07-15T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-15T13:00:00',
            end    : '2017-07-15T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-22T11:30:00',
            end    : '2017-07-22T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-22T13:00:00',
            end    : '2017-07-22T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-29T11:30:00',
            end    : '2017-07-29T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-29T13:00:00',
            end    : '2017-07-29T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-08-05T11:30:00',
            end    : '2017-08-05T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-08-05T13:00:00',
            end    : '2017-08-05T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-08-12T11:30:00',
            end    : '2017-08-12T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-08-12T13:00:00',
            end    : '2017-08-12T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-08-19T11:30:00',
            end    : '2017-08-19T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-08-19T13:00:00',
            end    : '2017-08-19T14:30:00',
                },
                
        ],
    
     eventClick: function(calEvent, jsEvent, view) {
              $('#mymodal1').modal('show');
    },
    dayClick: function(date, allDay, jsEvent, view) {
        if (allDay) {
            alert('Clicked on the entire day: ' + date);
        }else{
            alert('Clicked on the slot: ' + date);
        }
       
    }    
});
$('#calendar2').fullCalendar({
    defaultDate: '2017-06-01',
    header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
    events: [
			    {
            title  : 'Coding Course 1',
            start  : '2017-06-10T11:30:00',
            end    : '2017-06-10T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-06-10T13:00:00',
            end    : '2017-06-10T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-06-17T11:30:00',
            end    : '2017-06-17T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-06-17T13:00:00',
            end    : '2017-06-17T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-06-24T11:30:00',
            end    : '2017-06-24T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-06-24T13:00:00',
            end    : '2017-06-24T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-08T11:30:00',
            end    : '2017-07-08T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-08T13:00:00',
            end    : '2017-07-081T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-15T11:30:00',
            end    : '2017-07-15T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-15T13:00:00',
            end    : '2017-07-15T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-22T11:30:00',
            end    : '2017-07-22T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-22T13:00:00',
            end    : '2017-07-22T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-07-29T11:30:00',
            end    : '2017-07-29T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-07-29T13:00:00',
            end    : '2017-07-29T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-08-05T11:30:00',
            end    : '2017-08-05T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-08-05T13:00:00',
            end    : '2017-08-05T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-08-12T11:30:00',
            end    : '2017-08-12T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-08-12T13:00:00',
            end    : '2017-08-12T14:30:00',
                },
                {
            title  : 'Coding Course 1',
            start  : '2017-08-19T11:30:00',
            end    : '2017-08-19T12:30:00',
                },
                {
            title  : 'Coding Course 2',
            start  : '2017-08-19T13:00:00',
            end    : '2017-08-19T14:30:00',
                },
                
        ],
    
     eventClick: function(calEvent, jsEvent, view) {
              $('#mymodal2').modal('show');
    },
    
       
});

