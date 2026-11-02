# To-Do List — Desarrollo de Aplicaciones Móviles (Unidad 1)

> **Estado del proyecto:** aplicación Expo implementada para el alcance aprobado; G1 en validación parcial.
> **Versión del README:** 1.0 — 2026-11-01; documentación consolidada para el harness.  
> **Meta académica:** cubrir los cinco indicadores de la rúbrica, con aspiración al nivel **Sobresaliente (90–100 puntos)**. La calificación corresponde al docente.

## 1. Descripción

Proyecto académico de una aplicación móvil para organizar tareas. Permitirá crear, visualizar, editar y eliminar tareas, marcar su finalización y filtrar la lista. Cada tarea tendrá un título y una descripción.

El docente permitió elegir el framework. El equipo seleccionó **React Native + Expo + TypeScript** por su enfoque de componentes nativos, su compatibilidad con la experiencia previa en React y la disponibilidad de herramientas de desarrollo y pruebas. La comparación técnica y la justificación frente a Ionic están documentadas en [Requisitos y rúbrica](./docs/01-REQUISITOS-RUBRICA.md). No se afirma que Ionic esté obsoleto.

El proyecto se concibe para un curso de segundo año: código comprensible, responsabilidades claras, pruebas verificables y extensibilidad sin sobreingeniería.

## 2. Alcance de la Unidad 1

**Funcionalidades previstas y aprobadas:**

- Visualizar tareas con título y descripción; crear, editar y eliminar tareas específicas.
- Validar ambos campos obligatorios: **título máximo de 100 caracteres y descripción máxima de 500 caracteres**.
- Marcar tareas como pendientes o completadas; filtrar por **Todas**, **Pendientes** y **Completadas**.
- Confirmar una eliminación antes de ejecutarla.
- Mostrar estados vacíos, errores de validación y retroalimentación comprensible.
- Navegar entre lista y formulario reutilizable mediante navegación **Stack**, sin guardar cambios al cancelar.

**Fuera del alcance actual:** almacenamiento persistente, cuentas de usuario, autenticación, backend, sincronización, notificaciones y APIs externas. Durante esta unidad las tareas se almacenarán **en memoria** y pueden desaparecer al reiniciar la aplicación. Las ampliaciones pertenecen a unidades posteriores.

Los requisitos funcionales **RF-01 a RF-10** y los criterios **CA-01 a CA-13** se definen en [Requisitos y rúbrica](./docs/01-REQUISITOS-RUBRICA.md). Los comportamientos P-UX-01 a P-UX-06 están aprobados en [Diseño UX/UI](./docs/03-DISENO-UX-UI.md).

## 3. Tecnologías y arquitectura

| Área | Selección acordada | Estado |
|---|---|---|
| Framework móvil | React Native + Expo | Aprobado; SDK 58 seleccionado e implementado. |
| Lenguaje | TypeScript, modo estricto | Aprobado |
| Navegación | Expo Router, **Stack** | Aprobado |
| Estilos | React Native StyleSheet + tokens de diseño | Aprobado |
| Arquitectura | Modular por funcionalidades | Aprobado |
| Estado | **Context + `useReducer`** para tareas, `useState` local para formulario/filtro | P-01 aprobada |
| Calidad | ESLint 9.39.5 (`eslint.config.js`, `eslint-config-expo` 58.0.4) y Prettier 3.9.10 | Configurados; lint, `expo lint` y format PASS en copia limpia. ESLint 9 está EOL desde 2026-08-06 (ver CHK-014). |
| Pruebas | Jest, `jest-expo`, React Native Testing Library y Android | 5 suites / 14 pruebas PASS (`npx jest`, 2026-11-01; CHK-013 registró 4 / 12); smoke Android parcial. |
| Herramientas | Node.js, npm, VS Code, Git | Node 24.19.0 / npm 11.17.0; Android Studio, AVD y Expo Go presentes; ADB por ruta directa. |

Se aplicarán los principios **SOLID de manera proporcional**, evitando interfaces y capas artificiales. La arquitectura, los patrones y los pendientes técnicos se explican en [Decisiones y arquitectura](./docs/02-DECISIONES-ARQUITECTURA.md).

### Identidad visual

Estilo **minimalista profesional**: tema claro, superficies blancas y grises, acento azul, jerarquía visual reconocible, contraste accesible y controles táctiles adecuados. Especificaciones, formularios y estados de interacción aprobados: [Diseño UX/UI](./docs/03-DISENO-UX-UI.md).

## 4. Documentación del repositorio

La documentación se mantiene en Markdown con **rutas relativas**. Esta es la estructura documental prevista y preparada; **no representa una estructura de código ya creada**:

