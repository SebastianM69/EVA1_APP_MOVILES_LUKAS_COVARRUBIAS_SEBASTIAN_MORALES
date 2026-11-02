# To-Do List — Desarrollo de Aplicaciones Móviles (Unidad 1)

Aplicación móvil para organizar tareas: crear, ver, editar, eliminar, marcar como pendiente o completada, y filtrar la lista. Cada tarea tiene título y descripción.

> **Estado:** implementación del alcance de la Unidad 1 en progreso; validación parcial. Resultados detallados en la [Bitácora](./docs/05-BITACORA.md).
> **Verificado sobre:** commit `aae31d5` de la rama `chore/mobile-bootstrap`.

## 1. Stack tecnológico

| Área | Tecnología | Versión | Uso en el proyecto |
|---|---|---|---|
| Framework móvil | React Native + Expo SDK | `react-native` 0.88.1; `expo` ~58.0.22 | Componentes nativos; ejecución con Expo Go |
| Lenguaje | TypeScript (modo estricto) | ~6.0.3 | Tipado de modelos, reducer y componentes |
| UI | React | 19.3.0 | Componentes funcionales y hooks |
| Navegación | Expo Router (Stack) | ~58.0.29 | Rutas basadas en archivos en `src/app/` |
| Estado | Context + `useReducer` (tareas); `useState` local (formulario y filtro) | — | Ver §2 |
| Estilos | `StyleSheet` + tokens de diseño | — | `src/theme/tokens.ts` |
| Pruebas | Jest + `jest-expo` + React Native Testing Library | ~30.5.2; ~58.0.13; ^14.1.0 | Pruebas unitarias y de componentes |
| Calidad | ESLint + `eslint-config-expo`; Prettier; `tsc --noEmit` | 9.39.5; 58.0.4; 3.9.10 | Lint, formato y tipos |

Dependencias exactas en [package.json](./package.json); versiones bloqueadas en [package-lock.json](./package-lock.json).

## 2. Justificación del stack

- **React Native + Expo:** el docente permitió elegir tecnología. El equipo eligió React Native porque genera componentes nativos y reutiliza conocimientos previos de React y TypeScript. Expo añade herramientas integradas (CLI, Expo Go, Expo Router) que permiten ejecutar la app sin configurar compilación nativa. Este alcance es pequeño, por lo que priorizar funcionalidad y pruebas frente a configuración nativa es la opción más directa.
- **TypeScript estricto:** errores de tipos se detectan antes de ejecutar; el modelo de tarea y las acciones del reducer quedan tipados.
- **Context + `useReducer` para tareas:** el estado de tareas es único, compartido entre pantallas y tiene transiciones explícitas (crear, editar, eliminar, cambiar estado). Un reducer las concentra y facilita probarlas sin renderizar la interfaz. No se usa Redux ni Zustand: añadirían dependencias sin un problema que resuelvan en este alcance.
- **`useState` local para formulario y filtro:** su estado no se comparte entre pantallas; no justifica un store global.
- **Expo Router (Stack):** navegación lista → formulario con rutas por archivo (`src/app/tasks/new.tsx`, `src/app/tasks/[id]/edit.tsx`), sin configuración manual de navegadores.
- **Jest + React Native Testing Library:** `jest-expo` aporta el preset oficial para React Native y RNTL prueba componentes según la interacción del usuario.
- **Alternativa descartada: Ionic.** Es una opción válida y vigente, especialmente adecuada si el objetivo principal es reutilizar una aplicación web o publicar una PWA. No se descartó por obsolescencia. Comparación completa y fuentes en [Requisitos y rúbrica §1.2](./docs/01-REQUISITOS-RUBRICA.md) y decisión D-01 en [Decisiones y arquitectura](./docs/02-DECISIONES-ARQUITECTURA.md).
- **Limitaciones reconocidas:** React Native exige atender diferencias entre plataformas y compatibilidad de dependencias; Expo no elimina esas responsabilidades.

## 3. Requisitos

- **Node.js 24.19.0** y **npm 11.17.0** (versiones usadas en el desarrollo).
- **Git**.
- Para ejecutar en Android: **Expo Go** instalado en un dispositivo físico (misma red que el equipo) o un emulador Android (Android Studio, AVD Android 16 / API 36 usado en las pruebas).
- iOS: no verificado en este proyecto.

## 4. Instalación y ejecución

Desde una terminal:

```sh
git clone https://github.com/SebastianM69/EVA1_APP_MOVILES_LUKAS_COVARRUBIAS_SEBASTIAN_MORALES.git
cd EVA1_APP_MOVILES_LUKAS_COVARRUBIAS_SEBASTIAN_MORALES
npm ci
npm start
```

- Usar **`npm ci`** (no `npm install`): instala exactamente las versiones de `package-lock.json`. No usar `--force` ni `--legacy-peer-deps`: `react-dom@19.3.0` está declarado como devDependency para satisfacer la peer dependency de `react@19.3.0`.
- Con `npm start` se abre Metro. En el dispositivo con Expo Go, escanear el código QR.
- Con un emulador Android en ejecución: `npm run android`.

