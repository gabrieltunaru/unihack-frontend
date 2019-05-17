import DateTimeFormat = Intl.DateTimeFormat;

export class Certificate {
  nr: string;
  date: DateTimeFormat;
  specialization: string;
  name: string;
  studyYear: string;
  universityYear: string;
  frequency: boolean;
  mentions: string;
  purpose: string;
}

