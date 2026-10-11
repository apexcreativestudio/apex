import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImage = 'C:/Users/kulas/.gemini/antigravity-ide/brain/3aed9022-ca4a-4e52-91a2-a1475b132ba8/.user_uploaded/media_1791296297143.png';
const publicDir = path.resolve('public/brand');

const directories = [
  'public/brand/logo',
  'public/brand/icon',
  'public/brand/favicon',
  'public/brand/colors'
];

directories.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

async function processAssets() {
  console.log('Processing APEX CREATIVE brand assets...');

  // 1. Primary Original Logo
  fs.copyFileSync(sourceImage, 'public/brand/logo/apex-logo-primary.png');

  // Load image metadata
  const image = sharp(sourceImage);
  const metadata = await image.metadata();
  const width = metadata.width || 1024;
  const height = metadata.height || 1024;

  // Get raw pixel buffer (RGBA)
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  // 2. Create Transparent Logo (Background Removal for White pixels)
  const transparentBuffer = Buffer.from(data);
  const darkLogoBuffer = Buffer.from(data);

  for (let i = 0; i < transparentBuffer.length; i += 4) {
    const r = transparentBuffer[i];
    const g = transparentBuffer[i + 1];
    const b = transparentBuffer[i + 2];

    // If near white background (>240 in all RGB channels)
    if (r > 240 && g > 240 && b > 240) {
      transparentBuffer[i + 3] = 0; // Set Alpha to 0
      darkLogoBuffer[i + 3] = 0;
    } else {
      // For dark logo: replace pure black/dark text (r<60, g<60, b<60) with crisp paper white (252, 252, 253)
      if (r < 60 && g < 60 && b < 60) {
        darkLogoBuffer[i] = 252;
        darkLogoBuffer[i + 1] = 252;
        darkLogoBuffer[i + 2] = 253;
      }
    }
  }

  // Save transparent logo
  await sharp(transparentBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile('public/brand/logo/apex-logo-transparent.png');

  // Save dark variant logo
  await sharp(darkLogoBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile('public/brand/logo/apex-logo-dark.png');

  // 3. Extract Standalone Icon Mark (The Flame Mark inside the 'A' of APEX)
  // In 1024x1024 image, flame is in top-left region of logo
  // Let's crop the flame icon mark
  const iconMarkRegion = {
    left: Math.round(width * 0.10),
    top: Math.round(height * 0.28),
    width: Math.round(width * 0.22),
    height: Math.round(height * 0.24)
  };

  await sharp(transparentBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract(iconMarkRegion)
    .png()
    .toFile('public/brand/icon/apex-icon-mark.png');

  // 4. Favicon assets
  await sharp(transparentBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract(iconMarkRegion)
    .resize(32, 32)
    .png()
    .toFile('public/brand/favicon/favicon.png');

  await sharp(transparentBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract(iconMarkRegion)
    .resize(180, 180)
    .composite([{
      input: Buffer.from(
        `<svg width="180" height="180"><rect width="180" height="180" rx="36" fill="#0B0B0F"/></svg>`
      ),
      blend: 'dest-over'
    }])
    .png()
    .toFile('public/brand/favicon/apple-touch-icon.png');

  // Also copy favicon to root public for browsers
  fs.copyFileSync('public/brand/favicon/favicon.png', 'public/favicon.ico');
  fs.copyFileSync('public/brand/favicon/favicon.png', 'public/favicon.png');
  fs.copyFileSync('public/brand/favicon/apple-touch-icon.png', 'public/apple-touch-icon.png');

  // 5. Official Color Palette JSON
  const colorPalette = {
    brandName: "APEX CREATIVE",
    colors: {
      crimson: "#F31A3E",
      magenta: "#DC175B",
      deepPurple: "#7A2397",
      electricBlue: "#1D16EF",
      flameOrange: "#FB5521",
      tealAccent: "#03A7AE",
      inkBlack: "#0B0B0F",
      paperWhite: "#FCFCFD"
    },
    signatureGradient: {
      stops: [
        { color: "#F31A3E", position: "0%" },
        { color: "#DC175B", position: "33%" },
        { color: "#7A2397", position: "66%" },
        { color: "#1D16EF", position: "100%" }
      ],
      cssLinear: "linear-gradient(135deg, #F31A3E 0%, #DC175B 33%, #7A2397 66%, #1D16EF 100%)",
      cssHorizontal: "linear-gradient(90deg, #F31A3E 0%, #DC175B 33%, #7A2397 66%, #1D16EF 100%)"
    },
    tagline: "IDEAS · VISUALS · IMPACT",
    typography: {
      primaryHeadings: "Montserrat, sans-serif",
      bodyAndUI: "Inter, sans-serif"
    }
  };

  fs.writeFileSync('public/brand/colors/color-palette.json', JSON.stringify(colorPalette, null, 2));

  // 6. Internal Asset Map Document
  const assetMapText = `==================================================
APEX CREATIVE — OFFICIAL BRAND ASSET MAP
==================================================

Single Source of Truth Visual Identity Registry

1. PRIMARY LOGO
   - Light Background: /brand/logo/apex-logo-primary.png
   - Transparent PNG:  /brand/logo/apex-logo-transparent.png
   - Dark/Inverted:    /brand/logo/apex-logo-dark.png
   - Min Width: 120px
   - Clear Space: Min 1x height of 'X' in APEX

2. ICON MARK (SECONDARY BRAND ASSET)
   - Transparent Flame: /brand/icon/apex-icon-mark.png
   - Usage: Mobile navigation compact view, favicon, loading animation, PWA

3. FAVICON & TOUCH ICONS
   - Favicon: /brand/favicon/favicon.png
   - Apple Touch Icon: /brand/favicon/apple-touch-icon.png

4. COLOR PALETTE & SIGNATURE GRADIENT
   - Palette Specs: /brand/colors/color-palette.json
   - Crimson:       #F31A3E
   - Magenta:       #DC175B
   - Deep Purple:   #7A2397
   - Electric Blue: #1D16EF
   - Flame Orange:  #FB5521
   - Teal Accent:   #03A7AE
   - Ink Black:     #0B0B0F
   - Paper White:   #FCFCFD

5. SIGNATURE GRADIENT
   - #F31A3E -> #DC175B -> #7A2397 -> #1D16EF

6. TYPOGRAPHY SYSTEM
   - Primary Headings: Montserrat (Bold / ExtraBold / Black)
   - Secondary / UI / Body: Inter (Regular / Medium / SemiBold)

7. BRAND TAGLINE
   - IDEAS · VISUALS · IMPACT
`;

  fs.writeFileSync('public/brand/README.txt', assetMapText);
  console.log('Brand assets processed successfully!');
}

processAssets().catch(err => {
  console.error('Error processing brand assets:', err);
  process.exit(1);
});
