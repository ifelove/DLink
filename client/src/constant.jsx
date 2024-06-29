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
