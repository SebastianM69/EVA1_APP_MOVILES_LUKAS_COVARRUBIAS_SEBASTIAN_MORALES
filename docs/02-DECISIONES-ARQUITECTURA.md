# 02 — Decisiones técnicas y arquitectura

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Versión documental:** 1.0 — consolidación de P-01 y P-UX-01 a P-UX-06  
> **Fecha:** 2026-11-01  
> **Estado:** especificación consolidada; P-01/P-UX aprobadas; G0 APROBADO; G1 en validación parcial (ver [bitácora](./05-BITACORA.md))
> **Documento precedente:** [01 — Requisitos, alcance y rúbrica](./01-REQUISITOS-RUBRICA.md)  
> **Objetivo:** expresar *cómo* se organizará el proyecto, sin implementar todavía código.

## 1. Alcance y jerarquía de decisiones

La presente especificación deriva de las siete decisiones acordadas para la Unidad 1. Complementa el documento de requisitos; **no puede modificar por sí sola los requisitos funcionales RF-01 a RF-10**, los criterios de aceptación CA-01 a CA-13 ni la rúbrica. Si aparece una contradicción, se registra y se solicita revisión del equipo.

**Estados utilizados:**

- **APROBADA:** decisión expresamente acordada durante la planificación.
- **PROPUESTA:** precisión técnica razonable que debe revisarse antes de pasar a implementación.
- **PENDIENTE_VERIFICACIÓN:** depende del entorno, versiones o resultados todavía no medidos.

**Precedencia:** requisitos funcionales y rúbrica académica; libertad de elección tecnológica comunicada por el docente; decisiones técnicas aprobadas por el equipo; propuestas documentales. Se toma Ionic como tecnología de referencia del texto original, no como requisito obligatorio del stack, conforme a la libertad indicada por el profesor.

## 2. Registro consolidado de decisiones (D-01 a D-07)

| ID | Área | Alternativa acordada | Estado | Razón resumida |
|---|---|---|---|---|
| D-01 | Stack | React Native + Expo + TypeScript estricto, Expo Router, StyleSheet; Node.js/npm/VS Code | APROBADA | Componentes nativos, uso profesional observado y experiencia previa en React/TypeScript. |
| D-02 | Arquitectura | **B — Modular por funcionalidades** | APROBADA | Separa responsabilidades sin sobreingeniería. |
| D-03 | Alcance | **B — To-Do List funcional y moderna** | APROBADA | Incluye CRUD, estados, filtros y mejoras de usabilidad sin incorporar funcionalidades futuras. |
| D-04 | Navegación | **B — Stack** con lista y formulario reutilizable | APROBADA | Flujo móvil claro, pocas rutas y formulario sin duplicación. |
| D-05 | Identidad visual | **A — Minimalista profesional** | APROBADA | Jerarquía y legibilidad, diseño fácil de justificar frente a la rúbrica. |
| D-06 | Calidad | **B — Equilibrada y verificable** | APROBADA | TypeScript, ESLint, Prettier, Jest/Testing Library y pruebas manuales Android. |
| D-07 | Documentación | **B — Estructurada y controlada** | APROBADA | Siete documentos `.md`, gobernanza agéntica, checkpoints y trazabilidad Git. |

**Fundamento de D-01:** el docente otorgó libertad para escoger el stack. La comparación técnica y profesional completa entre Ionic y React Native está en [requisitos y rúbrica](./01-REQUISITOS-RUBRICA.md). El stack y las versiones seleccionadas están en `package.json` y `package-lock.json`; el estado operativo vigente se registra en `CHK-021`.

## 3. Stack y responsabilidades

