import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination directories
const srcDir = path.resolve(__dirname, '../src/assets/images');
const destDir = path.resolve(__dirname, '../static/images');

// Log paths for debugging
console.log('Source directory:', srcDir);
console.log('Destination directory:', destDir);

// Check if source directory exists
if (!fs.existsSync(srcDir)) {
  console.error('Source directory does not exist:', srcDir);
  process.exit(1);
}

// List files in source directory
console.log('Files in source directory:', fs.readdirSync(srcDir));

// Ensure destination directory exists
fs.ensureDirSync(destDir);

// Copy all image files from src/assets/images to static/images
fs.copy(srcDir, destDir, {
  filter: (src) => {
    // Only copy image files
    const ext = path.extname(src).toLowerCase();
    const isImage = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.ico'].includes(ext);
    if (isImage) {
      console.log('Copying:', path.relative(process.cwd(), src));
    }
    return isImage;
  },
  overwrite: true,
  errorOnExist: false,
  preserveTimestamps: true
})
.then(() => {
  console.log('Successfully copied image assets to static directory');
  console.log('Files in destination directory:', fs.readdirSync(destDir));
})
.catch(err => {
  console.error('Error copying image assets:', err);
  process.exit(1);
});
