import fs from 'fs';

class ImageFile {
    imageBuffer: Buffer;

    constructor(public file: string) {
        const filePath = "./" + file;
        if(!fs.existsSync(filePath)) {
            throw new Error("File does not exist: " + filePath);
        }

        if(!this.isImage()) {
            throw new Error("Not an image file: " + filePath);
        }

        this.imageBuffer = fs.readFileSync(filePath);

        if(!this.imageBuffer) {
            throw new Error("Could not read file: " + filePath);
        }

        console.log("Image file read successfully: " + filePath);
    }

    isImage(): boolean {
        const imageTypes = ["png", "jpg", "jpeg", "gif", "bmp"];
        const fileType = this.file.split(".").pop();
        return imageTypes.includes(fileType);
    }

    public static writeImage(imageBuffer: Buffer, imagePath: string): void {
        fs.writeFileSync(imagePath, imageBuffer);
    }
}

export default ImageFile;