import CryptoJS from "crypto-js";

class ImageEncryption {
    static encrypt(imageBuffer: Buffer, key: string): string {
        if (imageBuffer.length === 0) {
            throw new Error("Image buffer is empty");
        }

        const encryptedImage = CryptoJS.AES.encrypt(imageBuffer.toString('base64'), key).toString();
        return encryptedImage;
    }

    static decrypt(encryptedImage: string, key: string): Buffer {
        if (encryptedImage.length === 0) {
            throw new Error("Encrypted image is empty");
        }

        const bytes = CryptoJS.AES.decrypt(encryptedImage, key);
        const decryptedImage = bytes.toString(CryptoJS.enc.Utf8);
        return Buffer.from(decryptedImage, 'base64');
    }
}

export default ImageEncryption;