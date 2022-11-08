import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Header } from "./components/Header";
import { buildTree, createTree } from "./utils";
import NodesTree, { NodeStructureInterface } from "./components/NodesTree";
import { AddEdgeInput } from "./components/AddEdgeInput";
import { NodesLabel } from "./components/NodesLabel";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: '50%',
  background: '#0d6f87',
  padding: '15px',
  margin: '1%',
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  padding: '0 10%',
});

const NodeList = styled.ul({
  width: "90%",
  listStyle: "none",
});

function App() {
  const [tree, treeSet] = useState<NodeStructureInterface>({name: '1'});
  const [arrayEdges, arrayEdgesSet] = useState<number[][]>([]);
  const [edgeList, edgeListSet] = useState<string[]>([])


  const addEdge = (edge: string) => {
    edgeListSet(prev => [...prev, edge])
    arrayEdgesSet((prev: number[][]) => {
      const newEdge: number[] = edge.split(',').map(e => parseInt(e,10));
      // prev.push([4,5])
      // prev.push(newEdge)
      return [...prev, newEdge]
    })
  }

  useEffect(() => {
    const arrayEdges: [number, number][] = [[4,5], [5,3], [1,5], [2,5]];
    const nodes = buildTree(arrayEdges);
    console.log(nodes)
  }, [])

  useEffect(() => {
    // const arrayEdges: [number, number][] = [[4,5], [5,3], [1,5], [2,1]];
    // const arrayEdges: [number, number][] = [[1,2],[2,3],[3,4],[1,5]];
    
    const nodes = createTree('1', arrayEdges);
    treeSet(nodes)
  }, [arrayEdges])

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <Container>
        <Wrapper>
          <Header>
              Edges List
          </Header>
          <AddEdgeInput onAdd={addEdge} />
          <NodeList>
            {edgeList.map((edge: string) => ( <NodesLabel label={edge} /> ))}
          </NodeList>
        </Wrapper>
        <Wrapper>
          <Header>
            Tree
          </Header>
          <NodesTree  {...tree} />
        </Wrapper>     
      </Container>
    </div>
  );
}

export default App;
