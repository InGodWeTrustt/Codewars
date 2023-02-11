function valAndUnits(s) {
    const { val, units = '' } = s.match(/(?<val>[-0-9.]+)?\s*(?<units>[a-z%]+)?/).groups;

    return {
        val: +val, // Number(val)
        units
    }
}

// Example
{
    const { val, units } = valAndUnits('12px');
    console.log(val); // 12
    console.log(units); // px
}

{
    const { val, units } = valAndUnits('12.5kg');
   console.log(val); // 12.5
   console.log(units); // kg
}
