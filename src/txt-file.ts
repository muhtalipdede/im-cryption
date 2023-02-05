import fs from 'fs';

class TxtFile {
    file = "";
    static async write(file: string, content: string) {
        fs.writeFileSync(file, content);
    }

    static read(file: string) {
        const filePath = "./" + file;

        if(!fs.existsSync(filePath)) {
            throw new Error("File does not exist: " + filePath);
        }

        if(!this.isTxtFile(file)) {
            throw new Error("Not a text file: " + filePath);
        }

        const content = fs.readFileSync(filePath, "utf8");

        if(!content) {
            throw new Error("Could not read file: " + filePath);
        }

        console.log("Text file read successfully: " + filePath);

        return content;
    }

    private static isTxtFile(file: string): boolean {
        const txtTypes = ["txt"];
        const fileType = file.split(".").pop();
        return txtTypes.includes(fileType);
    }
}

export default TxtFile;