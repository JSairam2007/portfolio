@echo off
setlocal enabledelayedexpansion
title Push J Sairam Portfolio to GitHub
cd /d "%~dp0"

set "PATH=C:\Users\J Sairam\.gemini\antigravity\scratch\mingit\cmd;C:\Program Files\Git\cmd;%PATH%"

echo ========================================================
echo   Pushing Portfolio to https://github.com/JSairam2007/portfolio
echo ========================================================

echo.
echo [1/5] Initializing Git repository...
if not exist ".git" (
    git init
)

echo.
echo [2/5] Configuring default branch to main...
git branch -M main

echo.
echo [3/5] Adding all project files...
git add -A

echo.
echo [4/5] Creating initial commit...
git config user.name "J Sairam"
git config user.email "sairam.j@example.com"
git commit -m "Initial commit: J Sairam portfolio website"

echo.
echo [5/5] Configuring remote origin...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/JSairam2007/portfolio.git

echo.
echo Pushing to GitHub (origin main)...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo Trying to sync any existing files on GitHub...
    git pull origin main --rebase --allow-unrelated-histories
    git push -u origin main
)

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESS: Pushed to https://github.com/JSairam2007/portfolio
    echo ========================================================
) else (
    echo.
    echo NOTE: If GitHub asks for login, please sign in or provide your GitHub Personal Access Token (PAT).
)

pause
