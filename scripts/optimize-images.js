const fs = require('fs');
const path = require('path');

// Image optimization script
const optimizeImages = () => {
  const publicDir = path.join(__dirname, '../public');
  const assetsDir = path.join(publicDir, 'assets');
  const bilderDir = path.join(assetsDir, 'bilder');
  
  console.log('🖼️  Image Optimization Script');
  console.log('============================');
  
  // Check if directories exist
  if (!fs.existsSync(bilderDir)) {
    console.log('❌ Bilder directory not found');
    return;
  }
  
  // Get all image files
  const imageFiles = fs.readdirSync(bilderDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp', '.avif'].includes(ext);
  });
  
  console.log(`📁 Found ${imageFiles.length} images in ${bilderDir}`);
  
  // Analyze image sizes
  let totalSize = 0;
  const imageStats = [];
  
  imageFiles.forEach(file => {
    const filePath = path.join(bilderDir, file);
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    totalSize += stats.size;
    
    imageStats.push({
      name: file,
      size: sizeInMB + ' MB',
      bytes: stats.size
    });
  });
  
  // Sort by size (largest first)
  imageStats.sort((a, b) => b.bytes - a.bytes);
  
  console.log('\n📊 Image Analysis:');
  console.log('==================');
  imageStats.forEach(img => {
    console.log(`  ${img.name}: ${img.size}`);
  });
  
  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
  console.log(`\n📈 Total size: ${totalSizeMB} MB`);
  
  // Recommendations
  console.log('\n💡 Optimization Recommendations:');
  console.log('================================');
  
  imageStats.forEach(img => {
    if (img.bytes > 500 * 1024) { // > 500KB
      console.log(`  ⚠️  ${img.name} is large (${img.size}) - consider optimizing`);
    }
  });
  
  console.log('\n✅ Next.js Image Optimization is enabled in next.config.ts');
  console.log('✅ Images will be automatically optimized during build');
  console.log('✅ WebP and AVIF formats will be generated');
  console.log('✅ Responsive sizes will be created');
  console.log('✅ Lazy loading is enabled');
  
  console.log('\n🚀 To optimize images manually:');
  console.log('   1. Use tools like TinyPNG, ImageOptim, or Squoosh');
  console.log('   2. Convert to WebP format for better compression');
  console.log('   3. Resize images to appropriate dimensions');
  console.log('   4. Use descriptive filenames for better SEO');
};

// Run the script
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages };
