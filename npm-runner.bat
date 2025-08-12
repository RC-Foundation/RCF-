@echo off
REM Set environment variables from .env file
set NODE_ENV=development
set PORT=3001
set REDIS_HOST=localhost
set REDIS_PORT=6379
set LOG_LEVEL=info
set API_URL=http://localhost:3001
set ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173

REM Use your Node.js installation
set NODE_PATH=C:\Users\amer.abuhamed\node-v22.18.0-win-x64
set PATH=%NODE_PATH%;%PATH%

echo RCF Website NPM Command Runner
echo ===============================
echo Available commands:
echo 1. npm install - Install dependencies
echo 2. npm run dev - Start development server
echo 3. npm run build - Build for production
echo 4. npm run preview - Preview production build
echo 5. npm run test - Run tests
echo 6. Custom command
echo.

set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" (
    "%NODE_PATH%\npm.cmd" install
) else if "%choice%"=="2" (
    "%NODE_PATH%\npm.cmd" run dev
) else if "%choice%"=="3" (
    "%NODE_PATH%\npm.cmd" run build
) else if "%choice%"=="4" (
    "%NODE_PATH%\npm.cmd" run preview
) else if "%choice%"=="5" (
    "%NODE_PATH%\npm.cmd" run test
) else if "%choice%"=="6" (
    set /p custom="Enter npm command: "
    "%NODE_PATH%\npm.cmd" %custom%
) else (
    echo Invalid choice!
)

pause
