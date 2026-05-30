import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const sourceDir = path.join('C:', 'Users', 'hp', 'Downloads', 'ezgif-split');
const targetFramesDir = path.join('C:', 'Users', 'hp', 'Downloads', 'Saibaba-Home-Decore', 'saibaba-decor', 'public', 'frames-hero');
const targetVideosDir = path.join('C:', 'Users', 'hp', 'Downloads', 'Saibaba-Home-Decore', 'saibaba-decor', 'public', 'videos');
const fallbackVideoPath = path.join('C:', 'Users', 'hp', 'Downloads', 'Bedroom_to_bathroom_pan_202605261302.mp4');

// Ensure directories exist
if (!fs.existsSync(targetFramesDir)) {
    fs.mkdirSync(targetFramesDir, { recursive: true });
}
if (!fs.existsSync(targetVideosDir)) {
    fs.mkdirSync(targetVideosDir, { recursive: true });
}

// Copy frames
try {
    const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.webp')).sort();
    console.log(`Found ${files.length} frames.`);
    
    // We only need 210 frames max
    const maxFrames = Math.min(210, files.length);
    for (let i = 0; i < maxFrames; i++) {
        const file = files[i];
        // 1-indexed, padded to 3 digits
        const newName = `frame_${(i + 1).toString().padStart(3, '0')}.webp`;
        fs.copyFileSync(path.join(sourceDir, file), path.join(targetFramesDir, newName));
    }
    console.log(`Copied ${maxFrames} frames to ${targetFramesDir}`);
} catch (e) {
    console.error("Error copying frames:", e);
}

// Copy fallback video for bento-bg
try {
    if (fs.existsSync(fallbackVideoPath)) {
        fs.copyFileSync(fallbackVideoPath, path.join(targetVideosDir, 'bento-bg.mp4'));
        console.log("Copied bento-bg.mp4");
    } else {
        console.log("Fallback video not found at: " + fallbackVideoPath);
    }
} catch (e) {
    console.error("Error copying video:", e);
}

// Install dependencies
try {
    const projectDir = path.join('C:', 'Users', 'hp', 'Downloads', 'Saibaba-Home-Decore', 'saibaba-decor');
    console.log("Installing dependencies... This might take a minute.");
    execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
    console.log("Dependencies installed successfully.");
} catch (e) {
    console.error("Error installing dependencies:", e);
}
