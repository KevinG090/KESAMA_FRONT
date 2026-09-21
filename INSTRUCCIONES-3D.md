# KESAMA — nuevo visor 3D NTS-02

## Ejecutar localmente

Descomprime este proyecto en una carpeta nueva para no mezclarlo con archivos de la implementación anterior.
Abre una terminal en la carpeta que contiene `package.json`. Usa Node.js 22 LTS y npm.

```bash
npm ci
npm run dev
```

Abre http://localhost:3000/#destacados. El visor está en «Piezas de Autor».
Si prefieres `npm install`, también instala automáticamente las dependencias del visor.
No debes instalar Spline, Blender, React Three Fiber ni añadir ninguna clave/API.

## Dependencias

- Añadidas: `three` y `@types/three` (esta última solo para desarrollo).
- Eliminadas: `@splinetool/react-spline` y `@splinetool/runtime`.
- Retirados: el visor externo de Spline, su declaración de tipos y la carga duplicada del script en el layout.
- `package-lock.json` actualizado y incluido.

## Funcionalidad

- Modelo con volumen real, construido en Three.js mediante geometría; no es un cambio de fotografías.
- Cuerpo blanco mate, cubierta y dos frentes de madera, interior de cajones, tiradores rebajados, correderas y soporte trasero.
- Cajones independientes: clic/tap sobre cada cajón o botones «Abrir izquierdo» y «Abrir derecho».
- Rotación libre por arrastre; rueda/pellizco y botones +/− para zoom.
- Vistas Perspectiva, Frontal, Lateral, Superior y Trasera con movimiento de cámara.
- Cambio de acabado Roble/Nogal, LED y restablecimiento del estado inicial.
- Controles HTML accesibles por teclado, estados anunciados y respeto de movimiento reducido.
- Límite de resolución y pausa del render cuando el visor queda fuera de pantalla o la pestaña está oculta.
- Aviso de error con reintento si falta WebGL o se pierde el contexto gráfico.

La geometría, la veta procedural y el entorno de estudio se generan localmente; el visor no descarga modelos, texturas ni escenas de terceros. Las imágenes/fuentes externas del resto del sitio se mantienen como estaban.

## Archivos principales

- `src/components/NightstandViewer3D.tsx`: interfaz, controles y carga del motor solo en cliente.
- `src/components/NightstandViewer3D.module.css`: diseño del visor para escritorio y móvil.
- `src/lib/nightstandScene.ts`: geometría, iluminación, materiales, cámaras, animación y limpieza de recursos.
- `src/components/FeaturedProducts.tsx`: integración en destacados y descripción ajustada al nuevo mueble.
- `src/app/layout.tsx`: retirada del script Spline.
- `tests/nightstand.test.cjs`: pruebas CPU de geometría y lógica, con renderer y controles simulados.

## Comprobaciones automatizadas

```bash
npm run typecheck
npm run test:3d
npm run build
npm run start
```

TypeScript, las tres pruebas CPU y la compilación de producción se ejecutaron correctamente durante la entrega. Las pruebas CPU verifican geometría finita, cajones independientes, límites, cámaras, zoom, luces, material, reset y limpieza; NO validan el render WebGL real.

El navegador remoto de esta sesión no pudo acceder al servidor local. Por eso queda pendiente confirmar apariencia, interacción real y rendimiento en tu navegador/dispositivo.

## Lista de prueba visual local

1. Carga `/#destacados`: debe aparecer el mueble, sin un rectángulo vacío ni solicitudes a Spline.
2. Abre el cajón izquierdo: solo ese debe deslizarse. Abre el derecho y vuelve a cerrar ambos.
3. Haz clic sobre un frente: debe alternar su apertura; arrastrar para girar no debe abrirlo.
4. Recorre las cinco vistas. En Trasera debe verse el soporte; en Superior, la cubierta.
5. Alterna Roble/Nogal y LED; pulsa Restablecer y comprueba el estado inicial.
6. Prueba zoom, teléfono en vertical, giro de pantalla y navegación con Tab/Enter.
7. Comprueba que las otras secciones y las rutas del catálogo siguen funcionando.

Si aparece un error, envía el texto de la consola del navegador (F12 → Console) junto con una captura. Si falta WebGL, verifica la aceleración gráfica del navegador y reinícialo. El resto del catálogo debe seguir accesible.

## Fidelidad y límites

Modelo conceptual aproximado a la imagen de referencia, no réplica de fabricación ni conversión automática de la foto. Dimensiones de trabajo estimadas: 120 × 30 × 40 cm; recorrido de cajones: 29 cm. Se pueden editar en `nightstandScene.ts`.

La madera es procedural, los herrajes están simplificados y la escena no incluye lámpara ni planta. No se entrega un archivo Blender/GLB independiente: el modelo editable reside en el código. Para un acabado fotográfico de catálogo habría que refinar texturas PBR, detalles y medidas con referencias reales.

## Contenido del ZIP

Se conserva el código del resto del sitio. No se incluyen `.next`, `node_modules`, cachés ni secretos. La configuración Vite heredada se mantiene, pero este proyecto se ejecuta con los scripts de Next.js indicados arriba.
