# 04 — Plan de pruebas, calidad y evidencias

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Versión documental:** 1.0 — decisiones de estado/UX y evidencias B consolidadas  
> **Estado:** PLAN CONSOLIDADO; `npx jest`: 4 suites / 12 PASS (solo tests versionados; `EditTaskRoute.test.tsx` eliminado en CHK-023); `npm run lint` y `npm run typecheck` PASS; `npm run format:check` FAIL (3 archivos de `src/`, ver §10). Android parcial (CHK-010 a CHK-026).
> **Estrategia aprobada:** D-06, alternativa B — calidad equilibrada y verificable; **evidencias visuales B híbridas** (captura real y revisión humana)  
> **Framework elegido:** React Native + Expo + TypeScript  
> **Nota:** ningún caso de prueba ni evidencia mencionados en este documento se consideran ejecutados o existentes por el mero hecho de estar planificados.

## 1. Objetivo, fuentes y alcance

Este plan define **qué probar, cómo comprobarlo, qué registrar y cuándo aceptar o bloquear** cada etapa de desarrollo. Su propósito es sustentar la calidad del producto y las evidencias académicas para optar al nivel **Sobresaliente (90 %–100 %)**. La calificación efectiva corresponde al docente.

**Documentos normativos internos:**

1. [01 — Requisitos, alcance y rúbrica](./01-REQUISITOS-RUBRICA.md): RF-01 a RF-10, CA-01 a CA-13, RNF-01 a RNF-10 y RUB-01 a RUB-05.
2. [02 — Decisiones técnicas y arquitectura](./02-DECISIONES-ARQUITECTURA.md): D-01 a D-07, arquitectura modular, stack, reglas de integración.
3. [03 — Diseño de experiencia de usuario e interfaz móvil](./03-DISENO-UX-UI.md): pantallas, flujos, accesibilidad y decisiones P-UX-01 a P-UX-06 aprobadas.

**Fuentes académicas originales:** *Evaluación sumativa Unidad N.º 1* y *Rúbrica evaluación unidad 1* (mencionadas y desglosadas en el documento 01). No se presume que estos PDF estén versionados en el repositorio.

**Incluido:** operaciones de tareas, formularios, filtros, navegación Stack, diseño visual, accesibilidad básica, controles estáticos, reproducibilidad de Git, documentación, capturas y revisión de la rúbrica.

**Excluido en Unidad 1:** pruebas de backend, base de datos, autenticación, API remota, sincronización, notificaciones, despliegue en tiendas y persistencia después de cerrar totalmente la aplicación. No se exigirán pruebas de funciones fuera de alcance.

## 2. Política de calidad y estados

### 2.1. Prioridades y enfoque

| Prioridad | Definición | Tratamiento |
|---|---|---|
| **P0 — Crítica** | Operación exigida por el enunciado, integridad de tareas, navegación fundamental o bloqueo de ejecución. | Obligatoria para cerrar la Unidad 1; cualquier fallo impide aprobar el gate funcional. |
| **P1 — Alta** | Funcionalidad de alcance B, seguridad de interacción, accesibilidad operativa o reproducción del proyecto. | Obligatoria para el cierre sin fallos conocidos; un bloqueo de entorno se documenta y resuelve. |
| **P2 — Complementaria** | Calidad visual, bordes de usabilidad, referencias y refinamientos que requieren revisión contextual. | Se comprueba y documenta; se prioriza según impacto y rúbrica. |

La cobertura exigida se mide por **requisitos y criterios de aceptación**, no por una cifra arbitraria de porcentaje de líneas de código. Una prueba automatizada no sustituye una comprobación de interfaz en Android.

### 2.2. Estados permitidos de cada caso

| Estado | Uso obligatorio |
|---|---|
| **NO EJECUTADO** | Se ha definido el caso, pero todavía no se ha realizado. **Estado inicial de todos los casos**. |
| **APROBADO** | Se ejecutó, se obtuvo el resultado esperado y hay evidencia rastreable. |
| **FALLIDO** | Se ejecutó y el resultado no cumplió el criterio. Debe abrirse incidencia o registrarse corrección. |
| **BLOQUEADO** | No pudo ejecutarse por un impedimento identificable; describirlo y asignar siguiente acción. |
| **NO APLICA** | No procede para el entorno concreto o una decisión aprobada; justificar por escrito. Nunca usar para ocultar una función obligatoria. |

Las decisiones P-UX-01 a P-UX-06 ya fueron aprobadas. Ningún caso UX permanece condicionado a ratificación; todos comienzan como **NO EJECUTADO** hasta su ejecución real.

### 2.3. Tipos de comprobación

- **UNITARIA (U):** reglas puras de creación, validación, edición, eliminación, estado y filtros; cuando se implemente la lógica.
- **COMPONENTE (C):** interacción con controles, texto, estados de formulario y lista, mediante Jest/`jest-expo` y React Native Testing Library.
- **DISPOSITIVO (M):** recorrido manual auténtico en Android; teclado, retorno del sistema, navegabilidad, TalkBack cuando esté disponible y apariencia real.
- **ESTÁTICA (S):** TypeScript, ESLint, Prettier y revisión de dependencias/estructura.
- **DOCUMENTAL (D):** Git, referencias relativas, capturas, informe y matriz de la rúbrica.

Una misma condición puede exigir más de un tipo de comprobación.

## 3. Precondiciones y datos de prueba

