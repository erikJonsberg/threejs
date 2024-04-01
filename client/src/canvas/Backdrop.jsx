import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import {
	AccumulativeShadows,
	RandomizedLight,
	SoftShadows,
} from "@react-three/drei";

const Backdrop = () => {
	const shadows = useRef();

	return (
		<>
			<SoftShadows />
			<AccumulativeShadows
				ref={shadows}
				temporal
				frames={60}
				alphaTest={0.85}
				scale={3}
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, 0, -0.2]}
			>
				<RandomizedLight
					amount={4}
					radius={9}
					intensity={Math.PI * 0.65}
					ambient={0.25}
					position={[5, 5, -10]}
				/>
				<RandomizedLight
					amount={4}
					radius={5}
					intensity={Math.PI * 0.45}
					ambient={0.75}
					position={[-6, 4, -5]}
				/>
			</AccumulativeShadows>
		</>
	);
};

export default Backdrop;
