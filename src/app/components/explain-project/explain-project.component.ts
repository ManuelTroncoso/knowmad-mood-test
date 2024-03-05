import { Component } from '@angular/core';

@Component({
  selector: 'app-explain-project',
  standalone: true,
  imports: [],
  template: `
    <div class="project-explanation">
      <h1><strong>Detalles del Proyecto</strong></h1>
      <p>Este proyecto utiliza:</p>
      <ul>
        <li><strong>Angular</strong>: 16.2.0</li>
        <li><strong>NgRx</strong>: 16.3.0</li>
        <li><strong>RxJS</strong>: 7.8.0</li>
        <li><strong>Material</strong>: 16.2.12</li>
        <li>
          <strong>Jasmine</strong> y <strong>Karma</strong> para las pruebas
        </li>
        <li>
          <strong>Node</strong> para el backend
          <ul>
            <li><strong>"Express"</strong>: "4.18.3"</li>
            <li><strong>"SQLite3"</strong>: "5.1.7"</li>
          </ul>
        </li>
      </ul>
      <p>
        Para levantar el proyecto, accederemos a la carpeta 'back' y lanzaremos
        el comando: <code>node server.js</code>. Para el frontend, usaremos los
        comandos habituales.
      </p>
      <p>
        Se ha separado por componentes independientes y organizado utilizando el
        patrón <strong>dumb/smart</strong>. Cada componente se ha creado con su
        módulo para hacerlo independiente, pero también se han añadido algunos
        ejemplos con standalone.
      </p>
      <p>
        La aplicación contiene un estado que manejamos con
        <strong>NgRX</strong>. Se ha creado una <strong>directiva</strong> para
        asegurar que el texto introducido por el input siempre esté en letras
        mayúsculas. Además, se ha creado un <strong>pipe</strong> para asegurar
        que los nombres de los héroes que aparecen en la tabla tengan la primera
        letra en mayúscula.
      </p>
      <p>
        Se ha utilizado una carga <strong>lazyload</strong> para el enrutamiento
        y se han separado las rutas secundarias dentro del módulo de héroes.
      </p>
    </div>
  `,
  styles: [
    `
      .project-explanation {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f5f5f5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #333;
        text-align: center;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        margin-bottom: 8px;
      }

      code {
        background-color: #f8f8f8;
        padding: 2px 4px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
      }
    `,
  ],
})
export class ExplainProjectComponent {}