### 3.1. Antes de ejecutar

- [x] Existe una implementación real inicial conforme a la línea base 01–03.
- [x] Se seleccionaron versiones compatibles: Expo SDK 58, React Native 0.88.1, React 19.3.0, Expo Router 58.0.29 y paquetes de pruebas versionados en el lockfile.
- [x] Se documentó y probó un emulador Android: AVD `emulator-5554` (Android 16 / API 36) con Expo Go y ADB por ruta completa (CHK-010 a CHK-019).
- [ ] Se verificó en Android que Context + `useReducer` comparte una colección entre rutas y que formulario/filtro usan `useState` local.
- [x] Las decisiones P-UX-01 a P-UX-06 están aprobadas como especificación; su comportamiento aún debe probarse.
- [ ] Se registró el commit evaluado y se dejó disponible un estado inicial conocido.

**Estado actual:** proyecto y lockfile creados; pruebas unitarias/de componente y TypeScript pasan. `npm ci` limpio PASS (CHK-013). Android probado parcialmente (CHK-010 a CHK-026). Capturas versionadas en `docs/evidencias/` (`e5361e1`); capturas de sesión adicionales solo en la carpeta temporal del equipo, no versionadas.

### 3.2. Datos controlados

Usar tareas ficticias, sin información personal ni credenciales. Ejemplos de ensayo (no datos que deban aparecer preinstalados en la aplicación):

| Dato | Título | Descripción | Estado inicial |
|---|---|---|---|
| T1 | Preparar evaluación | Revisar los requisitos de la Unidad 1 | Pendiente |
| T2 | Revisar arquitectura | Comprobar módulos y navegación | Pendiente |
| T3 | Verificar formulario | Probar creación y edición | Completada |

**Preparación del estado:** como no habrá persistencia, iniciar una sesión limpia o recrear explícitamente las tareas. Antes de un caso que exija listado vacío, abrir una sesión sin tareas o eliminarlas de forma controlada. Anotar la preparación si afecta el resultado.

**Pruebas de borde:** valores vacíos, espacios en blanco, caracteres con tildes/ñ, textos de varias líneas, tareas con identificadores distintos, lista vacía y tareas de estados mezclados. Los límites **aprobados** de **100 caracteres para título y 500 para descripción** son criterios obligatorios de pruebas de borde.

## 4. Matriz funcional — casos CP-01 a CP-16

El estado de ejecución de cada caso se registra en la bitácora (`05`) y, para CP-UX, en §4.1. El tipo indica la comprobación prevista, **no su ejecución**.

| ID | Prueba / pasos esenciales | Resultado esperado | Req. / aceptación | Prioridad | Tipo |
|---|---|---|---|---|---|
| **CP-01** | Abrir lista con colección vacía. | Aparecen estado vacío general, texto explicativo y acción «Nueva tarea»; ninguna tarjeta ficticia. | RF-01, RF-09 / CA-01, CA-13 | P0 | C + M |
| **CP-02** | Crear tarea con título y descripción válidos desde «Nueva tarea». | Se crea **exactamente una** tarea pendiente; se restablece el borrador y se regresa a lista; está visible en «Todas» y «Pendientes». | RF-02 / CA-02 | P0 | U + C + M |
| **CP-03** | Intentar guardar con título vacío, descripción vacía y solo espacios en cualquiera de ellos. | No se agrega ni modifica tarea; cada campo inválido recibe texto de error; el borrador se conserva. | RF-05, RF-09 / CA-03, CA-13 | P0 | U + C |
| **CP-04** | Editar T1 cambiando título y descripción y guardar. | Cambian solo los campos de T1; el identificador y estado persisten; no aparece duplicado. | RF-03 / CA-04 | P0 | U + C + M |
| **CP-05** | Cancelar creación sin guardar; repetir con edición modificada. | No se crea tarea ni se altera la original; si existe borrador modificado, se sigue el flujo de descarte acordado. | RF-10 / CA-05 | P0 | C + M |
| **CP-06** | Seleccionar «Eliminar» en T1. | Se muestra una confirmación claramente asociada a T1; no se elimina antes de confirmar. | RF-04, RF-08 / CA-06 | P0 | C + M |
| **CP-07** | Cancelar la confirmación de eliminación. | T1 continúa en la lista con idénticos datos y estado. | RF-04, RF-08 / CA-06 | P0 | C + M |
| **CP-08** | Confirmar eliminación de T1 entre varias tareas. | Desaparece solo T1; T2 y T3 permanecen intactas. | RF-04 / CA-07, CA-12 | P0 | U + C + M |
| **CP-09** | Marcar T2 completada y luego volverla pendiente. | El estado cambia en ambas direcciones; indicador accesible/textual y contador se actualizan. | RF-06 / CA-08 | P1 | U + C + M |
| **CP-10** | Activar «Todas», «Pendientes» y «Completadas». | Cada filtro muestra el subconjunto correcto; no altera datos; «Todas» muestra la colección completa. | RF-07 / CA-09 | P1 | U + C + M |
| **CP-11** | Abrir formulario de creación/edición, regresar y navegar de nuevo. | Stack responde correctamente; no se pierden tareas por desmontaje de rutas; retorno controlado. | RF-10 / CA-10 | P0 | C + M |
| **CP-12** | Abrir teclado en formulario y recorrer título, descripción y botones. | Los campos y acciones siguen accesibles; se puede desplazar el contenido sin que el teclado tape «Guardar». | RF-02, RF-03 / CA-11 | P1 | M |
| **CP-13** | Crear T1, T2 y T3; editar/completar/eliminar una de ellas. | Las restantes conservan sus títulos, descripciones, identificadores y estados. | RF-03, RF-04, RF-06 / CA-12 | P0 | U + C |
| **CP-14** | Aplicar filtro sin coincidencias (sin borrar la colección). | Se muestra mensaje específico del filtro y posibilidad clara de volver a «Todas». | RF-07, RF-09 / CA-13 | P1 | C + M |
| **CP-15** | Intentar editar un identificador de tarea inexistente. | Aparece «No encontramos esta tarea» y acción para volver; no hay pantalla en blanco ni mutaciones. | RF-03, RF-09, RF-10 / CA-10, CA-13 | P1 | C + M |
| **CP-16** | Corregir un campo marcado como inválido y volver a guardar. | El error se elimina al validar correctamente; la tarea se guarda una sola vez y sin valores íntegramente vacíos. | RF-02, RF-05 / CA-02, CA-03 | P1 | U + C |

