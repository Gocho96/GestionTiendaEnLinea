PASOS PARA INICIALIZAR EL PROYECTO DESDE EL LOCALHOST
--------------------------------------------------------------------
IMPORTANTE:

* Para descargar el proyecto desde GitHub, debe tener instalado Git en el equipo.

** El proceso descrito a continuación es valido para Windows.

*** El proceso se explica para Visual Studio Code.

**** Para la gestión de base de datos se requerirá MongoDB
--------------------------------------------------------------------
PASOS A SEGUIR:

1. Inicializar la consola de comandos en la ruta de la carpeta donde desee clonar el repositorio.

2. Ejecutar el siguiente comando para clonar el repositorio: git clone https://github.com/Gocho96/MiTiendita.com.git

3. Ejecutamos Visual Studio Code desde la carpeta raíz donde se encuentre el repositorio clonado

4. Para inicializar la base de datos con MongoDB ejecutamos en la consola de comandos (CMD) directamente desde Windows o desde el Visual Studio Code, la siguiente instrucción: mongod

5. Para correr el backend, debemos entrar en la carpeta correspondiente y luego ejecutar el comando de inicio. Corremos las siguientes instrucciones:

cd backend
npm run dev
--------------------------------------------------------------------
NOTA: El backend de ejecutará en el puerto 3000 (http://localhost:3000/)
--------------------------------------------------------------------

6. Para correr el frontend, debemos entrar en la carpeta correspondiente y luego ejecutar el comando de inicio. Corremos las siguientes instrucciones:

cd frontend
npm run dev
--------------------------------------------------------------------
NOTA: El frontend de ejecutará en el puerto 5173 (http://localhost:5173/)
--------------------------------------------------------------------

7. Con estos pasos puede proceder con el uso de la aplicación (Ver manual de usuario)
