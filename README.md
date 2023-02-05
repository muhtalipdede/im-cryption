# im-cryption

A simple npm package to encrypt and decrypt images and text files.

## Installation

```bash
npm install im-cryption
```

## Usage

```bash
npx im-cryption encrypt|decrypt <image file>|<txt file> <password>
```

### Example

```bash
git clone https://github.com/muhtalipdede/im-cryption

cd example

npx im-cryption decrypt mars.jpeg 12323
npx im-cryption decrypt encrypted.txt 12323
```

### Encrypting a file

To encrypt a file, use the following command:

```bash
npx im-cryption encrypt <file> <password>
```

Replace `<file>` with the path to the image or text file you want to encrypt, and `<password>` with the password you want to use.

### Decrypting a file

To decrypt a file, use the following command:

```bash
npx im-cryption decrypt <file> <password>
```

Replace `<file>` with the path to the encrypted image or text file you want to decrypt, and `<password>` with the password you used to encrypt the file.

## Note

- Please make sure to remember your password, as there is no way to recover an encrypted file without it.

- The encrypted files will have a `.encrypted` extension.

## License

This package is licensed under the MIT license.