**Regla de interpretación:** RF-05 incluye máximos **100/500**, contadores, bloqueo de entrada excedida, recorte de espacios exteriores al guardar y validación de negocio. CP-05 prueba la confirmación de descarte con cambios (P-UX-05 aprobada); sin cambios se regresa sin diálogo.

### 4.1. Casos UX — definiciones aprobadas; ejecución parcial documentada

| ID | Decisión cubierta | Comprobación y resultado esperado | Estado de ejecución |
|---|---|---|---|
| **CP-UX-01** | P-UX-04 — campos, límites y contadores. | En la UI no se permite sobrepasar **100/500** caracteres; los contadores reflejan la longitud. La lógica rechaza entradas fuera de rango incluso si se elude el formulario; al guardar, se recortan espacios exteriores y no se aceptan valores vacíos tras el recorte. | **PASS parcial**: contadores 100/500 observados en AVD (CHK-017); rechazo lógico cubierto por `validate-task.test.ts`, no re-ejecutado en esta sesión. |
| **CP-UX-02** | P-UX-05 — cambios sin guardar. | Con borrador modificado, Cancelar, flecha Atrás y retorno Android solicitan confirmación; «Seguir editando» preserva los cambios, «Descartar cambios» no muta la tarea. Sin cambios, no hay alerta. | **PASS parcial**: Atrás observado en AVD (CHK-017): el primer Atrás cierra el teclado, el segundo muestra el diálogo y «Descartar cambios» restaura la tarea. Cancelar: diálogo «Descartar cambios» observado con borrador en AVD (CHK-019; captura `cp-ux02-cancelar.png` en %TEMP%); resultado de «Seguir editando» y «Descartar cambios» desde Cancelar no registrado. Comprobación «sin cambios no hay alerta» no registrada. |
| **CP-UX-03** | P-UX-03 - acciones visibles. | «Editar» y «Eliminar» siempre son accesibles y reconocibles en tarjetas sin gestos ocultos, incluso con texto y fuente ampliados. | **PASS parcial**: visibles como texto en la tarjeta con fuente 100 % (CHK-016) y con `font_scale` 1.3 (CHK-019; captura `cpux03-tarjeta-130.png` en %TEMP%). Fuente de sistema máxima y accesibilidad no probadas. |
| **CP-UX-04** | P-UX-02 — filtro inicial. | «Todas» está seleccionado al ingresar por primera vez y contiene todas las tareas de la sesión. | **PASS**: observado en AVD tras relanzo de Expo Go (CHK-017): «Todas» seleccionada; datos en memoria desaparecen por diseño. |
| **CP-UX-05** | P-UX-06 — confirmaciones. | Agregar, editar y eliminar muestran un aviso textual breve y no bloqueante, utilizando componentes existentes y sin nueva dependencia; verificar accesibilidad. | **PASS parcial**: toast «Cambios guardados» (editar) y «Tarea eliminada» (eliminar) observados en AVD (CHK-016); toast «Tarea agregada» (agregar) observado en AVD (CHK-019; captura `cp-ux05-toast-agregar.png` en %TEMP%). Capturas `CP-UX-05-toast-editar.png`, `CP-UX-05-toast-eliminar.png`, `CP-UX-05-dialogo-eliminar.png` en el repo. Accesibilidad no verificada (TalkBack pendiente). |

**Copias adicionales (CHK-027):** 8 PNG citados en los documentos y ausentes del repositorio, copiados desde `%TEMP%` del equipo sin renombrar ni modificar el original: `cp-ux01-limite-descripcion.png`, `cp-ux01-limite-titulo.png`, `cp-ux02-editar-atras1.png`, `cp-ux02-editar-atras2.png`, `cp-ux02-editar-atras2-limite.png`, `cp-ux03-fuente-200-formulario.png`, `cp-ux03-fuente-200-lista.png`, `cp-ux04-relanzo.png`. Estado: sin revisión humana; procedencia por archivo `NO VERIFICADO`.

La paleta P-UX-01 se verifica en `CP-MOV-01`, `CP-MOV-02` y `CP-MOV-05`. **Aprobación de la definición no significa aprobación de la prueba.**

## 5. Pruebas estáticas, componentes y compatibilidad

