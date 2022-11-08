class Node {
    
    public value: number;
    public childrens: number[];
    
    constructor(value: number) {
      this.value = value;
      this.childrens = [];
    }

    addChildren(children: number): void {
      this.childrens.push(children)
    }
  }

  interface NodesMap {
    id: number;
    node: Node;
    edges: number[][];
  }

  interface Tree {
    name: string;
    children?: Tree[];
  }


  export function createTree(root:string, edges: number[][]): Tree {
    let childrens: number[] = [];
    let tree: Tree = {
      name: root
    }
    let newEdgeArray: number[][] = [];

    if (edges.length > 0) {
      edges.forEach((edge) => {
        if (edge.includes(Number(root))) {
          childrens.push(edge.filter(e => e !== Number(root))[0]);
        } else {
          newEdgeArray.push(edge);
        }
      })

      if (childrens.length > 0) {
        tree.children = [];
        tree.children = 
          childrens.map(child => createTree(child.toString(), newEdgeArray))
      }
    }

    return tree;
  }
  
  export function buildTree(arrayEdges:[number, number][]) {
    let nodesMap: NodesMap[] = [];
    let parents: number[] = [1];
    let rootIndex: number = 0;
    let rootNode;
    // Map the edges
    arrayEdges.forEach((item: [number, number]) => {
      item.forEach((nodeValue: number) => {
        const nodeMap = nodesMap.find((nodeMap, index) => {
          // check if Node exists
          if (nodeMap.id === nodeValue) {
            if (nodeValue === 1) rootIndex = index;
            // check if is a children to parent relation
            const otherEdge = item.filter(edge => edge !== nodeValue)[0];
            if (!parents.includes(otherEdge)) {
              if (nodeMap.edges.length > 0) { parents.push(nodeValue); }
              nodesMap[index].edges?.push(item);
            }
            return nodeMap;
          }
          return null;
        });

        if (!nodeMap)
          nodesMap.push({ id: nodeValue, node: new Node(nodeValue), edges: [item] });
      });
    });

    // Set the values of teh childrens per node
    return nodesMap.map(nodeMap => {
      return {
        ...nodeMap,
        node: {
          ...nodeMap.node,
          childrens: nodeMap.edges.length > 1 ? nodeMap.edges.map(item => (item.filter(edge => edge !== nodeMap.id)[0])) : [],
        }
      }
    })
  }