
import React, { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CabbanaModel from './CabbanaModel'; /* highlight-line */
import { Avatar, Box, Typography} from '@mui/material';
import { PrettoSlider } from './components/CustomSlider';
import { useGLTF } from '@react-three/drei'

export const SizeLimit = {
  width: { min: 96, max: 469 },
  depth: { min: 94, max: 276 },
  height: { min: 98, max: 200 },
  angle: {min: 0, max: 90}
}

const defaultCameraInfo = {
  x:2, 
  y:0, 
  z:12.25,
  fov: 70 
}

export default function App() {
  const [modelDimensions, setModelDimensions] = useState({
    width: 120,
    depth: 118,
    height: 98,
    angle: 0,
  })

  const [styleParams, setModelStyleParams] = useState({
    structure_color: 0,
    structure_effect: 0,
    blade_color: 0,
    blade_effect: 0,
  })

  const [cameraInfo, setCameraInfo] = useState(defaultCameraInfo)
  
  const { nodes: initialNodes, materials } = useGLTF('/CabbanaModel_initial.glb')

  const handleWidth = (ev, newValue) => {
    setModelDimensions((prev) => ({
      ...prev, width: newValue
    }))

    setCameraInfo((prev)=>({
      ...prev, x: 4
    }))
  }
  const handleHeight = (ev, newValue) => {
    setModelDimensions((prev) => ({
      ...prev, height: newValue
    }))
  }

  const handleDepth = (ev, newValue) => {
    setModelDimensions((prev) => ({
      ...prev, depth: newValue
    }))
  }

  const handleBladeAngle = (ev, newValue) => {
    setModelDimensions((prev)=>({
      ...prev, angle: newValue
    }))
  }

  const handleStructureColor = (ev, newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, structure_color: newValue
    }))
  }
  const handleStructureEffect = (ev, newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, structure_effect: newValue
    }))
  }
  const handleBladeEffect = (ev, newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, blade_effect: newValue
    }))
  }
    const handleBladeColor = (ev, newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, blade_color: newValue
    }))
  }


   return (
    <>
      <Canvas
          camera={{ position: [
            cameraInfo.x, 
            cameraInfo.y, 
            cameraInfo.z
          ], 
          fov: cameraInfo.fov }}
        
         style={{
            // backgroundColor: '#111a21'
            background: 'white',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <CabbanaModel position={[0.025, -0.9, 0]} 
              modelDimensions = {modelDimensions}
              initialNodes = {initialNodes}
              styleParams = {styleParams}
            />
         </Suspense>
         <OrbitControls />
      </Canvas>
      <Box style={{backgroundColor: 'white', position: 'absolute', top: 20, right: 20, width: '300px', padding: '20px', zIndex: 9999 }}>
        <Typography sx={{textAlign: 'center'}}>Dimensions</Typography>
        <Typography >width</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto width slider"
          value={modelDimensions.width}
          min = {SizeLimit.width.min}
          max = {SizeLimit.width.max}
          onChange={handleWidth}
        />
        <Typography >depth</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto depth slider"
          value={modelDimensions.depth}
          min = {SizeLimit.depth.min}
          max = {SizeLimit.depth.max}
          onChange={handleDepth}
        />
        <Typography >Passage height</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto height slider"
          value={modelDimensions.height}
          min = {SizeLimit.height.min}
          max = {SizeLimit.height.max}
          onChange={handleHeight}
        />
        <Typography sx={{textAlign: 'center'}}>Blade</Typography>
        <Typography >angle</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto angle slider"
          defaultValue={modelDimensions.angle}
          min={SizeLimit.angle.min}
          max={SizeLimit.angle.max}
          onChange={handleBladeAngle}
        />
        <Typography sx={{textAlign: 'center'}}>Color</Typography>
        <Typography >structure</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto angle slider"
          defaultValue={styleParams.structure_color}
          min={0}
          max={3}
          onChange={handleStructureColor}
        />
        <Typography >blade</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto angle slider"
          defaultValue={styleParams.blade_color}
          min={0}
          max={3}
          onChange={handleBladeColor}
        />
        <Typography sx={{textAlign: 'center'}}>Effect</Typography>
        <Typography >structure</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto angle slider"
          defaultValue={styleParams.structure_effect}
          min={0}
          max={3}
          onChange={handleStructureEffect}
        />
        <Typography >blade</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto angle slider"
          defaultValue={styleParams.blade_effect}
          min={0}
          max={3}
          onChange={handleBladeEffect}
        />
        <Avatar alt="Remy Sharp" src="Wood067_PREVIEW.jpg" />
        <Avatar alt="Remy Sharp" src="Wood067_PREVIEW.jpg" />
      </Box>
    </>
   );
}
