import ImageEncryption from "./image-encryption";
import ImageFile from "./image-file";
import TxtFile from "./txt-file";

const args = process.argv.slice(2);
const command = args[0];
const file = args[1];
const password = args[2];


if (command === "encrypt") {
    const image = new ImageFile(file);
    const imageEncryption = ImageEncryption.encrypt(image.imageBuffer, password);
    TxtFile.write("encrypted.txt", imageEncryption);
} else if (command === "decrypt") {
    const encryptedImage = TxtFile.read(file);
    const decryptedImage = ImageEncryption.decrypt(encryptedImage, password);

    ImageFile.writeImage(decryptedImage, "./decrypted.png");
} else {
    console.log("Command not found: " + command);
    console.log("Usage: npx im-cryption encrypt|decrypt <image file>|<txt file> <password>");
}