| ID | Control | Criterio de aceptación | Evidencia futura | Prioridad |
|---|---|---|---|---|
| **CP-TEC-01** | TypeScript estricto. | Verificación de tipos sin errores, sin desactivar la opción estricta para aprobar. | Comando, salida, fecha y commit. | P0 |
| **CP-TEC-02** | ESLint. | Sin errores; advertencias evaluadas y registradas, sin ignorarlas masivamente. | Salida real del linter. | P1 |
| **CP-TEC-03** | Prettier. | Los archivos previstos cumplen el formato acordado. | Salida real de comprobación. | P1 |
| **CP-TEC-04** | Pruebas Jest / `jest-expo`. | Casos unitarios críticos aprobados, con nombres asociados a CP y RF. | Informe de prueba y conteos reales. | P0 |
| **CP-TEC-05** | React Native Testing Library. | Componentes y formularios responden según CP-01 a CP-16 aplicables. | Reporte y resultados reales. | P0 |
| **CP-TEC-06** | Compatibilidad Expo y dependencias. | Combinación aprobada del SDK, arranque real, configuración coherente y revisión con herramientas Expo cuando correspondan. | Versiones, informe de diagnóstico y dispositivo. | P0 |
| **CP-TEC-07** | Arquitectura. | Componentes de pantalla, lógica, estado y tipos mantienen responsabilidades claras; no hay listas independientes contradictorias entre rutas. | Revisión técnica de estructura y ejemplos reales. | P1 |
| **CP-TEC-08** | Gestor de dependencias. | Archivo de bloqueo de npm presente; instalación reproducible desde el repositorio. | Comando de instalación limpia y resultado. | P1 |

**Herramientas elegidas:** TypeScript, ESLint 9.39.5, Prettier 3.9.10, Jest, `jest-expo`, React Native Testing Library y utilidades oficiales de Expo. Comandos verificados en `package.json`: `npm run typecheck`, `npm test`, `npm run lint`, `npm run format:check`.

**Prohibido usar como único argumento de aprobación:** «compila», «no muestra errores en consola», «el agente lo ejecutó» sin salida comprobable o «la prueba pasa en Jest» sin una comprobación de la experiencia en Android.

## 6. Pruebas manuales de UX, accesibilidad y Android

| ID | Escenario | Qué debe observarse | Criterio relacionado | Prioridad |
|---|---|---|---|---|
| **CP-MOV-01** | Pantalla principal en Android. | Encabezado, filtros, tarjeta, acciones y creación legibles; margen, ritmo y proporción consistentes. | RNF-04, RUB-03, RUB-05 | P1 |
| **CP-MOV-02** | Tamaño de fuente de Android aumentado. | Títulos, botones y errores permanecen comprensibles; el contenido esencial no se corta. | RNF-05, RUB-03, RUB-05 | P1 |
| **CP-MOV-03** | Tareas y descripciones largas, incluido texto multilínea. | Tarjetas y formulario soportan textos largos sin superposición; botones siguen utilizables. | RF-01, RNF-04, RUB-05 | P1 |
| **CP-MOV-04** | Tocar «Editar», «Eliminar», filtros y estado. | Zonas táctiles objetivo de al menos 48 × 48 dp, separadas y sin activación accidental. | RNF-05, RUB-04, RUB-05 | P1 |
| **CP-MOV-05** | Contraste y comunicación no basada solo en color. | Texto habitual apunta a 4,5:1 y grande a 3:1; completitud y errores se reconocen también por texto/símbolo. | RNF-04, RNF-05, RUB-03 | P1 |
| **CP-MOV-06** | TalkBack, si está disponible. | Etiquetas, estado de tarea, campo inválido, acciones y foco/lectura coherentes en crear, editar y eliminar. | RNF-05, RUB-05 | P1 |
| **CP-MOV-07** | Retorno físico/gestual de Android. | Navegación coherente; borradores no se guardan accidentalmente; **alerta al descartar cambios modificados (P-UX-05 aprobada)**. | RF-10, CA-05, CA-10 | P1 |
| **CP-MOV-08** | Formulario con teclado abierto. | Se puede acceder al final del formulario y completar las acciones principales. | CA-11, RUB-05 | P0 |
| **CP-MOV-09** | Recorrido sin instrucciones externas. | Persona revisora puede crear, editar, completar, filtrar y eliminar sin consultar el código; registrar obstáculos observados. | RUB-05 | P2 |

Las comprobaciones de contraste basadas en tokens **no sustituyen** la inspección visual de los componentes reales. WCAG se utiliza como referencia de legibilidad, sin declarar una certificación formal de conformidad para la aplicación nativa.

Si se dispone de un único teléfono Android, ejecutar ahí y **declarar esa limitación**. No afirmar compatibilidad con diferentes fabricantes, tamaños o lectores de pantalla si no se ensayaron.

## 7. Trazabilidad con la rúbrica de 100 puntos

