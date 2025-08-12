@echo off
REM RCF Website Development Commands
REM This batch file handles npm commands with proper environment setup

echo RCF Website - Development Helper
echo ================================

if "%1"=="dev" (
    echo Starting development server...
    set NODE_ENV=development
    set PORT=5173
    npm run dev
) else if "%1"=="build" (
    echo Building for production...
    set NODE_ENV=production
    npm run build
) else if "%1"=="preview" (
    echo Starting preview server...
    set NODE_ENV=production
    npm run preview
) else if "%1"=="install" (
    echo Installing dependencies...
    npm install
) else if "%1"=="test" (
    echo Running tests...
    set NODE_ENV=test
    npm run test
) else (
    echo Usage: dev.bat [command]
    echo.
    echo Available commands:
    echo   dev      - Start development server
    echo   build    - Build for production
    echo   preview  - Preview production build
    echo   install  - Install dependencies
    echo   test     - Run tests
    echo.
    echo Example: dev.bat dev
)
