# 05 — Bitácora, checkpoints y handoffs

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Versión documental:** 1.0 — cierre P-01/P-UX y checkpoint CHK-004 de consolidación  
> **Fecha:** 2026-11-01  
> **Tipo de registro:** planificación documental hasta CHK-004; registros de ejecución Android y Jest desde CHK-010 (ver §5). No sustituye la revisión humana de las evidencias.
> **Entorno de ejecución:** OMP en Windows con AVD `emulator-5554` (Android 16 / API 36) y Expo Go (CHK-010 a CHK-019). Harness externo con agente denominado «GPT-6 Luna»: **NO VERIFICADO**.

## 1. Propósito y fuentes

Este archivo conserva **hechos comprobados, decisiones acordadas, pendientes, resultados reales y puntos de continuación**. No reemplaza la documentación especializada ni constituye evidencia de que una prueba haya sido ejecutada.

Fuentes relativas desde esta carpeta:

- [Requisitos y rúbrica](./01-REQUISITOS-RUBRICA.md).
- [Decisiones y arquitectura](./02-DECISIONES-ARQUITECTURA.md).
- [Diseño UX/UI](./03-DISENO-UX-UI.md).
- [Plan de pruebas](./04-PLAN-PRUEBAS.md).
- [Normas obligatorias para agentes](../AGENTS.md).

El [README](../README.md) describe el proyecto Expo real; su estado de validación se registra en §2 y §5.

## 2. Estado general en el checkpoint inicial

| Área | Estado real conocido | Aclaración |
|---|---|---|
| Planificación de siete decisiones | **APROBADA** | Stack, arquitectura, alcance, navegación, identidad visual, pruebas y gobernanza documental. |
| Cinco políticas operativas B | **APROBADAS** | Autonomía, Git, recuperación, gates y checkpoints. |
| Context7, SOLID y anti-drift | **OBLIGATORIOS** | La disponibilidad de Context7 en el harness externo sigue sin comprobarse. |
| Límites de título y descripción | **APROBADOS** | Máximos de 100 y 500 caracteres, respectivamente. |
| Evidencias visuales B híbridas | **APROBADAS**; obtención parcial | Capturas Android reales por agente si dispone de acceso; si no, captura manual; revisión humana obligatoria. EV-12/13/14 y capturas CP-UX obtenidas desde el AVD (CHK-010 a CHK-017); revisión humana pendiente. |
| Documentos `01` a `04` | **CONSOLIDADOS** | Decisiones cerradas; G0 requiere revisión y autorización dentro del repositorio real. |
| `AGENTS.md` | **CONSOLIDADO PARA HARNESS EXTERNO** | Aún debe incorporarse y verificarse en el repositorio real. |
| Este archivo `05-BITACORA.md` | **CONSOLIDADO** | Último checkpoint vigente: `CHK-021`; anteriores históricos. |
| `README.md` | **CONSOLIDADO** | Instalación validada en CHK-013 (`npm ci`); ejecución Android parcial (CHK-010 a CHK-019). |
| Proyecto Expo y código móvil | **CREADO** (estado del checkpoint inicial, superado) | Implementación autorizada; registros en CHK-005 a CHK-017. |
| Pruebas automáticas y Android | **PARCIAL** (estado del checkpoint inicial: NO EJECUTADAS, superado) | Jest 4 suites / 12 PASS (CHK-013); suite completa `npx jest` 5 suites / 14 PASS (CHK-018); Android parcial (CHK-010 a CHK-019); CP-15 y CP-09 con Jest 2 suites / 7 PASS (CHK-018); CP-15 observado en AVD con identificador inexistente (CHK-019). |
| Git, rama, commit y remoto del trabajo | **VERIFICADO PARCIALMENTE** | Rama `chore/mobile-bootstrap`; 4 commits locales (último `a461246`); sin remoto (`git remote -v` vacío); cambios sin commit en `AGENTS.md`, `README.md`, `docs/` (01, 04, 05), `src/` y `EditTaskRoute.test.tsx` sin seguimiento (verificado 2026-11-01). |
| Configuración del harness externo | **NO VERIFICADA** | No asumir terminal, acceso a repositorio, Context7 ni Android. |
| Gate académico G0 | **APROBADO** (estado vigente en 04 §10) | Estado del checkpoint inicial: PENDIENTE; superado tras revisión documental y autorización humana. |

## 3. Decisiones congeladas

| Código | Resolución | Fuente |
|---|---|---|
| D-01 | React Native + Expo + TypeScript estricto; Expo Router, StyleSheet, ESLint, Prettier y pruebas acordadas. | [Arquitectura](./02-DECISIONES-ARQUITECTURA.md) |
| D-02 | Arquitectura modular por funcionalidades. | [Arquitectura](./02-DECISIONES-ARQUITECTURA.md) |
| D-03 | Alcance B: CRUD, completar/reabrir, filtros, validación, confirmación y estados UX. | [Requisitos](./01-REQUISITOS-RUBRICA.md) |
| D-04 | Navegación Stack, pantalla de lista y formulario reutilizable para crear/editar. | [Diseño](./03-DISENO-UX-UI.md) |
| D-05 | Identidad minimalista profesional: tema claro y acento azul. | [Diseño](./03-DISENO-UX-UI.md) |
| D-06 | Calidad B: revisión estática, pruebas automatizadas y manuales Android. | [Pruebas](./04-PLAN-PRUEBAS.md) |
| D-07 | Documentación B: siete Markdown, trazabilidad y portabilidad Git. | [Reglas de agentes](../AGENTS.md) |
| GOV-01 | Autonomía B: tareas autorizadas; decisiones estructurales requieren aprobación. | [AGENTS](../AGENTS.md) |
| GOV-02 | Git B: ramas y commits locales controlados; integrar/publicar con aprobación. | [AGENTS](../AGENTS.md) |
| GOV-03 | Recuperación B: hasta dos intentos por problema; detenerse ante cambios no autorizados y riesgos críticos. | [AGENTS](../AGENTS.md) |
| GOV-04 | Gates B: validación progresiva según impacto; no dar por aprobada una tarea sin evidencia. | [AGENTS](../AGENTS.md) |
| GOV-05 | Checkpoints B: registrar hitos, bloqueos, cambios aprobados y handoffs. | [AGENTS](../AGENTS.md) |
| GOV-06 | Context7, SOLID pragmático y anti-drift obligatorios. | [AGENTS](../AGENTS.md) |
| EV-B | Evidencia visual híbrida: capturas auténticas de Android (harness o equipo), originales preservados, trazabilidad EV ↔ CP/RF/RUB y revisión humana previa a aprobación. | [Plan de pruebas](./04-PLAN-PRUEBAS.md), [AGENTS](../AGENTS.md) |
| UX-01 | Máximos 100 caracteres para título y 500 para descripción. | [Diseño](./03-DISENO-UX-UI.md) |
| ENV-01 | El desarrollo posterior ocurrirá en una **aplicación externa de harness** con agente identificado por el equipo como «GPT-6 Luna». | Indicación del equipo del 2026-11-01 |

El profesor permitió la elección del stack. Se seleccionó React Native por una justificación técnica y profesional completa en el [documento 01](./01-REQUISITOS-RUBRICA.md), sin presentar Ionic como obsoleto.

## 4. Decisiones cerradas y comprobaciones operativas pendientes

**Cierre aprobado (2026-11-01):**

| ID | Decisión cerrada | Fuente |
|---|---|---|
| P-01 | **Context + `useReducer`** para colección única de tareas; `useState` local para formulario y filtros; contadores derivados. | [Arquitectura](./02-DECISIONES-ARQUITECTURA.md) |
| P-UX-01 | Tokens minimalistas: fondo `#F8FAFC`, superficie `#FFFFFF`, acento `#2563EB`, fuente del sistema y espaciados coherentes. | [Diseño](./03-DISENO-UX-UI.md) |
| P-UX-02 | Filtro «Todas» al iniciar. | [Diseño](./03-DISENO-UX-UI.md) |
| P-UX-03 | Controles «Editar»/«Eliminar» siempre visibles y accesibles. | [Diseño](./03-DISENO-UX-UI.md) |
| P-UX-04 | Título/descripcion obligatorios, máximo **100/500**, impedir exceso al ingresar, validar también en negocio, recortar espacios exteriores al guardar y mostrar contadores. | [Diseño](./03-DISENO-UX-UI.md) |
| P-UX-05 | Confirmar descarte solo con borrador modificado, también con retorno Android. | [Diseño](./03-DISENO-UX-UI.md) |
| P-UX-06 | Mensajes de éxito breves, accesibles y no bloqueantes mediante componentes existentes, sin biblioteca adicional. | [Diseño](./03-DISENO-UX-UI.md) |