| ID | Indicador / máximo | Pruebas y comprobaciones de soporte | Evidencia académica necesaria |
|---|---|---|---|
| **RUB-01** | Conceptos y arquitectura del framework — **14** | CP-TEC-06, CP-TEC-07; revisión de explicaciones. | Explicar React Native, Expo, navegación y componentes con referencias a implementación real. |
| **RUB-02** | Patrones de diseño — **18** | CP-TEC-07 y revisión del flujo de datos en CP-02, CP-04, CP-13. | Explicar composición, separación de responsabilidades, flujo unidireccional y estado compartido; mostrar ejemplos implementados. |
| **RUB-03** | Jerarquía, balance, contraste, ritmo y proporción — **12** | CP-MOV-01, 02, 03 y 05. | Capturas reales y análisis de las cinco propiedades visuales. |
| **RUB-04** | Componentes de interfaz — **28** | CP-01 a CP-16, CP-TEC-05 y CP-MOV-04, 08. | Demostración de botones, formularios, listas, filtros y navegación nativa; resultados de prueba. |
| **RUB-05** | Usabilidad y necesidades de usuarios — **28** | CP-03, 05–12, 14–16 y CP-MOV-01 a 09. | Recorridos claros, confirmaciones, mensajes, accesibilidad básica y registro de observaciones. |
| | **Total — 100** | **14 + 18 + 12 + 28 + 28** | No implica obtención automática de puntaje ni certificación. |

**Criterio de adaptación del enunciado original:** aunque la evaluación publicada describe componentes Ionic, el docente habilitó la elección del stack. La evidencia se orientará a **capacidades equivalentes en React Native** (por ejemplo `View`, `Text`, `FlatList`, `TextInput`, `Pressable` y Stack), no a declarar que existen etiquetas `ion-*`.

**Importante:** los indicadores RUB-01 y RUB-02 **no se aprueban solo con pruebas automatizadas**. Requieren explicación académica y ejemplos concretos del código efectivamente entregado. El informe y la coevaluación no se reemplazan por un reporte de Jest.

## 8. Evidencias, registro de ejecución e incidencias

### 8.1. Política B híbrida: captura auténtica y validación humana

Se aprueba **B — estrategia híbrida**: si el harness externo realmente controla un dispositivo/emulador Android y puede capturar y guardar la pantalla, el agente recoge la evidencia; si esa capacidad no está disponible, **el equipo ejecuta el recorrido en Android y captura manualmente**. La revisión visual de las capturas corresponde siempre al equipo. **No se exige incorporar un framework E2E nuevo.**

- Una captura válida procede de **la aplicación ejecutada** en Android físico o emulador. El modo de obtención (agente/humano) debe estar registrado; no basta con imágenes mockup, storyboards, capturas conceptuales, snapshots de Jest o afirmaciones del agente.
- Guardar los originales sin manipulación. Los derivados para el informe (recortes/anotaciones) se identificarán y conservarán separados del original; no borrar problemas visuales ni usar imágenes generadas con IA como evidencia.
- Utilizar tareas ficticias; excluir datos personales, credenciales, notificaciones privadas u otra información sensible de la captura.
- No intentar demostrar una operación completa solo con una imagen estática cuando se requiera comprobar cambios de estado: usar capturas antes/después o registrar un recorrido reproducible. Para teclado, accesibilidad, TalkBack, controles táctiles y retorno Android, adjuntar la observación manual correspondiente.
- La evidencia visual **no reemplaza** los resultados de pruebas unitarias ni los criterios funcionales. Una prueba automatizada aprobada tampoco sustituye la inspección en Android.

### 8.2. Organización, matriz EV y trazabilidad

Directorio **previsto** desde la raíz del repositorio: `docs/evidencias/capturas/`. Desde este archivo, las futuras capturas se referenciarán como `./evidencias/capturas/...`. No convertir los nombres siguientes en enlaces Markdown hasta que los archivos existan y se hayan verificado. Los logs de pruebas podrán residir en `docs/evidencias/`, con nombres rastreables.

| Evidencia planificada | Escenario | Casos principales | Requisitos y rúbrica | Archivos futuros (nombre ilustrativo) |
|---|---|---|---|---|
| **EV-01** | Lista vacía | CP-01, CP-MOV-01 | RF-01, RF-09; RUB-03/05 | `EV-01-estado-vacio.png` |
| **EV-02** | Formulario de creación | CP-02, CP-MOV-08 | RF-02; RUB-04/05 | `EV-02-formulario-crear.png` |
| **EV-03** | Tarea creada visible | CP-02, CP-13 | RF-01/02; RUB-04/05 | `EV-03-tarea-creada.png` |
| **EV-04** | Errores de campos obligatorios y límites | CP-03, CP-16, CP-UX-01 | RF-05; RUB-04/05 | `EV-04-validacion.png` |
| **EV-05** | Edición y resultado | CP-04, CP-05 | RF-03, RF-10; RUB-04/05 | `EV-05-antes-edicion.png`, `EV-05-despues-edicion.png` |
| **EV-06** | Diálogo de confirmación de eliminación | CP-06, CP-07 | RF-04/08; RUB-04/05 | `EV-06-confirmacion-eliminar.png` (archivo no existe) |
| **EV-07** | Eliminación selectiva completada | CP-08, CP-13 | RF-04; RUB-04/05 | `EV-07-antes-eliminar.png`, `EV-07-despues-eliminar.png` (archivos no existen) |
| **EV-08** | Tarea completada y reabierta | CP-09 | RF-06; RUB-04/05 | `EV-08-tarea-pendiente.png`, `EV-08-tarea-completada.png` |
| **EV-09** | Filtros por estado | CP-10, CP-14 | RF-07/09; RUB-04/05 | `EV-09-pendientes-vacio.png`, `EV-09-completadas.png`, `EV-09-completadas-vacio.png` |
| **EV-10** | Teclado visible y formulario utilizable | CP-12, CP-MOV-08 | RF-02/03; RUB-05 | Sin archivo en `docs/evidencias/capturas/`; intento en emulador sin teclas visibles (CHK-016, CHK-017) |
| **EV-12** | Tarea de prueba visible con texto simple. | CP-02 | RF-02; RUB-04/05 | `EV-12-tarea-prueba.png` |
| **EV-13** | Estado de lista al iniciar la revisión. | CP-MOV-01 | RF-01, RF-09; RUB-03/05 | `EV-13-estado-inicial.png` |
| **EV-14** | Estado de lista vacía en Android. | CP-01, CP-MOV-01 | RF-01, RF-09; RUB-03/05 | `EV-14-estado-vacio.png` |
| **EV-11** | Descarte de borrador (CP-UX-02) | CP-UX-02 | RF-03; RUB-05 | `EV-11-descartar-borrador.png`, `EV-11-resultado-descartar.png` |