| Script | Función |
|---|---|
| `npm start` | Inicia Expo (Metro) |
| `npm run android` | Inicia Expo y abre en Android |
| `npm run ios` | Inicia Expo para iOS (no verificado) |
| `npm test` | Ejecuta Jest (`--runInBand`) |
| `npm run typecheck` | Verifica tipos con `tsc --noEmit` |
| `npm run lint` | ESLint sobre el proyecto |
| `npm run format:check` | Prettier en modo verificación |

## 5. Calidad y pruebas

Resultados del commit `aae31d5` en clon limpio. Revalidación del árbol de trabajo (CHK-027): `npx jest`, `npm run lint`, `npm run typecheck` y `npm run format:check` re-ejecutados; `npx expo install --check` no re-ejecutado (resultado de la tabla, del registro previo).

| Comprobación | Comando | Resultado |
|---|---|---|
| Instalación limpia | `npm ci` | PASS |
| Pruebas unitarias y de componentes | `npm test` | PASS: 4 suites / 12 pruebas |
| Tipos | `npm run typecheck` | PASS |
| Lint | `npm run lint` | PASS |
| Formato | `npm run format:check` | **FAIL**: 22 archivos en `aae31d5` (registro previo); **FAIL** en 3 archivos de `src/` en el árbol de trabajo (CHK-027). CHK-014 registró PASS: contradicción sin resolver. |
| Compatibilidad de versiones Expo | `npx expo install --check` | PASS |

Android (AVD Android 16 / API 36, Expo Go; CHK-017): CP-UX-01, CP-UX-02 y CP-UX-04 PASS observados; CP-UX-03 y CP-UX-05 PASS parcial. Revisión humana pendiente.

## 6. Estructura del proyecto

```text
.
├── app.json · eslint.config.js · tsconfig.json · .prettierrc.json
├── assets/                  Iconos y recursos de Expo
├── src/
│   ├── app/                 Rutas de Expo Router
│   │   ├── _layout.tsx      Stack y proveedor de tareas
│   │   ├── index.tsx        Lista «Mis tareas» y filtros
│   │   └── tasks/           new.tsx y [id]/edit.tsx
│   ├── components/          ActionButton.tsx
│   ├── features/tasks/
│   │   ├── components/      TaskForm, TaskCard y pruebas
│   │   ├── context/         tasks-context.tsx
│   │   ├── model/           task.ts, tasks-reducer.ts, task-selectors.ts y pruebas
│   │   └── validation/      validate-task.ts y pruebas
│   └── theme/tokens.ts      Colores y espaciados
└── docs/                    Requisitos, decisiones, diseño, pruebas, evidencias y bitácora
```

## 7. Documentación

| Documento | Contenido |
|---|---|
| [AGENTS.md](./AGENTS.md) | Reglas de desarrollo, control de cambios y criterios de cierre |
| [Requisitos y rúbrica](./docs/01-REQUISITOS-RUBRICA.md) | Requisitos funcionales, criterios de aceptación y comparación de framework |
| [Decisiones y arquitectura](./docs/02-DECISIONES-ARQUITECTURA.md) | Decisiones D-01 a D-07, patrones y versiones |
| [Diseño UX/UI](./docs/03-DISENO-UX-UI.md) | Pantallas, navegación, identidad visual y comportamientos P-UX-01 a P-UX-06 |
| [Plan de pruebas](./docs/04-PLAN-PRUEBAS.md) | Casos CP-*, gates y matriz de evidencias |
| [Bitácora](./docs/05-BITACORA.md) | Checkpoints CHK-* con resultados, incidencias y estado verificado |

## 8. Limitaciones conocidas

- **Tareas solo en memoria:** se pierden al cerrar o reiniciar la app. Persistencia, cuentas y backend quedan fuera de la Unidad 1.
- **`npm run format:check` falla** en el commit `aae31d5` (22 archivos según el registro previo) y en el árbol de trabajo actual (CHK-027; 3 archivos de `src/`: `src/app/index.tsx`, `src/features/tasks/components/TaskForm.tsx`, `TaskForm.test.tsx`). No se ha corregido.
- **Pruebas Android parciales:** CP-12 (teclado físico) NO VERIFICABLE en emulador, descartado por el usuario (CHK-028). Capturas de EV-12/13/14 y copias de `%TEMP%` revisadas por el usuario (CHK-028). CP-MOV-06, CP-MOV-08 y CP-MOV-09 registrados por el revisor en CHK-026. Estado en la [Bitácora](./docs/05-BITACORA.md).
- **iOS:** no verificado.
- **Estado del repositorio:** `EditTaskRoute.test.tsx` no existe en el repositorio (eliminado en CHK-023). Los conteos de pruebas corresponden a 4 suites / 12 pruebas.

## 9. Desarrollo y control de cambios

- Ramas de trabajo para cambios relevantes; integración y publicación con aprobación del equipo.
- Se versiona `package-lock.json`. No se versionan `node_modules`, `.expo/` ni credenciales.
- Los cambios aprobados actualizan la documentación y la bitácora. Reglas completas en [AGENTS.md](./AGENTS.md).

## 10. Entrega académica

Incluirá el repositorio Git (rama `chore/mobile-bootstrap`, sincronizada con `origin`), el informe académico y las capturas de ejecución y pruebas, según las instrucciones del docente.
