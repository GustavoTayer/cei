import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core'; // include this line
import dayGrigPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { CalendarOptions } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'ngx-minhas-escalas',
  templateUrl: './minhas-escalas.component.html',
  styleUrls: ['./minhas-escalas.component.scss'],
})
export class MinhasEscalasComponent implements OnInit {
  events: any[];

  options: any;
  calendarOptions: CalendarOptions;
  header: any;
  calendarPlugins = [dayGrigPlugin, timeGrigPlugin, interactionPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() },
  ];
  constructor() {
    // const name = Calendar.name;
  }

  ngOnInit() {
    // this.events = events.data;
    this.calendarOptions = {
      plugins: [dayGrigPlugin, timeGrigPlugin, interactionPlugin],
       dateClick: this.handleDateClick.bind(this), // bind is important!
      events: [
        { title: 'event 1', date: '2019-04-01' },
        { title: 'event 2', date: '2019-04-02' },
      ],
    };

    this.options = {
      plugins: [dayGrigPlugin, timeGrigPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      editable: true,
    };
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
}


export interface Element {
  name: string;
  symbol: string;
  comment?: string[];
}

// const initialData: Element[] = [
//   { name: 'Hydrogen', symbol: 'H' },
//   { name: 'Helium', symbol: 'He' },
//   { name: 'Lithium', symbol: 'Li' },
//   { name: 'Beryllium', symbol: 'Be' },
//   { name: 'Boron', symbol: 'B' },
//   { name: 'Carbon', symbol: 'C' },
//   { name: 'Nitrogen', symbol: 'N' },
//   { name: 'Oxygen', symbol: 'O' },
//   { name: 'Fluorine', symbol: 'F' },
//   { name: 'Neon', symbol: 'Ne' },
//   { name: 'Sodium', symbol: 'Na' },
//   { name: 'Magnesium', symbol: 'Mg' },
//   { name: 'Aluminum', symbol: 'Al' },
//   { name: 'Silicon', symbol: 'Si' },
//   { name: 'Phosphorus', symbol: 'P' },
//   { name: 'Sulfur', symbol: 'S' },
//   { name: 'Chlorine', symbol: 'Cl' },
//   { name: 'Argon', symbol: 'Ar' },
//   { name: 'Potassium', symbol: 'K' },
//   { name: 'Calcium', symbol: 'Ca' },
// ];

// const events = {
//   'data': [
//     {
//       'id': 1,
//       'title': 'All Day Event',
//       'start': '2017-02-01',
//     },
//     {
//       'id': 2,
//       'title': 'Long Event',
//       'start': '2017-02-07',
//       'end': '2017-02-10',
//     },
//     {
//       'id': 3,
//       'title': 'Repeating Event',
//       'start': '2017-02-09T16:00:00',
//     },
//     {
//       'id': 4,
//       'title': 'Repeating Event',
//       'start': '2017-02-16T16:00:00',
//     },
//     {
//       'id': 5,
//       'title': 'Conference',
//       'start': '2017-02-11',
//       'end': '2017-02-13',
//     },
//     {
//       'id': 6,
//       'title': 'Meeting',
//       'start': '2017-02-12T10:30:00',
//       'end': '2017-02-12T12:30:00',
//     },
//     {
//       'id': 7,
//       'title': 'Lunch',
//       'start': '2017-02-12T12:00:00',
//     },
//     {
//       'id': 8,
//       'title': 'Meeting',
//       'start': '2017-02-12T14:30:00',
//     },
//     {
//       'id': 9,
//       'title': 'Happy Hour',
//       'start': '2017-02-12T17:30:00',
//     },
//     {
//       'id': 10,
//       'title': 'Dinner',
//       'start': '2017-02-12T20:00:00',
//     },
//     {
//       'id': 11,
//       'title': 'Birthday Party',
//       'start': '2017-02-13T07:00:00',
//     },
//     {
//       'id': 12,
//       'title': 'Click for Google',
//       'url': 'http://google.com/',
//       'start': '2017-02-28',
//     },
//   ],
// };