**No quedan decisiones funcionales/UX abiertas** dentro del alcance actual. Las siguientes son verificaciones reales, no permisos para redefinir decisiones:

| ID | Verificación pendiente | Responsable | Bloquea |
|---|---|---|---|
| ENV-01 | Elegir versión estable y compatible de Expo/React Native/React/Expo Router/Node/npm y paquetes de pruebas mediante Context7; registrar versión real. | Agente + equipo | Implementación dependiente de SDK; G1 |
| ENV-02 | Identificar Android físico o emulador compatible y modalidad Expo Go/development build; verificar pruebas reales. | Equipo + agente | GA-4 / G3-G4 |
| ENV-03 | Comprobar herramientas y permisos del harness externo: repositorio, Git, terminal, Context7, Android y capturas. | Equipo + agente | Tareas dependientes de capacidades |
| DOC-01 | Importar los siete Markdown al repositorio Git real, verificar enlaces, integridad, estado de rama y revisar la entrega. | Equipo + agente | G0 |
| ENV-04 | Confirmar indicación definitiva del profesor sobre Git + ZIP, fecha y plataforma. | Equipo | G4 |
| EV-ENV | Revisar evidencias auténticas EV-01 a EV-14 (faltan EV-06, EV-07 y EV-10; ver plan §8.2); registrar procedencia y rutas relativas. | Equipo + agente | GA-4 / G4 |
| G0 | Obtener **aprobación humana expresa** para iniciar código, después de comprobar la documentación en el repositorio y el preflight. | Equipo | Inicio de implementación |

Estado inicial (CHK-004): evidencias visuales `NO OBTENIDA`. Estado posterior: ver §5 (CHK-010 a CHK-019).

## 5. Checkpoints

Los CHK-001 a CHK-003 se conservan como **registros históricos**; las referencias a decisiones pendientes en esos checkpoints reflejan su estado en el momento de emisión. El estado vigente es el del **CHK-019**; la sección 4 conserva las verificaciones de origen.

### CHK-001 — Cierre de gobernanza y preparación de harness externo

| Campo | Valor |
|---|---|
| Identificador | `CHK-001` |
| Fecha | `2026-11-01` (fecha documental; sin marca horaria de ejecución) |
| Responsable | Equipo de planificación; agente ejecutor futuro **no verificado** |
| Objetivo | Documentar las políticas aprobadas y preparar el traspaso al harness externo. |
| Estado | `VALIDACIÓN PARCIAL` (documentación preparada; aprobación y entorno pendientes) |
| Alcance real | Ajuste documental de `../AGENTS.md`, `./03-DISENO-UX-UI.md` y `./04-PLAN-PRUEBAS.md`; creación de `./05-BITACORA.md`. |
| Rama Git | `NO VERIFICADO` |
| Commit Git | `NO VERIFICADO` |
| Requisitos de referencia | RF-01 a RF-10; CA-01 a CA-13; GOV-01 a GOV-06. |
| Pruebas de aplicación | `NO EJECUTADAS` |
| Android / Expo | `NO VERIFICADO` |
| Context7 en el harness | `NO VERIFICADO` |
| Riesgos | Herramientas reales del harness desconocidas; G0 pendiente; diferencias entre contenido local y eventual repositorio de destino. |
| Siguiente acción | Revisar estos documentos, crear `README.md` y cerrar G0 antes de autorizar código; ejecutar preflight del harness cuando se entregue el repositorio. |

**Resultado documental verificado en este entorno:** se prepararon los archivos enumerados; su existencia en el **repositorio Git del equipo** no está verificada. No se adjuntan hashes, commits, logs de tests ni capturas que no existan.

### CHK-002 — Cierre de redacción de los siete Markdown

| Campo | Valor |
|---|---|
| Identificador | `CHK-002` |
| Fecha | `2026-11-01` (registro documental, sin ejecución móvil) |
| Objetivo | Preparar el `../README.md` y sincronizar referencias a su existencia. |
| Estado | `VALIDACIÓN PARCIAL`: **7/7 documentos redactados, sin aprobación formal del G0**. |
| Archivos | `../README.md`, `../AGENTS.md`, `./04-PLAN-PRUEBAS.md` y este `./05-BITACORA.md`. |
| Cambios | Guía para el evaluador y onboarding del harness; rutas relativas; instalación condicionada a un futuro proyecto Expo. |
| Rama / commit Git | `NO VERIFICADO` (documentos preparados fuera del repositorio efectivo del equipo). |
| Context7 | Consultado en este entorno de planificación para comandos Expo; **no se verificó la integración en el harness externo**. |
| Aplicación / Android / pruebas | `NO CREADA` / `NO VERIFICADO` / `NO EJECUTADAS`. |
| Pendientes | Ratificar detalles UX y P-01; comprobar entorno real, versiones compatibles y entrega; aprobar el G0. |
| Siguiente paso | Revisión cruzada de los siete documentos y preflight del harness externo antes de autorizar implementación. |

No se declara que el código o los comandos de instalación funcionen. Este checkpoint refleja únicamente trabajo documental.

### CHK-003 — Aprobación de evidencias visuales B y actualización documental

| Campo | Valor |
|---|---|
| Identificador | `CHK-003` |
| Fecha | `2026-11-01` (registro de decisión documental, sin ejecución móvil) |
| Decisión | **EV-B aprobada**: captura híbrida auténtica + revisión humana obligatoria. |
| Estado | `VALIDACIÓN PARCIAL`: política documentada; **ninguna evidencia obtenida o revisada**. |
| Archivos afectados | `../AGENTS.md`, `./04-PLAN-PRUEBAS.md` y `./05-BITACORA.md`. |
| Cambios | Reglas para el harness, matriz EV-01 a EV-10, ruta futura `./evidencias/capturas/`, registro de procedencia, revisión y estados visuales. |
| Git / commit del equipo | `NO VERIFICADO`; la documentación se está preparando fuera del repositorio final. |
| Pruebas de aplicación / Android | `NO EJECUTADAS` / `NO VERIFICADO`. |
| Context7 en el harness | `NO VERIFICADO`; la decisión visual no implica nueva dependencia. |
| Próxima acción | Validar el acceso a Android y capturas durante el preflight; cuando exista app, ejecutar casos, obtener capturas reales y solicitar revisión humana. |

**Índice EV inicial:** los identificadores **EV-01 a EV-10** están planificados en el [plan de pruebas](./04-PLAN-PRUEBAS.md), todos `NO OBTENIDA`. No existen archivos de imagen ni enlaces a capturas reales. Los archivos futuros se referenciarán desde esta carpeta con rutas como `./evidencias/capturas/EV-01-estado-vacio.png`, **solo después de existir**. No se permiten imágenes generadas, mockups o resultados Jest como sustitutos de ejecución Android.

### CHK-004 — Cierre técnico y consolidación documental definitiva

| Campo | Valor |
|---|---|
| Identificador | `CHK-004` |
| Fecha | `2026-11-01`, registro documental |
| Autorización | Equipo aprobó P-01 y P-UX-01 a P-UX-06, y solicitó consolidación de los siete Markdown y ZIP definitivo **sin código**. |
| Estado | `VALIDACIÓN PARCIAL`: decisiones cerradas y paquete documental consolidado; **G0 todavía pendiente** de revisión en repositorio efectivo y permiso expreso para programar. |
| Modificaciones | `../README.md`, `../AGENTS.md`, `./01-REQUISITOS-RUBRICA.md`, `./02-DECISIONES-ARQUITECTURA.md`, `./03-DISENO-UX-UI.md`, `./04-PLAN-PRUEBAS.md`, `./05-BITACORA.md`. |
| Decisión P-01 | Context + `useReducer` tareas y `useState` local formulario/filtros; sin biblioteca de estado adicional. |
| Decisiones UX | P-UX-01 a P-UX-06 aprobadas; límites 100/500, contadores, recorte exterior, descarte condicionado a cambios y avisos no bloqueantes. |
| Verificación documental | Revisión cruzada de referencias Markdown relativas, siete archivos, trazabilidad de decisiones y ausencia de enlaces internos rotos (resultado del paquete final). |
| Context7 | Se consultó documentación Expo durante esta planificación; **acceso desde el harness externo NO VERIFICADO**. |
| Git de equipo | `NO VERIFICADO`; no se conocen rama ni commit del destino. |
| Aplicación / Android / tests / EV | `NO CREADA` / `NO VERIFICADO` / `NO EJECUTADAS` / `NO OBTENIDAS`. |
| Siguiente acción | Importar paquete al repo Git, verificar herramientas y versiones con Context7, designar dispositivo Android, solicitar G0 y luego implementar si el equipo autoriza. |