| Tecnología / herramienta | Responsabilidad | Política | Estado |
|---|---|---|---|
| React Native | Interfaz móvil con componentes nativos | No usar `ion-*` ni WebView como base de UI. | `0.88.1`; peer oficial React `^19.3.0`. |
| Expo | Herramientas de creación y ejecución | SDK compatible, validado con herramientas Expo. | SDK 58 (`~58.0.22`); Expo Go seleccionado. |
| TypeScript | Tipado del proyecto | Configuración estricta; evitar `any` injustificado. | APROBADA |
| React | Runtime de componentes y estado. | Mantener la versión recomendada por el SDK. | `19.3.0` seleccionada. |
| Context + `useReducer` | Estado compartido de tareas | Proveedor único por encima de rutas Stack; reducer inmutable y acciones explícitas. | P-01 APROBADA |
| `useState` local | Borradores y filtro activo | No duplicar colección ni estados derivados. | P-01 APROBADA |
| Expo Router | Navegación basada en archivos | Solo navegación Stack para el alcance actual. | APROBADA |
| StyleSheet + tokens | Estilos reutilizables y consistentes | No incorporar librerías visuales innecesarias. | APROBADA |
| Node.js + npm | Entorno y dependencias | Runtime compatible y `package-lock.json` versionado. | Node `24.19.0`; npm `11.17.0`. |
| VS Code + Git | Editor, colaboración y control de cambios | Repositorio portable; rutas relativas en Markdown. | APROBADA |
| ESLint + Prettier | Análisis estático y formato | Configuración compartida y comprobación antes de integrar cambios. | APROBADA |
| Jest + `jest-expo` + React Native Testing Library | Pruebas de lógica e interfaz | Casos críticos automáticos; no sustituye la prueba manual Android. | APROBADA |
| React DOM | Peer para dependencias web opcionales de Expo Router; no añade UI web al alcance móvil. | Mantener el peer alineado con React para instalaciones reproducibles. | Dev dependency exacta `19.3.0`; validada con `npm ci`. |

**No se incorporarán en Unidad 1:** backend, base de datos, autenticación, APIs externas, Redux, Zustand, TanStack Query, almacenamiento persistente, servicio de notificaciones, contenedores Docker ni publicación en tiendas. Son decisiones de **fuera de alcance**, no prohibiciones permanentes para otras unidades.

### 3.1. Versiones y compatibilidad: seleccionadas y verificadas

El proyecto fija Expo `~58.0.22`, React Native `0.88.1`, React `19.3.0`, Expo Router `~58.0.29`, Node `24.19.0`, npm `11.17.0`, Jest `~30.5.2`, `jest-expo` `~58.0.13` y React Native Testing Library `^14.1.0`.

El `npm ci` original fallaba porque el peer de `react-dom@19.3.1` exige React `^19.3.1`, incompatible con React `19.3.0`. Se fijó `react-dom@19.3.0` como dev dependency para alinear el peer; npm registry confirma que su peer es `^19.3.0`, igual que el peer de React Native `0.88.1`. No se añadió interfaz web ni se cambió el stack móvil.

La guía oficial de Expo Router indica instalar `react-dom` con `npx expo install` cuando el proyecto apunta a web y señala que Expo selecciona versiones compatibles con el SDK. El changelog de SDK 58 confirma React Native 0.88. En una copia limpia exacta del manifiesto y lockfile del proyecto, `npm ci`, Jest, TypeScript y `npx expo install --check` pasaron.

El usuario reporta la app funcionando en el emulador; no se volvió a comprobar ni se reseteó el AVD. G1 sigue parcial por recorridos Android y revisión humana pendientes.

**Estado:** versiones seleccionadas; instalación limpia reproducible; validación manual parcial y EV pendientes de revisión.

## 4. Arquitectura modular por funcionalidades

### 4.1. Principio principal

Cada responsabilidad debe tener un lugar reconocible, pero **no añadiremos capas, interfaces o servicios abstractos que no aporten utilidad observable**. La interfaz se mantiene separada de las reglas de tareas y de la navegación. Los datos estarán **solo en memoria durante la sesión**.

**Separación de responsabilidades:**

| Parte | Función | No debe hacer |
|---|---|---|
| Rutas / pantallas | Presentar la vista y conectar navegación con funcionalidades | Repetir reglas de negocio o almacenar listas independientes de tareas. |
| Componentes de tareas | Renderizar tareas, filtros, formulario y acciones de UI | Decidir navegación global o persistir datos. |
| Estado de tareas | Almacenar colección de la sesión y procesar acciones coherentes | Depender de componentes de presentación concretos. |
| Validación de tareas | Comprobar título y descripción y producir errores comprensibles | Acceder al router o modificar directamente elementos visuales. |
| Tipos / modelo | Definir datos de una tarea y sus invariantes | Contener reglas de estilos. |
| Tema compartido | Centralizar colores, tipografía, espaciado y estados visuales | Introducir lógica del CRUD. |
| Pruebas | Verificar invariantes e interacciones | Suponer evidencias de ejecución en Android. |

### 4.2. Estructura física prevista (sujeta a plantilla Expo real)