```text
./
├── README.md
├── AGENTS.md
└── docs/
    ├── 01-REQUISITOS-RUBRICA.md
    ├── 02-DECISIONES-ARQUITECTURA.md
    ├── 03-DISENO-UX-UI.md
    ├── 04-PLAN-PRUEBAS.md
    └── 05-BITACORA.md
```

| Documento | Propósito |
|---|---|
| [AGENTS.md](./AGENTS.md) | Contrato para agentes: autonomía, Context7, SOLID, anti-drift, Git, recuperación y gates. |
| [Requisitos y rúbrica](./docs/01-REQUISITOS-RUBRICA.md) | Alcance funcional, criterios de aceptación y trazabilidad académica. |
| [Decisiones y arquitectura](./docs/02-DECISIONES-ARQUITECTURA.md) | Stack, patrones, arquitectura y P-01 aprobada; versiones reales por verificar. |
| [Diseño UX/UI](./docs/03-DISENO-UX-UI.md) | Pantallas, navegación, identidad visual, accesibilidad y comportamientos. |
| [Plan de pruebas](./docs/04-PLAN-PRUEBAS.md) | Casos de prueba, controles, evidencias y condiciones de cierre. |
| [Bitácora](./docs/05-BITACORA.md) | Checkpoints, estado comprobado, incidencias y transferencia entre agentes. |

Los PDF originales de la evaluación fueron usados como referencia de planificación; **no se presupone que sus archivos estén incluidos en el repositorio**.

## 5. Instalación y ejecución

El proyecto Expo SDK 58 ya está inicializado; `package.json` y `package-lock.json` existen. Desde la raíz:

```sh
npm ci
npm start
```

`npm ci` en copia limpia PASS tras fijar `react-dom@19.3.0` como dev dependency compatible con `react@19.3.0`. La validación exacta está en CHK-013.

**Android:** Android Studio `2026.2.2.8`, AVD Android 16/API 36 y Expo Go instalados. El usuario reporta que la app funciona; no se volvió a comprobar ni se reseteó el AVD. `adb` funciona por ruta completa; las variables Android y PATH no están configurados en este harness.

**Validaciones ejecutadas:** `npm test`, `npm run typecheck`, `npx expo install --check` y `npx expo export --platform android`. La exportación solo comprueba el bundle; no sustituye el smoke visual Android. Calidad: `npm run lint`, `npx expo lint` y `npm run format:check` PASS (CHK-014).

## 6. Calidad, pruebas y evidencias

La estrategia aprobada es **B: calidad equilibrada y verificable**, con comprobaciones progresivas según el impacto y validación real en Android cuando corresponda. Se utilizarán herramientas estáticas, pruebas automatizadas y revisión manual.

- Plan de casos: [Plan de pruebas](./docs/04-PLAN-PRUEBAS.md).
- Resultados auténticos y estado de avance: [Bitácora](./docs/05-BITACORA.md).
- Gobernanza operativa y **Definition of Done**: [AGENTS.md](./AGENTS.md).

**Resultados actuales:** clean `npm ci`, `npm test` (5 suites / 14 en CHK-018; 4 / 12 en CHK-013), TypeScript y `npx expo install --check` PASS (CHK-013). Jest CP-15 (`EditTaskRoute.test.tsx`) y CP-09 (`tasks-reducer.test.ts`) PASS (CHK-018, 2 suites / 7 pruebas). Android: CP-01 (CHK-011) y CP-13 (CHK-011, CHK-016) observados; CP-02 a CP-08 observados (CHK-010); CP-03, CP-11, CP-13 y CP-16 PASS observados (CHK-016); CP-UX-01 (contadores 100/500), CP-UX-02 (flecha Atrás), CP-UX-03 y CP-UX-05 PASS parcial; CP-UX-04 PASS (CHK-017); CP-MOV-02 con fuente 130 % observado. CP-12 NO VERIFICABLE en emulador. Pendientes: CP-15 en Android, TalkBack, teclado (CP-MOV-08/CP-12), recorrido humano y revisión humana de EV-12/13/14.

### Matriz de la evaluación (100 puntos)

| Indicador | Máximo |
|---|---:|
| Fundamentos del framework y arquitectura | 14 |
| Patrones de diseño | 18 |
| Diseño de interfaz | 12 |
| Implementación de componentes | 28 |
| Usabilidad | 28 |
| **Total** | **100** |

Las evidencias definitivas y la adaptación al framework elegido se organizarán según la matriz del [documento de requisitos](./docs/01-REQUISITOS-RUBRICA.md).

## 7. Desarrollo agéntico en harness externo

