export type Address = {
  street: string
  city: string
  state: string
  zip: string
}

export type Book = {
  id: string
  title: string
  author: string
  tags: Array<string>
  publishedYear: number
  checkedOutByMemberId?: string
}

export type Member = {
  id: string
  name: string
  favoriteTags: Array<string>
  email?: string
}

export type Event = {
  id: string
  name: string
  date: string
  attendeeIds: Array<string>
}

export type Room = {
  id: string
  name: string
  capacity: number
}

export type Library = {
  name: string
  address: Address
  books: Array<Book>
  members: Array<Member>
  eventsById: Record<string, Event>
  roomsById: Record<string, Room>
}

export const library = {
  name: 'Maple Street Library',
  address: {
    street: '125 Maple Street',
    city: 'Riverton',
    state: 'CO',
    zip: '80444',
  },
  roomsById: {
    'room-quiet': {
      id: 'room-quiet',
      name: 'Quiet Room',
      capacity: 12,
    },
    'room-story': {
      id: 'room-story',
      name: 'Story Corner',
      capacity: 25,
    },
    'room-workshop': {
      id: 'room-workshop',
      name: 'Workshop Lab',
      capacity: 40,
    },
    'room-rooftop': {
      id: 'room-rooftop',
      name: 'Rooftop Patio',
      capacity: 18,
    },
  },
  books: [
    {
      id: 'book-collect',
      title: 'Collecting Data',
      author: 'Rina Patel',
      tags: ['data', 'arrays', 'maps'],
      publishedYear: 2022,
      checkedOutByMemberId: 'member-ruby',
    },
    {
      id: 'book-story',
      title: 'Story Structures',
      author: 'Miguel Torres',
      tags: ['fiction', 'objects'],
      publishedYear: 2018,
    },
    {
      id: 'book-quiet',
      title: 'The Quiet Room',
      author: 'Leah Cho',
      tags: ['fiction', 'sets'],
      publishedYear: 2021,
      checkedOutByMemberId: 'member-aria',
    },
    {
      id: 'book-maps',
      title: 'Maps for Humans',
      author: 'Drew Wilson',
      tags: ['maps', 'objects'],
      publishedYear: 2020,
    },
    {
      id: 'book-cook',
      title: 'Code & Cook',
      author: 'Ella Brooks',
      tags: ['arrays', 'objects', 'data'],
      publishedYear: 2016,
    },
    {
      id: 'book-forest',
      title: 'Forest Almanac',
      author: 'Tariq Green',
      tags: ['nature', 'sets'],
      publishedYear: 2019,
      checkedOutByMemberId: 'member-zoe',
    },
    {
      id: 'book-letters',
      title: 'Letters in Between',
      author: 'Ava Romero',
      tags: ['fiction', 'arrays'],
      publishedYear: 2024,
    },
    {
      id: 'book-shelf',
      title: 'Shelf Logic',
      author: 'Noah Khan',
      tags: ['data', 'reduce'],
      publishedYear: 2017,
      checkedOutByMemberId: 'member-ruby',
    },
  ],
  members: [
    {
      id: 'member-ruby',
      name: 'Ruby Carter',
      favoriteTags: ['data', 'maps', 'arrays'],
      email: 'ruby.carter@maple.library',
    },
    {
      id: 'member-aria',
      name: 'Aria Singh',
      favoriteTags: ['fiction', 'objects'],
    },
    {
      id: 'member-zoe',
      name: 'Zoe Nguyen',
      favoriteTags: ['nature', 'sets'],
      email: 'zoe.nguyen@maple.library',
    },
    {
      id: 'member-ezra',
      name: 'Ezra Blake',
      favoriteTags: ['maps', 'reduce'],
    },
    {
      id: 'member-lina',
      name: 'Lina Park',
      favoriteTags: ['arrays', 'data'],
      email: 'lina.park@maple.library',
    },
  ],
  eventsById: {
    'event-book-club': {
      id: 'event-book-club',
      name: 'Neighborhood Book Club',
      date: '2026-02-12',
      attendeeIds: ['member-ruby', 'member-aria', 'member-lina'],
    },
    'event-kids-hour': {
      id: 'event-kids-hour',
      name: 'Kids Story Hour',
      date: '2026-02-18',
      attendeeIds: ['member-zoe'],
    },
    'event-data-night': {
      id: 'event-data-night',
      name: 'Data Night',
      date: '2026-02-25',
      attendeeIds: ['member-ruby', 'member-ezra'],
    },
  },
} satisfies Library
