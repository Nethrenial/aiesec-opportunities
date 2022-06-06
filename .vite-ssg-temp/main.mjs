var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import NProgress from "nprogress";
import { createPinia, defineStore, storeToRefs } from "pinia";
import { ViteSSG } from "vite-ssg";
import { useRouter } from "vue-router";
import { useSSRContext, defineComponent, resolveComponent, mergeProps, openBlock, createElementBlock, createElementVNode, unref, withCtx, createVNode, computed, ref, createTextVNode, toDisplayString, resolveDynamicComponent, createBlock, KeepAlive, createStaticVNode, onMounted, toRefs, reactive } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { useDark, useToggle, onClickOutside } from "@vueuse/core";
import DatePicker from "@vuepic/vue-datepicker";
import { useHead } from "@vueuse/head";
import { format } from "date-fns";
import { createToast } from "mosha-vue-toastify";
import { getFirestore, clearIndexedDbPersistence, enableMultiTabIndexedDbPersistence, collection, onSnapshot, doc, getDoc, where, query, getDocsFromCache, getDocsFromServer, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const install$1 = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
var __glob_9_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ isClient, initialState, app: app2 }) => {
  const pinia = createPinia();
  app2.use(pinia);
  if (isClient)
    pinia.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia.state.value;
};
var __glob_9_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "not-found" }, _attrs))}><div text-4xl><div i-carbon-warning inline-block></div></div>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<div><button btn text-sm m="3 t8">Back</button></div></main>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/404.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _hoisted_1$p = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z"
}, null, -1);
const _hoisted_3$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$p,
  _hoisted_3$e
];
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_4$6);
}
var __unplugin_components_1$a = { name: "carbon-logout", render: render$p };
const _hoisted_1$o = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFAC33",
  d: "M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ createElementVNode("circle", {
  cx: "18",
  cy: "18",
  r: "10",
  fill: "#FFAC33"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$o,
  _hoisted_3$d
];
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_4$5);
}
var __unplugin_components_1$9 = { name: "twemoji-sun", render: render$o };
const _hoisted_1$n = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 64 64",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$n = /* @__PURE__ */ createElementVNode("path", {
  fill: "#ffce31",
  d: "M43.1 2c3.2 4.8 5.1 10.6 5.1 16.8C48.3 35.5 34.6 49 17.7 49C12 49 6.6 47.4 2 44.7C7.2 55 17.9 62 30.3 62C47.8 62 62 48 62 30.7C62 17.9 54.2 6.9 43.1 2z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$n
];
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$c);
}
var __unplugin_components_0$d = { name: "emojione-crescent-moon", render: render$n };
const isDark = useDark();
useToggle(isDark);
var DarkModeToggle_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  name: "DarkModeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_emojione_crescent_moon = __unplugin_components_0$d;
      const _component_i_twemoji_sun = __unplugin_components_1$9;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["toggle", unref(isDark) ? "dark" : ""]
      }, _attrs))} data-v-88ed0908><div class="${ssrRenderClass([unref(isDark) ? "dark" : "", "toggle-nob grid-centered"])}" data-v-88ed0908>`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(_component_i_emojione_crescent_moon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_i_twemoji_sun, null, null, _parent));
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/DarkModeToggle.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var __unplugin_components_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-88ed0908"]]);
var _imports_0 = "/assets/Logo-Dark.9dcd01ac.svg";
const firebaseConfig = {
  apiKey: "AIzaSyC5BLRv5JkTysrW2xKpgttJ1p4RX1fKoXY",
  authDomain: "aiesec-opportunities.firebaseapp.com",
  projectId: "aiesec-opportunities",
  storageBucket: "aiesec-opportunities.appspot.com",
  messagingSenderId: "178194258107",
  appId: "1:178194258107:web:25167f0d3d38bc9405719e",
  measurementId: "G-1QP461L60P"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
getAnalytics(app);
const firestore = getFirestore(app);
getStorage(app);
clearIndexedDbPersistence(firestore);
enableMultiTabIndexedDbPersistence(firestore);
const createCollection = (collectionName) => {
  return collection(firestore, collectionName);
};
const opportunityCollection = createCollection("opportunities");
async function loginAdmin(payload) {
  const res = await signInWithEmailAndPassword(auth, payload.email, payload.password);
  return res.user;
}
async function logoutAdmin() {
  await signOut(auth);
}
async function getOpportunityById(id) {
  const opportunityRef = doc(opportunityCollection, id);
  const opportunity = await getDoc(opportunityRef);
  if (opportunity.exists())
    return __spreadProps(__spreadValues({}, opportunity.data()), { id: opportunity.id });
  else
    return void 0;
}
async function filterByTimeslots(querySnapshot, period) {
  const opportunities = [];
  querySnapshot.docs.forEach((doc2) => {
    const id = doc2.id;
    const data = doc2.data();
    const timeslots = data.timeslots;
    const timeslotsWhereFilterMatches = timeslots.filter((timeslot) => {
      return timeslot.begin.toDate().getTime() >= period.begin.getTime() && timeslot.end.toDate().getTime() <= period.end.getTime();
    });
    if (timeslotsWhereFilterMatches.length !== 0) {
      opportunities.push(__spreadProps(__spreadValues({}, data), {
        id
      }));
    }
  });
  return opportunities;
}
let dbUpdated = true;
async function getOpportunities(ogxFunction, filters) {
  const opportunities = [];
  let snapshot;
  if (ogxFunction === "all") {
    if (filters) {
      const conditions = [];
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
        snapshot.docs.forEach((doc2) => {
          const id = doc2.id;
          const data = doc2.data();
          opportunities.push(__spreadProps(__spreadValues({}, data), {
            id
          }));
        });
      } else {
        opportunities.push(...await filterByTimeslots(snapshot, filters.period));
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
      snapshot.docs.forEach((doc2) => {
        const id = doc2.id;
        const data = doc2.data();
        opportunities.push(__spreadProps(__spreadValues({}, data), {
          id
        }));
      });
    }
  } else if (ogxFunction === "OGT") {
    if (filters) {
      const conditions = [where("function", "==", "OGT")];
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
        snapshot.docs.forEach((doc2) => {
          const id = doc2.id;
          const data = doc2.data();
          opportunities.push(__spreadProps(__spreadValues({}, data), {
            id
          }));
        });
      } else {
        opportunities.push(...await filterByTimeslots(snapshot, filters.period));
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
      snapshot.docs.forEach((doc2) => {
        const id = doc2.id;
        const data = doc2.data();
        opportunities.push(__spreadProps(__spreadValues({}, data), {
          id
        }));
      });
    }
  } else if (ogxFunction === "OGV") {
    if (filters) {
      const conditions = [where("function", "==", "OGV")];
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
        snapshot.docs.forEach((doc2) => {
          const id = doc2.id;
          const data = doc2.data();
          opportunities.push(__spreadProps(__spreadValues({}, data), {
            id
          }));
        });
      } else {
        opportunities.push(...await filterByTimeslots(snapshot, filters.period));
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
      snapshot.docs.forEach((doc2) => {
        const id = doc2.id;
        const data = doc2.data();
        opportunities.push(__spreadProps(__spreadValues({}, data), {
          id
        }));
      });
    }
  }
  dbUpdated = false;
  return opportunities;
}
onSnapshot(opportunityCollection, () => {
  dbUpdated = true;
});
const CATEGORY_OPTIONS = [
  "Youth 4 Impact",
  "Green Leaders",
  "Raise Your Voice",
  "Scale Up!",
  "Global Classroom",
  "On The Map",
  "Equify",
  "Heartbeat",
  "Aquatica",
  "Rooted",
  "Skill Up!",
  "Fingerprint",
  "Eat 4 Change"
];
const FUNCTION_OPTIONS = ["OGV", "OGT"];
const COUNTRIES$1 = [
  "United States",
  "Canada",
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and/or Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia (Hrvatska)",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecudaor",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "France, Metropolitan",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and Mc Donald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfork Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St. Helena",
  "St. Pierre and Miquelon",
  "Sudan",
  "Suriname",
  "Svalbarn and Jan Mayen Islands",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States minor outlying islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City State",
  "Venezuela",
  "Vietnam",
  "Virigan Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna Islands",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zaire",
  "Zambia",
  "Zimbabwe"
];
const JOB_TITLES = [
  "Academic librarian",
  "Accountant",
  "Accounting technician",
  "Actuary",
  "Adult nurse",
  "Advertising account executive",
  "Advertising account planner",
  "Advertising copywriter",
  "Advice worker",
  "Advocate (Scotland)",
  "Aeronautical engineer",
  "Agricultural consultant",
  "Agricultural manager",
  "Aid worker/humanitarian worker",
  "Air traffic controller",
  "Airline cabin crew",
  "Amenity horticulturist",
  "Analytical chemist",
  "Animal nutritionist",
  "Animator",
  "Archaeologist",
  "Architect",
  "Architectural technologist",
  "Archivist",
  "Armed forces officer",
  "Aromatherapist",
  "Art therapist",
  "Arts administrator",
  "Auditor",
  "Automotive engineer",
  "Barrister",
  "Barrister\u2019s clerk",
  "Bilingual secretary",
  "Biomedical engineer",
  "Biomedical scientist",
  "Biotechnologist",
  "Brand manager",
  "Broadcasting presenter",
  "Building control officer/surveyor",
  "Building services engineer",
  "Building surveyor",
  "Camera operator",
  "Careers adviser (higher education)",
  "Careers adviser",
  "Careers consultant",
  "Cartographer",
  "Catering manager",
  "Charities administrator",
  "Charities fundraiser",
  "Chemical (process) engineer",
  "Child psychotherapist",
  "Children's nurse",
  "Chiropractor",
  "Civil engineer",
  "Civil Service administrator",
  "Clinical biochemist",
  "Clinical cytogeneticist",
  "Clinical microbiologist",
  "Clinical molecular geneticist",
  "Clinical research associate",
  "Clinical scientist - tissue typing",
  "Clothing and textile technologist",
  "Colour technologist",
  "Commercial horticulturist",
  "Commercial/residential/rural surveyor",
  "Commissioning editor",
  "Commissioning engineer",
  "Commodity broker",
  "Communications engineer",
  "Community arts worker",
  "Community education officer",
  "Community worker",
  "Company secretary",
  "Computer sales support",
  "Computer scientist",
  "Conference organiser",
  "Consultant",
  "Consumer rights adviser",
  "Control and instrumentation engineer",
  "Corporate banker",
  "Corporate treasurer",
  "Counsellor",
  "Courier/tour guide",
  "Court reporter/verbatim reporter",
  "Credit analyst",
  "Crown Prosecution Service lawyer",
  "Crystallographer",
  "Curator",
  "Customs officer",
  "Cyber security specialist",
  "Dance movement therapist",
  "Data analyst",
  "Data scientist",
  "Data visualisation analyst",
  "Database administrator",
  "Debt/finance adviser",
  "Dental hygienist",
  "Dentist",
  "Design engineer",
  "Dietitian",
  "Diplomatic service",
  "Doctor (general practitioner, GP)",
  "Doctor (hospital)",
  "Dramatherapist",
  "Economist",
  "Editorial assistant",
  "Education administrator",
  "Electrical engineer",
  "Electronics engineer",
  "Employment advice worker",
  "Energy conservation officer",
  "Engineering geologist",
  "Environmental education officer",
  "Environmental health officer",
  "Environmental manager",
  "Environmental scientist",
  "Equal opportunities officer",
  "Equality and diversity officer",
  "Ergonomist",
  "Estate agent",
  "European Commission administrators",
  "Exhibition display designer",
  "Exhibition organiser",
  "Exploration geologist",
  "Facilities manager",
  "Field trials officer",
  "Financial manager",
  "Firefighter",
  "Fisheries officer",
  "Fitness centre manager",
  "Food scientist",
  "Food technologist",
  "Forensic scientist",
  "Geneticist",
  "Geographical information systems manager",
  "Geomatics/land surveyor",
  "Government lawyer",
  "Government research officer",
  "Graphic designer",
  "Health and safety adviser",
  "Health and safety inspector",
  "Health promotion specialist",
  "Health service manager",
  "Health visitor",
  "Herbalist",
  "Heritage manager",
  "Higher education administrator",
  "Higher education advice worker",
  "Homeless worker",
  "Horticultural consultant",
  "Hotel manager",
  "Housing adviser",
  "Human resources officer",
  "Hydrologist",
  "Illustrator",
  "Immigration officer",
  "Immunologist",
  "Industrial/product designer",
  "Information scientist",
  "Information systems manager",
  "Information technology/software trainers",
  "Insurance broker",
  "Insurance claims inspector",
  "Insurance risk surveyor",
  "Insurance underwriter",
  "Interpreter",
  "Investment analyst",
  "Investment banker - corporate finance",
  "Investment banker \u2013 operations",
  "Investment fund manager",
  "IT consultant",
  "IT support analyst",
  "Journalist",
  "Laboratory technician",
  "Land-based engineer",
  "Landscape architect",
  "Learning disability nurse",
  "Learning mentor",
  "Lecturer (adult education)",
  "Lecturer (further education)",
  "Lecturer (higher education)",
  "Legal executive",
  "Leisure centre manager",
  "Licensed conveyancer",
  "Local government administrator",
  "Local government lawyer",
  "Logistics/distribution manager",
  "Magazine features editor",
  "Magazine journalist",
  "Maintenance engineer",
  "Management accountant",
  "Manufacturing engineer",
  "Manufacturing machine operator",
  "Manufacturing toolmaker",
  "Marine scientist",
  "Market research analyst",
  "Market research executive",
  "Marketing account manager",
  "Marketing assistant",
  "Marketing executive",
  "Marketing manager (social media)",
  "Materials engineer",
  "Materials specialist",
  "Mechanical engineer",
  "Media analyst",
  "Media buyer",
  "Media planner",
  "Medical physicist",
  "Medical representative",
  "Mental health nurse",
  "Metallurgist",
  "Meteorologist",
  "Microbiologist",
  "Midwife",
  "Mining engineer",
  "Mobile developer",
  "Multimedia programmer",
  "Multimedia specialists",
  "Museum education officer",
  "Museum/gallery exhibition officer",
  "Music therapist",
  "Nanoscientist",
  "Nature conservation officer",
  "Naval architect",
  "Network administrator",
  "Nurse",
  "Nutritional therapist",
  "Nutritionist",
  "Occupational therapist",
  "Oceanographer",
  "Office manager",
  "Operational researcher",
  "Orthoptist",
  "Outdoor pursuits manager",
  "Packaging technologist",
  "Paediatric nurse",
  "Paramedic",
  "Patent attorney",
  "Patent examiner",
  "Pension scheme manager",
  "Personal assistant",
  "Petroleum engineer",
  "Pharmacist",
  "Pharmacologist",
  "Pharmacovigilance officer",
  "Photographer",
  "Physiotherapist",
  "Picture researcher",
  "Planning and development surveyor",
  "Planning technician",
  "Plant breeder",
  "Police officer",
  "Political party agent",
  "Political party research officer",
  "Practice nurse",
  "Press photographer",
  "Press sub-editor",
  "Prison officer",
  "Private music teacher",
  "Probation officer",
  "Product development scientist",
  "Production manager",
  "Programme researcher",
  "Project manager",
  "Psychologist (clinical)",
  "Psychologist (educational)",
  "Psychotherapist",
  "Public affairs consultant (lobbyist)",
  "Public affairs consultant (research)",
  "Public house manager",
  "Public librarian",
  "Public relations (PR) officer",
  "QA analyst",
  "Quality assurance manager",
  "Quantity surveyor",
  "Records manager",
  "Recruitment consultant",
  "Recycling officer",
  "Regulatory affairs officer",
  "Research chemist",
  "Research scientist",
  "Restaurant manager",
  "Retail banker",
  "Retail buyer",
  "Retail manager",
  "Retail merchandiser",
  "Retail pharmacist",
  "Sales executive",
  "Sales manager",
  "Scene of crime officer",
  "Secretary",
  "Seismic interpreter",
  "Site engineer",
  "Site manager",
  "Social researcher",
  "Social worker",
  "Software developer",
  "Soil scientist",
  "Solicitor",
  "Speech and language therapist",
  "Sports coach",
  "Sports development officer",
  "Sports therapist",
  "Statistician",
  "Stockbroker",
  "Structural engineer",
  "Systems analyst",
  "Systems developer",
  "Tax inspector",
  "Teacher (nursery/early years)",
  "Teacher (primary)",
  "Teacher (secondary)",
  "Teacher (special educational needs)",
  "Teaching/classroom assistant",
  "Technical author",
  "Technical sales engineer",
  "TEFL/TESL teacher",
  "Television production assistant",
  "Test automation developer",
  "Tour operator",
  "Tourism officer",
  "Tourist information manager",
  "Town and country planner",
  "Toxicologist",
  "Trade union research officer",
  "Trader",
  "Trading standards officer",
  "Training and development officer",
  "Translator",
  "Transportation planner",
  "Travel agent",
  "TV/film/theatre set designer",
  "UX designer",
  "Validation engineer",
  "Veterinary nurse",
  "Veterinary surgeon",
  "Video game designer",
  "Video game developer",
  "Volunteer work organiser",
  "Warehouse manager",
  "Waste disposal officer",
  "Water conservation officer",
  "Water engineer",
  "Web designer",
  "Web developer",
  "Welfare rights adviser",
  "Writer",
  "Youth worker"
];
const COUNTRIES = [
  "United States",
  "Canada",
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and/or Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia (Hrvatska)",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecudaor",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "France, Metropolitan",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and Mc Donald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfork Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St. Helena",
  "St. Pierre and Miquelon",
  "Sudan",
  "Suriname",
  "Svalbarn and Jan Mayen Islands",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States minor outlying islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City State",
  "Venezuela",
  "Vietnam",
  "Virigan Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna Islands",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zaire",
  "Zambia",
  "Zimbabwe"
];
const DESCRIPTION = `Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theor
y of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsu
m dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
const RANDOM_POSTER_LINK = "https://api.lorem.space/image/movie?w=680&h=680";
function getRandomTimeslotArray() {
  const count = Math.floor(Math.random() * 10);
  const arr = [];
  for (let index2 = 0; index2 < count; index2++) {
    const begin = new Date(Date.now() + 1e3 * 60 * 60 * 24 * Math.floor(Math.random() * 100));
    const end = new Date(Date.now() + 1e3 * 60 * 60 * 24 * Math.floor(Math.random() * 1e3));
    const timeslot = {
      begin,
      end
    };
    arr.push(timeslot);
  }
  return arr;
}
async function seedInFirebase(count) {
  const arr = new Array(count).fill(0);
  arr.forEach(async () => {
    const ogxFunction = FUNCTION_OPTIONS[Math.floor(Math.random() * FUNCTION_OPTIONS.length)];
    const category = CATEGORY_OPTIONS[Math.floor(Math.random() * CATEGORY_OPTIONS.length)];
    const title = JOB_TITLES[Math.floor(Math.random() * JOB_TITLES.length)];
    const description = DESCRIPTION;
    const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    const salary = Math.floor(Math.random() * 1e4);
    const opportunityLink = RANDOM_POSTER_LINK;
    const timeslots = getRandomTimeslotArray();
    if (ogxFunction === "OGT") {
      const docRef = await addDoc(collection(firestore, "opportunities"), {
        country,
        createdAt: new Date(),
        description,
        function: ogxFunction,
        timeslots,
        title,
        poster: RANDOM_POSTER_LINK,
        currency: "$",
        salary,
        opportunityLink
      });
      console.log("created", docRef.id);
    } else if (ogxFunction === "OGV") {
      const docRef = await addDoc(collection(firestore, "opportunities"), {
        country,
        createdAt: new Date(),
        description,
        function: ogxFunction,
        timeslots,
        title,
        poster: RANDOM_POSTER_LINK,
        category,
        opportunityLink
      });
      console.log("created", docRef.id);
    }
  });
}
const useAdminStore = defineStore("admin", {
  state: () => {
    return {
      admin: null
    };
  },
  actions: {
    async login(payload) {
      this.admin = await loginAdmin(payload);
    },
    async logout() {
      try {
        await logoutAdmin();
        this.admin = null;
      } catch (error) {
        createToast(error.message, {
          position: "bottom-center",
          type: "danger"
        });
      }
    }
  }
});
var AdminHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  name: "AdminHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useAdminStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_DarkModeToggle = __unplugin_components_1$8;
      const _component_i_carbon_logout = __unplugin_components_1$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "admin-header flex items-center justify-between" }, _attrs))} data-v-15b3a450>`);
      _push(ssrRenderComponent(_component_RouterLink, { to: "/dashboard/manage" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="AIESEC Logo" data-v-15b3a450${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "AIESEC Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-between gap-4" data-v-15b3a450>`);
      _push(ssrRenderComponent(_component_DarkModeToggle, null, null, _parent));
      _push(`<button data-v-15b3a450>`);
      _push(ssrRenderComponent(_component_i_carbon_logout, null, null, _parent));
      _push(`</button></div></header>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/AdminHeader.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var __unplugin_components_0$c = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-15b3a450"]]);
var admin_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$y = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_AdminHeader = __unplugin_components_0$c;
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin" }, _attrs))} data-v-53e9bef2>`);
  _push(ssrRenderComponent(_component_AdminHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/admin.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-53e9bef2"]]);
var auth_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$x = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "auth" }, _attrs))} data-v-3303c2f4>`);
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/auth.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var __layout_2 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-3303c2f4"]]);
const _hoisted_1$m = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",
  opacity: ".5"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
}, [
  /* @__PURE__ */ createElementVNode("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    from: "0 12 12",
    repeatCount: "indefinite",
    to: "360 12 12",
    type: "rotate"
  })
], -1);
const _hoisted_4$4 = [
  _hoisted_2$m,
  _hoisted_3$b
];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_4$4);
}
var __unplugin_components_0$b = { name: "eos-icons-loading", render: render$m };
var BaseActionButton_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  name: "BaseActionButton",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_eos_icons_loading = __unplugin_components_0$b;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "base-action-button" }, _attrs))} data-v-a08d9bae>`);
      if (props.loading) {
        _push(ssrRenderComponent(_component_i_eos_icons_loading, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-a08d9bae>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></button>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/BaseActionButton.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var __unplugin_components_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-a08d9bae"]]);
const _hoisted_1$l = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M8 15h8l-4-7"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$l
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$a);
}
var __unplugin_components_0$a = { name: "mdi-triangle-small-up", render: render$l };
var CountryFilter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  name: "CountryFilter",
  __ssrInlineRender: true,
  props: {
    countries: null,
    tabindex: null,
    label: null,
    labelFor: null,
    modelValue: null,
    isDefaultIcon: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const filteredCountries = computed(() => {
      return props.countries.filter((val) => {
        return val.toLowerCase().includes(props.modelValue.toLocaleLowerCase());
      });
    });
    let open = ref(false);
    const items = ref();
    const input = ref();
    onClickOutside(items, (e) => {
      const eventTarget = e.target;
      if (eventTarget !== input.value)
        open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_triangle_small_up = __unplugin_components_0$a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "country-filter mb-2",
        tabindex: __props.tabindex
      }, _attrs))} data-v-46460e26><div class="input-wrapper" data-v-46460e26><label${ssrRenderAttr("id", `${props.labelFor}-label`)}${ssrRenderAttr("for", props.labelFor)} class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-46460e26>${ssrInterpolate(props.label)}</label><input${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        ref_key: "input",
        ref: input,
        value: props.modelValue,
        role: "button"
      }))} data-v-46460e26><div class="${ssrRenderClass([[open.value ? "open" : "", props.isDefaultIcon ? "default" : ""], "icon pointer-events-none"])}" data-v-46460e26>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      if (props.isDefaultIcon) {
        _push(ssrRenderComponent(_component_i_mdi_triangle_small_up, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (open.value) {
        _push(`<div class="items"${ssrRenderAttr("aria-labelledby", `${props.labelFor}-label`)} data-v-46460e26><!--[-->`);
        ssrRenderList(unref(filteredCountries), (option, i) => {
          _push(`<div class="item" data-v-46460e26>${ssrInterpolate(option)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/CountryFilter.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var __unplugin_components_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-46460e26"]]);
const useOpportunitiesStore = defineStore("opportunities", {
  state: () => {
    return {
      opportunities: []
    };
  },
  actions: {
    async getOpportunityById(id) {
      let result = this.opportunities.find((o) => o.id === id);
      if (!result) {
        result = await getOpportunityById(id);
        return result;
      }
      return result;
    },
    async getOpportunities(ogxFunction, filters) {
      this.opportunities = await getOpportunities(ogxFunction, filters);
    }
  }
});
const useLoadingStore = defineStore("loading", {
  state: () => {
    return {
      allFiltering: false,
      ogtFiltering: false,
      ogvFiltering: false
    };
  }
});
var DefaultSidePanel_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  name: "DefaultSidePanel",
  __ssrInlineRender: true,
  setup(__props) {
    const country = ref("");
    const beginDate = ref();
    const endDate = ref();
    const opportunityStore = useOpportunitiesStore();
    const loadingStore = useLoadingStore();
    const { allFiltering } = storeToRefs(loadingStore);
    async function filter() {
      loadingStore.$state.allFiltering = true;
      if (COUNTRIES$1.includes(country.value)) {
        if (beginDate.value && endDate.value) {
          await opportunityStore.getOpportunities("all", {
            country: country.value,
            period: {
              begin: new Date(beginDate.value.year, beginDate.value.month),
              end: new Date(endDate.value.year, endDate.value.month)
            }
          });
        } else {
          await opportunityStore.getOpportunities("all", {
            country: country.value
          });
        }
      } else if (country.value === "") {
        if (beginDate.value && endDate.value) {
          await opportunityStore.getOpportunities("all", {
            period: {
              begin: new Date(beginDate.value.year, beginDate.value.month),
              end: new Date(endDate.value.year, endDate.value.month)
            }
          });
        } else {
          await opportunityStore.getOpportunities("all");
        }
      }
      loadingStore.$state.allFiltering = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountryFilter = __unplugin_components_0$9;
      const _component_BaseActionButton = __unplugin_components_4$2;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "default-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md" }, _attrs))} data-v-1a0561d0>`);
      _push(ssrRenderComponent(_component_CountryFilter, {
        id: "country",
        modelValue: country.value,
        "onUpdate:modelValue": ($event) => country.value = $event,
        countries: unref(COUNTRIES$1),
        label: "Select country to filter",
        "label-for": "country"
      }, null, _parent));
      _push(`<label class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-1a0561d0> Select start month </label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: beginDate.value,
        "onUpdate:modelValue": ($event) => beginDate.value = $event,
        "month-picker": "",
        "mode-height": "240",
        "auto-apply": "",
        placeholder: "Select month",
        "year-range": [new Date().getFullYear() - 1, new Date().getFullYear() + 5],
        "alt-position": "",
        dark: unref(isDark)
      }, null, _parent));
      _push(`<label class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-1a0561d0> Select end month </label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: endDate.value,
        "onUpdate:modelValue": ($event) => endDate.value = $event,
        "month-picker": "",
        "mode-height": "240",
        "auto-apply": "",
        placeholder: "Select month",
        "year-range": [new Date().getFullYear(), new Date().getFullYear() + 3],
        "alt-position": "",
        dark: unref(isDark)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseActionButton, {
        class: "w-full mt-auto",
        loading: unref(allFiltering),
        onClick: filter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(allFiltering) ? "Filtering..." : "Filter")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(allFiltering) ? "Filtering..." : "Filter"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/DefaultSidePanel.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var __unplugin_components_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-1a0561d0"]]);
const _hoisted_1$k = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$k
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$9);
}
var __unplugin_components_0$8 = { name: "bi-search", render: render$k };
var OpportunitySearch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  name: "OpportunitySearch",
  __ssrInlineRender: true,
  setup(__props) {
    const focusSearch = () => {
      const search = document.querySelector(".search-input");
      search.focus();
    };
    const searchText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_bi_search = __unplugin_components_0$8;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-186b38ba><input${ssrRenderAttr("value", searchText.value)} type="text" class="search-input" placeholder="Search opportunities" data-v-186b38ba>`);
      _push(ssrRenderComponent(_component_i_bi_search, {
        class: "search-icon",
        onClick: focusSearch
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/OpportunitySearch.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var __unplugin_components_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-186b38ba"]]);
var DefaultHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$s = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OpportunitySearch = __unplugin_components_0$7;
  const _component_DarkModeToggle = __unplugin_components_1$8;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "admin-header flex items-center justify-between" }, _attrs))} data-v-4c0d0d24>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="AIESEC Logo" data-v-4c0d0d24${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "AIESEC Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OpportunitySearch, null, null, _parent));
  _push(`<div class="flex items-center justify-between gap-4" data-v-4c0d0d24>`);
  _push(ssrRenderComponent(_component_DarkModeToggle, null, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/DefaultHeader.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var __unplugin_components_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-4c0d0d24"]]);
var default_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_DefaultHeader = __unplugin_components_0$6;
  const _component_DefaultSidePanel = __unplugin_components_1$7;
  const _component_router_view = resolveComponent("router-view");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "default" }, _attrs))} data-v-b2b35472>`);
  _push(ssrRenderComponent(_component_DefaultHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_DefaultSidePanel, null, null, _parent));
  _push(ssrRenderComponent(_component_router_view, null, {
    default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(``);
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
      } else {
        return [
          (openBlock(), createBlock(KeepAlive, null, [
            (openBlock(), createBlock(resolveDynamicComponent(Component)))
          ], 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var __layout_3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-b2b35472"]]);
var landing_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$q = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-29758d26>`);
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/landing.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var __layout_4 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-29758d26"]]);
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$p = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_DefaultHeader = __unplugin_components_0$6;
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-71a2c802>`);
  _push(ssrRenderComponent(_component_DefaultHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/main.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var __layout_5 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-71a2c802"]]);
var OGTSidePanel_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  name: "OGTSidePanel",
  __ssrInlineRender: true,
  setup(__props) {
    const country = ref("");
    const beginDate = ref();
    const endDate = ref();
    const opportunityStore = useOpportunitiesStore();
    const loadingStore = useLoadingStore();
    const { ogtFiltering } = storeToRefs(loadingStore);
    async function filter() {
      loadingStore.$state.ogtFiltering = true;
      if (COUNTRIES$1.includes(country.value)) {
        if (beginDate.value && endDate.value) {
          await opportunityStore.getOpportunities("OGT", {
            country: country.value,
            period: {
              begin: new Date(beginDate.value.year, beginDate.value.month),
              end: new Date(endDate.value.year, endDate.value.month)
            }
          });
        } else {
          await opportunityStore.getOpportunities("OGT", {
            country: country.value
          });
        }
      } else if (country.value === "") {
        if (beginDate.value && endDate.value) {
          await opportunityStore.getOpportunities("OGT", {
            period: {
              begin: new Date(beginDate.value.year, beginDate.value.month),
              end: new Date(endDate.value.year, endDate.value.month)
            }
          });
        } else {
          await opportunityStore.getOpportunities("OGT");
        }
      }
      loadingStore.$state.ogtFiltering = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountryFilter = __unplugin_components_0$9;
      const _component_BaseActionButton = __unplugin_components_4$2;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "default-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md" }, _attrs))} data-v-d1cc7f0c>`);
      _push(ssrRenderComponent(_component_CountryFilter, {
        id: "country",
        modelValue: country.value,
        "onUpdate:modelValue": ($event) => country.value = $event,
        countries: unref(COUNTRIES$1),
        label: "Select country to filter",
        "label-for": "country"
      }, null, _parent));
      _push(`<label class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-d1cc7f0c> Select start month </label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: beginDate.value,
        "onUpdate:modelValue": ($event) => beginDate.value = $event,
        "month-picker": "",
        "mode-height": "240",
        "auto-apply": "",
        placeholder: "Select month",
        "year-range": [new Date().getFullYear() - 1, new Date().getFullYear() + 5],
        "alt-position": "",
        dark: unref(isDark)
      }, null, _parent));
      _push(`<label class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-d1cc7f0c> Select end month </label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: endDate.value,
        "onUpdate:modelValue": ($event) => endDate.value = $event,
        "month-picker": "",
        "mode-height": "240",
        "auto-apply": "",
        placeholder: "Select month",
        "year-range": [new Date().getFullYear(), new Date().getFullYear() + 3],
        "alt-position": "",
        dark: unref(isDark)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseActionButton, {
        class: "w-full mt-auto",
        loading: unref(ogtFiltering),
        onClick: filter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(ogtFiltering) ? "Filtering..." : "Filter")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(ogtFiltering) ? "Filtering..." : "Filter"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/OGTSidePanel.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var __unplugin_components_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-d1cc7f0c"]]);
var ogt_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_DefaultHeader = __unplugin_components_0$6;
  const _component_OGTSidePanel = __unplugin_components_1$6;
  const _component_router_view = resolveComponent("router-view");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "ogt" }, _attrs))} data-v-b9e8759e>`);
  _push(ssrRenderComponent(_component_DefaultHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OGTSidePanel, null, null, _parent));
  _push(ssrRenderComponent(_component_router_view, null, {
    default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(``);
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
      } else {
        return [
          (openBlock(), createBlock(KeepAlive, null, [
            (openBlock(), createBlock(resolveDynamicComponent(Component)))
          ], 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/ogt.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var __layout_6 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-b9e8759e"]]);
var OGVSidePanel_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  name: "OGVSidePanel",
  __ssrInlineRender: true,
  setup(__props) {
    const country = ref("");
    const beginDate = ref();
    const endDate = ref();
    const opportunityStore = useOpportunitiesStore();
    const loadingStore = useLoadingStore();
    const { ogvFiltering } = storeToRefs(loadingStore);
    async function filter() {
      loadingStore.$state.ogvFiltering = true;
      if (COUNTRIES$1.includes(country.value)) {
        if (beginDate.value && endDate.value) {
          await opportunityStore.getOpportunities("OGV", {
            country: country.value,
            period: {
              begin: new Date(beginDate.value.year, beginDate.value.month),
              end: new Date(endDate.value.year, endDate.value.month)
            }
          });
        } else {
          await opportunityStore.getOpportunities("OGV", {
            country: country.value
          });
        }
      } else if (country.value === "") {
        if (beginDate.value && endDate.value) {
          await opportunityStore.getOpportunities("OGV", {
            period: {
              begin: new Date(beginDate.value.year, beginDate.value.month),
              end: new Date(endDate.value.year, endDate.value.month)
            }
          });
        } else {
          await opportunityStore.getOpportunities("OGV");
        }
      }
      loadingStore.$state.ogvFiltering = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountryFilter = __unplugin_components_0$9;
      const _component_BaseActionButton = __unplugin_components_4$2;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "default-side-panel shadow-light-900 dark:shadow-dark-900 shadow-md" }, _attrs))} data-v-20f75576>`);
      _push(ssrRenderComponent(_component_CountryFilter, {
        id: "country",
        modelValue: country.value,
        "onUpdate:modelValue": ($event) => country.value = $event,
        countries: unref(COUNTRIES$1),
        label: "Select country to filter",
        "label-for": "country"
      }, null, _parent));
      _push(`<label class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-20f75576> Select start month </label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: beginDate.value,
        "onUpdate:modelValue": ($event) => beginDate.value = $event,
        "month-picker": "",
        "mode-height": "240",
        "auto-apply": "",
        placeholder: "Select month",
        "year-range": [new Date().getFullYear() - 1, new Date().getFullYear() + 5],
        "alt-position": "",
        dark: unref(isDark)
      }, null, _parent));
      _push(`<label class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold" data-v-20f75576> Select end month </label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: endDate.value,
        "onUpdate:modelValue": ($event) => endDate.value = $event,
        "month-picker": "",
        "mode-height": "240",
        "auto-apply": "",
        placeholder: "Select month",
        "year-range": [new Date().getFullYear(), new Date().getFullYear() + 3],
        "alt-position": "",
        dark: unref(isDark)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseActionButton, {
        class: "w-full mt-auto",
        loading: unref(ogvFiltering),
        onClick: filter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(ogvFiltering) ? "Filtering..." : "Filter")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(ogvFiltering) ? "Filtering..." : "Filter"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/OGVSidePanel.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var __unplugin_components_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-20f75576"]]);
var ogv_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_DefaultHeader = __unplugin_components_0$6;
  const _component_OGVSidePanel = __unplugin_components_1$5;
  const _component_router_view = resolveComponent("router-view");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "ogv" }, _attrs))} data-v-2b1e7bed>`);
  _push(ssrRenderComponent(_component_DefaultHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OGVSidePanel, null, null, _parent));
  _push(ssrRenderComponent(_component_router_view, null, {
    default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(``);
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
      } else {
        return [
          (openBlock(), createBlock(KeepAlive, null, [
            (openBlock(), createBlock(resolveDynamicComponent(Component)))
          ], 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/ogv.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var __layout_7 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-2b1e7bed"]]);
const layouts = {
  "404": _sfc_main$B,
  "admin": __layout_1,
  "auth": __layout_2,
  "default": __layout_3,
  "landing": __layout_4,
  "main": __layout_5,
  "ogt": __layout_6,
  "ogv": __layout_7
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Colombo Central | AIESEC",
      meta: [
        {
          name: "description",
          content: "AIESEC Entity for the University of Colombo"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var block0 = {};
const _sfc_main$j = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/opportunities" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`To All`);
      } else {
        return [
          createTextVNode("To All")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_RouterLink, { to: "/opportunities/ogt" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`To ogt`);
      } else {
        return [
          createTextVNode("To ogt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_RouterLink, { to: "/opportunities/ogv" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`To ogv`);
      } else {
        return [
          createTextVNode("To ogv")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
if (typeof block0 === "function")
  block0(_sfc_main$j);
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var __pages_import_4__ = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$4]]);
const __pages_import_0__ = () => Promise.resolve().then(function() {
  return dashboard$1;
});
const __pages_import_1__ = () => Promise.resolve().then(function() {
  return analytics$1;
});
const __pages_import_2__ = () => Promise.resolve().then(function() {
  return index$7;
});
const __pages_import_3__ = () => Promise.resolve().then(function() {
  return manage$1;
});
const __pages_import_5__ = () => Promise.resolve().then(function() {
  return login$1;
});
const __pages_import_6__ = () => Promise.resolve().then(function() {
  return ____all_$1;
});
const __pages_import_7__ = () => Promise.resolve().then(function() {
  return index$5;
});
const __pages_import_8__ = () => Promise.resolve().then(function() {
  return index$3;
});
const __pages_import_9__ = () => Promise.resolve().then(function() {
  return _id_$3;
});
const __pages_import_10__ = () => Promise.resolve().then(function() {
  return index$1;
});
const __pages_import_11__ = () => Promise.resolve().then(function() {
  return _id_$1;
});
const routes$1 = [{ "path": "/dashboard", "component": __pages_import_0__, "children": [{ "name": "dashboard-analytics", "path": "analytics", "component": __pages_import_1__, "props": true }, { "name": "dashboard", "path": "", "component": __pages_import_2__, "props": true, "meta": { "layout": "admin" } }, { "name": "dashboard-manage", "path": "manage", "component": __pages_import_3__, "props": true }], "props": true, "meta": { "layout": "admin" } }, { "name": "index", "path": "/", "component": __pages_import_4__, "props": true, "meta": { "layout": "landing" } }, { "name": "login", "path": "/login", "component": __pages_import_5__, "props": true, "meta": { "layout": "auth" } }, { "name": "all", "path": "/:all(.*)*", "component": __pages_import_6__, "props": true, "meta": { "layout": 404 } }, { "name": "opportunities", "path": "/opportunities", "component": __pages_import_7__, "props": true }, { "name": "opportunities-ogt", "path": "/opportunities/ogt", "component": __pages_import_8__, "props": true, "meta": { "layout": "ogt" } }, { "name": "opportunities-ogt-id", "path": "/opportunities/ogt/:id", "component": __pages_import_9__, "props": true, "meta": { "layout": "main" } }, { "name": "opportunities-ogv", "path": "/opportunities/ogv", "component": __pages_import_10__, "props": true, "meta": { "layout": "ogv" } }, { "name": "opportunities-ogv-id", "path": "/opportunities/ogv/:id", "component": __pages_import_11__, "props": true, "meta": { "layout": "main" } }];
var tailwind = "";
var main = "";
var __uno = "";
var style = "";
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(_sfc_main$k, { routes, base: "/" }, (ctx) => {
  Object.values({ "./modules/nprogress.ts": __glob_9_0, "./modules/pinia.ts": __glob_9_1 }).forEach((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
const _hoisted_1$j = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "#F44336",
  d: "M40 34h4v10h-4zm-6-5h4v15h-4zm-6 4h4v11h-4zm-6-8h4v19h-4zm-6 3h4v16h-4zm-6-4h4v20h-4zm-6-5h4v25H4z"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createElementVNode("g", { fill: "#D32F2F" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "m34 13.2l-4 4l-10-10l-5 5l-7.6-7.6l-2.8 2.8L15 17.8l5-5l10 10l4-4l6.1 6.1l2.8-2.8z" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M44 26h-9l9-9z" })
], -1);
const _hoisted_4$3 = [
  _hoisted_2$j,
  _hoisted_3$8
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_4$3);
}
var __unplugin_components_2$3 = { name: "flat-color-icons-bearish", render: render$j };
const _hoisted_1$i = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createStaticVNode('<path fill="#FF9800" d="m24 37l-5-6v-6h10v6z"></path><g fill="#FFA726"><circle cx="33" cy="19" r="2"></circle><circle cx="15" cy="19" r="2"></circle></g><path fill="#FFB74D" d="M33 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9v-7z"></path><path fill="#FF5722" d="M24 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4l4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2h-3z"></path><g fill="#784719"><circle cx="28" cy="19" r="1"></circle><circle cx="20" cy="19" r="1"></circle></g><path fill="#CFD8DC" d="m29 31l-5 1l-5-1S8 33 8 44h32c0-11-11-13-11-13z"></path><path fill="#3F51B5" d="m23 35l-1 9h4l-1-9l1-1l-2-2l-2 2z"></path>', 7);
const _hoisted_9$2 = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_9$2);
}
var __unplugin_components_1$4 = { name: "flat-color-icons-manager", render: render$i };
const _hoisted_1$h = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createStaticVNode('<path fill="#D1C4E9" d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2z"></path><circle cx="38" cy="38" r="10" fill="#43A047"></circle><g fill="#fff"><path d="M36 32h4v12h-4z"></path><path d="M32 36h12v4H32z"></path></g>', 3);
const _hoisted_5 = [
  _hoisted_2$h
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_5);
}
var __unplugin_components_0$5 = { name: "flat-color-icons-add-database", render: render$h };
var dashboard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { admin } = storeToRefs(useAdminStore());
    onMounted(async () => {
      if (!admin.value) {
        const router = useRouter();
        await router.push("/login");
      }
    });
    useHead({
      title: "Dashboard | AIESEC Opportunity Portal"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_i_flat_color_icons_add_database = __unplugin_components_0$5;
      const _component_i_flat_color_icons_manager = __unplugin_components_1$4;
      const _component_i_flat_color_icons_bearish = __unplugin_components_2$3;
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-container" }, _attrs))} data-v-9bb92dee><div class="tab-header flex items-center gap-4" data-v-9bb92dee>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        class: "tab-heading flex items-center justify-evenly h-full",
        to: "/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_flat_color_icons_add_database, null, null, _parent2, _scopeId));
            _push2(` Add `);
          } else {
            return [
              createVNode(_component_i_flat_color_icons_add_database),
              createTextVNode(" Add ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        class: "tab-heading flex items-center justify-evenly h-full",
        to: "/dashboard/manage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_flat_color_icons_manager, null, null, _parent2, _scopeId));
            _push2(` Manage `);
          } else {
            return [
              createVNode(_component_i_flat_color_icons_manager),
              createTextVNode(" Manage ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        class: "tab-heading flex items-center justify-evenly h-full",
        to: "/dashboard/analytics"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_flat_color_icons_bearish, null, null, _parent2, _scopeId));
            _push2(` Analytics `);
          } else {
            return [
              createVNode(_component_i_flat_color_icons_bearish),
              createTextVNode(" Analytics ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab-content" data-v-9bb92dee>`);
      _push(ssrRenderComponent(_component_router_view, null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(KeepAlive, null, [
                (openBlock(), createBlock(resolveDynamicComponent(Component)))
              ], 1024))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$i);
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/dashboard.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-9bb92dee"]]);
var dashboard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dashboard
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Analytics</h1>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/dashboard/analytics.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var analytics = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3]]);
var analytics$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": analytics
}, Symbol.toStringTag, { value: "Module" }));
var BaseInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  name: "BaseInput",
  __ssrInlineRender: true,
  props: {
    modelValue: null,
    label: null,
    labelFor: null,
    fixedLabel: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { label, labelFor, modelValue } = toRefs(props);
    const input = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "base-input" }, _attrs))} data-v-8ae8da86><input${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        ref_key: "input",
        ref: input,
        value: unref(modelValue)
      }))} data-v-8ae8da86><label${ssrRenderAttr("for", unref(labelFor))} class="${ssrRenderClass(unref(modelValue) !== "" || __props.fixedLabel ? "focused" : "")}" data-v-8ae8da86>${ssrInterpolate(unref(label))}</label><div class="icon" data-v-8ae8da86>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/BaseInput.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var __unplugin_components_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-8ae8da86"]]);
const _hoisted_1$g = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$g
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$7);
}
var __unplugin_components_0$3 = { name: "carbon-close", render: render$g };
var TimeSlotInputGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  name: "TimeSlotInputGroup",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const timeslots = ref([]);
    const isEnteringNewSlot = ref(false);
    const beginTime = ref("");
    const endTime = ref("");
    expose({
      timeslots
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_carbon_close = __unplugin_components_0$3;
      const _component_BaseInput = __unplugin_components_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "timeslots-group" }, _attrs))} data-v-0289815f><div class="timeslots" data-v-0289815f><!--[-->`);
      ssrRenderList(timeslots.value, (timeslot, index2) => {
        _push(`<div class="timeslots__item" data-v-0289815f><p data-v-0289815f><span class="begin" data-v-0289815f>${ssrInterpolate(unref(format)(timeslot.begin, "yyyy MMM"))}</span><span data-v-0289815f> - </span><span class="end" data-v-0289815f>${ssrInterpolate(unref(format)(timeslot.end, "yyyy MMM"))}</span></p>`);
        _push(ssrRenderComponent(_component_i_carbon_close, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><button class="new-time-slot__toggle" type="button" data-v-0289815f> + add new </button></div>`);
      if (isEnteringNewSlot.value) {
        _push(`<form class="new-time-slot__form" data-v-0289815f>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "begin-time",
          modelValue: beginTime.value,
          "onUpdate:modelValue": ($event) => beginTime.value = $event,
          type: "date",
          label: "Begin time",
          "label-for": "begin time",
          placeholder: "",
          "fixed-label": true
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "end-time",
          modelValue: endTime.value,
          "onUpdate:modelValue": ($event) => endTime.value = $event,
          type: "date",
          label: "End time",
          "label-for": "end-time",
          placeholder: " ",
          "fixed-label": true
        }, null, _parent));
        _push(`<div class="buttons" data-v-0289815f><button class="cancel" type="button" data-v-0289815f> Cancel </button><button class="confirm" type="submit" data-v-0289815f>Confirm</button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/page/dashboard/TimeSlotInputGroup.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var __unplugin_components_12 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0289815f"]]);
const _hoisted_1$f = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 64 64",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createStaticVNode('<path fill="#699635" d="M0 46.5h64v9H0z"></path><path fill="#83bf4f" d="M0 8.5h64v38H0z"></path><path fill="#94989b" d="M24 46.5h16v9H24z"></path><path fill="#699635" d="M4 12.5h56v30H4z"></path><path fill="#83bf4f" d="M7 15.5h50v24H7z"></path><circle cx="45" cy="27.5" r="8" fill="#699635"></circle><path fill="#d0d0d0" d="M24 8.5h16v38H24z"></path><path fill="#fff" d="M16 26.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2h2c0-1.9-1.3-3.4-3-3.9v-1.1h-2v1.1c-1.7.4-3 2-3 3.9c0 2.2 1.8 4 4 4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2h-2c0 1.9 1.3 3.4 3 3.9v1.1h2v-1.1c1.7-.4 3-2 3-3.9c0-2.2-1.8-4-4-4"></path>', 8);
const _hoisted_10 = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_10);
}
var __unplugin_components_11 = { name: "emojione-dollar-banknote", render: render$f };
const _hoisted_1$e = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 64 64",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createStaticVNode('<path fill="#dbb471" d="M54 46.9C54 59 44.2 59 32 59s-22 0-22-12.1S19.9 15 32 15s22 19.7 22 31.9z"></path><g fill="#89664c"><path d="M54 46.9c0-4.1-1.1-9.1-3.1-13.9c.4 3.1-.4 8.6-9.9 10.7c-13.5 2.9-6.5 6.7-11.8 7.2c-4.5.4-16.5-1.4-18.9-8.2c-.2 1.5-.4 2.9-.4 4.3c.1 12 10 12 22.1 12s22 0 22-12.1" opacity=".5"></path><path d="M37.9 41.1c-.4-2-2.1-2.6-3.9-2.7v-2.8c.5.2 1.1.5 1.5.8c.8.5 1.6-.8.8-1.3c-.7-.4-1.5-.8-2.3-1.1v-3.3c0-1-1.5-1-1.5 0v2.9c-.8-.1-1.6-.1-2.4 0c-.1-.7-.3-1.4-.5-2.1c-.2-1-1.7-.6-1.4.4c.2.7.3 1.4.5 2.1c-.1 0-.1 0-.2.1c-2 .8-3.3 2.8-1.8 4.7c.7.9 1.6 1.2 2.6 1.4c.1 1.3.1 2.6.1 3.9c-.7-.4-1.3-1-1.8-1.5c-.7-.7-1.7.4-1.1 1.1c.9 1 1.9 1.7 2.9 2.2c0 1.1.1 2.2.2 3.3c.1 1 1.6 1 1.5 0c-.1-1-.2-1.9-.2-2.9c.6.1 1.2.1 1.8.1c.1 1 .2 2 .3 3.1c.1 1 1.6 1 1.5 0c-.1-1.1-.2-2.2-.3-3.4c2.2-.8 4.2-2.5 3.7-5m-5.4-6v3.3c-.5 0-.9.1-1.3.1h-.5l-.3-3.6c.7 0 1.4.1 2.1.2m-3.6 3.2c-.4-.1-.8-.4-1.2-.7c-.9-.9.4-1.7 1.2-2.1c.1 1 .2 1.9.3 2.9c-.1 0-.2 0-.3-.1m3.3 6.4c-.5.1-.9 0-1.3-.1c-.1-1.5-.1-3-.1-4.6c.6 0 1.2-.1 1.8-.1c0 1.6.1 3.1.1 4.7c-.2.1-.3.1-.5.1m3.3-1.1c-.4.3-.9.5-1.3.7c-.1-1.5-.1-2.9-.1-4.4h.5c1.9.4 2.4 2.5.9 3.7"></path></g><path fill="#699635" d="M34 55h-2.3v4l9.3 5l21-6.5V54l-7.7-4.5z"></path><path fill="#83bf4f" d="M32 52.7s2.4 3.9 9.2 7.3c0 0 10.6-.5 20.8-7.3c0 0-5.9-2.9-7.6-6.7c0 0-4 5.6-22.4 6.7"></path><path fill="#699635" d="m27.5 54.9l2.2-.1l.3 3.7l-8.7 5.5L.4 59.5l-.3-3.3l7.1-4.9z"></path><path fill="#83bf4f" d="M29.2 52.6s-2.1 3.9-8.4 7.6c0 0-10.3.3-20.8-5.2c0 0 5.6-3.2 6.9-7c0 0 4.4 5 22.3 4.6"></path><path fill="none" stroke="#699635" stroke-miterlimit="10" d="M24.2 53.7s-.3.8 1.1.9l-3.7 3.1s-2.2-.2-2.7 1.3c0 0-9-1-14.8-3.6c0 0 1.2-.9-.3-1.5c0 0 1.7-1.2 2.1-2.3c0 0 1.6.2 2.1-1c.2-.1 6.2 3.5 16.2 3.1z"></path><ellipse cx="8.8" cy="53.8" fill="#699635" rx="1.9" ry="1.3"></ellipse><path fill="#f9f3d9" d="M19 52.2s-2.3 3-7.3 7.1L12 62l-3.5-.8l-.2-2.9s5.1-4.7 6.2-7c-.1 0 1.7.6 4.5.9m23.1-.7s.9 2.4 7.7 6.8v2.9l3.9-1.2v-3s-4.7-3.3-7.5-6.6l-4.1 1.1"></path><path fill="#699635" d="m36.4 48.3l-2.2-.1l-.2 4.1l8.9 5.7l20.9-5.7l.1-3.6l-7.3-5.1z"></path><path fill="#83bf4f" d="M34.6 45.8s2.2 4.2 8.7 8c0 0 10.4 0 20.7-6.4c0 0-5.7-3.3-7.1-7.4c0 0-4.3 5.6-22.3 5.8"></path><path fill="none" stroke="#699635" stroke-miterlimit="10" d="M39.1 46.9s.5.8-1.1 1.1l4.2 3.3s2.4-.6 3.2.8c0 0 10-1.8 14.6-4.2c0 0-1.5-.7 0-1.6c0 0-1.8-1.5-2.5-2.5c0 0-1.7.5-2.6-.7c0 .1-3.6 3.3-15.8 3.8z"></path><path fill="#699635" d="M46.8 49.4c-.4.5-1.7.7-2.8.4c-1.1-.3-1.6-1-1.2-1.5c.4-.5 1.7-.7 2.8-.4c1.1.3 1.6.9 1.2 1.5"></path><path fill="#f9f3d9" d="M44.8 45s2.4 3.2 7.5 7.5l-.1 3l3.5-1l.1-3.2s-5.2-5-6.5-7.4c.1 0-1.6.7-4.5 1.1"></path><path fill="#dbb471" d="M46 2c0 6.1-7.9 16-14 16S18 9.1 18 3s.9 0 7 0c.9 0 5.1-3 7-3c1.3 0 5 3 7 3c5.3 0 7-5.6 7-1"></path><path fill="#89664c" d="M30.2 13.3c-.6.4-3.5.1-4.4.8c-1.2.9.5 3-.7 4.3c-2.4 2.4-4.3 5.1-3.7 6.6c1 2.6 2.9-4.8 4.6-2s1.4-1.9 4 .5s.4-4.3 2.9-1.4s2.6 6.2 4.4 6.2c2.1 0-2.2-7.9.6-6s5.9 1.2 3.1-1.7c-.9-.9-2.1-2.5-3.5-3.9c-.5-.5-.1-3.1-.6-3.5c-.6-.5-2.1 1.1-2.7.8c-1.2-.6-.8.5-2.6.8c-1.2.4-.2-2.3-1.4-1.5"></path><path fill="#e8e8e8" d="M18.7 19.2c3.9-3.7 11-1.6 15.2.2c4.1 1.8 6.6-3.9 4-6.8c-1.5-1.7-3.9.3-4.8 1.5c-1 1.2-1.8 2.5-2.9 3.7c-1.6 1.8-5.5.3-4.3-2.2c1.3-2.6 6.8.4 8.6.9c3.5 1 7.2 1.4 10.7.1c1.2-.4.7-2.4-.5-1.9c-3.9 1.4-7.8.5-11.5-.7c-1.9-.6-4.9-2.2-6.9-1.3c-5.7 2.7-.4 10.4 4.4 7.4c1.1-.7 1.8-1.8 2.6-2.8c.5-.6 3-4.4 3.6-2.5c.3 1 0 2.8-1.1 3.1c-.7.3-2.1-.7-2.8-.9c-1.3-.5-2.6-.9-4-1.2c-3.7-.8-8.7-.6-11.6 2.1c-1 .8.4 2.2 1.3 1.3"></path><path fill="#89664c" d="M44.8.5C43.8 1.3 42 3 39 3c-2 0-5.7-3-7-3c-1.9 0-6.1 3-7 3c-3.3 0-5.1-1.7-6-2.4c0 0 1.1 4.5 4.5 6.8C26 9 25.7 7.1 27 5.3s2.2-2.7 4.5 1.8c1.2 2.5 3.5-6.8 5.3-3.8c3.3 5.5 4.5 2.5 8-2.8"></path><path fill="#dbb471" d="m52.4 52.4l-.1 3l3.5-1l.1-3.2c0 .1-2.1.9-3.5 1.2m-2.6 6v2.9l3.9-1.2v-3c-.1-.1-1.1.5-3.9 1.3m-38.1.8L12 62l-3.5-.8l-.2-2.9c-.1 0 1.3.5 3.4.9"></path>', 19);
const _hoisted_21 = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_21);
}
var __unplugin_components_10 = { name: "emojione-money-bag", render: render$e };
const _hoisted_1$d = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<path fill="#512DA8" d="M33.9 12.1H14.2L17.6 7c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9l3.3 5.1z"></path><path fill="#8667C4" d="M14 11H8V9.2C8 8.5 8.5 8 9.2 8h3.6c.7 0 1.2.5 1.2 1.2V11z"></path><path fill="#5E35B1" d="M40 42H8c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z"></path><circle cx="24" cy="26" r="12" fill="#512DA8"></circle><circle cx="24" cy="26" r="9" fill="#B388FF"></circle><path fill="#C7A7FF" d="M29 23c-1.2-1.4-3-2.2-4.8-2.2c-1.8 0-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0c.3.3.6.4 1 .4c.3 0 .6-.1.9-.3c.4-.4.5-1.3 0-1.8z"></path><ellipse cx="11" cy="13.5" fill="#8667C4" rx="2" ry="1.5"></ellipse>', 7);
const _hoisted_9$1 = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_9$1);
}
var __unplugin_components_9 = { name: "flat-color-icons-camera", render: render$d };
var BaseImageInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  name: "BaseImageInput",
  __ssrInlineRender: true,
  props: {
    label: null,
    labelFor: null
  },
  setup(__props, { expose }) {
    const props = __props;
    const imageInput = ref();
    const selectedImageFile = ref(null);
    const selectedImageString = ref("");
    expose({
      selectedImageFile
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "base-input" }, _attrs))} data-v-2da333a2><div class="input" data-v-2da333a2><p data-v-2da333a2>${ssrInterpolate((_a = selectedImageFile.value) == null ? void 0 : _a.name)}</p></div><input${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        ref_key: "imageInput",
        ref: imageInput,
        type: "file",
        class: ["hidden", selectedImageString.value !== "" ? "focused" : ""]
      }))} data-v-2da333a2><label${ssrRenderAttr("for", props.labelFor)} class="${ssrRenderClass(selectedImageString.value !== "" ? "focused" : "")}" data-v-2da333a2>${ssrInterpolate(props.label)}</label><div class="icon" data-v-2da333a2>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/BaseImageInput.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-2da333a2"]]);
const _hoisted_1$c = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createStaticVNode('<path fill="#E1E8ED" d="m30.415 9.586l-9-9a2.001 2.001 0 0 0-2.829 2.829l-3.859 3.859l9 9l3.859-3.859a2 2 0 0 0 2.829-2.829z"></path><path fill="#CCD6DD" d="M20 0H5a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V11h-9c-1 0-2-1-2-2V0z"></path><path fill="#99AAB5" d="M20 0h-2v9a4 4 0 0 0 4 4h9v-2h-9c-1 0-2-1-2-2V0zm-5 8a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm12 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1z"></path><path fill="#66757F" d="M31 19s-5.906-.002-5.935 0c-.291 0-.91.174-1.255.606l-2.328 2.929c-.644.809-.644 2.119 0 2.93l2.328 2.929c.345.432.964.606 1.255.606c.019.002 3.547 0 5.935 0V19z"></path><path fill="#744EAA" d="M33 19s-8.056-.002-8.084 0c-.291 0-.91.139-1.255.485l-2.328 2.342a1.665 1.665 0 0 0 0 2.344l2.328 2.342c.345.346.964.487 1.255.487c.028.002 8.084 0 8.084 0c1.104 0 2-.897 2-2.001V21a2 2 0 0 0-2-2z"></path>', 5);
const _hoisted_7$1 = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_7$1);
}
var __unplugin_components_7 = { name: "twemoji-bookmark-tabs", render: render$c };
var BaseTextarea_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  name: "BaseTextarea",
  __ssrInlineRender: true,
  props: {
    modelValue: null,
    label: null,
    labelFor: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { label, labelFor, modelValue } = toRefs(props);
    const input = ref();
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "base-textarea" }, _attrs))} data-v-2d13d1fc><textarea${ssrRenderAttrs(_temp0 = mergeProps(_ctx.$attrs, {
        ref_key: "input",
        ref: input,
        value: unref(modelValue)
      }), "textarea")} data-v-2d13d1fc>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea><label${ssrRenderAttr("for", unref(labelFor))} class="${ssrRenderClass(unref(modelValue) !== "" ? "focused" : "")}" data-v-2d13d1fc>${ssrInterpolate(unref(label))}</label><div class="icon" data-v-2d13d1fc>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/BaseTextarea.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-2d13d1fc"]]);
var BaseRadioInputGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  name: "BaseRadioInputGroup",
  __ssrInlineRender: true,
  props: {
    options: null,
    modelValue: null,
    name: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "radio-button-group" }, _attrs))} data-v-690cc004><!--[-->`);
      ssrRenderList(props.options, (option) => {
        _push(`<label${ssrRenderAttr("for", option)} data-v-690cc004><input${ssrRenderAttr("id", option)} type="radio"${ssrRenderAttr("name", props.name)}${ssrRenderAttr("value", option)} class="${ssrRenderClass(`${option === props.modelValue ? true : false}`)}" data-v-690cc004><div class="wrapper" data-v-690cc004><div class="ball" data-v-690cc004></div></div> ${ssrInterpolate(option)}</label>`);
      });
      _push(`<!--]--><span data-v-690cc004> What is the function? </span></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/BaseRadioInputGroup.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-690cc004"]]);
const _hoisted_1$b = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "#1976D2",
  d: "M38 13h-3c-5.5 0-10 4.5-10 10s4.5 10 10 10h3c5.5 0 10-4.5 10-10s-4.5-10-10-10zm0 16h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c3.3 0 6 2.7 6 6s-2.7 6-6 6zM13 13h-3C4.5 13 0 17.5 0 23s4.5 10 10 10h3c5.5 0 10-4.5 10-10s-4.5-10-10-10zm0 16h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c3.3 0 6 2.7 6 6s-2.7 6-6 6z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#42A5F5",
  d: "M33 21H15c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2z"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$b,
  _hoisted_3$6
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$2);
}
var __unplugin_components_4$1 = { name: "flat-color-icons-link", render: render$b };
const _hoisted_1$a = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<path fill="#CCD6DD" d="M12 7.607L3 5.196c-1.657-.444-3 .539-3 2.197v20c0 1.656 1.343 3.359 3 3.804l9 2.411V7.607zm12 22.786l9 2.411c1.656.443 3-.54 3-2.196v-20c0-1.657-1.344-3.36-3-3.804l-9-2.411v26z"></path><path fill="#E1E8ED" d="m24 30.392l-12 3.215v-26l12-3.215z"></path><path fill="#55ACEE" d="M12 9.607L4 7.463c-1.104-.296-2 .36-2 1.464v18c0 1.104.896 2.24 2 2.535l8 2.145v-22zm20-1.072l-8-2.144v22l8 2.144c1.104.296 2-.359 2-1.465v-18c0-1.103-.896-2.239-2-2.535z"></path><path fill="#88C9F9" d="m24 28.392l-12 3.215v-22l12-3.215z"></path><path fill="#5C913B" d="M12 21.506c-.268.006-.595.104-.845.145c-.436.073-.329.517-.463.443a2.844 2.844 0 0 1-.812-.658c-.337-.394.25-.477.418-.622c.168-.145-.316-.172-.485-.332c-.169-.159-.471.104-.739-.276c-.27-.376-.101-.79-.133-1.18c-.034-.39.436-.341.739-.334c.303.003.538.144.538.602c0 .456.37.708.269.146c-.101-.561.101-.657.235-.89c.134-.23.37-.55.672-1.04c.221-.358.389-.283.606-.164v-3.345c-.055-.044-.11-.09-.165-.113c-.303-.132.096.753-.139 1.109c-.237.356-.598.193-.97.094c-.369-.099-.713-.545-.443-1.007c.268-.462.782-.268 1.051-.653c.269-.385-.957-.672-1.394-.941c-.438-.271-.963-.409-1.4-.146c-.437.264-1.373.133-1.743.186c-.37.054-.436-.369-.503-.693c-.067-.322-.653-.329-1.257-.338c-.606-.01-1.741.281-1.547 1.759c.068.514.605.124.707.036c.101-.088.605.2.671.637c.068.439.035.887-.099 1.232c-.137.345.336 1.006.604 1.612c.269.605.573.686.707.723c.135.036.908.587.875.996c-.033.411.706.991 1.009 1.34c.303.35.494.662.887.846c.393.183.852 1.035 1.054 1.165c.155.1.418.451.576.58c-.208.242-.612.748-.612 1.029c0 .383.44 1.103.608 1.3c.167.196.65.442.751.85c.101.407-.07 1.646-.372 1.907c-.304.262-.414 1.043-.414 1.043s.107.293.465.124c.309-.144.776-.566 1.094-.801v-6.371z"></path><path fill="#77B255" d="M12.268 17.413c-.1.016-.187.012-.268.011v-3.345c.254.065.512.317.707.736c.234.509.604.066.739.374c.134.308.875.758.505.742c-.371-.015-.741.008-.841.454c-.102.448.168.794-.102.828c-.27.033-.37.142-.74.2zm2.59 5.558c-.436-.074-.359-.023-.628-.599c-.268-.577-.431-.743-1.036-.656c-.605.087-.583.136-.751-.163c-.072-.128-.241-.082-.443.031v6.37c.09-.114.17-.211.228-.267a13.37 13.37 0 0 0 1.466-1.646c.47-.621.3-.924.535-1.481c.236-.558.541-.617.944-1.145c.405-.53.122-.368-.315-.444zM24 15.731V9.417c-.04.004-.068.012-.11.015c-.209.011-.482.135-.779.32c-.024-.005-.046-.016-.07-.021c-.896-.175-1.312 1.205-2.039 1.152c-.729-.053-1.7-.344-2.332.514c-.631.857-.777 1.53 0 1.294s1.312-1.425 1.7-1.089c.388.336.29.721-.632 1.105c-.922.385-1.918.817-2.452.96c-.534.143-.655.534-.292.822c.364.288-.219.471-.826 1.02c-.607.547.146.512.656.705c.51.193.898-.323 1.117-.932c.217-.608 1.158-1.521 1.55-1.544c.392-.023.392.197.318.602c-.013.071.001.103.011.138c-.17.54-.31 1.03-.365 1.306a3.332 3.332 0 0 0-.027.595c-.086.004-.183.021-.248.001c-.438-.129-1.434-.22-1.701.043c-.267.265-.412.502-.728.723c-.317.219-1.603 1.224-1.627 2.084c-.025.859-.049 1.83.461 1.721c.51-.109 1.749-.826 2.137-1.288c.387-.463.921-.522 1.092-.156c.17.369.048.649-.12 1.354c-.171.708.11.963.381 1.468c.273.504.491.775.491 1.189c0 .412.389.723.97-.123a7.14 7.14 0 0 0 .536-.957c.409-.469.768-.923.758-1.096a13.53 13.53 0 0 1-.024-.624l.091-.22c.127-.293.241-.746.362-1.155a.17.17 0 0 1 .02-.024c.237-.337.185-.353.58-.756c.264-.27.254-.512.214-.678c.105-.175.134-.28-.033-.235l-.016.004c-.002 0-.005.019-.006.014c-.023-.149-.206.003-.501.148c-.284.008-.566-.066-.668-.368c-.133-.396-.602-.996-.639-1.336c.003-.041.005-.077.01-.124a.165.165 0 0 1 .069-.088a.29.29 0 0 1 .112-.035c.041.111.075.279.086.464c.026.477.394.196.394.498c0 .303.53.492.661.548c.037.016.094-.027.159-.098c.031.011.06.033.093.037c.292.031.922-.984 1.117-1.164c.102-.095.104-.269.033-.394l.056-.025z"></path><path fill="#5C913B" d="M27.634 20.221c-.053.44.184.201.606.705c.423.508-.104.394-.289.316c-.185-.08-.37-.131-.579-.518c-.213-.391 0-.695 0-1.027c0 0 .316.084.262.524zm.362-.901c.389.166.114-.482.244-.841c.132-.356.316-.368.555-.363c.236.002.422-.191.581-.389c.157-.199.448-.454.422-.733c-.026-.279-.104-.482-.212-.843c-.105-.36.316-.368.502-.711c.184-.343 0 0 .421-.008c.422-.008.238-.058.316-.218c.08-.159.133-.327.054-.68c-.078-.353-.37-.1-.66-.177c-.289-.077.106-.425.132-.78c.026-.356.397-.165.661-.125c.263.039.342.484.421.597c.081.112.895-.365 1.108-.641c.211-.275-.186-.291-.079-.403c.106-.111-.632-.337-.925-.469c-.289-.133-1.028-.367-1.318-.649c-.289-.283-1.396-.426-1.688-.337c-.291.086-.476-.143-.606-.406c-.131-.262-.686-.297-.844-.467c-.158-.17-.316.127-.529.16c-.21.035-.289.043-.554-.209c-.263-.252.08-.371-.288-.621c-.355-.238-.813-.182-1.71-.591v6.314c.157.014.309.036.364.051c.131.035.448.573.448.784c0 .211.158.828.291 1.195c.131.366.42.506.686.818c.264.312.394.137.394.137s-.105-.544-.105-.965c0-.424.316-.701.316-.701s.5.558.528.685c.026.128.421.656.449.876c.026.219.237.546.625.71zm2.092-2.068c.184.08.976.171.554-.334c-.423-.506-.106-.299-.053-.738c.053-.44-.264-.524-.264-.524c0 .332-.211.638 0 1.026c.21.39-.423.49-.237.57zm2.004 5.371c-.131-.217-.421-.385-.738-.461c-.315-.076-.29-.48-.606-.533c-.316-.055-.544-.389-.686-.512c-.312-.266-.106.209 0 .699c.106.488.501.246.869.586c.369.34.397.016.74.229c.342.211.475.52.804.578c.329.059-.25-.369-.383-.586zm-3.088-1.432c.262.402.159.043.504-.016c.343-.059-.291-.561-.502-.799c-.211-.238-.42-.301-.605.049c-.21.399.342.364.603.766zm2.403 2.579c-.133-.338-.518-.713-.675-.91c-.159-.193-.407-.312-.618-.279c-.212.031-.343-.092-.448-.361c-.106-.266-.29-.233-.449-.244c-.157-.012-.791.119-1.161.23c-.368.113-.537.252-.778.457c-.382.32-.17.105 0 .424c.168.318-.187 1.066-.213 1.543c-.027.477.676.031.939.039c.264.012.186-.189.396-.314c.212-.125.349-.129.579.172c.233.305.537.611.537.883c0 .27.834.947 1.151.852c.316-.098.501-.408.791-.635c.291-.225.186-.824.264-1.168c.081-.344-.185-.354-.315-.689z"></path>', 7);
const _hoisted_9 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_9);
}
var __unplugin_components_3$2 = { name: "twemoji-world-map", render: render$a };
var BaseSearchAndSelectInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  name: "BaseSearchAndSelectInput",
  __ssrInlineRender: true,
  props: {
    options: null,
    tabindex: null,
    label: null,
    labelFor: null,
    modelValue: null,
    isDefaultIcon: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const filteredOptions = computed(() => {
      return props.options.filter((val) => {
        return val.toLowerCase().includes(props.modelValue.toLocaleLowerCase());
      });
    });
    let open = ref(false);
    const items = ref();
    const input = ref();
    onClickOutside(items, (e) => {
      const eventTarget = e.target;
      if (eventTarget !== input.value)
        open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_triangle_small_up = __unplugin_components_0$a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "custom-select",
        tabindex: __props.tabindex
      }, _attrs))} data-v-5f06afcd><div class="base-input" data-v-5f06afcd><input${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        ref_key: "input",
        ref: input,
        value: props.modelValue,
        role: "button"
      }))} data-v-5f06afcd><label${ssrRenderAttr("id", `${props.labelFor}-label`)}${ssrRenderAttr("for", props.labelFor)} class="${ssrRenderClass(props.modelValue.trim() !== "" ? "focused" : "")}" data-v-5f06afcd>${ssrInterpolate(props.label)}</label><div class="${ssrRenderClass([[open.value ? "open" : "", props.isDefaultIcon ? "default" : ""], "icon pointer-events-none"])}" data-v-5f06afcd>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      if (props.isDefaultIcon) {
        _push(ssrRenderComponent(_component_i_mdi_triangle_small_up, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (open.value) {
        _push(`<div class="items"${ssrRenderAttr("aria-labelledby", `${props.labelFor}-label`)} data-v-5f06afcd><!--[-->`);
        ssrRenderList(unref(filteredOptions), (option, i) => {
          _push(`<div class="item" data-v-5f06afcd>${ssrInterpolate(option)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/BaseSearchAndSelectInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var __unplugin_components_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5f06afcd"]]);
const _hoisted_1$9 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<path fill="#CCD6DC" d="M30 26a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v22z"></path><path fill="#F5F8FA" d="M28 26a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v22z"></path><path fill="#50A5E6" d="M6 26a1 1 0 0 1-1-1V13a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1z"></path><path fill="#77B255" d="M10 26a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v17a1 1 0 0 1-1 1z"></path><path fill="#DD2F45" d="M14 26a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1z"></path><path fill="#226798" d="M36 36v-2c0-3.314-2.685-6-6-6H14a6 6 0 0 0-6 6v2h28z"></path><path fill="#3A87C2" d="M16.667 36H20.2L17 28h-2l-1 6l3 1zm10.666 0H23.8l3.2-8h2l1 6l-3 1z"></path><path fill="#CCD6DC" d="m24 36l3-6H17l3 6z"></path><path fill="#FFDC5D" d="M18.321 28.679c.681.649 1.419 1.529 2.055 2.344a2.065 2.065 0 0 0 3.26-.004c.632-.815 1.365-1.693 2.044-2.34c.423-.403.68-.95.68-1.534v-.783a2.072 2.072 0 0 0-2.072-2.072h-4.576a2.072 2.072 0 0 0-2.072 2.072v.782c0 .585.257 1.132.681 1.535z"></path><path fill="#F9CA55" d="M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746c1.639 0 3.147-.373 4.363-1.746v-3.491h-8.728v3.491z"></path><path fill="#FFAC33" d="M25.731 3.323c-1.925-.623-6.455-.453-7.588 1.019c-2.944.057-6.398 2.718-6.851 6.228c-.448 3.475.551 5.088.906 7.701c.403 2.96 2.067 3.907 3.397 4.303c1.914 2.529 3.949 2.421 7.366 2.421c6.672 0 9.85-4.464 10.131-12.047c.17-4.585-2.521-8.059-7.361-9.625z"></path><path fill="#FFDC5D" d="M29.547 13.273c-.646-.894-1.472-1.614-3.284-1.868c.68.311 1.331 1.387 1.416 1.982c.085.595.17 1.076-.368.481c-2.155-2.382-4.502-1.444-6.827-2.899c-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888c-.34 1.048-.234 1.982-.234 3.578c0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.898-.305-4.031-1.041-5.05z"></path><path fill="#C1694F" d="M22.961 20.707h-1.906a.477.477 0 1 1 0-.954h1.906a.477.477 0 1 1 0 .954z"></path><path fill="#662113" d="M18.195 17.37a.953.953 0 0 1-.953-.953v-.953a.953.953 0 0 1 1.906 0v.953a.952.952 0 0 1-.953.953zm7.626 0a.953.953 0 0 1-.953-.953v-.953a.953.953 0 0 1 1.906 0v.953a.953.953 0 0 1-.953.953z"></path><path fill="#C1694F" d="M22.134 24.686c-2.754 0-3.6-.705-3.741-.848a.655.655 0 0 1 .902-.95c.052.037.721.487 2.839.487c2.2 0 2.836-.485 2.842-.49a.638.638 0 0 1 .913.015a.669.669 0 0 1-.014.938c-.142.143-.987.848-3.741.848"></path><path fill="#F4F7F9" d="M26.719 26.75c-.567.566-2.709 3.786-2.709 3.786s1.127.839 3.084 3.13c.197.23.543-4.625.584-5.709c.011-.303-.688-1.478-.959-1.207m-9.418 0c.566.566 2.709 3.786 2.709 3.786s-1.127.839-3.084 3.13c-.197.23-.543-4.625-.584-5.709c-.012-.303.687-1.478.959-1.207"></path>', 16);
const _hoisted_18 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_18);
}
var __unplugin_components_1$3 = { name: "twemoji-office-worker", render: render$9 };
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const description = ref("");
    const country = ref("");
    const salary = ref("");
    const currency = ref("");
    const selectedFunction = ref(FUNCTION_OPTIONS[0]);
    const selectedCategory = ref(CATEGORY_OPTIONS[0]);
    const opportunityLink = ref("");
    const timeslotInputGroup = ref();
    const baseImageInput = ref();
    const loading = ref(false);
    async function seedData() {
      loading.value = true;
      try {
        await seedInFirebase(100);
        createToast("Successfully seeded", {
          type: "success"
        });
      } catch (error) {
        createToast(error.message, {
          type: "danger"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = __unplugin_components_0$4;
      const _component_i_twemoji_office_worker = __unplugin_components_1$3;
      const _component_BaseSearchAndSelectInput = __unplugin_components_2$2;
      const _component_i_twemoji_world_map = __unplugin_components_3$2;
      const _component_i_flat_color_icons_link = __unplugin_components_4$1;
      const _component_BaseRadioInputGroup = __unplugin_components_5;
      const _component_BaseTextarea = __unplugin_components_6;
      const _component_i_twemoji_bookmark_tabs = __unplugin_components_7;
      const _component_BaseImageInput = __unplugin_components_8;
      const _component_i_flat_color_icons_camera = __unplugin_components_9;
      const _component_i_emojione_money_bag = __unplugin_components_10;
      const _component_i_emojione_dollar_banknote = __unplugin_components_11;
      const _component_TimeSlotInputGroup = __unplugin_components_12;
      const _component_BaseActionButton = __unplugin_components_4$2;
      _push(`<!--[--><h1 class="text-xl my-4" data-v-69fe84c0>Add a new Opportunity</h1><form class="${ssrRenderClass([selectedFunction.value, "add-new-form"])}" data-v-69fe84c0>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        id: "title",
        modelValue: title.value,
        "onUpdate:modelValue": ($event) => title.value = $event,
        type: "text",
        label: "Title",
        "label-for": "title",
        required: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_twemoji_office_worker, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_twemoji_office_worker)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseSearchAndSelectInput, {
        id: "country",
        modelValue: country.value,
        "onUpdate:modelValue": ($event) => country.value = $event,
        options: unref(COUNTRIES$1),
        label: "Country",
        "label-for": "country"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_twemoji_world_map, { class: "pointer-events-none" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_twemoji_world_map, { class: "pointer-events-none" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        id: "link",
        modelValue: opportunityLink.value,
        "onUpdate:modelValue": ($event) => opportunityLink.value = $event,
        type: "text",
        label: "Link",
        "label-for": "link",
        required: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_flat_color_icons_link, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_flat_color_icons_link)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioInputGroup, {
        modelValue: selectedFunction.value,
        "onUpdate:modelValue": ($event) => selectedFunction.value = $event,
        options: unref(FUNCTION_OPTIONS),
        name: "function"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        id: "description",
        modelValue: description.value,
        "onUpdate:modelValue": ($event) => description.value = $event,
        type: "text",
        label: "Description",
        "label-for": "description",
        textarea: true,
        required: "",
        rows: "5"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_twemoji_bookmark_tabs, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_twemoji_bookmark_tabs)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseImageInput, {
        ref_key: "baseImageInput",
        ref: baseImageInput,
        label: "Poster",
        "label-for": "poster"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_flat_color_icons_camera, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_flat_color_icons_camera)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (selectedFunction.value === "OGT") {
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "salary",
          modelValue: salary.value,
          "onUpdate:modelValue": ($event) => salary.value = $event,
          type: "number",
          label: "Salary",
          "label-for": "salary",
          required: ""
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_i_emojione_money_bag, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_i_emojione_money_bag)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (selectedFunction.value === "OGT") {
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "currency",
          modelValue: currency.value,
          "onUpdate:modelValue": ($event) => currency.value = $event,
          type: "text",
          label: "Currency",
          "label-for": "currency",
          required: ""
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_i_emojione_dollar_banknote, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_i_emojione_dollar_banknote)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (selectedFunction.value === "OGV") {
        _push(ssrRenderComponent(_component_BaseSearchAndSelectInput, {
          id: "category",
          modelValue: selectedCategory.value,
          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
          options: unref(CATEGORY_OPTIONS),
          label: "Category",
          "label-for": "category",
          "is-default-icon": true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TimeSlotInputGroup, {
        ref_key: "timeslotInputGroup",
        ref: timeslotInputGroup
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseActionButton, { loading: loading.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(loading.value ? "Creating" : "Create")}`);
          } else {
            return [
              createTextVNode(toDisplayString(loading.value ? "Creating" : "Create"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseActionButton, {
        loading: loading.value,
        type: "button",
        onClick: seedData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(loading.value ? "Seeding" : "seed")}`);
          } else {
            return [
              createTextVNode(toDisplayString(loading.value ? "Seeding" : "seed"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><!--]-->`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$a);
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/dashboard/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var index$6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-69fe84c0"]]);
var index$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Add new</h1>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/dashboard/manage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var manage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
var manage$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": manage
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z" }),
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })
], -1);
const _hoisted_3$5 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$5);
}
var __unplugin_components_3$1 = { name: "akar-icons-eye", render: render$8 };
const _hoisted_1$7 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M2 10s3.5 4 10 4s10-4 10-4M4 11.645L2 14m20 0l-1.996-2.352M8.914 13.68L8 16.5m7.063-2.812L16 16.5"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$4);
}
var __unplugin_components_2$1 = { name: "akar-icons-eye-closed", render: render$7 };
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16 3A12.92 12.92 0 0 0 3 16v1a13 13 0 0 0 13 13h7v-2h-7A11 11 0 0 1 5 17v-1A10.94 10.94 0 0 1 16 5a10.64 10.64 0 0 1 11 11c0 3.59-1.4 5-3.66 5c-1.58 0-2.34-1.29-2.34-3v-8h-2v1.94A3.84 3.84 0 0 0 15.5 10a5.48 5.48 0 0 0-5.5 5.44v2.12A5.48 5.48 0 0 0 15.5 23a4.28 4.28 0 0 0 4-2.46A4.35 4.35 0 0 0 23.41 23c3.07 0 5.59-2 5.59-7A12.72 12.72 0 0 0 16 3Zm3 14.56a3.5 3.5 0 0 1-7 0v-2.12a3.5 3.5 0 0 1 7 0Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
}
var __unplugin_components_1$2 = { name: "carbon-at", render: render$6 };
var login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAdminStore();
    useRouter();
    const isPasswordVisible = ref(false);
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = __unplugin_components_0$4;
      const _component_i_carbon_at = __unplugin_components_1$2;
      const _component_i_akar_icons_eye_closed = __unplugin_components_2$1;
      const _component_i_akar_icons_eye = __unplugin_components_3$1;
      const _component_BaseActionButton = __unplugin_components_4$2;
      _push(`<!--[--><aside class="login-background" data-v-12a56154></aside><section class="login-section flex-centered" data-v-12a56154><div class="login-container flex-centered flex-col" data-v-12a56154><h1 class="text-4xl font-bold mb-2 text-center text-[var(--clr-text-primary)]" data-v-12a56154> Hello Again, AIESECer! </h1><h2 class="text-md mb-8 text-center text-[var(--clr-text-secondary)]" data-v-12a56154> Got work to do? </h2><form class="login-form" autocomplete="off" data-v-12a56154><input type="text" autocomplete="false" class="hidden" data-v-12a56154>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        id: "email",
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event,
        type: "email",
        label: "Email Address",
        "label-for": "email",
        required: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_carbon_at, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_carbon_at)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        id: "password",
        modelValue: password.value,
        "onUpdate:modelValue": ($event) => password.value = $event,
        label: "Password",
        "label-for": "password",
        type: isPasswordVisible.value ? "text" : "password",
        required: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isPasswordVisible.value) {
              _push2(ssrRenderComponent(_component_i_akar_icons_eye_closed, {
                onClick: ($event) => isPasswordVisible.value = true
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_i_akar_icons_eye, {
                onClick: ($event) => isPasswordVisible.value = false
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !isPasswordVisible.value ? (openBlock(), createBlock(_component_i_akar_icons_eye_closed, {
                key: 0,
                onClick: ($event) => isPasswordVisible.value = true
              }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_i_akar_icons_eye, {
                key: 1,
                onClick: ($event) => isPasswordVisible.value = false
              }, null, 8, ["onClick"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseActionButton, {
        type: "submit",
        style: { "width": "100%" },
        loading: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(loading.value ? "Signing in" : "Sign in")}`);
          } else {
            return [
              createTextVNode(toDisplayString(loading.value ? "Signing in" : "Sign in"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></section><!--]-->`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$8);
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/login.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var login = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-12a56154"]]);
var login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Not found</div>`);
}
if (typeof block0 === "function")
  block0(_sfc_main$7);
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
var ____all_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ____all_
}, Symbol.toStringTag, { value: "Module" }));
var SkeletonOpportunityCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "skeleton-opportunity-card" }, _attrs))} data-v-78b13f27><div class="skeleton-opportunity-card__image" data-v-78b13f27></div><div class="skeleton-opportunity-card__body" data-v-78b13f27></div><div class="skeleton-opportunity-card__link" data-v-78b13f27>A</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/SkeletonOpportunityCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78b13f27"]]);
const _hoisted_1$5 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6l-6-6z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$2);
}
var __unplugin_components_0$2 = { name: "ic-outline-navigate-next", render: render$5 };
var OpportunityCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "OpportunityCard",
  __ssrInlineRender: true,
  props: {
    opportunity: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_i_ic_outline_navigate_next = __unplugin_components_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opportunity-card" }, _attrs))} data-v-76c8d185><div class="opportunity-card__image" style="${ssrRenderStyle({ backgroundImage: `url(${props.opportunity.poster})` })}" data-v-76c8d185></div><div class="opportunity-card__body" data-v-76c8d185><h3 data-v-76c8d185>${ssrInterpolate(props.opportunity.title)}</h3><p data-v-76c8d185>${ssrInterpolate(props.opportunity.country)}</p></div><span class="link-background" data-v-76c8d185><p data-v-76c8d185>Learn More</p>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: `/opportunities/${props.opportunity.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i_ic_outline_navigate_next, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i_ic_outline_navigate_next)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utils/OpportunityCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-76c8d185"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const opportunityStore = useOpportunitiesStore();
    const { opportunities } = storeToRefs(opportunityStore);
    let isLoading = ref(false);
    onMounted(async () => {
      isLoading.value = true;
      await opportunityStore.getOpportunities("all");
      isLoading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OpportunityCard = __unplugin_components_0$1;
      const _component_SkeletonOpportunityCard = __unplugin_components_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opportunity-portal-container" }, _attrs))} data-v-478bbe32>`);
      if (!isLoading.value) {
        _push(`<h2 class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]" data-v-478bbe32> Showing 20 out of 100 opportunities </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value) {
        _push(`<div class="job-cards" data-v-478bbe32><!--[-->`);
        ssrRenderList(unref(opportunities), (o) => {
          _push(ssrRenderComponent(_component_OpportunityCard, {
            key: o.id,
            opportunity: o
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<h2 class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]" data-v-478bbe32> Loading 20 out of 100 opportunities </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<div class="job-cards" data-v-478bbe32><!--[-->`);
        ssrRenderList(20, (index2) => {
          _push(ssrRenderComponent(_component_SkeletonOpportunityCard, { key: index2 }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/opportunities/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-478bbe32"]]);
var index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$4
}, Symbol.toStringTag, { value: "Module" }));
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const opportunityStore = useOpportunitiesStore();
    const { opportunities } = storeToRefs(opportunityStore);
    const loadingStore = useLoadingStore();
    const { ogtFiltering } = storeToRefs(loadingStore);
    let isLoading = ref(false);
    onMounted(async () => {
      isLoading.value = true;
      await opportunityStore.getOpportunities("OGT");
      isLoading.value = false;
    });
    useHead({
      title: "Internship opportunities | AIESEC",
      meta: [
        {
          name: "description",
          content: "Currently available internship opportunities in AIESEC CC"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OpportunityCard = __unplugin_components_0$1;
      const _component_SkeletonOpportunityCard = __unplugin_components_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opportunity-portal-container" }, _attrs))} data-v-c1d9457a>`);
      if (!isLoading.value && !unref(ogtFiltering)) {
        _push(`<h2 class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]" data-v-c1d9457a> Showing Internship opportunities </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value && !unref(ogtFiltering)) {
        _push(`<div class="job-cards" data-v-c1d9457a><!--[-->`);
        ssrRenderList(unref(opportunities), (o) => {
          _push(ssrRenderComponent(_component_OpportunityCard, {
            key: o.id,
            opportunity: o
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value || unref(ogtFiltering)) {
        _push(`<h2 class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]" data-v-c1d9457a> Loading Internship opportunities </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value || unref(ogtFiltering)) {
        _push(`<div class="job-cards" data-v-c1d9457a><!--[-->`);
        ssrRenderList(20, (index2) => {
          _push(ssrRenderComponent(_component_SkeletonOpportunityCard, { key: index2 }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/opportunities/ogt/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c1d9457a"]]);
var index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<path fill="#CFD8DC" d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4z"></path><path fill="#F44336" d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4z"></path><g fill="#B71C1C"><circle cx="33" cy="10" r="3"></circle><circle cx="15" cy="10" r="3"></circle></g><path fill="#B0BEC5" d="M33 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2zM15 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"></path><path fill="#90A4AE" d="M13 20h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-18 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-18 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"></path>', 5);
const _hoisted_7 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_7);
}
var __unplugin_components_4 = { name: "flat-color-icons-calendar", render: render$4 };
const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<path fill="#78909C" d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"></path><path fill="#AED581" d="M14 1h20v31H14z"></path><g fill="#558B2F"><path d="M13 0v33h22V0H13zm20 31H15V2h18v29z"></path><path d="M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3s1.3-2 3-2s2 .3 2 2zM16 1c1.7 0 3 .3 3 2s-1.3 3-3 3s-2-1.3-2-3s.3-2 2-2z"></path><circle cx="24" cy="8" r="2"></circle><circle cx="24" cy="20" r="6"></circle></g><path fill="#CFD8DC" d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4z"></path>', 4);
const _hoisted_6$1 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_6$1);
}
var __unplugin_components_3 = { name: "flat-color-icons-money-transfer", render: render$3 };
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<path fill="#1565C0" d="M25 22h13l6 6V11c0-2.2-1.8-4-4-4H25c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4z"></path><path fill="#2196F3" d="M23 19H10l-6 6V8c0-2.2 1.8-4 4-4h15c2.2 0 4 1.8 4 4v7c0 2.2-1.8 4-4 4z"></path><g fill="#FFA726"><circle cx="12" cy="31" r="5"></circle><circle cx="36" cy="31" r="5"></circle></g><path fill="#607D8B" d="M20 42s-2.2-4-8-4s-8 4-8 4v2h16v-2zm24 0s-2.2-4-8-4s-8 4-8 4v2h16v-2z"></path>', 4);
const _hoisted_6 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_6);
}
var __unplugin_components_2 = { name: "flat-color-icons-collaboration", render: render$2 };
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#7CB342",
  d: "M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4z"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#0277BD",
  d: "M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21zm-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2c.2-.2.2-.2.2-.4c0-.6-.6-1.3-1-1.7c-.4-.4-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9zm.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5c.6-.4 1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1h.2zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8c0 .2.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
var __unplugin_components_1 = { name: "flat-color-icons-globe", render: render$1 };
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
var __unplugin_components_0 = { name: "ep-back", render };
var _id__vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "[id]",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const opportunityStore = useOpportunitiesStore();
    const opportunity = ref();
    const head = reactive({
      title: "Opportunity | AIESEC",
      meta: [{ name: "description", content: "Opportunity Description" }]
    });
    useHead(head);
    onMounted(async () => {
      var _a, _b, _c;
      opportunity.value = await opportunityStore.getOpportunityById(props.id);
      head.title = `${(_a = opportunity.value) == null ? void 0 : _a.title} in ${(_b = opportunity.value) == null ? void 0 : _b.country} | AIESEC`;
      head.meta = [
        {
          name: "description",
          content: `${(_c = opportunity.value) == null ? void 0 : _c.description}`
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_i_ep_back = __unplugin_components_0;
      const _component_i_flat_color_icons_globe = __unplugin_components_1;
      const _component_i_flat_color_icons_collaboration = __unplugin_components_2;
      const _component_i_flat_color_icons_money_transfer = __unplugin_components_3;
      const _component_i_flat_color_icons_calendar = __unplugin_components_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opportunity-page" }, _attrs))} data-v-2b031b74>`);
      if (opportunity.value) {
        _push(`<div class="opportunity-container" data-v-2b031b74><header class="opportunity-header" data-v-2b031b74><div class="opportunity-header__container" data-v-2b031b74>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/opportunities/ogt",
          class: "flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[var(--clr-background)] text-[var(--clr-primary)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_i_ep_back, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_i_ep_back)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h2 data-v-2b031b74>Opportunity Details</h2></div></header><section class="opportunity-body" data-v-2b031b74><aside class="opportunity-figure shadow-md" data-v-2b031b74><img${ssrRenderAttr("src", (_a = opportunity.value) == null ? void 0 : _a.poster)}${ssrRenderAttr("alt", `Poster for ${(_b = opportunity.value) == null ? void 0 : _b.title}`)} data-v-2b031b74></aside><article class="opportunity-info shadow-md" data-v-2b031b74><a href="#" class="apply-now" data-v-2b031b74> Apply Now </a><h1 class="text-[var(--clr-text-primary)] font-bold" data-v-2b031b74>${ssrInterpolate((_c = opportunity.value) == null ? void 0 : _c.title)}</h1><p class="my-2" data-v-2b031b74> Posted on ${ssrInterpolate(unref(format)(opportunity.value.createdAt.toDate(), "yyyy MMM dd"))}</p><img${ssrRenderAttr("src", (_d = opportunity.value) == null ? void 0 : _d.poster)}${ssrRenderAttr("alt", `Poster for ${(_e = opportunity.value) == null ? void 0 : _e.title}`)} data-v-2b031b74><div class="flex items-center gap-4" data-v-2b031b74><div class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg" data-v-2b031b74>`);
        _push(ssrRenderComponent(_component_i_flat_color_icons_globe, { class: "w-[24px] h-[24px]" }, null, _parent));
        _push(`<div data-v-2b031b74><div class="font-bold" data-v-2b031b74>${ssrInterpolate(opportunity.value.country)}</div><div class="text-xs font-light" data-v-2b031b74>Country</div></div></div>`);
        if (opportunity.value.function === "OGV") {
          _push(`<div class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg" data-v-2b031b74>`);
          _push(ssrRenderComponent(_component_i_flat_color_icons_collaboration, { class: "w-[24px] h-[24px]" }, null, _parent));
          _push(`<div data-v-2b031b74><div class="font-bold" data-v-2b031b74>${ssrInterpolate(opportunity.value.category)}</div><div class="text-xs font-light" data-v-2b031b74>Volunteering</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (opportunity.value.function === "OGT") {
          _push(`<div class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg" data-v-2b031b74>`);
          _push(ssrRenderComponent(_component_i_flat_color_icons_money_transfer, { class: "w-[24px] h-[24px]" }, null, _parent));
          _push(`<div data-v-2b031b74><div class="font-bold" data-v-2b031b74>${ssrInterpolate(opportunity.value.currency)}${ssrInterpolate(opportunity.value.salary)}</div><div class="text-xs font-light" data-v-2b031b74>Salary</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (opportunity.value.timeslots.length > 0) {
          _push(`<h3 class="font-bold mb-4" data-v-2b031b74> Available timeslots </h3>`);
        } else {
          _push(`<!---->`);
        }
        if (opportunity.value.timeslots.length > 0) {
          _push(`<div class="bg-[var(--clr-background)] rounded-lg p-2 flex items-center flex-wrap gap-y-2 gap-x-4 px-4 py-2" data-v-2b031b74><!--[-->`);
          ssrRenderList(opportunity.value.timeslots, (timeslot) => {
            _push(`<div class="flex items-center gap-4 w-full mt-2 text-[var(--clr-text-primary)]" data-v-2b031b74>`);
            _push(ssrRenderComponent(_component_i_flat_color_icons_calendar, null, null, _parent));
            _push(`<span data-v-2b031b74>${ssrInterpolate(unref(format)(timeslot.begin.toDate(), "yyyy MMM"))} to ${ssrInterpolate(unref(format)(timeslot.end.toDate(), "yyyy MMM"))}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="font-bold my-4" data-v-2b031b74>Description</h3><p class="bg-[var(--clr-background)] p-4 rounded-lg" data-v-2b031b74>${ssrInterpolate((_f = opportunity.value) == null ? void 0 : _f.description)}</p></article></section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/opportunities/ogt/[id].vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var _id_$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2b031b74"]]);
var _id_$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _id_$2
}, Symbol.toStringTag, { value: "Module" }));
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const opportunityStore = useOpportunitiesStore();
    const { opportunities } = storeToRefs(opportunityStore);
    let isLoading = ref(false);
    onMounted(async () => {
      isLoading.value = true;
      await opportunityStore.getOpportunities("OGV");
      isLoading.value = false;
    });
    useHead({
      title: "Volunteering opportunities | AIESEC",
      meta: [
        {
          name: "description",
          content: "Currently available volunteering opportunities in AIESEC CC"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OpportunityCard = __unplugin_components_0$1;
      const _component_SkeletonOpportunityCard = __unplugin_components_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opportunity-portal-container" }, _attrs))} data-v-24de1867>`);
      if (!isLoading.value) {
        _push(`<h2 class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]" data-v-24de1867> Showing volunteering opportunities </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value) {
        _push(`<div class="job-cards" data-v-24de1867><!--[-->`);
        ssrRenderList(unref(opportunities), (o) => {
          _push(ssrRenderComponent(_component_OpportunityCard, {
            key: o.id,
            opportunity: o
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<h2 class="show-count text-sm mt-4 font-bold text-[var(--clr-text-secondary)]" data-v-24de1867> Loading volunteering opportunities </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<div class="job-cards" data-v-24de1867><!--[-->`);
        ssrRenderList(20, (index2) => {
          _push(ssrRenderComponent(_component_SkeletonOpportunityCard, { key: index2 }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/opportunities/ogv/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24de1867"]]);
var index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
var _id__vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "[id]",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const opportunityStore = useOpportunitiesStore();
    const opportunity = ref();
    const head = reactive({
      title: "Opportunity | AIESEC",
      meta: [{ name: "description", content: "Opportunity Description" }]
    });
    useHead(head);
    onMounted(async () => {
      var _a, _b, _c;
      opportunity.value = await opportunityStore.getOpportunityById(props.id);
      head.title = `${(_a = opportunity.value) == null ? void 0 : _a.title} in ${(_b = opportunity.value) == null ? void 0 : _b.country} | AIESEC`;
      head.meta = [
        {
          name: "description",
          content: `${(_c = opportunity.value) == null ? void 0 : _c.description}`
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_i_ep_back = __unplugin_components_0;
      const _component_i_flat_color_icons_globe = __unplugin_components_1;
      const _component_i_flat_color_icons_collaboration = __unplugin_components_2;
      const _component_i_flat_color_icons_money_transfer = __unplugin_components_3;
      const _component_i_flat_color_icons_calendar = __unplugin_components_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opportunity-page" }, _attrs))} data-v-41740986>`);
      if (opportunity.value) {
        _push(`<div class="opportunity-container" data-v-41740986><header class="opportunity-header" data-v-41740986><div class="opportunity-header__container" data-v-41740986>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/opportunities/ogv",
          class: "flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[var(--clr-background)] text-[var(--clr-primary)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_i_ep_back, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_i_ep_back)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h2 data-v-41740986>Opportunity Details</h2></div></header><section class="opportunity-body" data-v-41740986><aside class="opportunity-figure shadow-md" data-v-41740986><img${ssrRenderAttr("src", (_a = opportunity.value) == null ? void 0 : _a.poster)}${ssrRenderAttr("alt", `Poster for ${(_b = opportunity.value) == null ? void 0 : _b.title}`)} data-v-41740986></aside><article class="opportunity-info shadow-md" data-v-41740986><a href="#" class="apply-now" data-v-41740986> Apply Now </a><h1 class="text-[var(--clr-text-primary)] font-bold" data-v-41740986>${ssrInterpolate((_c = opportunity.value) == null ? void 0 : _c.title)}</h1><p class="my-2" data-v-41740986> Posted on ${ssrInterpolate(unref(format)(opportunity.value.createdAt.toDate(), "yyyy MMM dd"))}</p><img${ssrRenderAttr("src", (_d = opportunity.value) == null ? void 0 : _d.poster)}${ssrRenderAttr("alt", `Poster for ${(_e = opportunity.value) == null ? void 0 : _e.title}`)} data-v-41740986><div class="flex items-center gap-4" data-v-41740986><div class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg" data-v-41740986>`);
        _push(ssrRenderComponent(_component_i_flat_color_icons_globe, { class: "w-[24px] h-[24px]" }, null, _parent));
        _push(`<div data-v-41740986><div class="font-bold" data-v-41740986>${ssrInterpolate(opportunity.value.country)}</div><div class="text-xs font-light" data-v-41740986>Country</div></div></div>`);
        if (opportunity.value.function === "OGV") {
          _push(`<div class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg" data-v-41740986>`);
          _push(ssrRenderComponent(_component_i_flat_color_icons_collaboration, { class: "w-[24px] h-[24px]" }, null, _parent));
          _push(`<div data-v-41740986><div class="font-bold" data-v-41740986>${ssrInterpolate(opportunity.value.category)}</div><div class="text-xs font-light" data-v-41740986>Volunteering</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (opportunity.value.function === "OGT") {
          _push(`<div class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg" data-v-41740986>`);
          _push(ssrRenderComponent(_component_i_flat_color_icons_money_transfer, { class: "w-[24px] h-[24px]" }, null, _parent));
          _push(`<div data-v-41740986><div class="font-bold" data-v-41740986>${ssrInterpolate(opportunity.value.currency)}${ssrInterpolate(opportunity.value.salary)}</div><div class="text-xs font-light" data-v-41740986>Salary</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (opportunity.value.timeslots.length > 0) {
          _push(`<h3 class="font-bold mb-4" data-v-41740986> Available timeslots </h3>`);
        } else {
          _push(`<!---->`);
        }
        if (opportunity.value.timeslots.length > 0) {
          _push(`<div class="bg-[var(--clr-background)] rounded-lg p-2 flex items-center flex-wrap gap-y-2 gap-x-4 px-4 py-2" data-v-41740986><!--[-->`);
          ssrRenderList(opportunity.value.timeslots, (timeslot) => {
            _push(`<div class="flex items-center gap-4 w-full mt-2 text-[var(--clr-text-primary)]" data-v-41740986>`);
            _push(ssrRenderComponent(_component_i_flat_color_icons_calendar, null, null, _parent));
            _push(`<span data-v-41740986>${ssrInterpolate(unref(format)(timeslot.begin.toDate(), "yyyy MMM"))} to ${ssrInterpolate(unref(format)(timeslot.end.toDate(), "yyyy MMM"))}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="font-bold my-4" data-v-41740986>Description</h3><p class="bg-[var(--clr-background)] p-4 rounded-lg" data-v-41740986>${ssrInterpolate((_f = opportunity.value) == null ? void 0 : _f.description)}</p></article></section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/opportunities/ogv/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41740986"]]);
var _id_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _id_
}, Symbol.toStringTag, { value: "Module" }));
export { createApp };
