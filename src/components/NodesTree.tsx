import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';

export interface NodeStructureInterface {
    name: string;
    attributes?: Record<string, string | number | boolean>;
    children?: NodeStructureInterface[];
}

export default function NodesTree(tree: NodeStructureInterface) {
    const containerStyles = {
        width: '100%',
        height: '100vh',
    }
    
    const [translate, translateSet] = useState({x: 262, y: 45})

    // useEffect(() => {
    //     const dimensions = 
    // }, [])
    
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={containerStyles}>
            <Tree data={tree} orientation={'vertical'} translate={translate}/>
        </div>
    );
}