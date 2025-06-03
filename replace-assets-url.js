const env = process.env.ENV;
const hostnames = {
    LOCAL: 'http://localhost:4201',
    DEV: 'https://test.labdigbdbqa.com/mfe-apps/bdb-test-mfe-web-ui/app',
    STG: 'https://test.labdigbdbstg.com/mfe-apps/bdb-test-mfe-web-ui/app',
    PROD: 'https://test.labdigbdb.com/mfe-apps/bdb-test-mfe-web-ui/app',
};
const hostname = hostnames[env];
console.info('🚀 Replacing assets URLs in bdb-webcomponents.css to', hostname);
const fs = require('fs');
const path = require('path');
const assetsFolder = 'src/assets';
const stylesFile = 'mfe-bdb-webcomponents.scss';
const fontsFile = 'mfe-fonts.scss';
const iconsFile = 'mfe-icons.scss';
if (fs.existsSync(path.join(__dirname, assetsFolder, stylesFile))) {
    fs.unlinkSync(path.join(__dirname, assetsFolder, stylesFile));
}
const sourcePath = path.join(__dirname, 'node_modules', '@npm-bbta', 'bbog-dig-dt-webcomponents-lib', 'dist', 'bdb-webcomponents', 'bdb-webcomponents.css');
const sourceFontsPath = path.join(__dirname, 'node_modules', '@npm-bbta', 'bbog-dig-dt-webcomponents-lib', 'dist', 'collection', 'assets', 'fonts', 'fonts.scss');
const sourceIconsPath = path.join(__dirname, 'node_modules', '@npm-bbta', 'bbog-dig-dt-webcomponents-lib', 'dist', 'collection', 'assets', 'fonts', 'icons.scss');
const destPath = path.join(__dirname, assetsFolder, stylesFile);
const destFontsPath = path.join(__dirname, assetsFolder, fontsFile);
const destIconsPath = path.join(__dirname, assetsFolder, iconsFile);

fs.copyFileSync(sourcePath, destPath);
fs.copyFileSync(sourceFontsPath, destFontsPath);
fs.copyFileSync(sourceIconsPath, destIconsPath);

console.info('📁 Copied bdb-webcomponents.css to dist folder successfully');

console.info("🔄 Replacing assets URLs in bdb-webcomponents.css");

const content = fs.readFileSync(destPath, 'utf8');
const contentFonts = fs.readFileSync(destFontsPath, 'utf8');
const contentIcons = fs.readFileSync(destIconsPath, 'utf8');
const result = content.replace(/url\((.*?)\)/g, (match, url) => {
    const newUrl = url.replace(/['"]+/g, '');
    return `url(${hostname}${newUrl })`;
});
fs.writeFileSync(destPath, result);

const resultFonts = contentFonts
    .replace(
        /\$font-family-path:\s*''\s*!default;/g,
        `$mfe-font-family-path: '${hostname}' !default;`
    )
    .replace(/\$font-family-path/g, '$mfe-font-family-path');

fs.writeFileSync(destFontsPath, resultFonts);

const resultIcons = contentIcons.replace(
    /\$icons-path:\s*''\s*!default;/g,
    `$mfe-icons-path: '${hostname}' !default;`
).replace(/\$icons-path/g, '$mfe-icons-path')
fs.writeFileSync(destIconsPath, resultIcons)

setTimeout(() => {
    console.info('Assets URLs replaced successfully 🎉');
}, 2000);