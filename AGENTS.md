# AGENTS.md — Contrato de gobernanza para agentes de desarrollo

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Ubicación:** raíz del repositorio Git  
> **Versión documental:** 1.0 — gobernanza, P-01 y P-UX aprobadas y consolidadas  
> **Fecha de consolidación:** 2026-11-01  
> **Estado:** G0 APROBADO; implementación iniciada; G1 en validación parcial
> **Entorno de ejecución previsto:** aplicación de **harness externo**; el equipo denomina al agente de ejecución «GPT-6 Luna». Ese nombre identifica la configuración que indicó el equipo, **no** demuestra qué capacidades, permisos o herramientas tendrá disponibles.
> **Alcance inmediato:** implementar la To-Do List aprobada conforme a RF-01–RF-10 y P-01/P-UX; ampliaciones requieren aprobación expresa.

## 1. Propósito y aplicación

**El desarrollo se ejecutará en un harness externo, no en la conversación donde se redactó esta planificación.** El repositorio Git y sus documentos versionados serán la fuente de verdad. Las instrucciones de este archivo deben leerse y aplicarse por el agente externo; no se asume que el harness las descubra automáticamente.

Este documento es el contrato operativo **obligatorio** para todo agente (de programación, pruebas, documentación o revisión) que trabaje en este repositorio. Sus objetivos son evitar el *drift*, mantener la arquitectura aprobada, controlar la autonomía, proteger el historial Git y producir resultados verificables y reproducibles.

Un agente debe leer este archivo **antes de modificar cualquier archivo**. El permiso para ejecutar una tarea no implica permiso para cambiar requisitos, aceptar riesgos, ampliar alcance, integrar ramas ni publicar resultados.

### 1.1. Preflight obligatorio del harness externo

**Antes de la primera tarea ejecutable**, el agente debe presentar una ficha de capacidades **observadas**, no supuestas:

1. **Repositorio:** ubicación efectiva de la raíz del repositorio, rama, último commit y cambios preexistentes; si Git no está disponible o no hay `.git`, declarar `GIT_NO_VERIFICADO`.
2. **Herramientas reales:** lectura/escritura de archivos, terminal/ejecutor de comandos, Git, Context7 y acceso a documentación oficial; declarar `DISPONIBLE`, `NO DISPONIBLE` o `NO VERIFICADO` para cada una.
3. **Entorno de ejecución:** sistema operativo, versión instalada de Node/npm, existencia de Expo/proyecto y acceso real a emulador o dispositivo Android; no inventar versiones.
4. **Evidencia visual Android:** comprobar si el harness puede iniciar o usar un dispositivo/emulador Android, interactuar con la aplicación, capturar la pantalla **real** y guardar el original en el repositorio. Registrar para cada capacidad `DISPONIBLE`, `NO DISPONIBLE` o `NO VERIFICADO`; no inferirla por el nombre del agente.
5. **Alcance y permisos:** comprobar que la tarea y la rama de trabajo estén autorizadas; no inferir permisos de publicación, instalación ni operaciones destructivas.
6. **Carga de reglas:** confirmar que el harness leyó este `AGENTS.md` y los documentos pertinentes desde el **repositorio real**; si no puede cargarlos automáticamente, el equipo deberá proporcionar su contenido antes de cualquier edición.

**Context7 es requisito obligatorio, no una capacidad garantizada del harness.** Si no está conectado o utilizable, registrar `CONTEXT7_NO_DISPONIBLE` y **no comenzar tareas de APIs, versiones o dependencias que exijan esa verificación**. Es válido leer y planificar con las fuentes existentes; no inventar documentación ni representar una consulta web distinta como consulta Context7. Se puede proponer una alternativa de integración para aprobación humana.

El harness externo puede no tener terminal, acceso al dispositivo Android, acceso a red ni facultades de Git. En ese caso el agente **debe declarar límites y pedir evidencias al equipo**, no simular herramientas ni exportar credenciales o información sensible a terceros. Cualquier instrucción de este contrato está subordinada a los permisos y políticas reales del entorno de ejecución.

