function geo_mean(nums, arith_mean) {
    const length = nums.length
    if (!length) return arith_mean;
    let missNum = (length + 1) * arith_mean - nums.reduce((acc, cur) => acc + cur, 0);
    const geomMean = Math.pow([...nums, missNum].reduce((acc, cur) => acc * cur, 1), 1 / (length + 1))
    return geomMean;
}