import {
  doc,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import type { Opportunity, OpportunityResponse } from "@/types";
import { opportunityCollection } from "@/firebase.config";
import type { COUNTRIES } from "@/utils";

export async function getOpportunityById(id: string) {
  const opportunityRef = doc(opportunityCollection, id);
  const opportunity = await getDoc(opportunityRef);
  if (opportunity.exists())
    return { ...opportunity.data(), id: opportunity.id };
  else return undefined;
}

export async function getAllOpportunities() {
  const opportunities: Opportunity[] = [];
  const q = query(opportunityCollection);
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    opportunities.push({
      ...data,
      id,
    });
  });

  return opportunities;
}

export async function getAllOGTOpportunities() {
  const opportunities: Opportunity[] = [];
  const q = query(opportunityCollection, where("function", "==", "OGT"));

  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    opportunities.push({
      ...data,
      id,
    });
  });

  return opportunities;
}

export async function getAllOGVOpportunities() {
  const opportunities: Opportunity[] = [];
  const q = query(opportunityCollection, where("function", "==", "OGV"));
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    opportunities.push({
      ...data,
      id,
    });
  });

  return opportunities;
}

async function filterByTimeslots(
  querySnapshot: QuerySnapshot<OpportunityResponse>,
  period: { begin: Date; end: Date }
) {
  const opportunities: Opportunity[] = [];
  querySnapshot.docs.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    const timeslots = data.timeslots;
    const timeslotsWhereFilterMatches = timeslots.filter((timeslot) => {
      return (
        timeslot.begin.toDate().getTime() >= period.begin.getTime() &&
        timeslot.end.toDate().getTime() <= period.end.getTime()
      );
    });
    if (timeslotsWhereFilterMatches.length !== 0) {
      opportunities.push({
        ...data,
        id,
      });
    }
  });
  return opportunities;
}

export async function getFilteredOGTOpportunities(filters: {
  country?: typeof COUNTRIES[number];
  period?: {
    begin: Date;
    end: Date;
  };
}) {
  let opportunities: Opportunity[] = [];
  let q = query(opportunityCollection, where("function", "==", "OGT"));

  if (filters.country && !filters.period) {
    q = query(
      opportunityCollection,
      where("function", "==", "OGT"),
      where("country", "==", filters.country)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      opportunities.push({
        ...data,
        id,
      });
    });
  } else if (filters.period && !filters.country) {
    q = query(opportunityCollection, where("function", "==", "OGT"));
    const querySnapshot = await getDocs(q);

    opportunities = await filterByTimeslots(querySnapshot, {
      begin: filters.period.begin,
      end: filters.period.end,
    });
  } else if (filters.period && filters.country) {
    q = query(
      opportunityCollection,
      where("function", "==", "OGT"),
      where("country", "==", filters.country)
    );
    const querySnapshot = await getDocs(q);

    opportunities = await filterByTimeslots(querySnapshot, {
      begin: filters.period.begin,
      end: filters.period.end,
    });
  }

  return opportunities;
}

export async function getFilteredOGVOpportunities(filters: {
  country?: typeof COUNTRIES[number];
  period?: {
    begin: Date;
    end: Date;
  };
}) {
  let opportunities: Opportunity[] = [];
  let q = query(opportunityCollection, where("function", "==", "OGV"));

  if (filters.country && !filters.period) {
    q = query(
      opportunityCollection,
      where("function", "==", "OGV"),
      where("country", "==", filters.country)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      opportunities.push({
        ...data,
        id,
      });
    });
  } else if (filters.period && !filters.country) {
    q = query(opportunityCollection, where("function", "==", "OGV"));
    const querySnapshot = await getDocs(q);

    opportunities = await filterByTimeslots(querySnapshot, {
      begin: filters.period.begin,
      end: filters.period.end,
    });
  } else if (filters.period && filters.country) {
    q = query(
      opportunityCollection,
      where("function", "==", "OGV"),
      where("country", "==", filters.country)
    );
    const querySnapshot = await getDocs(q);

    opportunities = await filterByTimeslots(querySnapshot, {
      begin: filters.period.begin,
      end: filters.period.end,
    });
  }

  return opportunities;
}

export async function getFilteredOpportunities(filters: {
  country?: typeof COUNTRIES[number];
  period?: {
    begin: Date;
    end: Date;
  };
}) {
  let opportunities: Opportunity[] = [];
  let q = query(opportunityCollection);

  if (filters.country && !filters.period) {
    q = query(
      opportunityCollection,

      where("country", "==", filters.country)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      opportunities.push({
        ...data,
        id,
      });
    });
  } else if (filters.period && !filters.country) {
    q = query(opportunityCollection);
    const querySnapshot = await getDocs(q);

    opportunities = await filterByTimeslots(querySnapshot, {
      begin: filters.period.begin,
      end: filters.period.end,
    });
  } else if (filters.period && filters.country) {
    q = query(opportunityCollection, where("country", "==", filters.country));
    const querySnapshot = await getDocs(q);

    opportunities = await filterByTimeslots(querySnapshot, {
      begin: filters.period.begin,
      end: filters.period.end,
    });
  }

  return opportunities;
}