### 1.2. Fuentes del proyecto

Consultar los archivos existentes usando exclusivamente referencias relativas desde la raíz del repositorio:

1. [Requisitos y rúbrica](./docs/01-REQUISITOS-RUBRICA.md): **qué** construir, criterios y entregables.
2. [Decisiones y arquitectura](./docs/02-DECISIONES-ARQUITECTURA.md): **cómo** organizar el proyecto y qué decisiones técnicas están aprobadas.
3. [Diseño UX/UI](./docs/03-DISENO-UX-UI.md): pantallas, interacción, identidad visual y accesibilidad.
4. [Plan de pruebas](./docs/04-PLAN-PRUEBAS.md): casos de prueba, evidencias y gates del proyecto.

Consultar también [bitácora y checkpoints](./docs/05-BITACORA.md) y el [README](./README.md) de instalación, alcance y orientación al evaluador. **El README está consolidado, pero sus comandos de ejecución siguen siendo condicionales** hasta que exista un proyecto Expo comprobado.

Los PDF de evaluación son fuentes académicas de referencia, pero no se asume que estén versionados dentro del repositorio. No inventar rutas a esos PDF. La instrucción posterior del profesor, comunicada por el equipo, otorgó libertad para escoger el framework: **React Native está autorizado como decisión académica del equipo**.

### 1.3. Precedencia y contradicciones

1. Requisitos académicos aplicables, incluidos cambios posteriores del docente comunicados y aprobados por el equipo.
2. Decisiones expresamente aprobadas por el equipo y documentadas.
3. Este contrato `AGENTS.md` para actuaciones de agentes.
4. Especificaciones especializadas de requisitos, arquitectura, UX y pruebas, cada una en su ámbito.
5. Bitácora, checkpoints e información histórica de handoff.

Ninguna fuente inferior permite modificar unilateralmente una decisión superior. Si hay contradicción material, **detener únicamente el trabajo afectado**, conservar los cambios existentes y presentar el conflicto con sus alternativas. No actualizar silenciosamente la documentación para encubrir una incompatibilidad. Las instrucciones de seguridad y del entorno de ejecución aplicables al agente siempre se respetan.

## 2. Línea base congelada: control anti-drift

| Área | Decisión aprobada que no puede cambiarse sin autorización |
|---|---|
| Framework | **React Native + Expo + TypeScript en modo estricto**. |
| Navegación | **Expo Router con navegación Stack**, no Tabs como navegación principal. |
| Estilos | **StyleSheet + tokens de diseño**; identidad minimalista profesional, tema claro y azul de acento. |
| Arquitectura | **Modular por funcionalidades**, componentes reutilizables y separación razonable de responsabilidades. |
| Estado | **Context + `useReducer`** como única fuente de tareas entre rutas; **`useState` local** para formulario y filtro; contadores y filtros derivados, sin estados duplicados. P-01 APROBADA. |
| Alcance funcional | CRUD (listar, crear, editar, eliminar), validación, completar/reabrir, filtros, confirmación de eliminación, mensajes y estados vacíos. |
| Campos | Título y descripción obligatorios; **100/500 caracteres máximos**, entrada limitada y validación de negocio; eliminar espacios exteriores al guardar y mostrar contadores. |
| Persistencia | **No** implementar base de datos, autenticación, servidor, sincronización ni APIs externas en Unidad 1. Las tareas viven en memoria. |
| Calidad | TypeScript estricto, ESLint, Prettier, Jest con `jest-expo`, React Native Testing Library y revisión manual real en Android cuando corresponda. |
| Evidencia visual | Estrategia **B híbrida**: captura auténtica del agente si el harness dispone de acceso real a Android; de lo contrario, captura manual del equipo; revisión humana obligatoria y trazabilidad con casos de prueba. |
| Gestión | Git B, autonomía B, recuperación B, gates B y checkpoints B, conforme a las siguientes secciones. |

