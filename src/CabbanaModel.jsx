/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 cabbana_last_withUV.glb 
*/

import React, { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { SizeLimit } from './App';
import { getNodeSize, getRadFromAngle} from './helper'


let render_children = [];

export default function Model(props) {

  const {modelDimensions, initialNodes}  = props;
  const [renderFlag, setRenderFlag] = useState(false);

  const {nodes, materials } = useGLTF('/CabbanaModel.glb')
  const blade_delta = {
    x : nodes.blade2.position.x - nodes.blade1.position.x,
    y : nodes.blade2.position.y - nodes.blade1.position.y,
    z : nodes.blade2.position.z - nodes.blade1.position.z
  };
  const foot_size = getNodeSize(nodes.foot1);;
  const corner_size = getNodeSize(nodes.corner1);
  const blade_margine = Math.abs(nodes.beam2.position.x - nodes.blade1.position.x);
  Object.keys(nodes).forEach((nodeKey) => {
    const node = nodes[nodeKey];
    node.parent = nodes.Cabbana;
  });

  useEffect(()=>{
    make_one_box();
    setRenderFlag((prev) => !prev);
  }, [])
  
  useEffect(()=>{
    const standard_o_size = getNodeSize(initialNodes.column1);
    const standard_o_len_t = standard_o_size.z + corner_size.z + foot_size.z;
    const standard_c_size = getNodeSize(nodes.column1);
    const standard_new_len_z = (modelDimensions.height / SizeLimit.height.min) * standard_o_len_t - (corner_size.z - foot_size.z);
    const delta_z = standard_new_len_z - standard_c_size.z;

    Object.keys(nodes).forEach((nodeKey) => {
      const node = nodes[nodeKey];
      
      if (!!node.name.includes("column")) {
        const o_node = initialNodes[nodeKey];
        const c_size = getNodeSize(node)
        const o_size = getNodeSize(o_node)
        const o_delta = o_size.z - standard_o_size.z;
        const ratio_z = (standard_new_len_z + o_delta) / c_size.z;
        const new_change = (standard_new_len_z + o_delta) - c_size.z;
        node.scale.set(node.scale.x, node.scale.y, node.scale.z * ratio_z)
        node.position.set(node.position.x, node.position.y, node.position.z + new_change / 2)
      }
      if (!node.name.includes("column") && !node.name.includes("foot") && node.isMesh) {
        node.position.set(node.position.x, node.position.y, node.position.z + delta_z);
      }

    })
    setRenderFlag((prev)=>!prev);

  }, [modelDimensions.height])
  
  useEffect(()=>{
    if (modelDimensions.width > 200 && !Object.keys(nodes).includes("column1_w_c")){
      let column1_c = nodes.column1.clone();
      column1_c.name = "column1_w_c";
      column1_c.position.set(nodes.beam1.position.x, nodes.column1.position.y, nodes.column1.z);
      nodes[column1_c.name] = column1_c;
      initialNodes[column1_c.name] = initialNodes.column1
      let column8_c = nodes.column8.clone();
      column8_c.name = "column8_w_c";
      column8_c.position.set(nodes.beam1.position.x, nodes.column8.position.y, nodes.column8.z);
      nodes[column8_c.name] = column8_c;
      initialNodes[column8_c.name] = initialNodes.column8
      let foot1_c = nodes.foot1.clone();
      foot1_c.name = "foot1_w_c";
      foot1_c.position.set(nodes.beam1.position.x, nodes.foot1.position.y, nodes.foot1.z);
      nodes[foot1_c.name] = foot1_c;
      initialNodes[foot1_c.name] = initialNodes.foot1
      let foot8_c = nodes.foot8.clone();
      foot8_c.name = "foot8_w_c";
      foot8_c.position.set(nodes.beam1.position.x, nodes.foot8.position.y, nodes.foot8.z);
      nodes[foot8_c.name] = foot8_c;
      initialNodes[foot8_c.name] = initialNodes.foot8
      render_children.push("middleseperator1");
      nodes.middleseperator1.position.set(nodes.beam1.position.x, nodes.beam2.position.y, nodes.beam1.position.z - (initialNodes.beam1.position.z - initialNodes.middleseperator1.position.z))
    } else if (modelDimensions.width <= 200 && Object.keys(nodes).includes("column1_w_c")) {
      Object.keys(nodes).forEach((nodeKey) => {
        if (nodeKey.includes("_w_c")) delete nodes[nodeKey];
      });
      render_children.pop("middleseperator1");
    }
    const direction_x_children = ["beam4", "beam6", "middleseperator2"];
    const middle_children = ["beam5", "middleseperator1", "column1_w_c", "column8_w_c", "foot1_w_c", "foot8_w_c", "column6", "foot2", "foot7", "foot6", "corner6", "coltop019", "coltop022", "coltop024", "coltop027", "blade5", "blade6", "blade5left", "blade6left", "blade5right", "blade6right"];
    const opposite_children = ["beam7", "column1", "column8", "foot1", "foot8", "corner1", "corner8", "coltop026", "coltop028", "blade3", "blade4", "blade3left", "blade4left", "blade3right", "blade4right"];
    const standard_o_size = getNodeSize(initialNodes.beam1);
    const standard_o_len_t = standard_o_size.x + 2 * corner_size.x
    const standard_c_size = getNodeSize(nodes.beam1);
    const standard_new_len_z = (modelDimensions.width / SizeLimit.width.min) * standard_o_len_t - 2 * corner_size.x;
    const delta_z = standard_new_len_z - standard_c_size.x;
    const c_size = getNodeSize(nodes.beam1);
    const ratio_z = standard_new_len_z/c_size.x;
    nodes.beam1.scale.set(nodes.beam1.scale.x, nodes.beam1.scale.y, nodes.beam1.scale.z * ratio_z)
    nodes.beam6.scale.set(nodes.beam6.scale.x, nodes.beam6.scale.y, nodes.beam6.scale.z * ratio_z)
    // Object.keys(nodes).forEach((nodeKey) => {
    //   const node = nodes[nodeKey];
      
    //   if (!!direction_x_children.includes(node.name)) {
    //     const o_node = initialNodes[nodeKey];
    //     const c_size = getNodeSize(node)
    //     const o_size = getNodeSize(o_node)
    //     const o_delta = o_size.x - standard_o_size.x / 2;
    //     const ratio_z = (standard_new_len_z / 2 + o_delta) / c_size.x;
    //     node.scale.set(node.scale.x, node.scale.y, node.scale.z * ratio_z);
    //     const new_change = (standard_new_len_z / 2 + o_delta) - c_size.x;
    //     node.position.set(node.position.x + new_change / 2, node.position.y, node.position.z);
    //   }
    // })
    
    nodes.beam1.position.set(nodes.beam1.position.x + delta_z/2, nodes.beam1.position.y, nodes.beam1.position.z);
    nodes.beam6.position.set(nodes.beam6.position.x + delta_z/2, nodes.beam6.position.y, nodes.beam6.position.z);
    Object.keys(nodes).forEach((nodeKey) => {
      const node = nodes[nodeKey];
      if (opposite_children.includes(node.name)) {
        node.position.set(node.position.x + delta_z, node.position.y, node.position.z);
      } else if (middle_children.includes(node.name)) {
        node.position.set(node.position.x + delta_z / 2, node.position.y, node.position.z);
      }
    });
    cloneBaldes();
    setRenderFlag((prev)=>!prev);
  }, [modelDimensions.width])
  
  // useEffect(()=>{
  //   const direction_x_children = ["beam4", "beam6", "middleseperator2"];
  //   const middle_children = ["beam5", "middleseperator1", "column2", "column7", "column6", "foot2", "foot7", "foot6", "corner6", "coltop019", "coltop022", "coltop024", "coltop027", "blade5", "blade6", "blade5left", "blade6left", "blade5right", "blade6right"];
  //   const opposite_children = ["beam7", "column1", "column8", "foot1", "foot8", "corner1", "corner8", "coltop026", "coltop028", "blade3", "blade4", "blade3left", "blade4left", "blade3right", "blade4right"];
  //   const standard_o_size = getNodeSize(initialNodes.beam1);
  //   const standard_o_len_t = standard_o_size.x + 2 * corner_size.x
  //   const standard_c_size = getNodeSize(nodes.beam1);
  //   const standard_new_len_z = (modelDimensions.width / SizeLimit.width.min) * standard_o_len_t - 2 * corner_size.x;
  //   const delta_z = standard_new_len_z - standard_c_size.x;
  //   const c_size = getNodeSize(nodes.beam1);
  //   const ratio_z = standard_new_len_z/c_size.x;
  //   nodes.beam1.scale.set(nodes.beam1.scale.x, nodes.beam1.scale.y, nodes.beam1.scale.z * ratio_z)
  //   Object.keys(nodes).forEach((nodeKey) => {
  //     const node = nodes[nodeKey];
      
  //     if (!!direction_x_children.includes(node.name)) {
  //       const o_node = initialNodes[nodeKey];
  //       const c_size = getNodeSize(node)
  //       const o_size = getNodeSize(o_node)
  //       const o_delta = o_size.x - standard_o_size.x / 2;
  //       const ratio_z = (standard_new_len_z / 2 + o_delta) / c_size.x;
  //       node.scale.set(node.scale.x, node.scale.y, node.scale.z * ratio_z);
  //       const new_change = (standard_new_len_z / 2 + o_delta) - c_size.x;
  //       node.position.set(node.position.x + new_change / 2, node.position.y, node.position.z);
  //     }
  //   })
    
  //   nodes.beam1.position.set(nodes.beam1.position.x + delta_z/2, nodes.beam1.position.y, nodes.beam1.position.z);
  //   nodes.beam6.position.set(nodes.beam6.position.x + delta_z/2, nodes.beam6.position.y, nodes.beam6.position.z);
  //   Object.keys(nodes).forEach((nodeKey) => {
  //     const node = nodes[nodeKey];
  //     if (opposite_children.includes(node.name)) {
  //       node.position.set(node.position.x + delta_z, node.position.y, node.position.z);
  //     } else if (middle_children.includes(node.name)) {
  //       node.position.set(node.position.x + delta_z / 2, node.position.y, node.position.z);
  //     }
  //   });
  //   cloneBaldes();
  //   setRenderFlag((prev)=>!prev);
  // }, [modelDimensions.width])

  useEffect(()=>{
    const direction_y_children = ["beam2", "beam3", "beam5", "beam7", "middleseperator1"]
    const direction_y_sec_box = ["beam3", "beam5", "blade5", "blade6"];
    const middle_children = ["beam6", "middleseperator2", "column4", "column7", "column8", "column8_w_c", "foot8_w_c", "foot4", "foot7", "foot8", "corner4", "corner8", "coltop020", "coltop024", "coltop025", "coltop028", "blade1right", "blade2right", "blade3right", "blade4right", "blade5left", "blade6left", "middleseperator2on1", "middleseperator2on2"];
    const blade_children = ["blade1", "blade2", "blade3", "blade4", "blade5", "blade6"];
    const opposite_children = ["beam4", "column5", "column6", "foot5", "foot6", "corner5", "corner6", "coltop022", "blade5right", "blade6right"];
    const standard_o_size = getNodeSize(initialNodes.beam2);
    const standard_o_len_t = 2 * standard_o_size.y + 3 * corner_size.y
    const standard_c_size = getNodeSize(nodes.beam2);
    const standard_new_len_z = ((modelDimensions.depth / SizeLimit.depth.min) * standard_o_len_t - 3 * corner_size.y) / 2;
    const delta_y = standard_new_len_z - standard_c_size.y;
    
    Object.keys(nodes).forEach((nodeKey) => {
      const node = nodes[nodeKey];

      if (!!direction_y_children.includes(node.name) || !!blade_children.includes(node.name)) {
        const o_node = initialNodes[nodeKey];
        const c_size = getNodeSize(node)
        const o_size = getNodeSize(o_node)
        const o_delta = o_size.y - standard_o_size.y;
        const ratio_z = (standard_new_len_z + o_delta) / c_size.y;
        const new_change = (standard_new_len_z + o_delta) - c_size.y;
        node.scale.set(node.scale.x, node.scale.y, node.scale.z * ratio_z);
        node.position.set(node.position.x, node.position.y - new_change / 2, node.position.z);
        if (!!direction_y_sec_box.includes(node.name)){
          node.position.set(node.position.x, node.position.y - new_change, node.position.z);
        }
      }
    })
    
    Object.keys(nodes).forEach((nodeKey) => {
      const node = nodes[nodeKey];
      if (opposite_children.includes(node.name)) {
        node.position.set(node.position.x, node.position.y - delta_y * 2, node.position.z);
      } else if (middle_children.includes(node.name)) {
        node.position.set(node.position.x, node.position.y - delta_y, node.position.z);
      }
    });
    cloneBaldes();
    setRenderFlag((prev)=>!prev);
  }, [modelDimensions.depth])

  useEffect(()=> {
    Object.keys(nodes).forEach((nodeKey)=>{
      const node = nodes[nodeKey];
      if (node.name.includes('blade')) {
        node.rotation.set(node.rotation._x, node.rotation._y, Math.PI/2 - getRadFromAngle(modelDimensions.angle));
      }
    })
    setRenderFlag((prev)=>!prev);
  }, [modelDimensions.angle])

  function cloneBaldes() {
    
    Object.keys(nodes).forEach((nodeKey) => {
      if (nodeKey.includes("clone")) {
        delete nodes[nodeKey]
      }
    });

    const x_distance_beam2_7 = Math.abs(nodes.beam2.position.x - nodes.beam7.position.x);
    if (modelDimensions.width <= 200){
      clone_blade_one_box("blade1", x_distance_beam2_7 - blade_delta.x * 2);
    }else{
      clone_blade_one_box("blade1", x_distance_beam2_7 / 2);
      clone_blade_one_box("blade3", x_distance_beam2_7 / 2, -1);
    }
    // clone_blade_one_box("blade5", x_distance_beam2_7 / 2, -1);
    // clone_blade_one_box("middleseperator2on1", x_distance_beam2_7 / 2);
  }

  function clone_blade_one_box(mesh_name, distance, direct = 1) {

    Object.keys(nodes).forEach((nodeKey) => {
      const node = nodes[nodeKey];
      if (node.isMesh && node.name.includes(mesh_name)) {
        let cloned_no = 2;
        while (cloned_no * Math.abs(blade_delta.x) + blade_margine < distance) {
          let cloned_node = node.clone();
          cloned_node.name = nodeKey + "_clone" + cloned_no;
          cloned_node.position.set(node.position.x + direct * cloned_no * blade_delta.x,
                          node.position.y + direct * cloned_no * blade_delta.y,
                          node.position.z + direct * cloned_no * blade_delta.z);
          nodes[cloned_node.name] = cloned_node;
          cloned_no++;
        }
      }
    });
  }

  function make_one_box () {
    const useful_children = ["beam1", "beam2", "beam6", "beam7", "column1", "column3", "column4", "column8",
                           "foot1", "foot3", "foot4", "foot8", "corner1", "corner3", "corner4", "corner8",
                            "coltop020", "coltop021", "coltop026", "coltop028", 
                            "blade1", "blade2","blade3", "blade4",
                            "blade1left", "blade2left","blade3left", "blade4left",
                            "blade1right", "blade2right","blade3right", "blade4right"];
    Object.keys(nodes).forEach((nodeKey) => {
      if (useful_children.includes(nodeKey)){
        render_children.push(nodeKey);
      }
    });

    
    const b1_size = getNodeSize(nodes.beam1);
    const b6_size = getNodeSize(nodes.beam6);
    const ratio = b1_size.x / b6_size.x;
    const delta = b1_size.x - b6_size.x
    nodes.beam6.scale.set(nodes.beam6.scale.x,nodes.beam6.scale.y, nodes.beam6.scale.z * ratio);
    nodes.beam6.position.set(nodes.beam6.position.x - delta / 2, nodes.beam6.position.y, nodes.beam6.position.z);
    initialNodes.beam6.copy(nodes.beam6);
    // const x_distance_beam2_7 = Math.abs(nodes.beam2.position.x - nodes.beam7.position.x);
    // clone_blade_one_box("blade1", x_distance_beam2_7 / 2);
    // clone_blade_one_box("blade3", x_distance_beam2_7 / 2, -1);
  }



  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.252, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        {
          Object.keys(nodes).map((nodeKey) => {
            const node = nodes[nodeKey];
            const materialName = node.material?.name;
            
            if (nodeKey === 'Cabbana' || nodeKey === 'Scene' || !(render_children.includes(nodeKey) || nodeKey.includes("_c"))) return <></> 
            return (
              <mesh 
                geometry={node.geometry} 
                material={materials[materialName]} 
                position={[node.position.x, node.position.y, node.position.z]} 
                rotation={[node.rotation._x, node.rotation._y, node.rotation._z]} 
                scale={[node.scale.x, node.scale.y, node.scale.z]}
                parent={nodes.Cabbana}
              />          
            )
          })
        }
       </group>
    </group>
  )
}

useGLTF.preload('/CabbanaModel.glb')
