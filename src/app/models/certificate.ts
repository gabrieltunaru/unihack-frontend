import DateTimeFormat = Intl.DateTimeFormat;

export class Certificate {
  id?: number;
  created?: DateTimeFormat;
  specialization: string;
  name: string;
  studyYear: number;
  frequency: string;
  universityYear?: number;
  mentions: string;
  purpose: string;
  status: string;
}