**Prohibido sin aprobación expresa:** sustituir tecnologías, alterar navegación, introducir funcionalidades no solicitadas, añadir bibliotecas, actualizar versiones, crear capas arquitectónicas innecesarias, modificar requisitos/pruebas para «hacerlos pasar», o alterar decisiones P-01/P-UX aprobadas por conveniencia.

**Decisiones técnicas cerradas:** P-01 = Context + `useReducer` y `useState` local; P-UX-01 a P-UX-06 están aprobadas: paleta A, filtro «Todas», botones visibles, límites/recorte/contadores, confirmación de descarte solo con cambios y mensajes contextuales no bloqueantes. Las comprobaciones de versión, Android y capacidades del harness siguen siendo **operativas y no verificadas**. Ninguna discrepancia autoriza cambiar los acuerdos.

Las versiones exactas de Expo, React Native, React, Router, Node/npm y pruebas, así como el dispositivo y modalidad de Android, siguen pendientes de verificación. **No fijarlas de manera especulativa**.

## 3. Context7 obligatorio: documentación técnica vigente

Cuando una tarea involucre una API, biblioteca, dependencia, configuración, compatibilidad o patrón dependiente de una versión, el agente **debe consultar Context7 antes de implementar o corregir**. No sustituir ese paso por recuerdos del modelo ni por ejemplos antiguos.

**Procedimiento:**

1. Identificar nombre de la biblioteca, funcionalidad, versión instalada o versión objetivo.
2. Resolver el identificador de biblioteca en Context7 y escoger la referencia oficial/relevante.
3. Consultar documentación específica sobre la API o configuración que se desea utilizar.
4. Comparar la información con el SDK y las versiones efectivas del repositorio; no mezclar fragmentos de versiones incompatibles.
5. Registrar en el resultado de la tarea: biblioteca/versión, asunto consultado, fuente o URL devuelta, fecha y conclusión técnica.
6. Solo después aplicar cambios **dentro de un alcance ya autorizado**.

**Si Context7 no está disponible, no responde, carece de la versión requerida o muestra información incompleta:** registrar `CONTEXT7_NO_DISPONIBLE` o `CONTEXT7_NO_VERIFICADO`, según proceda; contrastar con documentación oficial como **insumo adicional**, sin reemplazar el uso obligatorio de Context7. La implementación dependiente de una API, dependencia o versión no verificada queda **BLOQUEADA** hasta habilitar Context7 o acordar expresamente una excepción a esta política. No inventar una consulta ni afirmar que se utilizó una herramienta que no está disponible.

La consulta de documentación **no autoriza** instalar ni actualizar dependencias. Las versiones compatibles deberán seleccionarse y aprobarse en una decisión específica. Para Expo, antes de dar por validada una combinación real, comprobar compatibilidad con las herramientas oficiales del SDK escogido (por ejemplo, los controles que éste documente para dependencias y diagnóstico), cuando el proyecto exista.

## 4. SOLID obligatorio, aplicado sin sobreingeniería

Revisar los principios SOLID al diseñar y modificar código. Explicar **cómo se aplican los relevantes** y por qué; no exigir implementaciones artificiales de los cinco principios en cada componente.

- **S — Responsabilidad única:** separar presentación, estado/lógica de tareas y validaciones; un componente no debe concentrar todas las responsabilidades.
- **O — Abierto/cerrado:** preferir composición y extensiones locales sobre reescrituras innecesarias de componentes estables.
- **L — Sustitución de Liskov:** componentes o implementaciones intercambiables deben cumplir sus contratos sin comportamientos sorprendentes; aplicar cuando exista sustituibilidad real.
- **I — Segregación de interfaces:** props, tipos y contratos específicos, sin requerir capacidades que un consumidor no utiliza.
- **D — Inversión de dependencias:** separar reglas centrales de detalles reemplazables **solo cuando exista acoplamiento real**; React Hooks y composición suelen ser suficientes.

