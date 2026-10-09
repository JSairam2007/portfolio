@echo off
title J Sairam Portfolio Local Server
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
