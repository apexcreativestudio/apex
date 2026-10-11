import sharp from 'sharp';

async function cropNavbarLogo() {
  console.log('Cropping logo tightly for navbar...');
  
  // Trim transparent padding automatically
  await sharp('public/brand/logo/apex-logo-transparent.png')
    .trim()
    .png()
    .toFile('public/brand/logo/apex-logo-navbar.png');

  await sharp('public/brand/logo/apex-logo-dark.png')
    .trim()
    .png()
    .toFile('public/brand/logo/apex-logo-dark-navbar.png');

  console.log('Navbar logo cropped successfully!');
}

cropNavbarLogo().catch(err => {
  console.error('Error cropping navbar logo:', err);
  process.exit(1);
});
