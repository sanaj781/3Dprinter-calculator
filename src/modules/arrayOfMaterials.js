const EURtoPLN = 4.65;
const materials = [
  {
    title: "ABS-M30",
    PN: "355-02110",
    price: ((320 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "ABS-M30i",
    PN: "355-02120",
    price: ((320 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "ABS-ESD7",
    PN: "355-02130",
    price: ((350 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "ASA",
    PN: "355-02140",
    price: ((320 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "PC-ABS",
    PN: "355-02260",
    price: ((350 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "PC",
    PN: "355-02210",
    price: ((350 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "Nylon 12",
    PN: "355-02230",
    price: ((350 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "ULTEM9085",
    PN: "355-02310",
    price: ((600 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
];

const support = [
  {
    title: "SR-30",
    PN: "355-03110",
    price: ((320 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "SR-100",
    PN: "355-03120",
    price: ((380 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
  {
    title: "ULTEM SUPPORT",
    PN: "355-03220",
    price: ((600 * EURtoPLN) / 1510).toFixed(2),
    amount: 4820,
  },
];

export function getMaterials() {
  return materials;
}

export function getSupports() {
  return support;
}
