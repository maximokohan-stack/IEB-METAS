# IEB+ Metas — prototipo v3

Prototipo navegable de **IEB+ Metas**: una sección dentro de la app IEB+ para que universitarios de 18 a 24 años conviertan una meta personal en un plan de inversión.

**Probarlo:** https://maximokohan-stack.github.io/IEB-METAS/

Trabajo de Desarrollo de Nuevos Negocios (UTDT). Es un ejercicio académico, sin vínculo oficial con IEB+.

## Recorrido

1. **Objetivo** (paso 1, "Conocer"): qué querés lograr, cuánto, para cuándo, cuánto invertís hoy, cuánto aportás por mes y disponibilidad.
2. **Entender**: experiencia, reacción ante una baja y nivel de riesgo.
3. **Elegir**: tres opciones por riesgo, una sugerida con su porqué, comparación, glosario y simulación.
4. **Invertir**: plan IEB+ (Rookie / Investor), forma de aporte y confirmación.
5. **Seguir**: evolución de la meta, "Tu estrategia hoy", avisos, aprendizaje y adaptación del plan.

El panel de prueba a la derecha permite saltar a cada etapa, forzar estados (fuera de ritmo, mercado malo, nueva revisión) y ver los eventos de métricas.

## Funcionalidades del producto/servicio cubiertas

Se contrastó el prototipo con la tabla "Funcionalidades del producto/servicio" de la propuesta de solución:

- Onboarding orientado a objetivos, definición de objetivos, perfil de riesgo y plan de inversión personalizado.
- Información simple y comparativa, y educación contextual: glosario en Elegir, Invertir y en el detalle de la meta.
- Dashboard de progreso con gráfico de evolución (hasta hoy y proyectado).
- Seguimiento y alertas, Research integrado y adaptación del plan.
- Aportes programados e inversión simplificada.
- Todo en un solo lugar: vista consolidada de todas las metas (total invertido y aporte mensual).

## Correrlo en tu computadora

El código fuente está en `src/metas-v3.dc.html`. Necesita servirse desde un servidor local porque carga `support.js` y el design system de `src/_ds/`:

```bash
npx serve .
```

Abrí luego la dirección que muestre la terminal.

## Notas

- Montos, fondos, tasas y composiciones son **ficticios**. Las proyecciones usan una estimación simple, no datos de IEB Research.
- Los íconos se descargan de un CDN (`lucide-static`, versión fija), así que hace falta conexión a internet para verlos.
- `IEB+ Metas Prototipo.zip` es la versión anterior del prototipo, empaquetada; se deja como respaldo.
