const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = 'admin123';
    const saltRounds = 10;
    
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log('Generated hash for admin123:');
        console.log(hash);
        
        // Test the hash works
        const isValid = await bcrypt.compare(password, hash);
        console.log('Hash verification test:', isValid);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

generateHash();
