# IEB+ Metas — prototipo v3

Prototipo navegable de **IEB+ Metas**: una sección dentro de la app IEB+ para que universitarios de 18 a 24 años conviertan una meta personal en un plan de inversión.

**Probarlo:** https://maximokohan-stack.github.io/IEB-METAS/

Trabajo de Desarrollo de Nuevos Negocios (UTDT). Es un ejercicio académico, sin vínculo oficial con IEB+.

## Cómo usarlo como app

- **En el celular:** abrí el link y elegí "Agregar a pantalla de inicio" (Chrome en Android, Compartir en Safari). Se abre a pantalla completa, sin marco, y después de la primera visita funciona sin internet.
- **En la computadora:** se ve dentro de un teléfono. Agregá `?panel=1` al final del link para mostrar el panel de pruebas, que permite saltar a cada etapa, forzar estados (fuera de ritmo, mercado malo, nueva revisión) y ver los eventos de métricas.

## Recorrido

1. **Objetivo** (paso 1, "Conocer"): qué querés lograr, cuánto, para cuándo, cuánto invertís hoy, cuánto aportás por mes y disponibilidad.
2. **Entender**: experiencia, reacción ante una baja y nivel de riesgo.
3. **Elegir**: tres opciones por riesgo, una sugerida con su porqué, comparación, glosario y simulación.
4. **Invertir**: plan IEB+ (Rookie / Investor), forma de aporte y confirmación con huella o Face ID (simulado).
5. **Seguir**: evolución de la meta, "Tu estrategia hoy", avisos, aprendizaje y adaptación del plan.

## Qué lo hace sentir como una app móvil

- **Para hoy:** al entrar a Metas, una tarjeta con la próxima acción y un botón para sumar un aporte en un toque.
- **Vista de 5 segundos:** total invertido, aporte mensual y estado de cada meta, juntos.
- **Capacidades nativas simuladas:** permiso de notificaciones con un aviso de ejemplo (solo próximo aporte, desvío del plan y cambios del mercado; sin promociones), confirmación biométrica al invertir y permiso de ubicación para eventos cercanos de House IEB+. Son simulaciones: no usan los permisos reales del dispositivo.
- **Táctil:** zonas de toque de al menos 44 px, sin barras de desplazamiento de escritorio, sin swipe lateral ni zoom por gestos.
- **Rápido y sin conexión:** fuentes e íconos incluidos en el repo (nada se descarga de terceros) y un service worker que guarda todo en el dispositivo.

## Funcionalidades del producto/servicio cubiertas

Se contrastó el prototipo con la tabla "Funcionalidades del producto/servicio" de la propuesta de solución:

- Onboarding orientado a objetivos, definición de objetivos, perfil de riesgo y plan de inversión personalizado.
- Información simple y comparativa, y educación contextual: glosario en Elegir, Invertir y en el detalle de la meta.
- Dashboard de progreso con gráfico de evolución (hasta hoy y proyectado).
- Seguimiento y alertas, Research integrado y adaptación del plan.
- Aportes programados e inversión simplificada.
- Todo en un solo lugar: vista consolidada de todas las metas.

## Correrlo en tu computadora

El código fuente está en `src/metas-v3.dc.html`. Necesita servirse desde un servidor local porque carga `support.js` y el design system de `src/_ds/`:

```bash
npx serve .
```

Abrí luego la dirección que muestre la terminal.

## Si cambiás archivos

El service worker guarda una lista fija de archivos. Si agregás o quitás archivos, regeneralo:

```bash
node tools/build-sw.js
```

Mientras el prototipo esté instalado, la nueva versión puede verse recién en la segunda apertura.

## Notas

- Montos, fondos, tasas y composiciones son **ficticios**. Las proyecciones usan una estimación simple, no datos de IEB Research.
- Las fuentes (Nunito) están incluidas en `src/fonts/` y los íconos (Lucide, ISC) en `src/icons/`.
- `IEB+ Metas Prototipo.zip` es la versión anterior del prototipo, empaquetada; se deja como respaldo.