### CHK-005 — Inicio del entorno local y preparación de Context7

| Campo | Valor |
|---|---|
| Identificador | `CHK-005` |
| Fecha | `2026-11-01`, registro de preparación |
| Objetivo | Preparar el repositorio local y verificar requisitos previos, sin instalar Expo ni Android. |
| Estado | `VALIDACIÓN PARCIAL`; G0 pendiente de Context7, versiones y entorno Android. |
| Autorización | El usuario indicó «empecemos» y eligió la carpeta actual, emulador Android y habilitar Context7. |
| Repositorio | Git local inicializado; rama `chore/mobile-bootstrap`; sin commits ni remoto configurado. |
| Archivos | `README.md` y `AGENTS.md` en la raíz; cinco documentos en `docs/`; `.omp/mcp.json` añadido para Context7 HTTP/OAuth. |
| Preflight | Node `24.19.0`, npm `11.17.0`, Java `21.0.12.1`; `adb` y `emulator` no encontrados; `ANDROID_HOME` y `ANDROID_SDK_ROOT` vacíos. |
| Context7 | Configuración guardada con endpoint OAuth oficial; autenticación, conexión y herramientas todavía `NO VERIFICADAS`. |
| Aplicación / pruebas / evidencias | `NO CREADA` / `NO EJECUTADAS` / `NO OBTENIDAS`. No se instaló ningún paquete ni herramienta. |
| Siguiente acción | Recargar OMP, completar OAuth y probar Context7; seleccionar versiones Expo compatibles; concretar antes de instalar Android Studio/SDK/emulador. |

### CHK-006 — Autenticación y prueba de Context7

| Campo | Valor |
|---|---|
| Identificador | `CHK-006` |
| Fecha | `2026-11-01`, según captura del usuario |
| Estado | `VALIDACIÓN PARCIAL`; OAuth y prueba MCP completados en OMP; consulta de compatibilidad pendiente. |
| Evidencia | Captura del usuario: autorización OAuth exitosa, Context7 `v4.4.3`, dos herramientas y prueba de conexión exitosa. No guardada como archivo del repositorio. |
| Estado persistente | El panel final también mostró `not connected`; conexión persistente `NO VERIFICADA`. |
| Sesión de esta revisión | Herramientas MCP no expuestas; intento de llamada devolvió `Unknown tool`. No se consultaron versiones. |
| Aplicación / pruebas / Android SDK | `NO CREADA` / `NO EJECUTADAS` / `NO DISPONIBLE`. |
| Siguiente acción | Ejecutar consulta Expo/React Native/Node en la sesión OMP donde Context7 está conectado; acordar versiones y plan antes de instalar herramientas Android. |

### CHK-007 — Scaffold SDK 58 y primera implementación

| Campo | Valor |
|---|---|
| Identificador | `CHK-007` |
| Fecha | `2026-11-01` |
| Estado | `VALIDACIÓN PARCIAL`; G0 `APROBADO`, G1 `VALIDACIÓN PARCIAL`. |
| Autorización | El usuario aprobó el plan completo: Android Studio/emulador y creación del proyecto Expo. |
| Repositorio | Rama local `chore/mobile-bootstrap`; sin commit ni remoto. |
| Decisión técnica | SDK 58, Expo Go en emulador, React `19.3.0`, React Native `0.88.1` (plantilla SDK 58), Expo Router `58.0.29`; Node `24.19.0`, npm `11.17.0`. |
| Archivos | `package.json`, `package-lock.json`, `app.json`, `src/` y pruebas creados; Tabs/demo del template retirados. Documentos originales preservados. |
| Verificaciones | `npm test`: 4 suites / 12 PASS; `npm run typecheck` PASS; `npx expo install --check` PASS; `npx expo export --platform android` PASS (bundle, no ejecución en dispositivo). |
| Android | Winget ofrece Android Studio `2026.2.2.8`; `winget list` aún no lo detecta. `adb`, AVD, `ANDROID_HOME` y `ANDROID_SDK_ROOT` no disponibles; ninguna captura obtenida. |
| Calidad pendiente | ESLint/Prettier no configurados; falta validar `npm ci` desde copia limpia y ejecutar los recorridos Android. La conexión persistente Context7 mostró `not connected` aunque la búsqueda en OMP tuvo éxito. |
| Siguiente acción | Completar Studio Setup Wizard, instalar SDK Platform 36/Platform-Tools/Emulator, crear AVD Android 16 e instalar Expo Go; consultar Context7 para lint/format y retorno Android; ejecutar CP-MOV y actualizar EV. |

### CHK-008 — Android Studio instalado; SDK pendiente

| Campo | Valor |
|---|---|
| Identificador | `CHK-008` |
| Fecha | `2026-11-01`, según Winget y preflight |
| Estado | `VALIDACIÓN PARCIAL`; Studio instalado, emulador aún no utilizable. |
| Resultado | Winget detecta Android Studio `2026.2.2.8`; `adb` y `emulator` no encontrados; `ANDROID_HOME` y `ANDROID_SDK_ROOT` vacíos. |
| Siguiente acción | El usuario completa Setup Wizard, SDK Platform 36, Platform-Tools, Emulator, AVD Android 16 y variables de usuario; después se valida `adb` y Expo Go. |

### CHK-009 — AVD iniciado; Expo Go pendiente

| Campo | Valor |
|---|---|
| Identificador | `CHK-009` |
| Fecha | `2026-11-01`, según comprobación local |
| Estado | `VALIDACIÓN PARCIAL`; AVD activo, falta instalar Expo Go y configurar PATH. |
| Android | Android Studio `2026.2.2.8`; AVD Android 16/API 36 activo (`emulator-5554`); Google Play Store presente. `adb` funciona por ruta completa; `ANDROID_HOME`/`ANDROID_SDK_ROOT` vacíos. |
| Expo Go | `host.exp.exponent` no instalado; se abrió su ficha de Play Store en el emulador. |
| Evidencia visual | Ninguna captura de la app; EV-01 a EV-10 continúan `NO OBTENIDA`. |
| Siguiente acción | El usuario instala Expo Go en el emulador; después iniciar `npm run android`, verificar flujos Android y guardar EV auténticas. |


### CHK-010 — Pruebas Android parciales y restauración de lista

| Campo | Valor |
|---|---|
| Identificador | `CHK-010` |
| Fecha | `2026-11-01` |
| Objetivo | Reanudar pruebas y ejecutar smoke funcional/UX en AVD. |
| Estado | `VALIDACIÓN PARCIAL`; G1–G3 no cerrados. |
| Autorización | Usuario confirmó que Expo Go y el proyecto estaban listos; autorizó las pruebas y eligió restaurar la tarea inicial tras detectar su ausencia. |
| Repositorio | `chore/mobile-bootstrap`, sin commits; al revisar, archivos del proyecto sin seguimiento. Sin cambios de código ni dependencias. |
| Entorno | AVD `emulator-5554`, Android 16/API 36, `sdk_gphone64_x86_64`; Expo Go `host.exp.exponent` instalado. ADB 37.0.1 funciona por ruta absoluta; `ANDROID_HOME`, `ANDROID_SDK_ROOT` y PATH Android no están configurados en el harness. |
| Automatización | `npm test`: 4 suites / 12 PASS; `npm run typecheck`: PASS. No se instalaron paquetes. |
| Recorridos | CP-02/03/04/05/06/07/08/09/10/12/14/16 y CP-MOV-04/07/08 observados sin fallo; CP-11 parcial. |
| Incidencia de estado | La tarea inicial estaba visible al comenzar y dejó de aparecer después de crear datos de prueba, sin eliminación intencional. Causa no confirmada. Con autorización se recreó el mismo título y descripción visibles; su ID interno es nuevo. Se quitó solo `Tarea de prueba 1`. |
| Evidencia | `EV-12-tarea-prueba.png` y `EV-13-estado-inicial.png`, capturas ADB originales; ambas pendientes de revisión humana. |
| Pendientes | CP-01/13/15; CP-MOV-01/02/03/05/06/09; revisión humana de EV-12/EV-13; `npm ci` limpio y ESLint/Prettier con Context7. |
| Siguiente acción | Continuar los casos pendientes sin borrar/restablecer datos ajenos; investigar la discrepancia si vuelve a ocurrir. |

### CHK-011 — CP-01/13, texto largo y bloqueo de Expo Go

