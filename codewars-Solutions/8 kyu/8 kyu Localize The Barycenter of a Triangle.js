function barTriang(p1, p2, p3) {
    const [xa, ya] = p1;
    const [xb, yb] = p2;
    const [xc, yc] = p3;
    const xd = ((xa + xb + xc) / 3).toFixed(4) 
    const yd = ((ya + yb + yc) / 3).toFixed(4) 
    return [+xd, +yd]
}


console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);