El árbol siguiente es una **propuesta**, no representa archivos existentes. Está expresado **desde la raíz del repositorio**. En este documento, que reside dentro de `docs/`, una ruta de trabajo hacia esos archivos comenzaría por `../`.

```text
.  (raíz del repositorio)
├── AGENTS.md                         (documentado)
├── README.md                         (documentado)
├── docs/
│   ├── 01-REQUISITOS-RUBRICA.md      (existente)
│   ├── 02-DECISIONES-ARQUITECTURA.md (este documento)
│   ├── 03-DISENO-UX-UI.md            (documentado)
│   ├── 04-PLAN-PRUEBAS.md            (documentado)
│   └── 05-BITACORA.md                (documentado)
├── src/                              (implementado)
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── tasks/
│   │       ├── new.tsx
│   │       └── [id]/
│   │           └── edit.tsx
│   ├── features/
│   │   └── tasks/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── model/
│   │       └── validation/
│   ├── shared/                        (solo si hay reutilización real)
│   └── theme/
├── assets/                            (según la plantilla)
└── package.json / package-lock.json  (presentes)
```

No se deben crear carpetas vacías «por previsión». La distribución podrá adaptarse a una plantilla Expo oficial, pero sin trasladar lógica de funcionalidades dentro de los archivos que Expo Router trata como rutas. El directorio `../src/app/` está reservado para navegación y páginas; sus componentes no relacionados con rutas pertenecen fuera de él.

**Advertencia de rutas:** `../src/app/` es relativa a `docs/`, no es una ruta absoluta. Los nombres del árbol son una representación conceptual desde `.`; solo se convertirán en enlaces Markdown cuando existan físicamente.

### 4.3. Propiedad y ciclo de vida del estado — P-01 APROBADA

El equipo aprobó **React Context + `useReducer`** como única fuente de verdad de las tareas durante la sesión. El proveedor se ubicará por encima de las pantallas Stack, de modo que navegar no cree colecciones diferentes. No se instalarán bibliotecas externas de estado.

- El reducer concentra acciones **crear, editar, eliminar y completar/reabrir**, con actualizaciones inmutables e identificadores únicos en la sesión.
- **`useState` local** administra borradores de formulario y el filtro seleccionado; no almacena copias independientes de la colección de tareas.
- La validación se aplica antes de despachar acciones que cambien datos; el reducer también preserva las invariantes y no acepta datos inválidos.
- El recuento de pendientes y las listas filtradas son **valores derivados**: no se mantienen como estados duplicados.
- Al guardar se retiran espacios al inicio y al final de título/descripción, se exigen ambos campos y máximos de **100** y **500** caracteres respectivamente.
- Las tareas existen solamente durante la sesión; **sin persistencia**, sincronización ni llamadas externas.
- Los contratos del reducer y del Context serán pequeños, tipados y acordes a SOLID. No introducir repositorios abstractos artificiales.

La estructura exacta de archivos del proveedor/reducer se decidirá dentro del módulo aprobado al crear el proyecto, según la plantilla Expo comprobada; esto **no reabre P-01** ni permite cambiar la tecnología de estado.

### 4.4. Modelo mínimo de tareas

| Propiedad conceptual | Tipo previsto | Regla |
|---|---|---|
| `id` | Identificador no vacío | Único durante la sesión; nunca usar índice de lista como identidad persistente en la UI. |
| `title` | Texto | Obligatorio, recortado en bordes, máximo **100 caracteres**. |
| `description` | Texto | Obligatorio, recortado en bordes, máximo **500 caracteres**. |
| `completed` | Booleano | `false` al crear; cambia al completar/reabrir. |

Los límites, los contadores, los errores y el tratamiento de textos largos están definidos y aprobados en [diseño UX/UI](./03-DISENO-UX-UI.md). Su verificación real en Android permanece pendiente.

## 5. Navegación Stack: contratos previstos

La aplicación tendrá **dos diseños de pantalla**, aunque puede utilizar tres rutas concretas:

| Ruta conceptual | Objetivo | Comportamiento |
|---|---|---|
| `../src/app/index.tsx` | Lista principal | Mostrar tareas, filtros, contador, crear y acciones individuales. |
| `../src/app/tasks/new.tsx` | Crear tarea | Abrir formulario vacío, validar, guardar y volver a lista. |
| `../src/app/tasks/[id]/edit.tsx` | Editar tarea | Cargar la tarea correspondiente, precargar campos, guardar o cancelar. |

