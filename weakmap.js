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
        return eventDate >= currentDate && event.date.split('-')[1] === date.split('-')[1];
      });
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
    { title: 'Church day', date: '2024-03-17', location: 'Church', attendees: 'Everyone' },
    { title: 'School', date: '2024-03-18', location: 'Zindua school', attendees: 'Diana, Gin, Jane' },
    { title: 'Lunch with Friends', date: '2024-03-19', location: 'Jiko Restaurant', attendees: 'Islam,Caren,Reyna' },
    { title: 'School', date: '2024-03-20', location: 'Zindua School', attendees: 'Sarah,David,James' },
    { title: 'Movies', date: '2024-03-21', location: 'Cinema max', attendees: 'Nevy,Brian,Eugene' },
    { title: 'School', date: '2024-03-22', location: 'Zindua School', attendees: 'Preez,Jery,Tom' },
    { title: 'Birthday Party', date: '2024-03-24', location: 'Tribe Hotel', attendees: 'Precious,Chantel,Hemedy,Miriam' },
  ]);
  
  const upcomingEvents = calendar1.filterEventsByDate(new Date().toISOString().split('T')[0]);
  console.log(upcomingEvents.map(event => `Title: ${event.title}, Date: ${event.date.split('T')[0]}, Location: ${event.location}, Attendees: ${event.attendees}`).join('\n'));
