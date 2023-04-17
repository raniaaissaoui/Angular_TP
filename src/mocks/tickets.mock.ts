import { Ticket } from '../models/ticket';
import { TicketMajor } from '../models/ticket-major.enum';
const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Marseille',
    description: '',
    date: dateToday,
    student: 'Paul',
    major:TicketMajor.computer
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major:TicketMajor.Science
  },
];
