const events = [
    {
        title: 'Church',
        date:new Date('2024-03-17T11:00:00'),
        Location: 'St.Jude Church',
        attendees: new Set(['Evrryone'])
    },
    {
        title: 'School',
        date:new Date('2024-03-18T11:00:00'),
        location: 'Zindua School',
        attendees: new Set(['Diana', 'GIn', 'Jane'])
    },
    {
        title: 'Lunch with friends',
        date: new Date('2024-03-19T11:00:00'),
        location: 'Jiko Restaurant',
        attendees: new Set(['Islam', 'Caren', 'Reyna'])
    },
    {
        title: 'School',
        date:new Date('2024-03-20T11:00:00'),
        location: 'Zindua School',
        attendees: new Set(['Sarah', 'David', 'James'])
    },
    {
        title: 'Movies',
        date:new Date('2024-03-21T11:00:00'),
        locatiin: 'Cinema Max',
        attendees: new Set(['Nevy', 'Brian', 'Eugene'])
    },
    {
        title: 'School',
        date:new Date('2024-03-22T11:00:00'),
        location: 'Zindua School',
        attendees: new Set(['Prezzy', 'Jerry', 'Tom'])
    },
    {
        title: 'Birthday Party',
        date:new Date('2024-03-23T11:00:00'),
        location: 'Tribe Hotel',
        attendees: new Set(['Precious', 'Chantel', 'Hemmedy', 'Miriam'])
    }
];

console.log(events);

const eventOrganizers = new WeakMap();

eventOrganizers.set(events[0], 'Diana');
eventOrganizers.set(events[1], 'Sarah');
eventOrganizers.set(events[2],'Islam' );
eventOrganizers.set(events[3], 'David');
eventOrganizers.set(events[4], 'Eugene');
eventOrganizers.set(events[5], 'Jerry');
eventOrganizers.set(events[6], 'Precious');


for (const event of events) {
    const organizer = eventOrganizers.get(event);
    console.log(`Event: ${event.title}, Organizer: ${organizer}`);

}