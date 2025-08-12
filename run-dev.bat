@echo off
REM Set environment variables
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

echo Starting RCF Website Development Server...
echo Node.js version:
"%NODE_PATH%\node.exe" --version

echo NPM version:
"%NODE_PATH%\npm.cmd" --version

echo Installing dependencies (if needed)...
"%NODE_PATH%\npm.cmd" install

echo Starting development server...
"%NODE_PATH%\npm.cmd" run dev