**No crear** servicios, clases, repositorios, inyección de dependencias, interfaces redundantes ni abstracciones «por cumplir SOLID» si no resuelven un problema concreto de la Unidad 1. El principio rector es simplicidad verificable y responsabilidad clara.

## 5. Autonomía B — actuación autorizada

**Puede realizar sin nueva aprobación, siempre dentro de la tarea ya autorizada:**

- Leer documentación y examinar el repositorio sin alterarlo.
- Implementar la modificación acordada en archivos vinculados con la tarea.
- Corregir problemas menores localizados, dentro del límite de recuperación B.
- Añadir o ajustar pruebas relacionadas con comportamiento aprobado; ejecutar comprobaciones no destructivas.
- Actualizar documentación directamente afectada y registrar resultados reales.
- Crear rama y commits **locales** siguiendo la política Git B y los gates aplicables.

**Debe solicitar aprobación expresa antes de:** cambiar alcance o arquitectura; agregar pantallas; alterar diseño funcional; introducir, instalar o actualizar dependencias fuera de las versiones aprobadas; cambiar gestores de paquetes; modificar contratos públicos; alterar pruebas o reglas de calidad; ejecutar operaciones Git destructivas; fusionar ramas o publicar en remoto; modificar datos ajenos a la tarea.

La aprobación debe referirse a una decisión concreta, no deducirse de la frase «haz lo mejor» ni del silencio del usuario. Ante incertidumbre, presentar opciones con beneficios, riesgos y recomendación; continuar únicamente con acciones seguras y autorizadas.

## 6. Política Git B — ramas y commits locales controlados

1. Antes de modificar: comprobar rama, estado del árbol de trabajo y cambios preexistentes. Nunca asumir repositorio limpio.
2. Para tareas relevantes: utilizar una rama local con nombre descriptivo. No cambiar de rama si ello arriesga modificaciones existentes.
3. Versionar **solo archivos de la tarea autorizada** y su documentación/pruebas relacionadas; inspeccionar el diff antes de añadir archivos.
4. Los commits locales pueden realizarse cuando se superen las validaciones aplicables; mensaje descriptivo con requisito o propósito.
5. **No hacer** `push`, `merge`, `rebase` de historial compartido, `push --force`, `reset --hard`, `clean` destructivo, eliminación de ramas compartidas ni sobrescritura de trabajo ajeno sin autorización específica.
6. Antes de integrar, entregar resumen de cambios, commit/ramas reales, pruebas y pendientes. Solo el equipo autoriza integración/publicación.
7. Excluir secretos, información personal innecesaria, `node_modules`, archivos temporales, cachés y salidas generadas no requeridas. Mantener archivo de bloqueo de npm cuando el proyecto exista.
8. Si no existe `.git` en el entorno, registrar `REPOSITORIO_NO_INICIALIZADO`; **no inventar rama ni commit** y no inicializar un repositorio remoto por cuenta propia.
9. Un harness que ofrezca una **copia de trabajo efímera** debe identificar qué modificaciones y commits se conservan al cerrar la sesión; no declarar entregado un cambio que solo existe en una sesión temporal.

## 7. Recuperación B — diagnóstico y máximo dos intentos

**Secuencia obligatoria:** detectar → conservar evidencia → identificar alcance y causa probable → evaluar riesgos → corregir solo si está autorizado → repetir comprobación → documentar.

| Clase de problema | Respuesta obligatoria |
|---|---|
| Menor (formato, tipado, importación localizada) | Diagnóstico y corrección local dentro de la tarea. |
| Moderado (prueba o componente fallido) | Hasta **dos intentos correctivos automáticos por el mismo problema**, con pruebas entre intentos. |
| Ambiental (herramienta, permisos, conexión, dispositivo) | Diagnóstico no destructivo; no modificar seguridad ni configuración global sin autorización. |
| Crítico (integridad, seguridad, pérdida de trabajo) | **Detener de inmediato**; preservar evidencia y pedir decisión. |
| Arquitectónico o de dependencia | **Detener antes de modificar**; presentar alternativas para aprobación. |