La matriz enumera evidencia prevista. Existen archivos EV-01 a EV-05, EV-08, EV-09, EV-11 a EV-14; EV-06, EV-07 y EV-10 no existen en `docs/evidencias/capturas/`. Procedencia no reconciliada (`NO VERIFICADO` por archivo). Revisión visual de EV-12/13/14 confirmada por el usuario (CHK-022). Ninguna captura aislada demuestra por sí sola un cambio de estado completo.

**Copias sin EV asignado (CHK-021; revisión CHK-022):** 46 PNG copiados desde `%TEMP%` del equipo a esta carpeta, sin renombrar ni asignar EV/CP. Estado: `ACEPTADA` (revisión visual; revisores Lukas Covarrubias y Sebastian Morales, 2026-11-01; CHK-022). Origen por archivo: `NO VERIFICADO`. **Decisión:** no copiar las cuatro versiones de `%TEMP%` que difieren del original del repositorio (`CP-MOV-08-teclado-formulario.png`, `CP-MOV-08-teclado-virtual.png`, `CP-UX-05-toast-editar.png`, `CP-UX-05-toast-eliminar.png`); los originales del repositorio no cambian. **Nomenclatura:** no renombrar ninguna copia hasta que se asigne a un CP/EV.

### 8.3. Registro de procedencia y revisión humana

Para cada ejecución y conjunto de evidencias se debe registrar:

| Campo | Registro requerido |
|---|---|
| Identificador | Caso `CP-##` / `CP-MOV-##`, evidencia `EV-##` y RF/RUB relacionados. |
| Estado del caso | `NO EJECUTADO`, `APROBADO`, `FALLIDO`, `BLOQUEADO`, `NO APLICA` justificado. |
| Estado visual independiente | `NO OBTENIDA`, `OBTENIDA PENDIENTE DE REVISIÓN`, `ACEPTADA` o `RECHAZADA`. |
| Origen | Capturada por agente o integrante del equipo; método real, nunca supuesto. |
| Dispositivo y versión | Android físico/emulador, modelo/AVD, Android, Expo Go o development build y versiones verificadas. |
| Versión evaluada | Rama/commit Git reales o `NO VERIFICADO`, si todavía no se dispone de Git. |
| Fecha y ejecutor | Fecha de la ejecución y quién realizó el recorrido/captura. |
| Preparación y pasos | Datos ficticios, condición inicial y acciones reproducibles. |
| Esperado y observado | Resultado esperado, comportamiento real y limitaciones detectadas. |
| Archivo original | Ruta **relativa** que existe y está verificada; no inventar enlaces anticipadamente. |
| Revisor humano | Quién revisó, fecha, resultado y observaciones; pendiente si aún no ha revisado. |
| Incidencia | Identificador y estado si el resultado es incorrecto. |

**Criterio de aprobación:** una evidencia obtenida por el agente sigue `OBTENIDA PENDIENTE DE REVISIÓN` hasta que un integrante del equipo la examine. Un caso que necesita comprobación real en Android no se declara `APROBADO` si faltan recorrido, evidencia pertinente o revisión humana. Si no hay acceso a Android, registrar `NO EJECUTADO` o `BLOQUEADO`, sin sustituirlo por simulaciones.

Los resultados se consolidarán en la [bitácora](./05-BITACORA.md), manteniendo el índice EV ↔ CP ↔ RF/RUB y el estado de revisión. Un registro de prueba puede mantenerse en otro archivo real del repositorio cuando se apruebe esa necesidad, pero no se crearán nuevos documentos de control de manera automática.

### 8.4. Gestión de fallos y nuevas ejecuciones

1. Al detectar un defecto, registrar un identificador (`INC-001`, `INC-002`, etc.), reproducción y resultado observado.
2. Indicar qué requisitos o pruebas afecta y si bloquea un gate.
3. Presentar la corrección propuesta antes de modificar decisiones aprobadas; no ajustar silenciosamente el resultado esperado para que coincida con un comportamiento defectuoso.
4. Tras corregir, **repetir el caso fallido** y los casos relacionados (regresión).
5. Registrar el nuevo resultado y su evidencia; no borrar el historial anterior ni afirmar que nunca hubo fallo.

## 9. Portabilidad del repositorio — CP-DOC-01

**CP-DOC-01 (P1, D + S):** comprobar que un tercero pueda recuperar y evaluar el proyecto desde Git sin depender del computador del equipo.

**Procedimiento previsto:**

