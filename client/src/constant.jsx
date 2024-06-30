import dash from "./assets/dash.png";
import site from "./assets/site1.png";

import ticket1 from "./assets/ticket1.png";
import ticket2 from "./assets/ticket2.png";
import app from "./assets/app.png";
import utilities from "./assets/utilities.png";
import doc from "./assets/docs.png";

export const sidebarData = [
  {
    title: "dashboard",
    icon: dash,
    links: [
      { name: "overwiew", url: "" },
      { name: "team management", url: "" },
    ],
  },
  { title: "sites", icon: site },

  {
    title: "support ticket",
    icon: ticket1,
    links: [
      { name: "all support tickets", url: "" },
      { name: "my support tickets", url: "" },
      { name: "open ticket", url: "" },
      { name: "knowledge base", url: "" },
      { name: "live chat", url: "" },
    ],
  },
  {
    title: "tools",
    icon: app,
    links: [
      { name: "controller", url: "" },
      { name: "board", url: "" },
      { name: "component", url: "" },
      { name: "inventory", url: "" },
      { name: "autnentication", url: "" },
      { name: "employees", url: "" },
      { name: "report", url: "" },
    ],
  },
  {
    title: "utilities",
    icon: utilities,
    links: [
      { name: "task", url: "" },
      { name: "calender", url: "" },
      { name: "calculator", url: "" },
      { name: "helper", url: "" },
    ],
  },

  {
    title: "messages",
    icon: utilities,
    links: [
      { name: "mail", url: "" },
      { name: "noticification", url: "" },
    ],
  },
  { title: "Doc", icon: doc, links: [] },
];