Dos intentos se cuentan por **hipótesis/corrección aplicada a un mismo defecto**, no por cada lectura o consulta. Si el primer análisis indica riesgo crítico, no se permiten intentos automáticos. Si dos correcciones no resuelven la falla, estado **BLOQUEADO**: no reiniciar un ciclo con otro nombre ni debilitar pruebas.

**Informe de bloqueo mínimo:** ID, estado, fecha, contexto, error observable, evidencia, causa confirmada o hipótesis, intentos y resultados, impacto, archivos afectados, alternativas, recomendación y autorización exacta requerida. Distinguir fallo del entorno de defecto del producto; un mensaje que desaparece no equivale a funcionalidad verificada.

## 8. Gates B — validaciones progresivas según impacto

Hay **dos niveles distintos de gates** que no deben confundirse:

- **G0–G4 del proyecto académico**, definidos en [plan de pruebas, sección 10](./docs/04-PLAN-PRUEBAS.md): planificación, reproducibilidad, funciones esenciales, UX y entrega.
- **GA-0 a GA-5 de calidad por tarea**, definidos aquí: son los seis controles operativos antes denominados G0–G5 en la discusión de gobernanza. La sigla `GA` evita colisionar con los gates del documento 04.

| Gate operativo | Verificación | Salida requerida |
|---|---|---|
| **GA-0 — Alcance** | Tarea autorizada, requisitos y decisiones comprobados, cambios identificados, Context7 cuando proceda. | Sin contradicciones o tarea **BLOQUEADA**. |
| **GA-1 — Calidad estática** | TypeScript estricto, ESLint y Prettier, según el tipo de archivo y cambios. | Resultados reales de los controles aplicables. |
| **GA-2 — Arquitectura/SOLID** | Modularidad, responsabilidades, contratos y ausencia de sobreingeniería o drift. | Revisión técnica documentada. |
| **GA-3 — Pruebas automatizadas** | Jest/`jest-expo` y React Native Testing Library para lógica e interacciones afectadas. | Pruebas y regresiones relevantes ejecutadas con resultados reales. |
| **GA-4 — Android/UX** | Navegación, teclado, formularios, retorno, accesibilidad y apariencia en dispositivo físico o emulador Android real (no render simulado), con capturas originales y revisión humana según [matriz EV](./docs/04-PLAN-PRUEBAS.md). | Evidencia visual auténtica y registro de ejecución, o estado `NO EJECUTADO`/`BLOQUEADO`; nunca aprobación inferida. |
| **GA-5 — Documentación/Git** | Documentos afectados, enlaces relativos, índice EV ↔ CP/RF/RUB, procedencia de capturas, diff, estado Git y resumen para aprobación. | Entrega rastreable, archivos existentes verificados y revisión humana identificada. |

**Aplicación mínima por impacto:**

| Tipo de tarea | Gates aplicables mínimos |
|---|---|
| Documentación exclusivamente | GA-0 + GA-5. |
| Cambio visual | GA-0 + GA-1 + GA-2 + GA-4 + GA-5. |
| Lógica de tareas | GA-0 + GA-1 + GA-2 + GA-3 + GA-5. |
| Pantallas, navegación o formularios | GA-0 a GA-5. |
| Corrección de defecto | Gates que cubren el impacto + regresión relevante, nunca menos que GA-0 y GA-5. |
| Cierre de funcionalidad/entrega | Todos los gates aplicables y el gate académico del documento 04 correspondiente. |

No ejecutar validaciones irrelevantes por formalismo; **tampoco omitir** controles afectados por dependencias indirectas. Sin ejecución real en Android **ni evidencia auténtica aportada por el equipo**, GA-4 permanece `NO EJECUTADO` o `BLOQUEADO`, nunca aprobado por inferencia a partir de mocks. La captura puede obtenerla el agente o el equipo, pero la evidencia debe ser **de la aplicación ejecutada en Android**, y su aceptación visual requiere revisión humana documentada.