Las rutas de creación y edición reutilizarán **un mismo componente de formulario** del módulo de tareas. El identificador recibido por la navegación deberá validarse: si una tarea deja de existir, se mostrará una respuesta controlada y un retorno seguro, nunca una pantalla rota.

**Comportamientos transversales:**

- Navegación de retorno coherente con Android, sin perder accidentalmente datos guardados.
- Cancelar no modifica los datos originales; los borradores se mantienen separados hasta confirmar.
- Al guardar correctamente se refleja el cambio en la lista; en creación se limpian los campos antes de abandonar el formulario, conforme al requisito.
- La eliminación y su confirmación ocurren desde la pantalla principal, sin una pantalla de eliminación adicional.
- Las pestañas no están aprobadas; los estados se consultan mediante filtros dentro de la lista.

**P-UX-05 aprobada:** al intentar cancelar o volver (incluido Atrás de Android) con un borrador modificado, se solicita confirmación de descarte; sin cambios se regresa directamente. Véase [diseño UX/UI](./03-DISENO-UX-UI.md).

## 6. Patrones y conceptos que podrán explicarse en la evaluación

La rúbrica exige explicar **patrones centrales con ejemplos prácticos**, no solo nombrarlos. Los siguientes patrones están alineados con el proyecto y deben reflejarse en la aplicación terminada:

| Patrón / principio | Ejemplo previsto | Evidencia esperada | Estado |
|---|---|---|---|
| Composición de componentes | Pantalla compuesta por encabezado, filtros, lista y elementos de tarea; formulario reutilizable. | Estructura de componentes y pantallas reales. | APROBADO como enfoque |
| Flujo unidireccional de datos | Estado compartido → props/lectura de estado → evento de usuario → acción de actualización → nueva vista. | Explicar una operación CRUD de extremo a extremo. | APROBADO como enfoque |
| Estado derivado | Pendientes, completadas y contador calculados desde la lista única. | Demostrar que los filtros no alteran la fuente. | P-01 APROBADA |
| Separación de responsabilidades | Validación fuera de la navegación; lógica de tareas fuera de estilos. | Archivos con responsabilidades identificables. | APROBADO como enfoque |
| Reutilización de lógica | Un solo formulario para crear y editar; posibles hooks de tareas. | Una implementación, dos flujos distintos. | APROBADO como enfoque |
| Actualización inmutable | Nueva colección/objeto al cambiar una tarea, sin mutar el estado de React. | Prueba de que editar una tarea no afecta las restantes. | APROBADO como enfoque |

**Precisión académica:** estos elementos son patrones y principios de diseño aplicables a React; no deben presentarse incorrectamente como si todos fueran patrones formales propios y exclusivos de React Native. En el informe se explicará la naturaleza de cada uno y su aplicación real, sin atribuirse funciones no implementadas.

## 7. Reglas visuales arquitectónicas

Se mantiene el estilo **minimalista profesional** aprobado: fondos claros, grises neutros, azul de acento y jerarquía de información evidente.

- **StyleSheet** para estilos de React Native y **tokens** reutilizables para colores, tipografía, espaciado y bordes.
- Los componentes funcionales usarán la misma escala de estilos; evitar números y colores dispersos sin justificación.
- Etiquetas accesibles, tamaño táctil apropiado, contraste verificable y retroalimentación explícita.
- Errores de validación visibles junto al campo correspondiente; no comunicar el estado solo mediante color.
- No incorporar una librería grande de componentes ni Tailwind/NativeWind en la primera unidad.

La paleta exacta, la tipografía del sistema, los espaciados y los comportamientos están aprobados en [diseño UX/UI](./03-DISENO-UX-UI.md); podrán ajustarse únicamente tras revisión y autorización del equipo con evidencia Android. Los tokens acordados incluyen fondo `#F8FAFC`, superficie `#FFFFFF` y azul principal `#2563EB`.

## 8. Pruebas, calidad y condiciones de integración

**Estrategia B aprobada:** validaciones estáticas + pruebas automatizadas de comportamientos críticos + pruebas manuales Android + evidencia académica.