export const siteData = [
  {
    ID: 4698,
    Name: "Ariye_Test_1",
    Latitude: 6.443028612993,
    Longitude: 3.454943457618,
    SiteStatus: "WIP",
    ProjectStatus: "RFI",
    SiteType: "Telecom",
    SerialName: "JR35",
    ControllerID: 6297,
  },
  {
    ID: 9260,
    Name: "CameraTest",
    Latitude: 6.443028612993,
    Longitude: 3.45494345761,
    SiteStatus: "RFI",
    ProjectStatus: "RFI",
    SiteType: "Telecom",
    SerialName: "f7119",
    ControllerID: 7119,
  },

  {
    ID: 423,
    Name: "IHS_ABE_0001B",
    Latitude: 7.13978,
    Longitude: 3.32859,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DF85",
    ControllerID: 868,
  },
  {
    ID: 424,
    Name: "IHS_ABE_0002B",
    Latitude: 7.16664794,
    Longitude: 3.33966523,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "GK63",
    ControllerID: 1340,
  },
  {
    ID: 425,
    Name: "IHS_ABE_0003B",
    Latitude: 7.18105767,
    Longitude: 3.41173682,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DB83",
    ControllerID: 864,
  },
  {
    ID: 426,
    Name: "IHS_ABE_0004B",
    Latitude: 7.1862803,
    Longitude: 3.34808049,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DI40",
    ControllerID: 872,
  },
  {
    ID: 427,
    Name: "IHS_ABE_0005B",
    Latitude: 7.14430434,
    Longitude: 3.37382727,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DB75",
    ControllerID: 1339,
  },
  {
    ID: 16791,
    Name: "IHS_ABE_0007B",
    Latitude: 7.14052153,
    Longitude: 3.35556699,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "IK69",
    ControllerID: 12020,
  },
  {
    ID: 12026,
    Name: "IHS_ABE_0008B",
    Latitude: 7.17294,
    Longitude: 3.27661,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "IO88",
    ControllerID: 10376,
  },
  {
    ID: 25036,
    Name: "IHS_ABE_0010V",
    Latitude: 7.12522239,
    Longitude: 3.36734011,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "OZ14",
    ControllerID: 22271,
  },
  {
    ID: 430,
    Name: "IHS_ABE_0012V",
    Latitude: 7.171776,
    Longitude: 3.365425,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DA72",
    ControllerID: 780,
  },
  {
    ID: 432,
    Name: "IHS_ABE_0014V",
    Latitude: 7.12021545,
    Longitude: 3.29508015,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DI19",
    ControllerID: 763,
  },
  {
    ID: 433,
    Name: "IHS_ABE_0015V",
    Latitude: 7.14353534,
    Longitude: 3.3090919,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DF56",
    ControllerID: 768,
  },
  {
    ID: 16606,
    Name: "IHS_ABE_0016V",
    Latitude: 7.168472,
    Longitude: 3.318055,
    SiteStatus: "OffAir",
    ProjectStatus: "I_ATP",
    SiteType: "Telecom",
    SerialName: "SAM-RR-0059",
    ControllerID: 11835,
  },
  {
    ID: 435,
    Name: "IHS_ABE_0017V",
    Latitude: 7.19234702,
    Longitude: 3.3512691,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "KL06",
    ControllerID: 773,
  },
  {
    ID: 436,
    Name: "IHS_ABE_0018V",
    Latitude: 7.134866,
    Longitude: 3.34735,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "DC18",
    ControllerID: 3565,
  },
  {
    ID: 17163,
    Name: "IHS_ABE_0019V",
    Latitude: 7.161476,
    Longitude: 3.377211,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "AB19",
    ControllerID: 12392,
  },
  {
    ID: 12002,
    Name: "IHS_ABE_0020V",
    Latitude: 7.16032,
    Longitude: 3.3557366666666666,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "MA47",
    ControllerID: 10352,
  },
  {
    ID: 19331,
    Name: "IHS_ABE_0022B",
    Latitude: 7.368,
    Longitude: 3.6647,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "JF66",
    ControllerID: 17797,
  },
  {
    ID: 9281,
    Name: "IHS_ABE_0023B",
    Latitude: 7.1851415,
    Longitude: 3.41966888,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "CL53",
    ControllerID: 7144,
  },
  {
    ID: 16976,
    Name: "IHS_ABE_0025B",
    Latitude: 7.182278,
    Longitude: 3.345917,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "KQ53",
    ControllerID: 12205,
  },
  {
    ID: 16865,
    Name: "IHS_ABE_0026B",
    Latitude: 7.14094166666667,
    Longitude: 3.33667,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OQ43",
    ControllerID: 12094,
  },
  {
    ID: 9282,
    Name: "IHS_ABE_0027B",
    Latitude: 7.15612165,
    Longitude: 3.36987025,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "CL38",
    ControllerID: 7145,
  },
  {
    ID: 16783,
    Name: "IHS_ABE_0028B",
    Latitude: 7.13163,
    Longitude: 3.30402,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "Lo85",
    ControllerID: 12012,
  },
  {
    ID: 11046,
    Name: "IHS_ABE_0029B",
    Latitude: 7.12944115,
    Longitude: 3.38095167,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "KN17",
    ControllerID: 9416,
  },
  {
    ID: 11904,
    Name: "IHS_ABE_0030B",
    Latitude: 7.1680838,
    Longitude: 3.39365194,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "JX02",
    ControllerID: 10255,
  },
  {
    ID: 16974,
    Name: "IHS_ABE_0031B",
    Latitude: 7.160538889,
    Longitude: 3.339827778,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OY31",
    ControllerID: 12203,
  },
  {
    ID: 3,
    Name: "IHS_ABI_0002B",
    Latitude: 5.13725,
    Longitude: 7.33014,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "IH67",
    ControllerID: 1331,
  },
  {
    ID: 1091,
    Name: "IHS_ABI_0003B",
    Latitude: 5.112682,
    Longitude: 7.341298,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "LR59",
    ControllerID: 4074,
  },
  {
    ID: 5,
    Name: "IHS_ABI_0004B",
    Latitude: 5.09743,
    Longitude: 7.40262,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "GY66",
    ControllerID: 1324,
  },
  {
    ID: 6,
    Name: "IHS_ABI_0005B",
    Latitude: 5.11797,
    Longitude: 7.35523,
    SiteStatus: "OnAir",
    ProjectStatus: "RFI",
    SiteType: "Telecom",
    SerialName: "IHS_ABI_0005B",
    ControllerID: 1188,
  },
  {
    ID: 7,
    Name: "IHS_ABI_0006B",
    Latitude: 5.080266,
    Longitude: 7.322137,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "GQ75",
    ControllerID: 1042,
  },
  {
    ID: 8,
    Name: "IHS_ABI_0007B",
    Latitude: 5.13793,
    Longitude: 7.35277,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "HF77",
    ControllerID: 995,
  },
  {
    ID: 9987,
    Name: "IHS_ABI_0008B",
    Latitude: 5.09647,
    Longitude: 7.32934,
    SiteStatus: "Decommissioned",
    ProjectStatus: "I_PAC",
    SiteType: "Telecom",
    SerialName: "33-17-046258    ",
    ControllerID: 8154,
  },
  {
    ID: 687,
    Name: "IHS_ABI_0009B",
    Latitude: 5.1027,
    Longitude: 7.35048,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "Kz93",
    ControllerID: 1102,
  },
  {
    ID: 671,
    Name: "IHS_ABI_0010B",
    Latitude: 5.07226,
    Longitude: 7.37954,
    SiteStatus: "Decommissioned",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "JE95",
    ControllerID: 1002,
  },
  {
    ID: 674,
    Name: "IHS_ABI_0011B",
    Latitude: 5.07333,
    Longitude: 7.34057,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "LH11",
    ControllerID: 1014,
  },
  {
    ID: 12859,
    Name: "IHS_ABI_0012B",
    Latitude: 5.166286,
    Longitude: 7.327506,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "JE49",
    ControllerID: 11225,
  },
  {
    ID: 10824,
    Name: "IHS_ABI_0013B",
    Latitude: 4.90757,
    Longitude: 7.20493,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "IM05",
    ControllerID: 9187,
  },
  {
    ID: 683,
    Name: "IHS_ABI_0014B",
    Latitude: 5.03212,
    Longitude: 7.2182,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "EP17",
    ControllerID: 1090,
  },
  {
    ID: 12846,
    Name: "IHS_ABI_0015B",
    Latitude: 5.07333,
    Longitude: 7.30131,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "KN47",
    ControllerID: 11214,
  },
  {
    ID: 16141,
    Name: "IHS_ABI_0016B",
    Latitude: 5.29312,
    Longitude: 7.48539,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "KL58",
    ControllerID: 11521,
  },
  {
    ID: 9699,
    Name: "IHS_ABI_0017B",
    Latitude: 5.2365,
    Longitude: 7.4812,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "IL12",
    ControllerID: 7823,
  },
  {
    ID: 10941,
    Name: "IHS_ABI_0018B",
    Latitude: 5.087085,
    Longitude: 7.388457,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "HX69",
    ControllerID: 9304,
  },
  {
    ID: 12450,
    Name: "IHS_ABI_0019B",
    Latitude: 5.155938,
    Longitude: 7.343834,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "UK19",
    ControllerID: 10824,
  },
  {
    ID: 13,
    Name: "IHS_ABI_0024V",
    Latitude: 5.100197,
    Longitude: 7.334398,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "lv02",
    ControllerID: 1191,
  },
  {
    ID: 16187,
    Name: "IHS_ABI_0025B",
    Latitude: 5.487187,
    Longitude: 7.886277,
    SiteStatus: "OffAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OO28",
    ControllerID: 11566,
  },
  {
    ID: 755,
    Name: "IHS_ABI_0026B",
    Latitude: 5.604782,
    Longitude: 7.465107,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "IW84",
    ControllerID: 3950,
  },
  {
    ID: 9954,
    Name: "IHS_ABI_0027B",
    Latitude: 5.35255,
    Longitude: 7.37007,
    SiteStatus: "OffAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "48-15-034124",
    ControllerID: 8116,
  },
  {
    ID: 16579,
    Name: "IHS_ABI_0028B",
    Latitude: 5.18761,
    Longitude: 7.46712,
    SiteStatus: "Decommissioned",
    ProjectStatus: "I_ATP",
    SiteType: "Telecom",
    SerialName: "SAM-RR-0029",
    ControllerID: 11808,
  },
  {
    ID: 11073,
    Name: "IHS_ABI_0029B",
    Latitude: 5.13733,
    Longitude: 7.40308,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "hz82",
    ControllerID: 9443,
  },
  {
    ID: 9872,
    Name: "IHS_ABI_0030B",
    Latitude: 5.233597,
    Longitude: 7.39327,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "ep25",
    ControllerID: 8013,
  },
  {
    ID: 9673,
    Name: "IHS_ABI_0031B",
    Latitude: 5.273802,
    Longitude: 7.460377,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OF63",
    ControllerID: 7797,
  },
  {
    ID: 11145,
    Name: "IHS_ABI_0032B",
    Latitude: 5.13866,
    Longitude: 7.45189,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OF35",
    ControllerID: 9515,
  },

  {
    ID: 10943,
    Name: "IHS_ABI_0035B",
    Latitude: 5.51866,
    Longitude: 7.45744,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OR08",
    ControllerID: 9306,
  },
  {
    ID: 9697,
    Name: "IHS_ABI_0036B",
    Latitude: 5.332699,
    Longitude: 7.347717,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OZ19",
    ControllerID: 7822,
  },
  {
    ID: 10352,
    Name: "IHS_ABI_0037B",
    Latitude: 5.14087,
    Longitude: 7.3785,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OF68",
    ControllerID: 8574,
  },
  {
    ID: 11666,
    Name: "IHS_ABI_0039B",
    Latitude: 5.11578,
    Longitude: 7.32586,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "FT91",
    ControllerID: 10010,
  },
  {
    ID: 10343,
    Name: "IHS_ABI_0040B",
    Latitude: 5.12837,
    Longitude: 7.34402,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OJ70",
    ControllerID: 8560,
  },
  {
    ID: 11946,
    Name: "IHS_ABI_0046B",
    Latitude: 5.929503,
    Longitude: 7.430306,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OA39",
    ControllerID: 10297,
  },
  {
    ID: 24041,
    Name: "IHS_ABI_0047B",
    Latitude: 5.603068,
    Longitude: 7.819503,
    SiteStatus: "OnAir",
    ProjectStatus: "FAC",
    SiteType: "Telecom",
    SerialName: "JH43",
    ControllerID: 20735,
  },
  {
    ID: 12361,
    Name: "IHS_ABI_0048B",
    Latitude: 5.0925831,
    Longitude: 7.3458894,
    SiteStatus: "OnAir",
    ProjectStatus: "I_FAC",
    SiteType: "Telecom",
    SerialName: "OI75",
    ControllerID: 10738,
  },
];