### 8.1. Política obligatoria de evidencias visuales — alternativa B híbrida

1. **Origen real:** capturas y, solo cuando resulte útil, grabaciones proceden de la aplicación real en Android físico o emulador. Si el harness permite operar ese Android y guardar capturas, el agente las obtiene; **de lo contrario las aporta manualmente el equipo**. Un mock, preview conceptual, prueba Jest o imagen generada no se presentará como evidencia de ejecución móvil.
2. **Sin falsificación:** no inventar capturas, regenerarlas con IA, eliminar visualmente errores ni usar imágenes de una versión distinta. Conservar el archivo **original**; cualquier recorte o anotación para el informe debe identificarse como derivado y no reemplazarlo.
3. **Trazabilidad mínima:** cada evidencia tendrá ID `EV-##`, casos `CP-##`/`CP-MOV-##`, requisitos `RF-##` y rúbrica `RUB-##` cuando corresponda; método de obtención (agente/humano), fecha, dispositivo/emulador, versión Android, modalidad Expo, rama/commit efectivamente conocido, pasos, esperado/observado, ruta relativa, revisor y resultado de revisión. Si falta un dato, indicar `NO VERIFICADO`.
4. **Rutas y publicación:** los originales se planifican bajo `./docs/evidencias/capturas/` desde la raíz del repositorio; los enlaces desde un Markdown dentro de `docs/` utilizan `./evidencias/capturas/`. **No enlazar imágenes que todavía no existan.** Guardar solo datos ficticios y evitar capturar información personal o del sistema innecesaria.
5. **Alcance probatorio:** capturas muestran estados visibles; operaciones como edición o eliminación requieren secuencia antes/después u otra evidencia de ejecución. TalkBack, tamaño de zonas táctiles, accesibilidad y gestos exigen además observación manual o registro adecuado, no una imagen aislada.
6. **Cierre:** el agente podrá preparar el índice de evidencias, pero **solo el equipo valida visualmente** que cada captura demuestra el criterio. Si falta Android, captura auténtica o revisión humana exigida, el caso/gate correspondiente continúa `NO EJECUTADO`, `BLOQUEADO` o `VALIDACIÓN PARCIAL`, según corresponda.

La matriz EV-01 a EV-10 y el registro por ejecución se mantienen en el [plan de pruebas](./docs/04-PLAN-PRUEBAS.md). El agente no puede ampliar la estrategia a pruebas E2E o nuevas dependencias sin autorización.

### 8.2. Definition of Done (DoD)

Una tarea solo puede quedar **APROBADA** cuando: alcance autorizado, anti-drift y SOLID pertinentes revisados; Context7 consultado o su falta declarada; verificaciones estáticas y pruebas aplicables aprobadas; pruebas Android efectivas cuando correspondan; documentación y enlaces actualizados; evidencia Android auténtica, indexada y **revisada por una persona** si el gate la exige; no quedan defectos críticos conocidos; resultados, diff y evidencias entregados; y se obtuvo la revisión humana requerida para integrar o cerrar un gate.

Los resultados de pruebas del documento 04 conservan sus estados: `NO EJECUTADO`, `APROBADO`, `FALLIDO`, `BLOQUEADO`, `NO APLICA` (siempre justificado). Los estados de trabajo son: `PENDIENTE`, `EN DESARROLLO`, `EN VALIDACIÓN`, `VALIDACIÓN PARCIAL`, `BLOQUEADA` y `APROBADA`.

**No** afirmar `APROBADA` si falta una comprobación obligatoria; usar `VALIDACIÓN PARCIAL` y detallar cuál. Un agente no puede aprobar sus resultados simplemente por haber escrito código o ejecutado un comando sin verificar su salida.

