import { ForceGraph2D } from "react-force-graph";
import { NodeObject } from "react-force-graph-3d";

const containerWidth = 1000;
const containerHeight = 1000;

type MyNodeObject = NodeObject & {
  group: string;
};

type MyLinkObject = {};

type GraphData = {
  nodes: MyNodeObject[];
  links: MyLinkObject[];
};

type DCMGraph2DProps = {
  graphData: GraphData;
};

const mapGroup2Color = (group: string) => {
  {
    /* const groupList = ["user", "app", "dpay", "staypoint", "dmenu"]; */
  }
  const groupList = [99, 0, 2, 3, 1];
  const colorList = ["red", "orange", "yellow", "green", "purple"];
  return colorList[groupList.indexOf(group)];
};

const mapGroup2X = (group: string) => {
  {
    /* const groupList = ["user", "app", "dpay", "staypoint", "dmenu"]; */
  }
  const groupList = [99, 0, 2, 3, 1];
  const xOffset = 100;
  const xInterval = (containerWidth - xOffset) / (groupList.length - 1);
  const xList = groupList.map(
    (_, i) => -(containerWidth / 2 - xOffset / 2) + xInterval * i
  );
  return xList[groupList.indexOf(group)];
};

const fixNodePosition = (node: MyNodeObject) => {
  node.fx = mapGroup2X(node.group);
  return node;
};


const DCMGraph2D: React.FC<DCMGraph2DProps> = ({ graphData }) => {
  {/* graphData.nodes = graphData.nodes.map(fixNodePosition); */}
  console.log(graphData.nodes);
  return (
    <>
      <ForceGraph2D
        width={containerWidth}
        height={containerHeight}
        graphData={graphData}
        nodeAutoColorBy="group"
				nodeRelSize={10}
      />
    </>
  );
};

export default DCMGraph2D;
