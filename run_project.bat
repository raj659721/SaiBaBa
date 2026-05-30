@echo off
echo Changing to project directory...
cd /d "C:\Users\hp\Downloads\Saibaba-Home-Decore\saibaba-decor"

echo Running setup...
node setup.js

echo Starting development server...
npm run dev
pause
