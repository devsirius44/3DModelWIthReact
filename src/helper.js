import {Box3, Vector3} from 'three'

export const getNodeSize = (node) => {
    const bbox = new Box3();
    bbox.setFromObject(node);
    const size = new Vector3();
    bbox.getSize(size);
    return size;
}

export const getRadFromAngle = (angle)=> {
    if (!angle) return 0;
    return Math.PI * angle / 180;
}