1. Clonar el repositorio en una ubicación nueva (no reutilizar instalaciones ni variables de una carpeta de trabajo anterior).
2. Confirmar presencia de `README.md`, `AGENTS.md`, `docs/`, configuración, código y archivo de bloqueo de dependencias cuando existan.
3. Leer las instrucciones desde el README y ejecutar la instalación limpia documentada; anotar errores y versiones utilizadas.
4. Ejecutar comprobaciones y arranque del proyecto siguiendo instrucciones **basadas en rutas relativas**.
5. Comprobar que los enlaces Markdown a archivos del proyecto se resuelvan desde el documento donde están escritos. URLs HTTPS públicas no son rutas locales y pueden mantenerse absolutas.
6. Detectar enlaces locales inexistentes, referencias a rutas de equipos personales y archivos con secretos.
7. Verificar que Git no incluya `node_modules`, archivos temporales o evidencias inventadas; confirmar que cada captura aceptada exista en su ruta relativa, corresponda al commit probado y tenga registro de procedencia y revisión humana.
8. Registrar resultado y dificultades de reproducción sin esconder pasos manuales indispensables.

**Aprobación:** instalación/ejecución reproducibles, referencias internas correctas, ausencia de secretos y sin dependencia accidental de una máquina concreta. **No sustituir la prueba real por una inspección estática de archivos.**

## 10. Gates de implementación y entrega

| Gate | Cuándo se evalúa | Condiciones mínimas | Estado actual |
|---|---|---|---|
| **G0 — Planificación aprobada** | Antes de generar código. | Siete documentos consolidados en el repositorio; decisiones P-01/P-UX aprobadas; autorización humana expresa. | **APROBADO**: documentos verificados y usuario autorizó el inicio. |
| **G1 — Proyecto reproducible** | Tras crear el proyecto base. | CP-TEC-01, 02, 03, 06, 08 y configuración Git; arranque verificado. | **VALIDACIÓN PARCIAL**: TypeScript, tests (4 suites / 12 PASS) y ESLint PASS (CHK-027); Expo compatibility y Android export PASS (CHK-013/CHK-014); **Prettier FAIL** en CHK-027 (3 archivos de `src/`: `src/app/index.tsx`, `src/features/tasks/components/TaskForm.tsx`, `TaskForm.test.tsx`). CHK-014 registró Prettier PASS y el README registra FAIL en 22 archivos: contradicción sin resolver. Faltan ejecución Android completa y TalkBack. |
| **G2 — Funciones esenciales** | Tras implementar CRUD y navegación. | CP-01 a 08, CP-11, 12, 13; sin fallos P0. | **VALIDACIÓN PARCIAL**: CP-01 (CHK-011) y CP-02 a 08 (CHK-010) observados sin fallo; CP-11, CP-13 y CP-03/CP-16 PASS observados (CHK-016); CP-12 NO VERIFICABLE en emulador (CHK-016). |
| **G3 — Alcance B y UX** | Tras filtros, estados y correcciones. | CP-09, 10, 14–16; CP-MOV aplicables; detalles UX aprobados; pruebas automatizadas. | **VALIDACIÓN PARCIAL**: CP-09, CP-10 y CP-14 observados sin fallo (CHK-010, CHK-016); CP-16 PASS observado (CHK-016); CP-09 suite de reducer PASS (Jest, CHK-027), cobertura de componente no verificada; CP-15 observado en AVD con identificador inexistente (CHK-019), sin test unitario versionado (`EditTaskRoute.test.tsx` eliminado en CHK-023); CP-UX-01, CP-UX-02, CP-UX-03 y CP-UX-05 PASS parcial; CP-UX-04 PASS (CHK-017); CP-MOV-06 (TalkBack) y CP-MOV-09 (recorrido) validados por el revisor (CHK-026; procedencia: observación del revisor, no reproducida por OMP); CP-MOV-02 observado con fuente 130 % (revisión humana pendiente). |
| **G4 — Evaluación y entrega** | Antes de presentar. | CP-DOC-01 aprobado; rúbrica completa; evidencias EV auténticas **revisadas por el equipo**, trazabilidad EV ↔ CP/RF/RUB; informe académico, repositorio, ZIP y coevaluación preparados según instrucciones vigentes. | **NO EJECUTADO**. |

**Regla de cierre:** ningún gate se declara **APROBADO** sin haber realizado sus comprobaciones. Un control crítico en estado FALLIDO o BLOQUEADO impide afirmar que la etapa está cerrada; un control NO EJECUTADO no cuenta como aprobado.

El enunciado escrito exige una carpeta comprimida en ZIP, capturas y un informe Word/PDF con Arial 12, interlineado 1,15, texto justificado y páginas numeradas, además de la coevaluación. La instrucción de entregar el repositorio Git fue comunicada por el equipo; **hasta confirmar si sustituye al ZIP, planificar ambos**. Los Markdown técnicos no reemplazan automáticamente el informe académico final.

## 11. Responsabilidades de los agentes y revisiones humanas

**Agente de desarrollo:** propone casos automatizables, implementa solo tras G0 aprobado, ejecuta controles disponibles, presenta resultados reales y preserva la integridad del código y las decisiones.

**Agente de verificación (o revisión separada):** revisa trazabilidad, resultados, defectos, enlaces, consistencia documental y estado de gates; no presume que una herramienta se ejecutó por estar configurada.

