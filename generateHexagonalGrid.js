function genHexPoints(n, start = [0, 0], r = 20) {
    if (n <= 0) {
        return [];
    }

    const points = [start];
    let ring = 1;

    while (points.length < n) {
        for (let i = 0; i < 6; i++) {
            const a = (2 * Math.PI * i) / 6;
            const x = start[0] + ring * r * Math.cos(a);
            const y = start[1] + ring * r * Math.sin(a);
            points.push([x, y]);
        }

        ring += 1;
    }

    return points.slice(0, n);
}

// Example usage:
const numPoints = 20;
const startPoint = [0, 0];
const hexRadius = 20;

const hexPoints = genHexPoints(numPoints, startPoint, hexRadius);

console.log(hexPoints);