## 9. Checkpoints B — seguimiento estructurado

Registrar checkpoints en [bitácora](./docs/05-BITACORA.md), sin crear archivos independientes de checkpoint para cada operación. Se requiere un checkpoint al:

1. Completar una funcionalidad o un gate importante.
2. Detectar un bloqueo que impide continuar.
3. Aprobar un cambio relevante de arquitectura, alcance o gobernanza.
4. Entregar trabajo a otro agente, sesión o integrante del equipo.
5. Cerrar una etapa con acciones pendientes que deban recuperarse posteriormente.

**Campos mínimos:** identificador `CP-###` (distinto de los `CP-01` de **casos de prueba**; preferir `CHK-###` para evitar ambigüedad), fecha/hora con zona o formato inequívoco, autor/agente, objetivo, estado, requisito y pruebas asociados, rama/commit real si existe, archivos cambiados (rutas relativas), comandos ejecutados y resultado real, evidencias `EV-##` con estado de revisión humana, errores/bloqueos, decisiones pendientes, siguiente acción concreta y autorización necesaria.

Un checkpoint es un **registro del estado**, no reemplaza un commit Git. Los commits guardan versiones; el checkpoint explica su estado y comprobaciones. No inventar identificadores, pruebas, capturas, fechas o commits.

### 9.1. Protocolo de handoff

El agente entrante debe:

1. Leer este archivo y la documentación vigente; leer último checkpoint cuando exista.
2. Comprobar físicamente los archivos y el estado Git (rama, último commit, diff y cambios no versionados) **si el harness tiene acceso a ellos**; si no lo tiene, registrar `NO VERIFICADO` y bloquear operaciones que dependan de esa comprobación.
3. Comparar repositorio con checkpoint. Si difieren, documentar la discrepancia antes de escribir.
4. Identificar decisiones aprobadas, **verificaciones operativas pendientes**, tareas en curso, incidentes y gates pendientes.
5. Continuar **solo la tarea autorizada** desde el último estado comprobado, sin repetir acciones ya validadas ni asumir que el historial de chat es más fiable que el repositorio.

El informe de handoff contendrá: **estado actual, qué se hizo, qué se comprobó, qué no se comprobó, qué quedó bloqueado, cambios Git, documentos actualizados y siguiente paso**. Si un dato no está disponible, escribir `NO VERIFICADO`.

## 10. Actualización documental y portabilidad Git

Cada archivo conserva su autoridad temática:

| Archivo | Actualizar al cambiar |
|---|---|
| `AGENTS.md` | Política de agentes o una nueva aprobación de gobernanza. |
| `docs/01-REQUISITOS-RUBRICA.md` | Requisitos, criterios académicos o alcance funcional. |
| `docs/02-DECISIONES-ARQUITECTURA.md` | Stack, contratos, estructura o decisión arquitectónica aprobada. |
| `docs/03-DISENO-UX-UI.md` | Pantallas, textos, estilos, accesibilidad y reglas de interacción. |
| `docs/04-PLAN-PRUEBAS.md` | Casos, criterios, evidencias o gates académicos. |
| `docs/05-BITACORA.md` | Checkpoints, incidencias, bloqueos, verificaciones del harness externo y handoffs. |
| `README.md` | Guía de instalación, ejecución, alcance público y orientación al evaluador; ya redactada, pendiente de revisión final y de completar la ejecución real. |

**Portabilidad obligatoria:** rutas locales y enlaces Markdown relativos a la **ubicación del documento que los contiene**, nunca rutas absolutas dependientes del computador. Enlaces web externos para citar fuentes son admisibles. Desde `AGENTS.md` los documentos se referencian como `./docs/...`; desde un documento de `docs/` se referencia la raíz mediante `../`. No usar como enlaces archivos inexistentes, ni apuntar a esquemas de archivo local, unidades locales, perfiles de usuario o nombres de directorio particulares de una máquina.