| Control | Alcance mínimo | Evidencia prevista |
|---|---|---|
| TypeScript estricto | Compilación de tipos sin errores. | Resultado real del comando que se defina al crear el proyecto. |
| ESLint | Reglas de código y hooks de React. | Registro de resultado. |
| Prettier | Consistencia de formato. | Resultado de comprobación. |
| Jest + `jest-expo` | Reglas de tarea, validación, filtros y estado. | Pruebas reproducibles. |
| React Native Testing Library | Formularios, errores, botones y comportamiento visible. | Casos de interacción automatizados. |
| Expo Doctor | Dependencias y configuración, cuando haya proyecto. | Informe real sin problemas críticos abiertos. |
| Android | Navegación Stack, teclado, listas, accesibilidad y tamaños de controles. | Capturas y resultados manuales auténticos. |
| Git / Markdown | Enlaces internos válidos, rutas portables, archivos necesarios versionados. | `CP-DOC-01`: comprobación desde copia limpia del repositorio. |

**Regla:** una comprobación no ejecutada se registra como **NO EJECUTADA**, nunca como aprobada. La compilación por sí sola no acredita una prueba de usabilidad. Los casos, pasos y evidencias se definen en [plan de pruebas](./04-PLAN-PRUEBAS.md).

## 9. Dependencias, cambios y gobierno de agentes

### 9.1. Política de dependencias

1. Priorizar herramientas oficiales y bibliotecas ya incluidas o recomendadas en la versión de Expo adoptada.
2. Evaluar necesidad, compatibilidad, mantenimiento y licencia antes de agregar cada dependencia.
3. Evitar bibliotecas para resolver problemas que la API estándar de React Native/React resuelva de forma sencilla.
4. Mantener `package-lock.json`; no utilizar instalaciones que alteren dependencias sin revisión.
5. No actualizar automáticamente Expo, React Native ni Router durante una etapa funcional sin registrar decisión y comprobar compatibilidad.
6. Mantener Node.js/npm compatibles según requisitos del SDK seleccionado; no asumir que la versión de un equipo será la misma en el del profesor.

### 9.2. Git y desarrollo agéntico

- La rama principal contiene trabajo revisado; las modificaciones significativas se preparan separadas cuando corresponda.
- El agente presenta archivos afectados, motivo del cambio, pruebas ejecutadas y riesgos conocidos.
- No efectuar `push`, cambios destructivos de historial, borrados masivos ni publicación sin autorización humana.
- No añadir credenciales, tokens, información personal sensible ni rutas locales absolutas al repositorio.
- Actualizar únicamente los documentos afectados por un cambio, evitando reescrituras masivas sin necesidad.
- **Si la implementación exige cambiar alguna de las decisiones D-01 a D-07, se detiene y solicita aprobación.**
- Las reglas operativas aprobadas están en [AGENTS.md](../AGENTS.md) y prevalecen para acciones agénticas.

### 9.3. Convenciones de portabilidad

Todas las rutas internas de Markdown serán relativas **desde el documento que las contiene**. Por ejemplo, desde este documento el enlace correcto al precedente es [requisitos y rúbrica](./01-REQUISITOS-RUBRICA.md), y la referencia prevista a `../src/` apunta a la raíz del código cuando exista.

Los enlaces externos a documentación pública pueden utilizar URL HTTPS completas: no son rutas de archivos del repositorio. No se utilizarán rutas locales específicas de una computadora ni referencias a documentos inexistentes como enlaces Markdown.

## 10. Plan de ampliación futura (sin implementación anticipada)

| Posible capacidad posterior | Principio para facilitarla | Estado actual |
|---|---|---|
| Persistencia local | El estado de tareas no depende de detalles de presentación. | FUERA DE ALCANCE |
| Autenticación | La navegación actual no supone usuarios ni sesiones autenticadas. | FUERA DE ALCANCE |
| APIs externas | No mezclar peticiones remotas con componentes de formulario. | FUERA DE ALCANCE |
| Sincronización | Mantener identificadores y operaciones consistentes. | FUERA DE ALCANCE |

No crear interfaces de repositorio, servicios de red, pantallas de acceso ni esquemas de base de datos «para después» en esta unidad.

## 11. Matriz de decisiones abiertas y riesgos

