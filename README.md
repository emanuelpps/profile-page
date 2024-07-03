# Profile Page

Este repositorio contiene una página de perfil construida utilizando Next.js, React y CSS. El proyecto demuestra una implementación simple de un formulario de perfil de usuario con interactividad básica.

## Estructura del Directorio

- **public/**: Contiene activos estáticos como imágenes.
- **src/**: Contiene el código principal de la aplicación.
  - **app/**: Contiene los componentes principales de la aplicación.
    - **components/**: Contiene componentes reutilizables de React.
      - **Buttons/**: Contiene el componente de botón.
      - **NavBar/**: Contiene el componente de la barra de navegación.
    - **api/**: Contiene archivo JSON con datos de usuario.


## Despliegue

La aplicación está desplegada en Vercel y se puede acceder a través del siguiente enlace: [Profile Page](https://profile-page-teal.vercel.app/)


## En caso de Instalación y Uso local

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/emanuelpps/profile-page.git
    ```

2. Navegar al directorio del proyecto:
    ```sh
    cd profile-page
    ```

3. Instalar las dependencias:
    ```sh
    npm install
    ```

4. Iniciar el servidor de desarrollo:
    ```sh
    npm run dev
    ```

5. Abrir el navegador en [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Funcionalidades

### Pantalla Principal

Al iniciar en la página, aparece una pantalla principal con:
- **NavBar**: Contiene un logo genérico y un botón para ingresar al perfil.
- **Main**: Contiene el logo genérico.
- **Footer**: Pie de página con información basica.

### Perfil de Usuario

Al hacer clic en el botón de perfil, se ingresa a la sección de perfil donde se puede visualizar:
- **Información del Usuario**: Muestra el nombre, edad, ubicacion, email, intereses y un resumen general del usuario.
- **Imagen de Perfil**: Muestra la imagen de perfil del usuario.
- **Formulario de Contacto**: Permite enviar un mensaje al usuario.

### Componentes de la Página de Perfil

Dentro de la carpeta `profile` se encuentran las subcarpetas con los respectivos componentes utilizados en esa página, organizados para mantener el código modular y fácil de mantener.
