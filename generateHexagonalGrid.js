function generatePoints(n, start_point = [0, 0], radius = 20) {
    if (n <= 0) {
        return [];
    }

    const points = [start_point];
    let ring = 1;

    while (points.length < n) {
        for (let i = 0; i < 6; i++) {
            const angle = (2 * Math.PI * i) / 6;
            const x = start_point[0] + ring * radius * Math.cos(angle);
            const y = start_point[1] + ring * radius * Math.sin(angle);
            points.push([x, y]);
        }

        ring += 1;
    }

    return points.slice(0, n);
}

const numPoints = 20;
const startPoint = [0, 0];
const hexRadius = 20;

const hexagonalPoints = generatePoints(numPoints, startPoint, hexRadius);

console.log(hexagonalPoints);