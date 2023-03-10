function vm(version) {
    let versions = [];

    if (!version) {
        versions.push([0, 0, 1]);
    } else if(/[^0-9.]/g.test(version.split('.').slice(0,3).join('.'))) {
        throw new Error("Error occured while parsing version!");
    }else if (/[0-9]+(\.[0-9]+)?(\.[0-9]+)?/.test(version)) {
        const curVer = Array(3).fill(0);
        version.split('.').slice(0, 3).forEach((num, i) => curVer[i] = +num);
        versions.push(curVer);
    }

    return {
        major() {
            const [major, _, __] = versions.at(-1)
            versions.push([major + 1, 0, 0]);
            return this;
        },
        minor() {
            const [major, minor, patch] = versions.at(-1)
            versions.push([major, minor + 1, 0]);
            return this;
        },
        patch() {
            const [major, minor, patch] = versions.at(-1)
            versions.push([major, minor, patch + 1]);
            return this;
        },
        rollback() {
            if (versions.length < 2){
                throw new Error('Cannot rollback!');
            }
            versions.pop();
            return this;
        },
        release() {
            return versions.at(-1).join('.');
        }
    };
}


// Example
console.log(vm().release(), '0.0.1', 'Default initial version');
console.log(vm('').release(), '0.0.1', 'Default initial version');
console.log(vm('1.2.3').release(), '1.2.3', 'No version changes');
console.log(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
console.log(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
console.log(vm('1').release(), '1.0.0', 'Default minor version is 0');
console.log(vm('1.1').release(), '1.1.0', 'Default patch is 0');
console.log(vm().major().release(), '1.0.0', "First major release");
console.log(vm('1.2.3').major().release(), '2.0.0', "Major release after 1.2.3");
console.log(vm('1.2.3').major().major().release(), '3.0.0', "Second major release after 1.2.3");
console.log(vm().minor().release(), '0.1.0', "First minor relase");
console.log(vm('1.2.3').minor().release(), '1.3.0', "Minor release after 1.2.3");
console.log(vm('1').minor().release(), '1.1.0', "Minor relase after 1");
console.log(vm('4').minor().minor().release(), '4.2.0', "Second minor release after 4");
console.log(vm().patch().release(), '0.0.2', "First patch release");
console.log(vm('1.2.3').patch().release(), '1.2.4', "First patch release");
console.log(vm('4').patch().patch().release(), '4.0.2', "Second patch release after 4");
console.log(vm().major().rollback().release(), '0.0.1', "Rollback of major release");
console.log(vm().minor().rollback().release(), '0.0.1', "Rollback of minor release");
console.log(vm().patch().rollback().release(), '0.0.1', "Rollback of patch release");