| ID | Tema | Riesgo | Acción antes de implementar | Estado |
|---|---|---|---|---|
| A-01 | SDK / Expo Go / Node | Riesgo de entorno no reproducible. | SDK 58/Expo Go y Node/npm seleccionados; clean install y Expo dependency check PASS; pruebas Android parciales. | VERSIONES SELECCIONADAS; EV EN REVISIÓN |
| A-02 | Estado compartido entre rutas | Riesgo mitigado mediante Context + `useReducer`. | Probar operaciones y navegación entre rutas en Android. | DECISIÓN P-01 APROBADA; PRUEBA PENDIENTE |
| A-03 | Formularios y alertas | Riesgo mitigado por P-UX-01 a P-UX-06 aprobadas. | Verificar teclado, contadores, descarte y mensajes no bloqueantes en Android. | DISEÑO APROBADO; PRUEBA PENDIENTE |
| A-04 | Git frente a ZIP | Entrega incompleta pese a aplicación funcional. | Precisar instrucciones finales de entrega; preparar ambos mientras no se aclare. | PENDIENTE_VERIFICACIÓN |
| A-05 | Plantilla con Tabs/demo | Código y rutas ajenos a Stack. | Plantilla SDK 58 integrada; rutas de muestra retiradas; conservar Stack. | RESUELTO EN CÓDIGO; SMOKE ANDROID PENDIENTE |

## 12. Condiciones para aprobar este documento

- [x] Reproduce las siete decisiones estructurales aprobadas sin añadir funciones nuevas al alcance.
- [x] Distingue las exigencias funcionales de la elección libre del stack aprobada por el equipo.
- [x] Propone responsabilidades y estructura comprensibles para segundo año.
- [x] Explica patrones con ejemplos específicos y sus límites académicos.
- [x] No introduce backend, persistencia ni bibliotecas de estado ajenas al alcance.
- [x] Mantiene rutas y enlaces Markdown internos relativos.
- [x] Versiones del stack seleccionadas para SDK 58; siguen pendientes verificación de Android y gates de ejecución.
- [x] P-01 **aprobada**: Context + `useReducer` para tareas, `useState` local para formulario y filtro.
- [x] Decisiones técnicas y de UX consolidadas por instrucción del equipo.
- [x] Gate académico G0 aprobado para la línea base dentro del repositorio local.

**Estado actual:** proyecto SDK 58 en `chore/mobile-bootstrap` con 4 commits locales (último `a461246`) y cambios sin commit. `npm ci` limpio (CHK-013); Jest 5 suites / 14 pruebas PASS (CHK-018); TypeScript y `expo install --check` PASS tras alinear `react-dom@19.3.0`. Validación Android parcial (CHK-010 a CHK-019); EV pendientes de revisión humana. Sin remoto configurado; no hay publicación.

## 13. Referencias técnicas consultadas

Fuentes públicas externas (no enlaces a archivos del repositorio):

- Expo, **Core concepts of file-based routing**: https://docs.expo.dev/router/basics/core-concepts/
- Expo, **Top-level `src` directory**: https://docs.expo.dev/router/reference/src-directory/
- Expo, **Expo SDK reference**: https://docs.expo.dev/versions/v58.0.0/
- Expo, **Create a project** y transición SDK 57/58: https://docs.expo.dev/get-started/create-a-project/
- Expo, **Expo SDK 58 changelog** (15-10-2026): https://expo.dev/changelog/sdk-58
- Expo, **Unit testing with Jest**: https://docs.expo.dev/develop/unit-testing/
- Expo, **Expo Doctor**: https://docs.expo.dev/develop/tools/
- Expo, **Router manual installation**: https://docs.expo.dev/router/installation/
- Expo, **Expo SDK 58 changelog**: https://expo.dev/changelog/sdk-58
- npm v11, **npm ci**: https://docs.npmjs.com/cli/v11/commands/npm-ci/
- npm registry, metadata de [react-dom 19.3.0](https://registry.npmjs.org/react-dom/19.3.0), [react-dom 19.3.1](https://registry.npmjs.org/react-dom/19.3.1) y [React Native 0.88.1](https://registry.npmjs.org/react-native/0.88.1).
- Documentos académicos originales: *Evaluación sumativa Unidad N.º 1* y *Rúbrica evaluación unidad 1 — Desarrollo de aplicaciones móviles*. Se citan por título; sus PDF no se presumen incorporados al repositorio.

> **Continuidad:** consultar [AGENTS.md](../AGENTS.md) y el último checkpoint de [bitácora](./05-BITACORA.md); continuar dentro de G0 aprobado, sin ampliar el alcance.
