import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    let pipeline = sharp(inputPath);

    // Resize if dimensions specified
    if (options.width || options.height) {
      pipeline = pipeline.resize(options.width, options.height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convert to WebP with quality optimization
    await pipeline
      .webp({ quality: options.quality || 85 })
      .toFile(outputPath);

    console.log(`✓ Optimized ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
  }
}

async function main() {
  const publicDir = path.join(__dirname, 'public');

  // WUE images - resize to 312x312 for square display, 312x208 for rectangular
  const wueImages = [
    { input: 'WUE-Teachers.png', output: 'WUE-Teachers.webp', width: 312, height: 312 },
    { input: 'WUE-Therapist.png', output: 'WUE-Therapist.webp', width: 312, height: 312 },
    { input: 'WUE-Schools.png', output: 'WUE-Schools.webp', width: 312, height: 312 },
    { input: 'WUE-Homeschool.png', output: 'WUE-Homeschool.webp', width: 312, height: 208 }
  ];

  // Hero image - resize to 380x380
  const heroImage = [
    { input: 'StudentWritingOnLens.png', output: 'StudentWritingOnLens.webp', width: 380, height: 380 }
  ];

  // ABC images - small sizes, keep aspect ratio
  const abcImages = [
    { input: 'ABC-edu.png', output: 'ABC-edu.webp', width: 298 },
    { input: 'ABC-Incorect.png', output: 'ABC-Incorect.webp', width: 298 },
    { input: 'ABC-solid.png', output: 'ABC-solid.webp', width: 304 },
    { input: 'ABC-dotted.png', output: 'ABC-dotted.webp', width: 304 },
    { input: 'ABC-dotted-arrows.png', output: 'ABC-dotted-arrows.webp', width: 304 }
  ];

  const allImages = [...wueImages, ...heroImage, ...abcImages];

  console.log('🚀 Starting image optimization...\n');

  for (const image of allImages) {
    const inputPath = path.join(publicDir, image.input);
    const outputPath = path.join(publicDir, image.output);

    await optimizeImage(inputPath, outputPath, {
      width: image.width,
      height: image.height,
      quality: 85
    });
  }

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
