import "./App.css";
import explanierGraph from "../datasets/gnn_data/explainer_subgraph.json";
import posGraph from "../datasets/gnn_data/epoch-1-sampler-0-positive.json";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

import DCMGraph2D from "./components/DCMGraph2D";

export const App = () => {
  let graphData = explanierGraph;
  {/* let graphData = posGraph; */}

  return (
    <>
			<DCMGraph2D graphData={graphData} />
    </>
  );
};