**Integrantes del equipo:** aprueban decisiones, ejecutan recorridos y capturan Android cuando el harness no pueda hacerlo, comprenden y explican patrones y componentes, **revisan y aceptan o rechazan las capturas originales**, y completan la coevaluación.

**Restricciones:** un agente no puede aprobar su propio trabajo solo mediante afirmaciones; no realizar `push`, alterar historial Git destructivamente, crear artefactos falsos o introducir nuevas tecnologías sin autorización. Si una comprobación requiere acciones fuera de su alcance (por ejemplo usar TalkBack en un dispositivo físico), registrará **BLOQUEADO** o **NO EJECUTADO**, nunca APROBADO.

## 12. Condiciones de aprobación documental y pendientes

### 12.1. Checklist de este documento

- [x] Cubre RF-01 a RF-10 y CA-01 a CA-13 con casos rastreables.
- [x] Distingue automatización, Android real, revisión estática y evidencia documental.
- [x] Relaciona las cinco categorías RUB-01 a RUB-05 con **100 puntos** en total.
- [x] Incorpora CP-DOC-01 para enlaces relativos, portabilidad y ejecución desde Git.
- [x] Define estados honestos, incidencias, regresión, gates y responsabilidades.
- [x] No confunde nombres previstos de evidencias con archivos ya existentes.
- [x] Incluye estrategia visual B, matriz EV-01 a EV-14 (EV-06, EV-07 y EV-10 sin archivo), procedencia y revisión humana sobre Android real/emulado.
- [ ] Revisar y aprobar este documento por el equipo.
- [x] P-01 y P-UX-01 a P-UX-06 aprobadas y reflejadas en las pruebas.
- [ ] Verificar versiones compatibles y dispositivo Android antes de G1.

### 12.2. Pendientes de decisión o verificación

| ID | Asunto | Efecto | Estado |
|---|---|---|---|
| **PT-01** | Expo SDK 58, Node/npm y Expo Go seleccionados; clean install y compatibilidad Expo comprobados. | Afecta G1 y GA-4. | `npm ci` limpio PASS con React DOM alineado; el usuario reporta la app funcionando; validación Android parcial. |
| **PT-02** | P-UX-01 a P-UX-06 aprobadas, incluidas validación, mensajes y descarte. | Casos CP-UX definidos; ejecución Android pendiente. | **CERRADO — DISEÑO APROBADO** |
| **PT-03** | P-01 aprobada: Context + `useReducer` para tareas; `useState` local para formularios y filtros. | Verificar flujos entre rutas mediante CP-04, 11 y 13. | **CERRADO — ARQUITECTURA APROBADA** |
| **PT-04** | Confirmar modalidad final de repositorio Git / ZIP, profesor e instrucciones de entrega. | Afecta G4. | PENDIENTE VERIFICACIÓN |
| **PT-05** | Documentos importados, enlaces revisados y autorización expresa para implementación. | Condiciona G0. | **CERRADO — G0 APROBADO** |
| **PT-06** | Mantener acceso AVD; revisar capturas auténticas con metadatos y aprobación humana antes de G4. | Afecta GA-4, CP-MOV y G4. | EV-12/13/14 pendientes de revisión humana. CP-UX-01/02/04 observados en AVD (CHK-017). |

**Estado actual:** G0 `APROBADO`; G1 `VALIDACIÓN PARCIAL`. Clean `npm ci` PASS y `expo install --check` PASS tras fijar `react-dom@19.3.0` (CHK-013). Re-ejecutado en CHK-027: `npx jest` 4 suites / 12 PASS (TaskForm, selectors, reducer, validate); `npm run lint` PASS; `npm run typecheck` PASS; `npm run format:check` FAIL (3 archivos de `src/`). Android observado: CP-01 (CHK-011), CP-02 a CP-08 y CP-09 (CHK-010), CP-09, CP-10 y CP-14 (CHK-010, CHK-016), CP-03, CP-11, CP-13 y CP-16 (CHK-016), CP-15 con identificador inexistente («No encontramos esta tarea», CHK-019), CP-UX-01/02/04 (CHK-017), CP-UX-02 diálogo desde Cancelar (CHK-024) y CP-UX-05 toast al agregar (CHK-019); CP-UX-03 y CP-UX-05 PASS parcial. CP-12 NO VERIFICABLE en emulador. CP-MOV-06, CP-MOV-08 (teclado virtual) y CP-MOV-09 validados por el revisor (CHK-026; contradicción de CP-MOV-08 con CHK-010 registrada allí). CP-MOV-03 observado; CP-MOV-05 ratios calculados; CP-MOV-02 observado con fuente 130 % (captura en `docs/evidencias/capturas/`; revisión humana pendiente). G2–G4 no aprobados.

---

**Siguiente etapa:** CP-15 observado en AVD con identificador inexistente (CHK-019; captura `cp15-id-inexistente.png` en %TEMP%); sin test unitario versionado tras CHK-023. CP-09: suite de reducer PASS; cobertura de componente no verificada; observado en AVD según CHK-010. CP-MOV-02 con fuente 130 % muestra lista y formulario completos (`docs/evidencias/capturas/CP-MOV-02-fuente-130-formulario.png`). Pendiente: CP-UX-02 caso «sin cambios» sin alerta; CP-12 teclado físico (NO VERIFICABLE en emulador); revisión humana de EV-12/13/14; resolución de `format:check` (3 archivos de `src/`).
