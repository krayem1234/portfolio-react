@echo off
cd /d "%~dp0"
echo ============================================
echo   Installation des dependances (npm install)
echo ============================================
call npm install
if errorlevel 1 (
  echo.
  echo Une erreur s'est produite pendant npm install.
  pause
  exit /b 1
)

echo.
echo ============================================
echo   Lancement du serveur de developpement
echo ============================================
start "Portfolio Dev Server" cmd /k npm run dev

timeout /t 6 /nobreak >nul
start "" http://localhost:5173

echo.
echo Le serveur tourne dans la fenetre "Portfolio Dev Server".
echo Cette fenetre peut etre fermee.
pause
