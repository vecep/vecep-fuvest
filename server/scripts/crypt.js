import crypto from 'crypto';
import fs from 'fs';

const keysPath = '../.keys/';
const params = process.argv.slice(2);
const algorithm = 'aes-256-ctr';
const key = crypto.createHash('sha256').update(String(params[0])).digest('base64').substr(0, 32);
const action = params[1];

fs.readdir(keysPath, (err, dirs) => {
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}

	dirs.forEach((dir) => {
		fs.readdir(keysPath + dir, (err, files) => {
			if (err) {
				return console.log('Unable to scan directory: ' + err);
			}

			files.forEach((file) => {
				const path = keysPath + dir + '/' + file;
				const content = fs.readFileSync(path);

				switch (action) {
					case 'encrypt':
						if (!file.endsWith('.crypt')) {
							encrypt(path, content);
						}
						break;
					case 'decrypt':
						if (file.endsWith('.crypt')) {
							decrypt(path.replace(/.crypt$/, ''), content);
						}
						break;
					default:
						console.log('Please insert a valid action');
						break;
				}
			});
		});
	});
});

const encrypt = (path, content) => {
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv(algorithm, key, iv);
	const encrypted = Buffer.concat([iv, cipher.update(content), cipher.final()]);

	fs.writeFileSync(path + '.crypt', encrypted);
};

const decrypt = (path, encrypted) => {
	const iv = encrypted.slice(0, 16);
	encrypted = encrypted.slice(16);
	const decipher = crypto.createDecipheriv(algorithm, key, iv);
	const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

	fs.writeFileSync(path, decrypted);
};
