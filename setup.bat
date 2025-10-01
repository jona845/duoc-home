@echo off
echo ===============================
echo   🚀 Instalador Proyecto Duoc
echo ===============================

:: Verificar Node
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  echo ❌ Node.js no esta instalado. Instala Node.js desde https://nodejs.org/
  pause
  exit /b
)

:: Verificar npm
npm -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  echo ❌ npm no esta disponible.
  pause
  exit /b
)

:: Verificar Ionic CLI
ionic -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  echo ⚡ Instalando Ionic CLI globalmente...
  npm install -g @ionic/cli
)

:: Instalar dependencias
echo 📦 Instalando dependencias del proyecto...
npm install

echo ✅ Proyecto listo!
echo Para iniciar usa: ionic serve
pause
