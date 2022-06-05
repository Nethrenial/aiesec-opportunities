import type { Timestamp } from "firebase/firestore";
import type { CATEGORY_OPTIONS, COUNTRIES, FUNCTION_OPTIONS } from "@/utils";

export interface CreateOpportunityDTO {
  title: string;
  description: string;
  country: string;
  timeslots: Array<Timeslot>;
  function: OGXFunction;
  category?: OGVCategory;
  salary?: number;
  currency?: string;
  poster: File;
  opportunityLink: string;
}

export interface UpdateOpportunityDTO {
  id: string;
  title: string;
  description: string;
  country: string;
  timeslots: Array<Timeslot>;
  function: OGXFunction;
  opportunityLink: string;
  category?: OGVCategory;
  salary?: number;
  currency?: string;
  poster: File;
}

export interface OpportunityOptional {
  id?: string;
  title?: string;
  description?: string;
  country?: string;
  timeslots?: Array<Timeslot>;
  function?: OGXFunction;
  opportunityLink?: string;
  category?: OGVCategory;
  salary?: number;
  currency?: string;
  poster?: string;
}

export interface OpportunityResponse {
  title: string;
  description: string;
  country: string;
  timeslots: Array<TimeslotResponse>;
  function: OGXFunction;
  opportunityLink: string;
  category?: OGVCategory;
  salary?: number;
  currency?: string;
  poster: string;
  createdAt: Timestamp;
}

export interface Opportunity extends OpportunityResponse {
  id: string;
}

export interface Timeslot {
  begin: Date;
  end: Date;
}

export interface TimeslotResponse {
  begin: Timestamp;
  end: Timestamp;
}

export type OGXFunction = "OGV" | "OGT";

export type OGVCategory =
  | "Youth 4 Impact"
  | "Green Leaders"
  | "Raise Your Voice"
  | "Scale Up!"
  | "Global Classroom"
  | "On The Map"
  | "Equify"
  | "Heartbeat"
  | "Aquatica"
  | "Rooted"
  | "Skill Up!"
  | "Fingerprint"
  | "Eat 4 Change";

export interface QueryOptions {
  function: typeof FUNCTION_OPTIONS[number] | typeof FUNCTION_OPTIONS;
  country?: typeof COUNTRIES[number];
  timePeriod?: {
    begin: Date;
    end: Date;
  };
  ogvCategory?: typeof CATEGORY_OPTIONS[number];
}
