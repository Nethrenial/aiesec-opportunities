import {
  doc,
  getDoc,
  query,
  onSnapshot,
  QueryConstraint,
  QuerySnapshot,
  where,
  getDocsFromCache,
  getDocsFromServer,
} from "firebase/firestore";
import type {
  OGXFunction,
  Opportunity,
  OpportunityResponse,
  OpportunityFilters,
} from "@/types";
import { opportunityCollection } from "@/firebase.config";

export async function getOpportunityById(id: string) {
  const opportunityRef = doc(opportunityCollection, id);
  const opportunity = await getDoc(opportunityRef);
  if (opportunity.exists())
    return { ...opportunity.data(), id: opportunity.id };
  else return undefined;
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

let dbUpdated = true;

export async function getOpportunities(
  ogxFunction: OGXFunction | "all",
  filters?: OpportunityFilters
) {
  const opportunities: Opportunity[] = [];
  let snapshot: QuerySnapshot<OpportunityResponse>;
  if (ogxFunction === "all") {
    if (filters) {
      const conditions: QueryConstraint[] = [];
      if (filters.country) {
        conditions.push(where("country", "==", filters.country));
      }
      if (filters.category) {
        conditions.push(where("category", "==", filters.category));
      }
      const q = query(opportunityCollection, ...conditions);
      if (!dbUpdated) {
        try {
          snapshot = await getDocsFromCache(q);
          console.log("Got from cache");
        } catch {
          snapshot = await getDocsFromServer(q);
          console.log("Got from server");
        }
      } else {
        snapshot = await getDocsFromServer(q);
        console.log("Got from server");
      }

      if (!filters.period) {
        snapshot.docs.forEach((doc) => {
          const id = doc.id;
          const data = doc.data();
          opportunities.push({
            ...data,
            id,
          });
        });
      } else {
        opportunities.push(
          ...(await filterByTimeslots(snapshot, filters.period))
        );
      }
    } else if (!filters) {
      const q = query(opportunityCollection);
      if (!dbUpdated) {
        try {
          snapshot = await getDocsFromCache(q);
          console.log("Got from cache");
        } catch {
          snapshot = await getDocsFromServer(q);
          console.log("Got from server");
        }
      } else {
        snapshot = await getDocsFromServer(q);
        console.log("Got from server");
      }
      snapshot.docs.forEach((doc) => {
        const id = doc.id;
        const data = doc.data();
        opportunities.push({
          ...data,
          id,
        });
      });
    }
  } else if (ogxFunction === "OGT") {
    if (filters) {
      const conditions: QueryConstraint[] = [where("function", "==", "OGT")];
      if (filters.country) {
        conditions.push(where("country", "==", filters.country));
      }
      const q = query(opportunityCollection, ...conditions);
      if (!dbUpdated) {
        try {
          snapshot = await getDocsFromCache(q);
          console.log("Got from cache");
        } catch {
          snapshot = await getDocsFromServer(q);
          console.log("Got from server");
        }
      } else {
        snapshot = await getDocsFromServer(q);
        console.log("Got from server");
      }
      if (!filters.period) {
        snapshot.docs.forEach((doc) => {
          const id = doc.id;
          const data = doc.data();
          opportunities.push({
            ...data,
            id,
          });
        });
      } else {
        opportunities.push(
          ...(await filterByTimeslots(snapshot, filters.period))
        );
      }
    } else if (!filters) {
      const q = query(opportunityCollection, where("function", "==", "OGT"));
      if (!dbUpdated) {
        try {
          snapshot = await getDocsFromCache(q);
          console.log("Got from cache");
        } catch {
          snapshot = await getDocsFromServer(q);
          console.log("Got from server");
        }
      } else {
        snapshot = await getDocsFromServer(q);
        console.log("Got from server");
      }
      snapshot.docs.forEach((doc) => {
        const id = doc.id;
        const data = doc.data();
        opportunities.push({
          ...data,
          id,
        });
      });
    }
  } else if (ogxFunction === "OGV") {
    if (filters) {
      const conditions: QueryConstraint[] = [where("function", "==", "OGV")];
      if (filters.country) {
        conditions.push(where("country", "==", filters.country));
      }
      if (filters.category) {
        conditions.push(where("category", "==", filters.category));
      }
      const q = query(opportunityCollection, ...conditions);
      if (!dbUpdated) {
        try {
          snapshot = await getDocsFromCache(q);
          console.log("Got from cache");
        } catch {
          snapshot = await getDocsFromServer(q);
          console.log("Got from server");
        }
      } else {
        snapshot = await getDocsFromServer(q);
        console.log("Got from server");
      }
      if (!filters.period) {
        snapshot.docs.forEach((doc) => {
          const id = doc.id;
          const data = doc.data();
          opportunities.push({
            ...data,
            id,
          });
        });
      } else {
        opportunities.push(
          ...(await filterByTimeslots(snapshot, filters.period))
        );
      }
    } else if (!filters) {
      const q = query(opportunityCollection, where("function", "==", "OGV"));
      if (!dbUpdated) {
        try {
          snapshot = await getDocsFromCache(q);
          console.log("Got from cache");
        } catch {
          snapshot = await getDocsFromServer(q);
          console.log("Got from server");
        }
      } else {
        snapshot = await getDocsFromServer(q);
        console.log("Got from server");
      }
      snapshot.docs.forEach((doc) => {
        const id = doc.id;
        const data = doc.data();
        opportunities.push({
          ...data,
          id,
        });
      });
    }
  }
  dbUpdated = false;
  return opportunities;
}

onSnapshot(opportunityCollection, () => {
  dbUpdated = true;
});