Antes de aprobar un cambio documental: comprobar que los enlaces internos resuelvan, no existan rutas absolutas locales y los comandos indiquen desde qué directorio relativo se ejecutan. En la entrega, comprobar portabilidad mediante `CP-DOC-01` y una copia limpia del repositorio. No subir secretos, datos reales de usuarios ni evidencias ficticias.

**Sincronización documental realizada:** `docs/01-REQUISITOS-RUBRICA.md`, `docs/02-DECISIONES-ARQUITECTURA.md`, `docs/03-DISENO-UX-UI.md` y `docs/04-PLAN-PRUEBAS.md` reflejan **P-01 y P-UX-01 a P-UX-06 aprobadas**, incluidos límites/contadores, mensajes y descarte condicionado a cambios. No hay decisiones UX pendientes en el alcance aprobado.

## 11. Salida obligatoria de cada tarea agéntica

El agente debe terminar con un informe breve, verificable y suficiente para revisión humana:

1. **Objetivo/alcance autorizado** y estado final (`APROBADA`, `VALIDACIÓN PARCIAL`, `BLOQUEADA`, etc.).
2. **Archivos cambiados** y relación con requisitos/casos, usando rutas relativas.
3. **Decisiones y documentación técnica** consultadas; Context7 si correspondía y cualquier limitación.
4. **Verificaciones realizadas:** comando o acción, resultado observado, fecha si se registra evidencia, y controles pendientes.
5. **Errores e intentos:** diagnósticos y correcciones, sin ocultar fallos.
6. **Git:** rama y commit reales, cambios pendientes, y acciones que necesitan autorización.
7. **Próximo paso** concreto; si corresponde, ID del checkpoint y referencia a evidencia real.

No reportar como creado, probado, publicado o aprobado ningún elemento que no exista o que no haya sido realmente verificado. Las evidencias visuales **planeadas** deben permanecer diferenciadas de capturas obtenidas y de capturas **aceptadas por el equipo**.

## 12. Estado inicial y condición para comenzar a programar

**Estado documental y del repositorio:** siete Markdown en la estructura prevista; Git local en `chore/mobile-bootstrap` con 3 commits locales (último `db2d420`), sin remoto y con cambios sin commit. Proyecto Expo SDK 58 creado con package-lock y código en `src/`; Node `24.19.0`, npm `11.17.0`, Java `21.0.12.1` detectados. Android Studio y AVD `emulator-5554` disponibles; ADB solo por ruta completa; pruebas Android parciales (CHK-010 a CHK-017).

**Gate académico G0:** `APROBADO` por el usuario para esta línea base. Expo SDK 58 / Expo Go en emulador; la matriz recomendada es Expo `~58.0.22`, React `19.3.0`, React Native `0.88.1`, Expo Router `~58.0.29`, Jest `~30.5.2`, `jest-expo` `~58.0.13` y RNTL `^14.1.0`. La selección usa la salida Context7 aportada y la plantilla SDK 58.

**G1:** `VALIDACIÓN PARCIAL`: `npx jest` 5 suites / 14 pruebas PASS (2026-11-01); `npm run typecheck`, `npx expo install --check` y `npx expo export --platform android` PASS; `npm ci` limpio (CHK-013) y ESLint/Prettier (CHK-014) PASS. Falta ejecución Android completa (CP-15 en Android, CP-12/CP-MOV-08 teclado, CP-MOV-06 TalkBack, CP-MOV-09 recorrido) y revisión humana de evidencias. Android Studio, AVD `emulator-5554` y Expo Go operativos (CHK-010 a CHK-018). Esta sesión API no expone Context7; consultar ESLint/Prettier y el manejo específico de retorno Android en la sesión OMP antes de añadir configuración/versiones.

**No declarar:** compilación, pruebas aprobadas, evidencias visuales obtenidas, commits realizados o funcionalidades construidas sin ejecución comprobable. El punto de continuación es el checkpoint más reciente de [bitácora](./docs/05-BITACORA.md).
