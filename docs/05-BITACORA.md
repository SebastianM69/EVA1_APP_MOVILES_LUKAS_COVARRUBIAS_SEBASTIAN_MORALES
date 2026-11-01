# 05 — Bitácora, checkpoints y handoffs

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Versión documental:** 1.0 — cierre P-01/P-UX y checkpoint CHK-004 de consolidación  
> **Fecha:** 2026-11-01  
> **Tipo de registro:** planificación documental; **no** ejecución del proyecto móvil  
> **Entorno futuro previsto:** harness externo con agente denominado por el equipo «GPT-6 Luna» (capacidades todavía no verificadas).

## 1. Propósito y fuentes

Este archivo conserva **hechos comprobados, decisiones acordadas, pendientes, resultados reales y puntos de continuación**. No reemplaza la documentación especializada ni constituye evidencia de que una prueba haya sido ejecutada.

Fuentes relativas desde esta carpeta:

- [Requisitos y rúbrica](./01-REQUISITOS-RUBRICA.md).
- [Decisiones y arquitectura](./02-DECISIONES-ARQUITECTURA.md).
- [Diseño UX/UI](./03-DISENO-UX-UI.md).
- [Plan de pruebas](./04-PLAN-PRUEBAS.md).
- [Normas obligatorias para agentes](../AGENTS.md).

El [README](../README.md) está consolidado; sus instrucciones de ejecución siguen condicionadas a que exista y se valide un proyecto Expo real.

## 2. Estado general en el checkpoint inicial

| Área | Estado real conocido | Aclaración |
|---|---|---|
| Planificación de siete decisiones | **APROBADA** | Stack, arquitectura, alcance, navegación, identidad visual, pruebas y gobernanza documental. |
| Cinco políticas operativas B | **APROBADAS** | Autonomía, Git, recuperación, gates y checkpoints. |
| Context7, SOLID y anti-drift | **OBLIGATORIOS** | La disponibilidad de Context7 en el harness externo sigue sin comprobarse. |
| Límites de título y descripción | **APROBADOS** | Máximos de 100 y 500 caracteres, respectivamente. |
| Evidencias visuales B híbridas | **APROBADAS / NO EJECUTADAS** | Capturas Android reales por agente si dispone de acceso; si no, captura manual; revisión humana obligatoria. Ninguna EV-01 a EV-10 obtenida. |
| Documentos `01` a `04` | **CONSOLIDADOS** | Decisiones cerradas; G0 requiere revisión y autorización dentro del repositorio real. |
| `AGENTS.md` | **CONSOLIDADO PARA HARNESS EXTERNO** | Aún debe incorporarse y verificarse en el repositorio real. |
| Este archivo `05-BITACORA.md` | **CONSOLIDADO** | Último checkpoint vigente: `CHK-004`; anteriores históricos. |
| `README.md` | **CONSOLIDADO** | Instalación/ejecución todavía no probadas; requerirá actualización cuando haya aplicación. |
| Proyecto Expo y código móvil | **NO CREADO** | No se autorizó la implementación. |
| Pruebas automáticas y Android | **NO EJECUTADAS** | No hay aplicación real para probar. |
| Git, rama, commit y remoto del trabajo | **NO VERIFICADOS** | El repositorio de destino está fuera del entorno de redacción. |
| Configuración del harness externo | **NO VERIFICADA** | No asumir terminal, acceso a repositorio, Context7 ni Android. |
| Gate académico G0 | **PENDIENTE** | Decisiones cerradas; resta importar/validar documentación en Git real y autorización humana expresa de implementación. |

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
| EV-ENV | Capturar y revisar evidencias auténticas EV-01 a EV-10 cuando haya app Android; registrar procedencia y rutas relativas. | Equipo + agente | GA-4 / G4 |
| G0 | Obtener **aprobación humana expresa** para iniciar código, después de comprobar la documentación en el repositorio y el preflight. | Equipo | Inicio de implementación |

Las evidencias visuales siguen `NO OBTENIDA` y ninguna prueba de aplicación está ejecutada.

## 5. Checkpoints

Los CHK-001 a CHK-003 se conservan como **registros históricos**; las referencias a decisiones pendientes en esos checkpoints reflejan su estado en el momento de emisión. El estado vigente es el del **CHK-004** y la sección 4.

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

## 6. Protocolo de inicio en el harness externo

El agente externo **no debe interpretar este documento como orden de programar**. En la primera sesión deberá:

1. Confirmar que el equipo le autorizó la **tarea exacta** y que está trabajando sobre la copia correcta del repositorio.
2. Leer [AGENTS](../AGENTS.md) y los documentos referenciados; informar cualquier archivo ausente o discrepancia.
3. Verificar capacidad real para leer/escribir archivos, ejecutar terminal y Git, utilizar Context7 y probar Android, **interactuar con el dispositivo/emulador y guardar capturas originales**. Si no es posible, declarar `NO DISPONIBLE` o `NO VERIFICADO`.
4. Comprobar rama, commit, diferencias y archivos sin seguimiento, **si Git está disponible**. No inventar identificadores.
5. Consultar Context7 cuando la tarea técnica dependa de una biblioteca o versión, o detener esa implementación si la herramienta obligatoria falta.
6. Contrastar el estado real con el checkpoint más reciente (actualmente `CHK-013`) y los anteriores solo como historial; enumerar bloqueos y solicitar la autorización que falte. No fusionar, publicar ni modificar historial por iniciativa propia.

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

**Estado vigente:** G0 `APROBADO`; G1 `VALIDACIÓN PARCIAL`. `CHK-014` configura ESLint 9.39.5 y Prettier 3.9.10; lint, `expo lint`, format, typecheck y Jest PASS en copia temporal con los manifiestos finales. `CHK-013` mantiene la validación de instalación limpia previa. Context7 no está expuesto; el usuario autorizó fuentes oficiales para este fix. El usuario reporta que la app funciona; no se revalidó ni se reseteó el AVD.

**Secuencia de continuación:**

1. Completar CP-15, repetir CP-09 y CP-MOV-02 en el emulador que el usuario reporta funcionando; no resetearlo.
2. Completar TalkBack/recorrido humano y revisar EV-12/13/14 antes de cerrar GA-4/G4.
3. ESLint/Prettier configurados (`CHK-014`). Tras `npm ci` en la raíz, repetir `npm run lint` y `npm run format:check`; no actualizar a ESLint 10 sin verificar `eslint-config-expo`.
4. Mantener `react-dom@19.3.0` alineado con React `19.3.0`; no usar `--force` ni `--legacy-peer-deps`.

`ERR-01-expo-update-failed.png` registra el fallo temporal durante la prueba de escala; `CHK-012` recoge el reporte posterior de funcionamiento y `CHK-013` la resolución de `npm ci`.
