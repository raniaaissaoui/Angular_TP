import { TicketMajor } from './ticket-major.enum';
export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major: TicketMajor;
}
