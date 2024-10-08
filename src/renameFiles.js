// addExtension.js
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'assets/foreign');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        const oldFilePath = path.join(directoryPath, file);
        
        // 파일 이름에 이미 .png가 포함되어 있는지 확인
        if (!file.endsWith('.png')) {
            const newFileName = `${file}.png`; // .png 추가
            const newFilePath = path.join(directoryPath, newFileName);

            // 파일 이름 변경
            fs.rename(oldFilePath, newFilePath, (err) => {
                if (err) {
                    return console.error('Error renaming file: ' + err);
                }
                console.log(`Renamed: ${file} -> ${newFileName}`);
            });
        } else {
            console.log(`Skipped: ${file} (already has .png extension)`);
        }
    });
});