El desarrollo futuro se realizará en una **aplicación de harness externa**, con el agente que el equipo identifica como **«GPT-6 Luna»**. Esta denominación es un dato del flujo de trabajo del equipo y **no garantiza** integraciones, permisos ni herramientas disponibles.

Antes de cualquier modificación, el agente deberá:

1. Leer [AGENTS.md](./AGENTS.md) y la documentación pertinente desde el repositorio efectivo.
2. Ejecutar el *preflight* de capacidades: acceso al repositorio, permisos, terminal, Git, **Context7** y disponibilidad de Android; reportar lo no verificado.
3. Revisar el último checkpoint de [Bitácora](./docs/05-BITACORA.md) y comprobar el estado real de Git, si está disponible.
4. Respetar P-01 y P-UX-01 a P-UX-06 ya aprobadas; solicitar autorización solo para nuevas decisiones o cambios a la línea base.
5. Aplicar SOLID pragmático, control anti-drift y gates progresivos; no declarar pruebas como aprobadas sin haberlas ejecutado.

**Políticas aprobadas:** autonomía B; Git B (ramas y commits locales controlados, sin integración ni publicación automática); recuperación B (máximo dos intentos correctivos); gates B; checkpoints B.

**Este README no sustituye la autorización del equipo.** G0 está aprobado para implementar la línea base; el estado y las verificaciones actuales están registrados en [bitácora](./docs/05-BITACORA.md). No ampliar el alcance ni declarar G1/G2/GA-4 aprobados sin sus comprobaciones.

## 8. Colaboración y control de cambios

- Git será la fuente versionada; los agentes no deben confundir archivos preparados fuera del harness con archivos efectivamente incluidos en el repositorio.
- Se utilizarán ramas de trabajo para cambios relevantes. La integración y publicación remota necesitan aprobación humana.
- Se conservará `package-lock.json`; no se versionarán `node_modules`, artefactos generados innecesarios, credenciales ni archivos personales.
- Los cambios aprobados se acompañarán de actualización documental y checkpoint cuando corresponda.
- Todo enlace **interno** de Markdown será relativo a la ubicación del propio documento. Los comandos indicarán desde qué directorio deben ejecutarse.

## 9. Entrega académica — pendiente de preparación

La entrega contemplará, conforme a las instrucciones finales del profesor:

- Repositorio Git con código, configuración y documentación reproducibles.
- Carpeta del proyecto comprimida en ZIP, si se mantiene esa exigencia.
- Informe académico en Word o PDF, con portada, Arial 12, interlineado 1,15, justificación y páginas numeradas, según el documento de evaluación.
- Capturas auténticas de la aplicación ejecutándose y evidencias de las pruebas.
- Coevaluación del equipo, si corresponde a la entrega final.

**Ninguno de esos entregables se declara finalizado.** La fecha y modalidad definitiva de publicación todavía deben confirmarse.

## 10. Estado actual y siguiente decisión

- **Documentación:** siete Markdown en la estructura prevista; `.omp/mcp.json` configura Context7.
- **Git local:** rama `chore/mobile-bootstrap`; 3 commits locales (último `db2d420`); sin remoto. Hay cambios sin commit en `docs/`, `src/` y archivos sin seguimiento (`git status --short`).
- **Context7:** no está disponible en este harness (`CONTEXT7_NO_DISPONIBLE`). El usuario autorizó usar fuentes oficiales para resolver el peer conflict; no se afirma uso de Context7.
- **Aplicación:** scaffold y CRUD, filtros, formulario, validación y estados vacíos implementados; tareas solo en memoria.
- **Decisiones funcionales:** P-01/P-UX aprobadas; SDK 58/Expo Go, Node 24.19 y npm 11.17 seleccionados. G0 aprobado; G1 en validación parcial (CHK-014, CHK-018).
- **Android:** AVD `emulator-5554` (Android 16 / API 36) con Expo Go; pruebas parciales en CHK-010 a CHK-018. `font_scale` en 1.0. ADB solo por ruta completa (no está en PATH).
- **Gates:** G0 APROBADO; G1 en validación parcial; G2–G4 no aprobados.
- **Siguiente paso:** CP-15 en Android (deep link con recarga de Expo Go); TalkBack (CP-MOV-06) y recorrido humano (CP-MOV-09); teclado (CP-MOV-08/CP-12) con teclado físico o AVD con teclado software; revisión humana de EV-12/13/14 y capturas CP-UX. No modificar otras versiones sin verificación oficial.

El estado más reciente y sus evidencias deben consultarse siempre en [Bitácora](./docs/05-BITACORA.md). No asumir que este resumen está actualizado si existe un checkpoint posterior.