| Campo | Valor |
|---|---|
| Identificador | `CHK-011` |
| Fecha | `2026-11-01` |
| Objetivo | Continuar pruebas manuales, tamaño de fuente y reproducibilidad desde copia limpia. |
| Estado | `VALIDACIÓN PARCIAL`; Android bloqueado temporalmente y G1–G3 abiertos. |
| AVD | `emulator-5554`, Android 16/API 36, Expo Go. `font_scale` cambió temporalmente de 1.0 a 1.3 y fue restaurado a 1.0. La app quedó en `Something went wrong`. Logcat: `UpdateFailedToLoad: Failed to download remote update`. Una recarga y reapertura desde Recent history fallaron. Metro se inició en `http://localhost:8081` (modo CI), pero la app siguió en error; no se hicieron más reintentos. |
| Automatización | `npm test`: 4 suites / 12 PASS; `npm run typecheck`: PASS. `npm ci` en copia temporal limpia FALLÓ con ERESOLVE: `react-dom@19.3.1` requiere `react ^19.3.1`, pero el proyecto fija `react@19.3.0`. No se alteró el manifiesto ni el lockfile. Context7: `CONTEXT7_NO_DISPONIBLE` en este harness. |
| Recorridos | CP-01: lista vacía observada y EV-14 capturada. CP-13: tres tareas de prueba; Tarea 1 editada/completada y Tarea 2 eliminada; la tarea inicial y Tarea 3 permanecieron. CP-MOV-03: título/descripción largos, ASCII y salto de línea; botones visibles en jerarquía Android. CP-MOV-05: ratios calculados: texto primario 17.85:1, secundario 7.58:1, texto blanco/acento 5.17:1, blanco/éxito 5.02:1, peligro/blanco 6.47:1; revisión visual pendiente. |
| Incidencia | En CP-09, una lectura mostró `4 tareas pendientes` mientras Tarea 1 ya figuraba completada; una lectura posterior mostró 3. No se reprodujo por segunda vez antes del bloqueo. CP-MOV-02 quedó bloqueado por la descarga fallida. |
| Estado de datos | La lista se conserva en memoria. El error Expo deja el estado actual inaccesible; tras reconectar puede ser necesario recrear `Preparar evaluacion actualizada` con texto simple. |
| Evidencia | `EV-14-estado-vacio.png`; `../evidencias/ERR-01-expo-update-failed.png`; EV-12/13 siguen pendientes de revisión humana. |
| Pendientes | CP-15; CP-MOV-02/06/09 y revisión humana; retestar CP-09; resolver ERESOLVE con Context7 y autorización antes de cambiar dependencias. |
| Siguiente acción | Restablecer carga Expo Go sin más cambios de escala; conservar `font_scale=1.0`, luego reanudar los casos pendientes. |

### CHK-012 — Reporte de funcionamiento Android

| Campo | Valor |
|---|---|
| Identificador | `CHK-012` |
| Fecha | `2026-11-01` |
| Estado | `VALIDACIÓN PARCIAL`; estado Android tomado del reporte del usuario, sin revalidación. |
| Reporte | El usuario indica que la app funciona en el emulador. Se toma como estado vigente y no se repiten comprobaciones. |
| Reinicio | No se hizo wipe ni reinicio del AVD; `adb reboot` fue abortado. El servicio Metro temporal iniciado por este harness fue detenido. |
| Dependencias | `npm ci` limpio sigue en ERESOLVE; `CONTEXT7_NO_DISPONIBLE`. No se modificaron `package.json` ni `package-lock.json`. |
| Siguiente acción | Continuar el diagnóstico de ERESOLVE tras habilitar Context7; no resetear el emulador mientras la app funcione según el usuario. |

### CHK-013 — Resolución ERESOLVE y revisión de evaluación

