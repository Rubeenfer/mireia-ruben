# Mireia & Rubén's Wedding

Este proyecto es una página web para la boda de Mireia y Rubén. Contiene información sobre el evento, un temporizador de cuenta regresiva, y opciones para cambiar el tema y el idioma.

## Estructura del Proyecto

- **components**: Contiene los componentes reutilizables de la aplicación.
  - `ThemeToogle.astro`: Componente para cambiar entre el modo claro y oscuro.
  - `LanguageSelector.astro`: Componente para seleccionar el idioma de la página.
  - `Header.astro`: Encabezado de la página con navegación y opciones.
  - `Footer.astro`: Pie de página con información de contacto.
  - `CountdownTimer.tsx`: Temporizador de cuenta regresiva para el evento.
  - `Collaborator.astro`: Componente para mostrar información de los colaboradores.

## Uso

Para iniciar el proyecto en modo de desarrollo, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás ver la página en `http://localhost:4321`.

## Despliegue

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist`.

## Licencia

Este proyecto está bajo la Licencia MIT.
