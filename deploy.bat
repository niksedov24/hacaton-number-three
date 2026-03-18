@echo off
echo Building project...
call npm run build

echo Copying files to temp location...
xcopy dist C:\temp-deploy /E /I /Y /Q

echo Deploying to GitHub Pages...
cd C:\temp-deploy
git init
git add .
git commit -m "Deploy %date% %time%"
git branch -M gh-pages
git remote add origin https://github.com/niksedov24/hacaton-number-three.git
git push -f origin gh-pages

echo Cleaning up...
cd %~dp0
rmdir /s /q C:\temp-deploy

echo Done! Check https://niksedov24.github.io/hacaton-number-three
pause