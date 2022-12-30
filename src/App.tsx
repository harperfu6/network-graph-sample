import "./App.css";
import MyForceGraph3D, { MyLinkObject } from "./components/ForceGraph";
import explanierGraph from "../datasets/gnn_data/explainer_subgraph.json";
import posGraph from "../datasets/gnn_data/epoch-1-sampler-0-positive.json";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

export const App = () => {
  let graphData = posGraph;

  const forceGraphViewWidth = 1000;
  const forceGraphViewHeight = 1000;

  const linkWidth = (link: MyLinkObject) => {
    return link.value * 2;
  };

  const nodeThreeObject = (node: any) => {
    const nodeEl = document.createElement("div");
    nodeEl.textContent = node.id;
    nodeEl.style.fontSize = "12px";

    if (node.group == 99) {
      nodeEl.style.color = "white";
    } else if (node.group == 0) {
      // app
      nodeEl.style.color = "orange";
    } else if (node.group == 1) {
      // dpay
      nodeEl.style.color = "yellow";
    } else if (node.group == 2) {
      // staypoint
      nodeEl.style.color = "green";
    } else if (node.group == 3) {
      // dmenu
      nodeEl.style.color = "purple";
    }

    if (node.id == "user_17") {
      nodeEl.style.color = "red";
    }

    return new CSS2DObject(nodeEl);
  };

  return (
    <>
      <MyForceGraph3D
        graphData={graphData}
        width={forceGraphViewWidth}
        height={forceGraphViewHeight}
        linkWidth={linkWidth}
        nodeThreeObject={nodeThreeObject}
      />
    </>
  );
};
