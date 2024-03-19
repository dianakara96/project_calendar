class Calendar {
  constructor(title, events = []) {
    this.title = title;
    this.events = events;
  }

  addEvent(event) {
    this.events.push(event);
    return this;
  }

  getEvents() {
    return this.events;
  }

  filterEventsByDate(date) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    return this.events.filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0); 
      return eventDate >= currentDate && event.date.split('T')[1] === date.split('T')[1];
    });
  }

  addAttendeeToEvent(eventTitle, attendee) {
    const event = this.events.find((event) => event.title === eventTitle);
    if (event) {
      event.attendees.push(attendee);
      return true;
    } else {
      return false;
    }
  }

  displayEvents() {
    let strEvents = '';
    for (const event of this.events) {
      strEvents += `Title: ${event.title}, Date: ${event.date}, Location: ${event.location}, Attendees: ${event.attendees}\n`;
    }
    return strEvents;
  }
}

const calendar1 = new Calendar('Title and Date of each Event:', [
  { title: 'Church day', date: '2024-03-17', location: 'St.Jude church', attendees: ['Everyone'] },
  { title: 'School', date: '2024-03-18', location: 'Zindua School', attendees: ['Diana,Gin,Jane'] },
  { title: 'Lunch with Friends', date: '2024-03-19', location: 'Jiko Restaurant', attendees: ['Islam,Caren,Reyna'] },
  { title: 'School', date: '2024-03-20', location: 'Zindua School', attendees: ['Sarah,David,James'] },
  { title: 'Movies', date: '2024-03-21', location: 'Cinema max', attendees: ['Nevy,Brian,Eugene'] },
  { title: 'School', date: '2024-03-22', location: 'Zindua School', attendees: ['Preez,Jerry,Tom'] },
  { title: 'Birthday Party', date: '2024-03-23', location: 'Tribe hotel', attendees: ['precious,Chantel,Hemedy,Miriam'] },
]);

console.log(calendar1.addAttendeeToEvent());
console.log(calendar1.displayEvents());



  