| Campo | Valor |
|---|---|
| Identificador | `CHK-013` |
| Fecha | `2026-11-01` |
| Objetivo | Corregir `npm ci` y contrastar el proyecto con la rúbrica. |
| Estado | `VALIDACIÓN PARCIAL`; clean install reproducible; G1–G4 siguen abiertos. |
| Autorización | El usuario pidió corregir el error y autorizó fuentes oficiales cuando Context7 no estuviera disponible. Context7 sigue `CONTEXT7_NO_DISPONIBLE`. |
| Corrección | Añadido `react-dom@19.3.0` a `devDependencies` y regenerado `package-lock.json`; coincide con React `19.3.0` y no añade UI web al alcance móvil. Sin cambios de código. |
| Fuentes | [Expo Router manual install](https://docs.expo.dev/router/installation/), [Expo SDK 58 changelog](https://expo.dev/changelog/sdk-58), [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/) y metadata oficial del registro npm para React DOM/React Native. |
| Validación | Copia temporal con `package.json` y `package-lock.json` idénticos a raíz: `npm ci` PASS (1049 paquetes), Jest 4 suites / 12 PASS, TypeScript PASS, `npx expo install --check` PASS. |
| Evaluación | RUB-01/02: base y arquitectura presentes; informe/demo final pendiente. RUB-03: EV-12/13/14 requieren revisión humana. RUB-04: automated/manual parcial, CP-15 pendiente. RUB-05: TalkBack y recorrido sin instrucciones pendientes. No se estima nota. |
| Estado Android | El usuario reporta la app funcionando; no se revalidó ni se reseteó el emulador. |
| Pendientes | CP-15, CP-09, CP-MOV-02/06/09, revisión humana de EV; configurar lint/format si se recupera Context7. |
| Siguiente acción | Continuar pruebas pendientes con la app que el usuario informa operativa; no cambiar otras versiones sin nueva verificación. |

### CHK-014 — ESLint y Prettier configurados

| Campo | Valor |
|---|---|
| Fecha y objetivo | 2026-11-01. Configurar ESLint y Prettier autorizados (CP-TEC-02, CP-TEC-03). |
| Entorno/autor | OMP en Windows; copia temporal `eva1-lint-clean-01a198ae`. |
| Estado | `VALIDACIÓN PARCIAL` |
| Git | Rama `chore/mobile-bootstrap`, sin commits; archivos sin seguimiento. |
| Archivos | `package.json`, `package-lock.json`, `eslint.config.js`, `.prettierrc.json`, `README.md`, `docs/05-BITACORA.md`. |
| Versiones | `eslint@9.39.5` (exacta), `eslint-config-expo@~58.0.4`, `eslint-import-resolver-typescript@3.10.1` (exacta), `prettier@3.9.10`. |
| Pruebas | `npm run lint` PASS; `npx expo lint` PASS; `npm run format:check` PASS; `npm run typecheck` PASS; `npm test` 4 suites / 12 pruebas PASS. Ejecutadas en copia temporal con los manifiestos del repo (copiados tras la última instalación). |
| Incidencias | (1) ESLint 10.14.0 rompe `eslint-plugin-react` anidado en `eslint-config-expo` (`contextOrFilename.getFilename is not a function`); fijado `eslint@9.39.5`. (2) `import/namespace` falla: `eslint-import-resolver-typescript` solo estaba anidado; añadido en raíz con autorización del usuario. |
| Riesgos | ESLint 9.x está EOL desde 2026-08-06 según eslint.org; `npm` advierte deprecación. Migrar a ESLint 10 depende de `eslint-config-expo`. Context7 no disponible: se usaron docs oficiales y registro npm. |
| Pendientes | CP-15, CP-09, CP-MOV-02/06/09, TalkBack y revisión humana de EV. No ejecutado en el repo raíz sin `node_modules`; repetir tras `npm ci`. |

### CHK-015 — TalkBack: verificación parcial de CP-MOV-06 y flujo CRUD con accesibilidad

| Campo | Valor |
|---|---|
| Identificador | `CHK-015` |
| Fecha y objetivo | 2026-11-01. Verificar etiquetas, foco y flujo CRUD con TalkBack activo (CP-MOV-06). Sin cambios de código. |
| Entorno/autor | OMP en Windows; AVD `emulator-5554`, Android 16 (nivel de API no verificado); TalkBack `com.google.android.marvin.talkback`; ADB por ruta absoluta. |
| Estado | `VALIDACIÓN PARCIAL` |
| Git | Rama `chore/mobile-bootstrap`; HEAD `db2d420f6afd69fff675259ec701b49bac77519b`; `git status --short` sin salida al registrar. |
| Archivos y requisitos | `docs/04-PLAN-PRUEBAS.md` CP-MOV-06; RUB-05. Sin modificaciones a `src/`, `package.json` ni lockfile. |
| Pruebas ejecutadas | Activación de TalkBack por `settings put secure` y lectura de árbol con `uiautomator dump`. Verificado: lista (tabs «Ver tareas: Todas/Pendientes/Completadas», «Nueva tarea»); formulario («Título», «Descripción», «Guardar tarea», «Cancelar», contadores 0/100 y 0/500); validación con título vacío («Ingresa un título para la tarea», «Ingresa una descripción para la tarea»); creación de tarea «TalkBack CP09»; tarjeta («Cambiar TalkBack CP09 a completada», «Editar tarea TalkBack CP09», «Eliminar tarea TalkBack CP09»); pantalla «Editar tarea» con valores actuales y «Guardar cambios»; diálogo «¿Eliminar “TalkBack CP09”?» con «CANCELAR» / «ELIMINAR». Cancelar conservó la tarea; confirmar la eliminó y la lista volvió a vacía. |
| Resultado CP-MOV-06 | `NO EJECUTADO` (completo). Observación por árbol de accesibilidad únicamente; **no hay verificación auditiva** de TalkBack. Falta lectura humana. |
| Evidencia | Ninguna captura nueva. Dumps XML temporales eliminados. |
| Incidencias | (1) Al tocar aparece diálogo de notificaciones de Android Accessibility Suite; se cerró con «Don't allow» (ruido del sistema, no de la app). (2) Con TalkBack, DPAD_DOWN en la lista se detiene en «Nueva tarea» y no recorre tarjetas. (3) En el diálogo de eliminar, DPAD izquierda/derecha no movió el foco a CANCELAR/ELIMINAR y Atrás no cerró el diálogo con TalkBack activo; cancelar y confirmar sí funcionaron con doble toque. Causa no determinada (TalkBack/emulador o app). Sin clasificar aún como `INC-###`. |
| Estado de datos | Estado previo a la prueba no verificado. Antes de eliminarla, la lista contenía solo «TalkBack CP09» (contador «1 tarea pendiente»), creada durante esta prueba. Tras eliminarla, la lista quedó vacía («Aún no tienes tareas»). |
| Limpieza | TalkBack desactivado (`enabled_accessibility_services` = `null`). Archivos `tb*.xml` borrados del escritorio y de `/sdcard`. |
| Pendientes | Escucha humana de TalkBack (lectura de título, estado, botones y diálogo; orden de foco). Marcar completada/pendiente, guardar edición y filtros con TalkBack. Recorrido humano CP-MOV-09. Revisión humana de EV-12/13/14. Repetir CP-15, CP-09 y CP-MOV-02 según secuencia de CHK-014. Clasificar incidencias (2) y (3). |
| Siguiente acción | Una persona ejecuta CP-MOV-06 con TalkBack y registra lo escuchado. Reproducir incidencias (2) y (3) sin TalkBack para separar app de lector de pantalla. |

### CHK-016 — Casos automatizables en emulador (CP-09, CP-10, CP-14, CP-UX-02/03/05, CP-MOV-04)

| Campo | Valor |
|---|---|
| Fecha y objetivo | 2026-11-01. Ejecutar casos pendientes reproducibles sin persona: CP-09, CP-10, CP-14, CP-UX-02, CP-UX-03, CP-UX-05 (parcial), CP-MOV-04. |
| Entorno/autor | OMP en Windows; AVD `emulator-5554`; densidad 480 dpi (1 dp = 3 px); captura con `adb screencap`; lectura de UI con `uiautomator dump`. |
| Estado | `VALIDACIÓN PARCIAL` |
| Git | Rama `chore/mobile-bootstrap`; HEAD `db2d420`. Sin cambios en `src/`. |
| Archivos y requisitos | `docs/evidencias/capturas/CP-14-completadas-sin-coincidencias.png`, `docs/evidencias/capturas/CP-UX-02-alerta-descartar.png`. |
| Pruebas ejecutadas | **CP-14 (PASS, observado):** con una tarea pendiente, filtro «Completadas» muestra «No tienes tareas completadas» y «Puedes cambiar el filtro para ver las demás tareas.»; «Todas» vuelve a mostrar la tarea. **CP-09 (PASS, observado):** Pendiente → Completada (toast «Tarea completada», contador «No tienes tareas pendientes») → Pendiente (toast «Tarea marcada como pendiente», contador «1 tarea pendiente»). No se observó contador discordante. **CP-10 (PASS, observado):** Pendientes y Completadas muestran el subconjunto correcto; Todas muestra la colección. **CP-UX-02 (PASS, observado):** con borrador modificado, Cancelar y Volver (cabecera) y Atrás muestran «Descartar cambios / Tienes cambios sin guardar. ¿Quieres descartarlos?»; «Seguir editando» conserva el texto; «Descartar cambios» deja la tarea sin cambios. **CP-UX-03 (PASS, observado):** «Editar» y «Eliminar» visibles como texto en la tarjeta. **CP-MOV-04 (PASS por medidas):** objetivos táctiles de tarjeta y filtros de 144 px = 48 dp; separación entre «Editar» y «Eliminar» 24 px = 8 dp. |
| Resultado | CP-14, CP-09, CP-10, CP-UX-02, CP-UX-03 y CP-MOV-04 observados en emulador. Medidas de tamaño vía bounds, no tacto físico. |
| Incidencias | (1) Con borrador modificado, el primer Atrás no mostró el diálogo y el segundo sí; no se confirmó que el primero cerrara el teclado (no se observó teclado en el dump). Causa no determinada. (2) CP-UX-05 parcial: toasts de agregar, completar y marcar pendiente observados; los de **editar** y **eliminar** no se capturaron en el dump (no verificados). (3) CP-MOV-08/CP-12 **NO VERIFICADO**: al tocar «Descripción» el foco entró al campo pero el teclado virtual no apareció en el dump ni en captura (`CP-MOV-08-teclado-virtual.png`, fuera del repo). Ajuste `show_ime_with_hard_keyboard` probado y revertido. |
| Evidencia | `CP-14-completadas-sin-coincidencias.png` (filtro Completadas sin coincidencias); `CP-UX-02-alerta-descartar.png` (diálogo al cancelar con borrador). Pendiente revisión humana. |
| Datos de prueba | Tarea «CP14prueba» creada, editada a «CP14pruebaEdit» y eliminada al final; lista vacía al cerrar la prueba. |
| Pendientes | CP-15 y CP-09: el plan (`04-PLAN-PRUEBAS.md` §8, línea «Siguiente etapa») los marca verificados el 2026-11-01, pero no hay capturas de CP-15 en `docs/evidencias/capturas/` y CHK-014/015 los dejan pendientes. Resolver contradicción (CP-09 ahora re-observado; CP-15 no re-ejecutado en esta sesión). CP-UX-04 (filtro inicial «Todas» tras relanzar), CP-UX-01 (límites 100/500 y contadores), CP-UX-05 (toasts de editar/eliminar), CP-12 y CP-MOV-08 (teclado con formulario), CP-03, CP-16, CP-MOV-07 (ya cubierto por CP-UX-02 en Atrás), CP-11, CP-13. TalkBack, CP-MOV-09 y revisión humana de EV-12/13/14 siguen pendientes. |
| Siguiente acción | Ejecutar CP-MOV-08/CP-12 con teclado abierto y CP-UX-01 en formulario; luego decidir si se revisa CP-15 y se corrige el texto del plan. |
| Resultados adicionales (2026-11-01) | **CP-03 (PASS, observado):** título vacío muestra «Ingresa un título para la tarea»; descripción con solo espacios muestra «Ingresa una descripción para la tarea» y no crea tarea. **CP-16 (PASS, observado):** tras corregir la descripción inválida, la tarea se guarda una vez («Correcta2»). **CP-11 (PASS, observado):** Nueva tarea -> Volver -> Nueva tarea -> Cancelar conserva la lista («Val», «Val2»). **CP-13 (PASS, observado):** T1, T2 y T3 creadas; T1 editada a «T1cp13editada»; T2 completada; T3 eliminada tras diálogo «¿Eliminar “T3cp13”?»; T1, T2 y Val/Val2 conservan títulos y estado. **CP-UX-01 y CP-UX-05: sin verificación completa en esta bitácora.** En los volcados de UI tras editar y eliminar no apareció texto de toast («Cambios guardados» / «Tarea eliminada» no observados); la captura `CP-UX-05-toast-editar` no se archivó y `CP-UX-05-toast-eliminar` se descartó por no mostrar el toast. Reabrir CP-UX-05 con captura inmediata tras la acción. |
|  Incidencias adicionales | Sesión interrumpida por cuelgue de kernel durante CP-13; se retomó con UI leída por `uiautomator`. La app no tiene persistencia: los datos de prueba («Val», «Val2», «T1cp13editada», «T2cp13») existen solo en memoria mientras no se recargue Expo Go; recargar o reiniciar la app los borra. Sin cambios en `src/`. |
| CP-MOV-08 / CP-12 (teclado con formulario): NO VERIFICABLE EN EMULADOR (2026-11-01). Al enfocar «Título», `dumpsys input_method` reporta `mInputShown=true`, pero el emulador solo muestra la barra de Gboard (micrófono, borrar, tabulador, emoji, menú) sin teclas; el usuario lo confirmó en pantalla. Intentos: AVD `hw.keyboard=yes` (sin teclado), cambio a `hw.keyboard=no` (revertido; `config.ini` restaurado a `yes`), `show_ime_with_hard_keyboard=1` (sin teclas; revertido a `0`). Capturas: `CP-MOV-08-foco-titulo.png`, `CP-MOV-08-teclado-formulario.png`, `CP-MOV-08-teclado-virtual.png` (solo referencia, muestran la barra). Requiere prueba con teclado en dispositivo físico o AVD con teclado software. Sin cambios en `src/`. |
| CP-UX-05 (toast al editar, 2026-11-01): PASS observado. Tras editar «EDITAR 1» a «EDITAR 1, ENTRADA EDITADA» / «PRUEBA, EDITADA» y tocar «Guardar cambios», aparece el toast verde «Cambios guardados» sobre la lista; la tarea muestra el título editado. Captura: `CP-UX-05-toast-editar.png` (foto de pantalla aportada por el usuario). Pendiente: toast al eliminar («BORRAR 1»). Datos de prueba en memoria; no persisten. |
| CP-UX-05 (toast al eliminar, 2026-11-01): PASS observado. Tap en «Eliminar» de «BORRAR 1» abre diálogo «¿Eliminar “BORRAR 1”?» con «Esta acción no se puede deshacer.» y botones CANCELAR / ELIMINAR. Tras confirmar, aparece el toast verde «Tarea eliminada» y la lista queda con «EDITAR 1, ENTRADA EDITADA» («1 tarea pendiente»). Capturas: `CP-UX-05-dialogo-eliminar.png`, `CP-UX-05-toast-eliminar.png` (fotos de pantalla aportadas por el usuario). Datos de prueba en memoria; no persisten. |

### CHK-017 — Atrás con borrador modificado en «Nueva tarea» (instancia 127.0.0.1:8081)

| Campo | Valor |
|---|---|
| Identificador | `CHK-017` |
| Fecha y objetivo | 2026-11-01, ~22:10. Reproducir el comportamiento de Atrás con borrador modificado (CP-UX-02/CP-UX-05) en la instancia que queda activa. |
| Entorno/autor | OMP en Windows; AVD `emulator-5554`; Expo Go `host.exp.exponent` 58.0.5; proyecto `eva1-todolist`; Metro único (pid 21640). |
| Instancia conservada | `exp://127.0.0.1:8081`, `ExperienceActivity` tarea 58. Elegida por el usuario en pantalla. |
| Instancia cerrada | `exp://192.168.1.86:8081`, tarea 60. Cerrada con `am stack remove 60` por decisión del usuario. **No se probó Atrás en esta instancia antes de cerrarla.** |
| Estado | `VALIDACIÓN PARCIAL` |
| Git | Rama `chore/mobile-bootstrap`; sin cambios en `src/`, `package.json` ni lockfile en esta sesión. |
| Pruebas ejecutadas | Formulario «Nueva tarea»; escritura «PRUEBAATRAS» en «Título». **Atrás 1:** sin diálogo observado en el árbol de accesibilidad. **Atrás 2:** diálogo «Descartar cambios» con «Tienes cambios sin guardar. ¿Quieres descartarlos?», botones «SEGUIR EDITANDO» / «DESCARTAR CAMBIOS». Tap en «DESCARTAR CAMBIOS»: vuelve a la lista («Mis tareas», «Nueva tarea»). |
| Resultado | CP-UX-02 (Atrás muestra diálogo de descarte y descarta) observado. La primera pulsación de Atrás no produjo efecto visible; mismo patrón que incidencia (1) de CHK-016. |
| Incidencias | Primer Atrás sin efecto observable en `ExperienceActivity` tarea 58. Causa no determinada. No se distingue app de Expo Go ni de la instancia. Una corrección previa de hipótesis: la diferencia entre instancias no quedó demostrada; el comportamiento aparece en la instancia conservada. |
| Evidencia | `atras-observado-1.png` y `atras-observado-2.png` en %TEMP% del equipo (fuera del repo, no versionadas). |
| Datos de prueba | Borrador «PRUEBAATRAS» descartado; ninguna tarea creada. Datos previos en memoria; no persisten al recargar. |
| Limpieza | Dumps `/sdcard/*.xml` de esta prueba eliminados. |
| Pendientes | Repetir Atrás sobre «Editar tarea» con borrador modificado en la instancia 127.0.0.1 para comparar con el caso original. Reproducir en la instancia 192.168.1.86 sólo si el usuario la reabre. |
| Siguiente acción | Usuario confirma si la instancia 127.0.0.1 se mantiene para CP-UX-02 y CP-UX-05 sobre «Editar tarea». |
...logo. Atrás 2: diálogo «Descartar cambios» («Tienes cambios sin guardar. ¿Quieres descartarlos?»; «SEGUIR EDITANDO» / «DESCARTAR CAMBIOS»). «DESCARTAR CAMBIOS» vuelve a «Mis tareas» con «EDITAR TAREA» sin cambios. Incidencia: un `input text` previo se envió con el foco fuera de los campos; no alteró ningún campo (título verificado antes de editar). Capturas: `cp-ux02-editar-atras1.png` y `cp-ux02-editar-atras2.png` en %TEMP% del equipo. Dumps `/sdcard` eliminados. |
...utShown=true`; tras el primer Atrás: `mInputShown=false`, sin diálogo, permanece en «Editar tarea». Por tanto el primer Atrás cierra el teclado virtual y no muestra el diálogo. Confirmado por estado IME, no por captura del teclado. Segundo Atrás: diálogo «Descartar cambios». «DESCARTAR CAMBIOS» vuelve a «Mis tareas» con «EDITAR TAREA» sin cambios. Capturas: `cp-ux01-limite-titulo.png`, `cp-ux02-editar-atras2-limite.png` en %TEMP% del equipo. Dumps `/sdcard` eliminados. |
...observado):** en «Editar tarea» se escribieron 480 caracteres sobre 32 existentes; contador `500/500` y campo con 500 caracteres. Tope aplicado. Descartado sin guardar: «DESCARTAR CAMBIOS» vuelve a «Mis tareas» con «EDITAR TAREA» y `1 tarea pendiente`. Secuencia de Atrás: primer Atrás sin diálogo (vuelve a permanecer en «Editar tarea»); segundo Atrás muestra «Descartar cambios». Captura: `cp-ux01-limite-descripcion.png` en %TEMP% del equipo. Dumps `/sdcard` eliminados. |
...tadas» activo y sin tareas completadas («No tienes tareas completadas»), `am force-stop host.exp.exponent` y relanzo con `am start -a VIEW -d exp://127.0.0.1:8081`. Tras la carga, la pestaña activa es «Todas» (resaltada en la captura) y muestra «Aún no tienes tareas». Los datos de prueba desaparecen porque la app no persiste datos, lo esperado. Captura: `cp-ux04-relanzo.png` en %TEMP% del equipo. Esto reinició Expo Go; la instancia activa es ahora la única `127.0.0.1:8081`. |

### CHK-018 — Reconciliación documental y ejecución Jest de CP-15 y CP-09

| Campo | Valor |
|---|---|
| Identificador | `CHK-018` |
| Fecha y objetivo | 2026-11-01. Contrastar `docs/` y `README.md` con la evidencia real y registrar la ejecución Jest de CP-15 y CP-09, pendiente desde CHK-013. |
| Entorno/autor | OMP en Windows; repositorio `EVA1_AP_MOVILES_LUKAS COVARRUBIAS_SEBASTIAN_MORALES`. |
| Estado | `VALIDACIÓN PARCIAL` |
| Pruebas ejecutadas | `npx jest src/features/tasks/components/EditTaskRoute.test.tsx src/features/tasks/model/tasks-reducer.test.ts --verbose`: 2 suites / 7 pruebas PASS (1,72 s). Suite completa `npx jest`: 5 suites / 14 pruebas PASS (1,91 s). |
| Resultados | CP-15 unitario/componente PASS (`EditTaskRoute.test.tsx`, 2 pruebas). CP-09 unitario PASS (`tasks-reducer.test.ts`). CP-15 en Android sigue pendiente. La discordancia de contador de CHK-011 no se reprodujo en Jest; en Android, CP-09 figura observado en CHK-010. |
| **Documentación corregida** | `04-PLAN-PRUEBAS.md`: cabecera, §3.1 (estado actual), §4.1 (CP-UX-03 y CP-UX-05 pasan a PASS parcial), §10 (G3 y estado actual) y «Siguiente etapa» (referencia rota «línea 307» eliminada). `05-BITACORA.md`: cabecera (líneas 6, 21), §2 (estados obsoletos sustituidos), §4 (línea de evidencias), §5 y rutas absolutas de CHK-017 reemplazadas por %TEMP%. §8.2 ya lista EV-01 a EV-14 con EV-06, EV-07 y EV-10 sin archivo. |
| Git | `git status --short`: cambios sin commit en `docs/04-PLAN-PRUEBAS.md`, `docs/05-BITACORA.md`, `src/app/index.tsx`, `src/features/tasks/components/TaskForm.tsx` y `TaskForm.test.tsx`; sin seguimiento `src/features/tasks/components/EditTaskRoute.test.tsx` y capturas en `docs/evidencias/capturas/`. Último commit: `db2d420`. Origen de los cambios en `src/` no verificado en esta fase. |
| Pendientes | CP-01 (CHK-011) y CP-13 (CHK-011, CHK-016) observados; CP-02 a CP-08 observados (CHK-010); CP-03, CP-11 y CP-16 PASS observados (CHK-016); CP-MOV-02 observado con fuente 130 % (revisión humana pendiente); CP-15 en Android; CP-MOV-06 (TalkBack), CP-MOV-08/CP-12 (teclado; CP-12 NO VERIFICABLE en emulador), CP-MOV-09; CP-UX-03 PASS parcial (falta fuente ampliada); CP-UX-05: toast al agregar no registrado; revisión humana de EV-12/13/14 y capturas CP-UX. |
| Decisiones pendientes del usuario | (a) Copiar capturas de %TEMP% a `docs/evidencias/capturas/` (no ejecutado: requiere revisión y procedencia). (b) Commit local de la documentación (no ejecutado; sin `push`). |
| Siguiente acción | Continuar con README y verificación de enlaces relativos; luego decisiones (a) y (b). |

### CHK-019 — Casos UX y CP-15 en AVD; reconciliación documental

| Campo | Valor |
|---|---|
| Identificador | `CHK-019` |
| Fecha y objetivo | 2026-11-01. Registrar en AVD CP-15 (identificador inexistente), Cancelar con borrador (CP-UX-02), toast al agregar (CP-UX-05) y CP-UX-03 con fuente 130 %; reconciliar `docs/` y `README.md` con esas evidencias. |
| Entorno/autor | OMP en Windows; AVD `emulator-5554` con Expo Go; repositorio `EVA1_AP_MOVILES_LUKAS COVARRUBIAS_SEBASTIAN_MORALES`. |
| Estado | `VALIDACIÓN PARCIAL` |
| Pruebas ejecutadas | Jest reejecutado: `EditTaskRoute.test.tsx` y `tasks-reducer.test.ts`, 2 suites / 7 pruebas PASS (sin cambios en código). Pruebas manuales en AVD; capturas en `%TEMP%` del equipo, no versionadas. |
| Resultados | CP-15 en AVD con identificador inexistente: «No encontramos esta tarea» y «Volver a mis tareas», sin formulario (`cp15-id-inexistente.png`). CP-UX-02: con borrador modificado, Cancelar muestra «Descartar cambios» («Tienes cambios sin guardar. ¿Quieres descartarlos?»; «SEGUIR EDITANDO» / «DESCARTAR CAMBIOS») (`cp-ux02-cancelar.png`); desenlace de los botones no registrado. CP-UX-05: «Tarea agregada» tras crear una tarea (`cp-ux05-toast-agregar.png`). CP-UX-03: «Editar» y «Eliminar» visibles en tarjeta con fuente 130 % (`cpux03-tarjeta-130.png`); fuente de sistema máxima no probada. |
| Incidencias | Ninguna nueva. |
| Documentación corregida | `04-PLAN-PRUEBAS.md`: §3.1, §4.1 (CP-UX-02, CP-UX-03, CP-UX-05), §10 (G3), «Siguiente etapa» y estado actual. `README.md`: resultados, estado y siguiente paso. `AGENTS.md`: §12 (G1). `01-REQUISITOS-RUBRICA.md`: nota de casos de prueba. Búsqueda de rutas absolutas del equipo en `docs/`, `README.md` y `AGENTS.md`: sin coincidencias. |
| Git | NO VERIFICADO en esta sesión. |
| Pendientes | CP-UX-02: «sin cambios» sin alerta y desenlace de «Seguir editando»/«Descartar cambios» desde Cancelar. CP-UX-03: fuente máxima del sistema. CP-UX-05: accesibilidad (TalkBack). CP-MOV-06 (TalkBack), CP-MOV-09 (recorrido humano), CP-MOV-08/CP-12 (teclado; CP-12 NO VERIFICABLE en emulador); revisión humana de EV-12/13/14 y capturas CP-UX. |
| Decisiones pendientes del usuario | (a) Copiar capturas de %TEMP% a `docs/evidencias/capturas/` (no ejecutado: requiere revisión y procedencia). (b) Commit local de la documentación (no ejecutado; sin `push`). |
| Siguiente acción | Commit local solo si el usuario lo aprueba; resto de pendientes en §4.1 del plan. |

### CHK-020 — Auditoría documental y verificación de estado real

| Campo | Valor |
|---|---|
| Identificador | `CHK-020` |
| Fecha y objetivo | 2026-11-01. Auditar `01`–`05`, `README.md` y `AGENTS.md` contra evidencia real: Jest, Git, rutas absolutas, enlaces relativos, matriz EV y EOL de ESLint 9. |
| Entorno/autor | OMP en Windows; repositorio `EVA1_AP_MOVILES_LUKAS COVARRUBIAS_SEBASTIAN_MORALES`. Sin AVD ni Expo Go en este checkpoint (no se tocó el emulador). |
| Estado | `VALIDACIÓN PARCIAL` |
| Git | Rama `chore/mobile-bootstrap`; 4 commits locales, último `a461246`; sin remoto (`git remote -v` vacío). `git status --short`: modificados `AGENTS.md`, `README.md`, `docs/01`–`docs/05`, `src/app/index.tsx`, `src/features/tasks/components/TaskForm.tsx` y `TaskForm.test.tsx`; sin seguimiento `src/features/tasks/components/EditTaskRoute.test.tsx`. Origen de los cambios en `src/`: NO VERIFICADO. |
| Pruebas ejecutadas | `npx jest` (suite completa): 5 suites / 14 PASS. `npx jest EditTaskRoute.test.tsx tasks-reducer.test.ts`: 2 suites / 7 PASS. No ejecutados en este checkpoint: lint, typecheck ni Android. |
| Resultados | Búsqueda con `grep -rn` de unidad de disco Windows (letra, dos puntos y barra) y del nombre de usuario local en `docs/`, `README.md` y `AGENTS.md`: sin coincidencias tras esta corrección (verificado 2026-11-01). Enlaces relativos de `README.md`, `AGENTS.md` y `docs/*.md`: destinos `01`–`05`, `AGENTS.md` y `README.md` existen. Matriz EV (`04` §8.2): con archivo EV-01 a EV-05, EV-08, EV-09 y EV-11 a EV-14; sin archivo EV-06, EV-07 y EV-10. EOL de ESLint 9 confirmado en eslint.org (`version-support`): 2026-08-06. |
| Incidencias | Contradicción histórica: CHK-016 registra «Sin cambios en src/» y HEAD `db2d420`; el estado Git actual muestra cambios en `src/` y HEAD `a461246`. Se conserva el checkpoint histórico sin reescribirlo; el origen de los cambios en `src/` queda pendiente de verificación. |
| Documentación corregida | `05-BITACORA.md`: §2 (checkpoint vigente), §6 (punto de continuación), CHK-020. `02-DECISIONES-ARQUITECTURA.md` §2 (puntero a CHK-020). `README.md`: «Resultados actuales» (CP-UX-02 y resultados Jest de CHK-018/CHK-020). `04-PLAN-PRUEBAS.md` §10 no modificado en CHK-020. |
| Pendientes | CP-UX-02: «sin cambios» sin alerta y desenlace de los botones desde Cancelar. CP-UX-03: fuente máxima del sistema. CP-UX-05: TalkBack. CP-MOV-06 (TalkBack), CP-MOV-09 (recorrido humano), CP-MOV-08/CP-12 (teclado; CP-12 NO VERIFICABLE en emulador). Revisión humana de EV-12/13/14 y capturas CP-UX. |
| Decisiones pendientes del usuario | (a) Copiar capturas de %TEMP% a `docs/evidencias/capturas/` (no ejecutado: requiere revisión y procedencia). (b) Revisar los cambios en `src/` antes de cualquier commit. (c) Commit local de la documentación (no ejecutado; sin `push`). |
| Siguiente acción | Esperar decisiones (a)–(c). Sin aprobación explícita no se copian capturas ni se hace commit. |

### CHK-021 — Copia de capturas pendientes de revisión y commit local de documentación

| Campo | Valor |
|---|---|
| Identificador | `CHK-021` |
| Fecha y objetivo | 2026-11-01. Autorizado por el equipo: (1) copiar capturas de `%TEMP%` a `docs/evidencias/capturas/`; (2) actualizar índice y crear commit local de documentación. Sin `push`, sin `merge`, sin cambios en `src/`. |
| Entorno/autor | OMP en Windows; repositorio `EVA1_AP_MOVILES_LUKAS COVARRUBIAS_SEBASTIAN_MORALES`. Sin AVD ni Expo Go en este checkpoint. |
| Estado | `VALIDACIÓN PARCIAL` |
| Git | Rama `chore/mobile-bootstrap`; HEAD previo `a461246`; sin remoto. Commit local de documentación creado en esta sesión; su hash no se registra aquí para evitar autorreferencia (ver `git log -1`). `src/app/index.tsx`, `src/features/tasks/components/TaskForm.tsx`, `TaskForm.test.tsx` y `EditTaskRoute.test.tsx` quedan sin commit; origen de los cambios en `src/`: NO VERIFICADO. |
| Archivos y requisitos | 46 PNG nuevos en `docs/evidencias/capturas/` (32 rastreados previamente); sin renombrar ni asignar EV/CP. Cuatro nombres homónimos con contenido distinto (`CP-MOV-08-teclado-formulario.png`, `CP-MOV-08-teclado-virtual.png`, `CP-UX-05-toast-editar.png`, `CP-UX-05-toast-eliminar.png`) no copiados; originales conservados. Ocho copias byte-idénticas a originales eliminadas. Índice en `04` §8.2. |
| Procedencia | Capturas de sesiones previas en `%TEMP%`: procedencia por archivo `NO VERIFICADO`. Originales sin manipular (solo copia). Revisión humana pendiente para todas. |
| Pruebas | `npx jest` completo: 5 suites / 14 PASS. `EditTaskRoute.test.tsx` y `tasks-reducer.test.ts` (CP-15, CP-09): 2 suites / 7 PASS. Ejecutadas en esta sesión. Verificación de archivos: 32 rastreados, 46 nuevos, 0 hashes duplicados. Android no ejecutado en esta sesión. |
| Incidencias | La respuesta previa indicó 54 copias nuevas; el número correcto es 46 (54 copiadas menos 8 duplicadas eliminadas). Corregido en este checkpoint. |
| Pendientes | Revisión humana de las 46 copias, EV-12/13/14 y capturas CP-UX. Decidir si los cuatro nombres con contenido distinto se copian con sufijo o se descartan. Nomenclatura: conviven `CP-UX-*` (repo) con `cp-ux*`, `cpux*` y `EVA1-todo-*` (copias); renombrar requiere mapear cada captura a un CP. Revisar `src/` antes de cualquier commit de código. |
| Siguiente acción | TalkBack (CP-MOV-06); recorrido humano (CP-MOV-09); CP-UX-02 desde «Seguir editando» y desde Cancelar. |

## 6. Protocolo de inicio en el harness externo

El agente externo **no debe interpretar este documento como orden de programar**. En la primera sesión deberá:

1. Confirmar que el equipo le autorizó la **tarea exacta** y que está trabajando sobre la copia correcta del repositorio.
2. Leer [AGENTS](../AGENTS.md) y los documentos referenciados; informar cualquier archivo ausente o discrepancia.
3. Verificar capacidad real para leer/escribir archivos, ejecutar terminal y Git, utilizar Context7 y probar Android, **interactuar con el dispositivo/emulador y guardar capturas originales**. Si no es posible, declarar `NO DISPONIBLE` o `NO VERIFICADO`.
4. Comprobar rama, commit, diferencias y archivos sin seguimiento, **si Git está disponible**. No inventar identificadores.
5. Consultar Context7 cuando la tarea técnica dependa de una biblioteca o versión, o detener esa implementación si la herramienta obligatoria falta.
6. Contrastar el estado real con el checkpoint más reciente (actualmente `CHK-021`) y los anteriores solo como historial; enumerar bloqueos y solicitar la autorización que falte. No fusionar, publicar ni modificar historial por iniciativa propia.

Se debe evitar asumir características específicas de la aplicación externa: no se ha identificado su proveedor, interfaz, sistema de permisos ni configuración concreta. El nombre de agente usado por el equipo no determina esas capacidades.

## 7. Plantilla para checkpoints posteriores

Al añadir un nuevo checkpoint `CHK-###`, mantener como mínimo:

| Dato | Registro requerido |
|---|---|
| Fecha y objetivo | Fecha, tarea autorizada y alcance. |
| Entorno/autor | Harness y agente efectivos, si están verificados. |
| Estado | `PENDIENTE`, `EN DESARROLLO`, `EN VALIDACIÓN`, `VALIDACIÓN PARCIAL`, `BLOQUEADA` o `APROBADA`. |
| Git | Rama/commit existentes o `NO VERIFICADO`. |
| Archivos y requisitos | Rutas relativas, IDs RF/CA y decisiones afectadas. |
| Pruebas | Acciones realmente ejecutadas, resultados y evidencias `EV-##`; estado visual y revisión humana, o `NO EJECUTADO` cuando proceda. |
| Incidencias | Causa, máximo dos intentos correctivos por problema y resolución o bloqueo. |
| Pendientes | Próxima tarea concreta, dependencia y aprobación necesaria. |

Si se necesita reconstruir un estado anterior, **no** usar operaciones destructivas Git sin autorización. La bitácora es la narración verificable; Git guarda versiones. No son equivalentes.

## 8. Handoff a harness externo — pendiente de ejecución

**Estado vigente:** G0 `APROBADO`; G1 `VALIDACIÓN PARCIAL`. Último checkpoint: `CHK-021` (copia de 46 capturas de `%TEMP%` a `docs/evidencias/capturas/` como `OBTENIDA PENDIENTE DE REVISIÓN`; commit local de documentación sin `push` y sin cambios en `src/`). `CHK-019` registra CP-15 observado en AVD con identificador inexistente, CP-UX-02 desde Cancelar, CP-UX-05 toast al agregar y CP-UX-03 con fuente 130 % observados. Jest: `npx jest` 5 suites / 14 PASS (CHK-021). `CHK-014` configura ESLint 9.39.5 y Prettier 3.9.10 con lint/format PASS según su registro; no re-ejecutados en CHK-021. `CHK-013` mantiene la validación de instalación limpia previa. Context7 no disponible en este harness (`CONTEXT7_NO_DISPONIBLE`); el usuario autorizó fuentes oficiales para resolver el peer conflict.

**Secuencia de continuación:**

1. CP-15 observado en AVD (CHK-019). Pendiente: CP-UX-02 «sin cambios» sin alerta y desenlace de «Seguir editando»/«Descartar cambios» desde Cancelar; no resetear el emulador. CP-09 ya observado en CHK-010; repetir solo tras cambios en la app. CP-MOV-02 observado con fuente 130 % (revisión humana pendiente).
2. Completar TalkBack/recorrido humano y revisar EV-12/13/14 antes de cerrar GA-4/G4.
3. ESLint/Prettier configurados (`CHK-014`). Tras `npm ci` en la raíz, repetir `npm run lint` y `npm run format:check`; no actualizar a ESLint 10 sin verificar `eslint-config-expo`.
4. Mantener `react-dom@19.3.0` alineado con React `19.3.0`; no usar `--force` ni `--legacy-peer-deps`.

`ERR-01-expo-update-failed.png` registra el fallo temporal durante la prueba de escala; `CHK-012` recoge el reporte posterior de funcionamiento y `CHK-013` la resolución de `npm ci`.
