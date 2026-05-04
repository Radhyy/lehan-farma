import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = path.join(process.cwd(), 'public', 'FOTO PRODUK');
const quality = 80; // Adjust quality from 0 to 100

async function compressImages() {
  try {
    const files = await fs.readdir(inputDir);
    console.log(`Found ${files.length} images to compress.`);

    for (const file of files) {
      const filePath = path.join(inputDir, file);
      const fileStat = await fs.stat(filePath);

      if (fileStat.isDirectory()) {
        continue;
      }

      const tempPath = `${filePath}.tmp`;
      const originalSize = fileStat.size / 1024; // in KB

      try {
        await sharp(filePath)
          .jpeg({ quality, progressive: true })
          .toFile(tempPath);

        const newSize = (await fs.stat(tempPath)).size / 1024; // in KB
        await fs.rename(tempPath, filePath);

        console.log(
          `Compressed ${file}: ${originalSize.toFixed(2)} KB -> ${newSize.toFixed(
            2
          )} KB (${((1 - newSize / originalSize) * 100).toFixed(2)}% reduction)`
        );
      } catch (error) {
        console.error(`Could not process file ${file}:`, error);
        // If there was an error, make sure to clean up the temp file
        if (await fs.stat(tempPath).catch(() => false)) {
          await fs.unlink(tempPath);
        }
      }
    }
    console.log('Image compression complete.');
  } catch (error) {
    console.error('An error occurred during image compression:', error);
  }
}

compressImages();
