const WindowsVersion = {
    name: 'Windows 7',
    version: '6.1',
    year: 2009,
    developer: 'Microsoft Corporation',
};

console.log(isProperty(WindowsVersion, 'developer'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
