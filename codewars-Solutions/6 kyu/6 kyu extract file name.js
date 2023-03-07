class FileNameExtractor {
    static extractFileName(fn) {
        const reg = /(?<=\d+_)([a-z0-9_-]+)[.]([a-z0-9]+)/gi;
        return fn.match(reg)[0];
    }
}

// Example
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION") === "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34") === "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1_FILE_NAM-E.EXTENSION.OTHEREXTENSIONadasdassdassds34") === "FILE_NAM-E.EXTENSION");