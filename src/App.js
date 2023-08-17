
import React, { Suspense, useState, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, Plane} from '@react-three/drei';
import CabbanaModel from './CabbanaModel'; /* highlight-line */
import { Box as MuiBox, Typography} from '@mui/material';
import { PrettoSlider } from './components/CustomSlider';
import { useGLTF } from '@react-three/drei'
import ColorAvatar from './components/ColorAvatar'
import ImageAvatar from './components/ImageAvatar'

export const SizeLimit = {
  width: { min: 96, max: 350 },
  depth: { min: 94, max: 276 },
  height: { min: 98, max: 200 },
  angle: {min: 0, max: 90}
}

const defaultCameraInfo = {
  x:0, 
  y:10, 
  z:10,
  fov: 45 
}

export default function App() {
  const [modelDimensions, setModelDimensions] = useState({
    width: 120,
    depth: 118,
    height: 98,
    angle: 0,
  })

  const [styleParams, setModelStyleParams] = useState({
    structure_color: '#a1a1a0',
    structure_effect: 0,
    blade_color: '#a1a1a0',
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

  const handleStructureColor = (newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, structure_color: newValue
    }))
  }
  const handleStructureEffect = (newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, structure_effect: newValue
    }))
  }
  const handleBladeEffect = (newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, blade_effect: newValue
    }))
  }
    const handleBladeColor = (newValue) => {
    setModelStyleParams((prev)=>({
      ...prev, blade_color: newValue
    }))
  }


  const handleclick = (colorStr)=> {
    console.log('colorStr: ', colorStr)
  }
   return (
    <>
  
      <Canvas
          shadows
          camera={{ position: [
            cameraInfo.x, 
            cameraInfo.y, 
            cameraInfo.z
          ], 
          fov: cameraInfo.fov }}
        
         style={{
            background: '#a4b0b2',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={0.5} />
         <pointLight
          castShadow
          position={[10, 10, 10]}
         />
         <directionalLight
           intensity={0.5}
           castShadow
           shadow-mapSize-height={512}
           shadow-mapSize-width={512}
         />
          <directionalLight
            position={[3.3, 1.0, 4.4]}
            castShadow={true}
          />

         <Suspense fallback={null}>
            <CabbanaModel position={[-0.025, -0.9, 0]} 
              modelDimensions = {modelDimensions}
              initialNodes = {initialNodes}
              styleParams = {styleParams}
            />
         </Suspense>
         <Box
            receiveShadow
            position={[0, -1.25, 0]}
            scale={[30, 3, 30]}
            >
          <meshStandardMaterial color="#d0d0d0"/>
          </Box>
          <Box
          receiveShadow
           position={[-15, 0, 0]}
           scale={[0.01, 15, 30]}
           >
            <meshBasicMaterial transparent opacity={0.3} color="#b1c1c8" />
          </Box>
          <Box
           position={[15, 0, 0]}
           scale={[0.01, 15, 30]}
           receiveShadow
           >
            <meshBasicMaterial transparent opacity={0.3} color="#b1c1c8" />
          </Box>
           <Box
           position={[0, 0, 15]}
           scale={[30, 15, 0.01]}
           receiveShadow
           >
          <meshBasicMaterial transparent opacity={0.3} color="#b1c1c8" />
          </Box>
          <Box
           position={[0, 0, -15]}
           scale={[30, 15, 0.01]}
           receiveShadow
           >
            <meshBasicMaterial transparent opacity={0.3} color="#b1c1c8" />
          </Box>
         <OrbitControls
          maxDistance={15}
          minDistance={2}
          minPolarAngle={ 0 } // Minimum vertical angle in radians
          maxPolarAngle={Math.PI / 2.1} // Maximum vertical angle in radians
        />
      </Canvas>
      <MuiBox style={{backgroundColor: 'white', position: 'absolute', top: 20, right: 20, width: '300px', padding: '20px', zIndex: 9999 }}>
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
        <MuiBox>
          <ColorAvatar color={'#a1a1a0'} onClick={()=>handleStructureColor('#a1a1a0')}/>
          <ColorAvatar color={'#363d43'} onClick={()=>handleStructureColor('#363d43')}/>
          <ColorAvatar color={'#442f29'} onClick={()=>handleStructureColor('#442f29')}/>
          <ColorAvatar color={'#e9e0d2'} onClick={()=>handleStructureColor('#e9e0d2')}/>
          <ColorAvatar color={'#0e0e10'} onClick={()=>handleStructureColor('#0e0e10')}/>
          <ColorAvatar color={'#f1f0ea'} onClick={()=>handleStructureColor('#f1f0ea')}/>
        </MuiBox>
        <Typography >blade</Typography>
        <MuiBox>
          <ColorAvatar color={'#a1a1a0'} onClick={()=>handleBladeColor('#a1a1a0')}/>
          <ColorAvatar color={'#363d43'} onClick={()=>handleBladeColor('#363d43')}/>
          <ColorAvatar color={'#442f29'} onClick={()=>handleBladeColor('#442f29')}/>
          <ColorAvatar color={'#e9e0d2'} onClick={()=>handleBladeColor('#e9e0d2')}/>
          <ColorAvatar color={'#0e0e10'} onClick={()=>handleBladeColor('#0e0e10')}/>
          <ColorAvatar color={'#f1f0ea'} onClick={()=>handleBladeColor('#f1f0ea')}/>
        </MuiBox>
        <Typography sx={{textAlign: 'center'}}>Effect</Typography>
        <Typography >structure</Typography>
        <MuiBox>
          <ImageAvatar img={'Planks037A_1K_Color.jpg'} onClick={()=>handleStructureEffect(0)}/>
          <ImageAvatar img={'Wood027_1K_Color.jpg'} onClick={()=>handleStructureEffect(1)}/>
          <ImageAvatar img={'Wood060_1k_Color.jpg'} onClick={()=>handleStructureEffect(2)}/>
          <ImageAvatar img={'Wood067_1k_Color.jpg'} onClick={()=>handleStructureEffect(3)}/>
        </MuiBox>
        <Typography >blade</Typography>
        <MuiBox>
          <ImageAvatar img={'Planks037A_1K_Color.jpg'} onClick={()=>handleBladeEffect(0)}/>
          <ImageAvatar img={'Wood027_1K_Color.jpg'} onClick={()=>handleBladeEffect(1)}/>
          <ImageAvatar img={'Wood060_1k_Color.jpg'} onClick={()=>handleBladeEffect(2)}/>
          <ImageAvatar img={'Wood067_1k_Color.jpg'} onClick={()=>handleBladeEffect(3)}/>
        </MuiBox>

      </MuiBox>
    </>
   );
}