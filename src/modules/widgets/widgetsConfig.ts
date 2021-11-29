
export const widgetsConfig = [
  {
    key: "gitHub",
    type: "iconWithLink",
    iconName: "GitHubIcon",
    dataGrid: { x: 0, y: 0, w: 2, h: 2 },
    link: "https://github.com/qbacuber",
    text: "GitHub Link",
  },
  {
    key: "linkedin",
    type: "iconWithLink",
    iconName: "LinkedinIcon",
    dataGrid: { x: 0, y: 2, w: 2, h: 2 },
    link: "https://www.linkedin.com/in/jakub-pa%C5%9Bciak/",
    text: "LinkedIn Link",
  },
  {
    key: "email",
    type: "email",
    componentName: "",
    dataGrid: { x: 8, y: 4, w: 4, h: 2 },
    link: "kontakt.pasciak@gmail.com",
    text: "kontakt.pasciak@gmail.com",
  },
  {
    key: "firstNameAndSurname",
    type: "textWithLink",
    componentName: "",
    dataGrid: { x: 2, y: 0, w: 4, h: 2 },
    link: "/",
    text: "Jakub Paściak",
  },
  {
    key: "react",
    type: "onlyIcon",
    iconName: "ReactIcon",
    dataGrid: { x: 4, y: 2, w: 2, h: 2 },
    text: "React",
  },
  {
    key: "html",
    type: "onlyIcon",
    iconName: "HTMLIcon",
    dataGrid: { x: 10, y: 2, w: 2, h: 2 },
    text: "HTML",
  },
  {
    key: "css",
    type: "onlyIcon",
    iconName: "CSSIcon",
    dataGrid: { x: 2, y: 4, w: 2, h: 2 },
    text: "CSS",
  },
  {
    key: "node",
    type: "onlyIcon",
    iconName: "NodeIcon",
    dataGrid: { x: 10, y: 6, w: 2, h: 2 },
    text: "Node",
  },
  {
    key: "figma",
    type: "onlyIcon",
    iconName: "FigmaIcon",
    dataGrid: { x: 8, y: 6, w: 2, h: 2 },
    text: "Figma",
  },
  {
    key: "js",
    type: "onlyIcon",
    iconName: "JSIcon",
    dataGrid: { x: 0, y: 4, w: 2, h: 2 },
    text: "Js",
  },
  {
    key: "ts",
    type: "onlyIcon",
    iconName: "TypeScriptIcon",
    dataGrid: { x: 2, y: 2, w: 2, h: 2 },
    text: "TS",
  },
  {
    key: "language",
    type: "changeLanguage",
    dataGrid: { x: 10, y: 0, w: 2, h: 2 },
    text: "PL | EN",
  },
  {
    key: "bio",
    type: "bio",
    dataGrid: { x: 6, y: 0, w: 4, h: 4},
  },
]

export const smallFixedLayout = {
  xs: [
    {"w":2,"h":2,"x":0,"y":2,"i":"gitHub"},
    {"w":2,"h":2,"x":0,"y":14,"i":"css"},
    {"w":4,"h":2,"x":0,"y":18,"i":"email"},
    {"w":4,"h":2,"x":0,"y":0,"i":"firstNameAndSurname"},
    {"w":2,"h":2,"x":2,"y":14,"i":"html"},
    {"w":2,"h":2,"x":2,"y":16,"i":"node"},
    {"w":2,"h":2,"x":0,"y":10,"i":"linkedin"},
    {"w":2,"h":2,"x":2,"y":10,"i":"react"},
    {"w":2,"h":2,"x":0,"y":12,"i":"js"},
    {"w":2,"h":2,"x":0,"y":16,"i":"figma"},
    {"w":2,"h":2,"x":2,"y":12,"i":"ts"},
    {"w":2,"h":2,"x":2,"y":2,"i":"language"},
    {"w":4,"h":4,"x":0,"y":4,"i":"bio"}
  ]
}