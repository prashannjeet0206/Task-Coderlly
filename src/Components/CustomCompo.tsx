import { Edge, Node } from "@xyflow/react";

export const initialEdges: Edge[] = [];

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { amount: 10 },
    type: "paymentInit",
  },
  {
    id: "2",
    position: { x: 500, y: 20 },
    data: { currency: "$", country: "United States", countryCode: "US" },
    type: "paymentCountry",
  },
  {
    id: "3",
    position: { x: 500, y: 300 },
    data: { currency: "£", country: "England", countryCode: "GB" },
    type: "paymentCountry",
  },
  {
    id: "4",
    data: { name: "Google Pay", code: "Gp" },
    position: { x: 1000, y: -50 },
    type: "paymentProvider",
  },
  {
    id: "5",
    data: { name: "Stripe", code: "St" },
    position: { x: 1000, y: 125 },
    type: "paymentProvider",
  },
  {
    id: "6",
    data: { name: "Apple Pay", code: "Ap" },
    position: { x: 1000, y: 325 },
    type: "paymentProvider",
  },
  {
    id: "7",
    data: {},
    position: { x: 500, y: -100 },
    type: "paymentProviderSelect",
  },
];
