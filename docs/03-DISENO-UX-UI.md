# 03 — Diseño de experiencia de usuario e interfaz móvil

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Estado:** P-UX-01 a P-UX-06 aprobadas; código inicial implementado; validación visual Android pendiente
> **Versión:** 1.0 — P-UX-01 a P-UX-06 cerradas  
> **Fecha:** 2026-11-01  
> **Decisiones aprobadas que aplica:** alcance funcional B, navegación Stack B, identidad visual A, arquitectura modular B y calidad B  
> **Tecnología:** React Native + Expo SDK 58 + TypeScript; Expo Go en emulador elegido

## 1. Propósito, límites y trazabilidad

Este documento determina **cómo se verá y comportará** la aplicación móvil antes de implementarla. Define criterios visuales, navegación, formularios, retroalimentación, estados, accesibilidad y comprobaciones de usabilidad. Las decisiones P-UX-01 a P-UX-06 están **APROBADAS** por el equipo; los ajustes posteriores que afecten la experiencia requieren nueva autorización.

**Fuentes internas verificadas en este repositorio documental:**

- [01 — Requisitos, alcance y rúbrica](./01-REQUISITOS-RUBRICA.md): RF-01 a RF-10; CA-01 a CA-13; RUB-01 a RUB-05.
- [02 — Decisiones técnicas y arquitectura](./02-DECISIONES-ARQUITECTURA.md): D-01 a D-07, decisión P-01 aprobada de Context + `useReducer` y contratos de navegación.

El enunciado académico original y la rúbrica se identifican por nombre dentro del documento 01. **No se supone que sus PDF estén almacenados en Git**. La elección de React Native fue permitida por el profesor; esta especificación presenta componentes de React Native, no componentes `ion-*`.

**Fuera de alcance:** prototipos comerciales complejos, autenticación, sincronización, base de datos, notificaciones, prioridad de tareas, fechas, categorías y una interfaz para escritorio. No se elaborarán capturas ficticias ni se afirmará que existen pantallas implementadas.

## 2. Personas usuarias, objetivos y principios

**Usuario principal previsto:** una persona que necesita anotar y gestionar tareas cotidianas desde un teléfono Android, sin conocimientos técnicos. Es una hipótesis de diseño, no el resultado de entrevistas ni de una investigación de usuarios realizada.

**Objetivos observables:**

1. Reconocer en la pantalla principal cuántas tareas tiene pendientes y qué puede hacer a continuación.
2. Crear una tarea completa sin instrucciones externas.
3. Editar, completar, reabrir y eliminar tareas sin confundirlas ni afectar otras.
4. Identificar los errores y recuperar el control sin perder datos por accidente.
5. Utilizar la aplicación con teclado, tamaños de pantalla distintos y herramientas básicas de accesibilidad.

**Principios aprobados:** claridad antes que decoración; acciones reconocibles; retroalimentación inmediata; consistencia entre pantallas; prevención de errores; control explícito sobre operaciones destructivas; interfaz de uso táctil. **No se adoptan efectos, animaciones, menús o dependencias visuales sin una necesidad identificada.**

## 3. Sistema visual — estilo A minimalista profesional

### 3.1. Paleta y roles de color

Se mantiene la decisión aprobada **fondo claro + neutros + azul de acento**. Los valores siguientes son los **tokens aprobados (P-UX-01)**, sujetos a validación visual real en Android (la validación no equivale a autorización para cambiarlos).

| Token conceptual | Hexadecimal aprobado | Uso | Criterio |
|---|---|---|---|
| `background` | `#F8FAFC` | Fondo general de pantallas | Superficie clara sin ruido visual. |
| `surface` | `#FFFFFF` | Formularios, tarjetas, diálogos | Separar el contenido del fondo. |
| `primary` | `#2563EB` | Botón principal, filtro activo, foco | Azul consistente para interacción. |
| `primaryPressed` | `#1D4ED8` | Estado presionado del botón principal | Respuesta táctil perceptible. |
| `textPrimary` | `#0F172A` | Títulos, descripciones y contenido esencial | Lectura de alto contraste. |
| `textSecondary` | `#475569` | Metadatos y etiquetas secundarias | Legibilidad sin competir con títulos. |
| `border` | `#CBD5E1` | Bordes y separadores | **No** usar como color de texto importante. |
| `success` | `#15803D` | Indicadores secundarios de operación exitosa | Acompañar siempre con texto o símbolo. |
| `danger` | `#B91C1C` | Acción destructiva y errores | Acompañar siempre con texto comprensible. |

**Comprobación preliminar de pares de texto** (razones calculadas a partir de colores hexadecimales, no auditoría visual del producto): `textPrimary`/`surface` ≈ 17,85:1; `textSecondary`/`surface` ≈ 7,58:1; blanco/`primary` ≈ 5,17:1; blanco/`danger` ≈ 6,47:1. Las pruebas con tamaños de fuente, estados y componentes reales siguen pendientes.

**Reglas:** no usar azul para indicar éxito; no representar error únicamente por rojo; no reducir tanto la opacidad de textos deshabilitados que resulten ilegibles; mantener un foco o estado activo visible además del color; usar el blanco como texto del botón azul principal.

### 3.2. Tipografía, jerarquía y espaciado

Se utilizará la **tipografía del sistema** de React Native, sin una dependencia externa inicial. Los tamaños son recomendaciones para el primer prototipo, expresados como unidades tipográficas escalables de React Native y sujetos a pruebas con ajuste de fuente del sistema.

| Rol | Tamaño de referencia | Peso | Aplicación |
|---|---:|---|---|
| Título de pantalla | 26–28 | Negrita | «Mis tareas». |
| Título de tarea | 17–18 | Seminegrita | Identificar rápidamente cada tarea. |
| Texto y campos | 16 | Regular | Descripción, entradas y botones. |
| Etiquetas y ayuda | 14 | Regular/medio | Contador, errores y textos secundarios. |

- **Espaciado:** escala base 4, 8, 12, 16 y 24; margen horizontal usual de 16 (ajustable según pantalla); separación uniforme entre tarjetas y campos.
- **Proporción:** botón principal ancho, tarjetas con espacio suficiente; sin columnas estrechas que corten títulos o acciones.
- **Ritmo:** separar visualmente encabezado, filtros, lista y acción de nueva tarea mediante espacios constantes.
- **Balance:** preferir superficies limpias y agrupación lógica a sombras pronunciadas; bordes y redondeos discretos.
- **Escalado de texto:** permitir incremento del tamaño de fuente configurado en Android; usar envoltura y desplazamiento antes que cortar contenido esencial.

### 3.3. Adaptación a tamaño de pantalla

El diseño será **responsivo dentro del teléfono**, sin fijar anchos absolutos de pantalla. Las pruebas considerarán, cuando sea posible, una pantalla Android relativamente estrecha y otra de mayor tamaño o configuración de fuente ampliada. Las dimensiones y modelos reales se documentarán cuando se ejecuten las pruebas.

- Respetar área segura, barra de estado y barra de navegación del sistema.
- Mantener el contenido útil y los controles alcanzables si se abre el teclado.
- Permitir desplazamiento vertical en lista y formulario; no ocultar el botón «Guardar» tras el teclado.
- No presuponer orientación horizontal; el comportamiento en rotación se registrará si se prueba.
- Los filtros deberán poder ajustarse o desplazarse horizontalmente si no caben, **sin cortar sus etiquetas**.

## 4. Mapa de pantallas y navegación — decisión B aprobada

Se consideran **dos diseños de pantalla reutilizables** y **tres rutas lógicas**, de acuerdo con el documento de arquitectura:

| Pantalla | Ruta de referencia desde `docs/` | Encabezado | Acciones |
|---|---|---|---|
| Lista | `../src/app/index.tsx` (prevista, no creada) | «Mis tareas» | Filtrar, completar/reabrir, editar, eliminar y «Nueva tarea». |
| Formulario nuevo | `../src/app/tasks/new.tsx` (prevista) | «Nueva tarea» | Guardar, cancelar y volver. |
| Formulario editar | `../src/app/tasks/[id]/edit.tsx` (prevista) | «Editar tarea» | Guardar cambios, cancelar y volver. |

Las rutas concretas **no son enlaces Markdown** porque todavía no se han creado. La pantalla de creación y la de edición compartirán un mismo componente de formulario dentro de la funcionalidad de tareas. La navegación será de tipo **Stack**, no pestañas; habrá una confirmación para eliminar, pero no una ruta adicional de eliminación.

### 4.1. Flujo de creación

1. El usuario abre «Mis tareas» y pulsa «Nueva tarea».
2. La aplicación muestra el formulario vacío con título y descripción.
3. El usuario ingresa ambos campos y pulsa «Guardar tarea».
4. Si los datos son inválidos, el formulario permanece abierto y comunica el error en el campo afectado.
5. Si son válidos, se crea **una sola tarea pendiente**, se restablece el borrador del formulario y se retorna a la lista; la tarea debe verse en el filtro «Todas» y en «Pendientes».
6. Si el usuario cancela sin guardar, no se agrega ninguna tarea.

**Restricción de alcance:** las tareas existen únicamente durante la sesión en memoria. No deben presentarse mensajes que prometan sincronización o conservación después de reiniciar la aplicación.

### 4.2. Flujo de edición

1. En una tarea concreta, el usuario selecciona «Editar».
2. Se abre el **mismo formulario reutilizable**, precargado con el título y la descripción de esa tarea.
3. Los cambios se realizan sobre un **borrador separado** del estado definitivo.
4. «Guardar cambios» valida los datos y modifica solo el identificador seleccionado, sin duplicar la tarea ni cambiar su estado de completitud.
5. «Cancelar» o un retorno confirmado descarta el borrador y conserva la tarea original.
6. Si el identificador ya no existe, se muestra un estado controlado con la indicación «No encontramos esta tarea» y la acción «Volver a mis tareas».

### 4.3. Flujo de completitud y filtros

- El control de estado cambia entre **«Marcar como completada»** y **«Marcar como pendiente»**.
- Una tarea completada conserva sus datos y muestra una indicación textual «Completada»; el cambio no depende solo del color ni de texto tachado.
- Los filtros son **«Todas»**, **«Pendientes»** y **«Completadas»**. El filtro inicial **aprobado** es «Todas» (P-UX-02).
- El contador de encabezado indica el número de tareas **pendientes**, no el total de tareas; se recalcula cuando cambian los datos.
- Filtrar **no elimina ni modifica** tareas; muestra una vista derivada de una colección única.
- Si al completar una tarea esta deja de cumplir el filtro «Pendientes», su desaparición de esa vista es correcta y debe acompañarse de una respuesta comprensible; seguirá visible en «Todas» y «Completadas».

### 4.4. Flujo de eliminación

1. El usuario pulsa «Eliminar» en una tarea determinada.
2. Aparece un diálogo con el nombre de la tarea cuando resulte legible: «¿Eliminar “{título}”?».
3. El mensaje aclara «Esta acción no se puede deshacer».
4. Se ofrecen «Cancelar» y «Eliminar»; **Cancelar es la opción de salida segura**.
5. Solo tras confirmar se elimina la tarea seleccionada. La lista y el contador se actualizan de inmediato.

Se evitarán gestos exclusivos de deslizar para eliminar, ya que dificultarían el descubrimiento de la acción y la accesibilidad.

## 5. Especificación de componentes por pantalla

### 5.1. Pantalla «Mis tareas»

**Orden visual y de lectura recomendado:**

1. **Encabezado:** «Mis tareas» y subtítulo dinámico, por ejemplo «2 tareas pendientes». Cuando no existan pendientes, «No tienes tareas pendientes».
2. **Selector de filtros:** «Todas» / «Pendientes» / «Completadas», con estado seleccionado distinguible por color, contorno y semántica accesible.
3. **Lista desplazable:** tarjetas de tarea con título, descripción, estado y acciones explícitas.
4. **Acción principal persistente en la pantalla:** botón «Nueva tarea» con texto; evitar un icono «+» sin etiqueta como única pista.

**Tarjeta de tarea — composición aprobada (P-UX-03):**

- Zona superior: control accesible para completar/reabrir, título y estado visible.
- Descripción debajo del título; permitir varias líneas; evitar que la tarjeta aumente indefinidamente para textos extensos.
- Zona inferior: botones con texto **«Editar»** y **«Eliminar»**, cada uno con área táctil adecuada. Se prefiere esta solución al menú de puntos porque las acciones serán más descubribles para una evaluación inicial de usabilidad.
- La selección de una tarjeta por sí sola **no edita ni elimina**: cada acción tiene intención y etiqueta explícitas.
- No utilizar el índice de posición como identificador de la tarea.

**Lista vacía general:** título «Aún no tienes tareas»; apoyo «Crea tu primera tarea para comenzar»; acción «Nueva tarea».

**Lista vacía por filtro:** «No tienes tareas pendientes» o «No tienes tareas completadas», según corresponda; permitir cambiar a «Todas»; no sugerir que los datos se borraron.

### 5.2. Pantalla de formulario compartido

| Campo/elemento | Creación | Edición | Reglas comunes |
|---|---|---|---|
| Encabezado | «Nueva tarea» | «Editar tarea» | Volver según comportamiento de borrador. |
| Campo título | Vacío | Texto existente | Etiqueta visible «Título», obligatorio. |
| Campo descripción | Vacío | Texto existente | Etiqueta «Descripción», obligatorio, entrada multilineal. |
| Acción principal | «Guardar tarea» | «Guardar cambios» | No ejecutarse con datos inválidos. |
| Acción secundaria | «Cancelar» | «Cancelar» | No modifica las tareas al descartar. |
| Errores | Bajo el campo correspondiente | Igual | Mensaje preciso y accesible. |

**Reglas de datos aprobadas (P-UX-04):** ambos campos son obligatorios; **100 caracteres máximo para título y 500 para descripción**. El formulario impedirá escribir/pegar más allá de esos límites y mostrará contadores de caracteres (`n/100` y `n/500`). Al guardar se eliminan espacios al inicio y final de ambos campos, se exige contenido real y se aplica la validación también en la lógica de tareas para impedir valores fuera de rango que lleguen por otra vía. Los límites son una decisión del equipo, **no** una exigencia original del enunciado.

**Mensajes de error aprobados como especificación de UX, usando lenguaje directo:**

| Situación | Texto mostrado |
|---|---|
| Título vacío o compuesto solo por espacios | «Ingresa un título para la tarea». |
| Descripción vacía o compuesta solo por espacios | «Ingresa una descripción para la tarea». |
| Título excede el máximo aprobado | «El título supera el máximo de 100 caracteres». |
| Descripción excede el máximo aprobado | «La descripción supera el máximo de 500 caracteres». |
| Edición de tarea inexistente | «No encontramos esta tarea». |

La validación se ejecuta al guardar y puede actualizarse después de que el usuario corrija el campo; evitar errores intimidantes antes de que el usuario empiece a escribir. Ante un error, se mantiene el contenido introducido y se orienta la atención al primer campo inválido.

**Teclado y retorno:** la descripción debe permitir varias líneas; todo el formulario debe ser desplazable con el teclado abierto. El botón de guardar no debe taparse con el teclado. Si existen cambios en el borrador, tanto «Cancelar» como la flecha de volver y el botón físico de retorno de Android seguirán la misma regla de confirmación de descarte (P-UX-05). Si no existen cambios, se puede volver sin diálogo. Si la plataforma no permite interceptar una ruta de retorno en algún caso, la implementación deberá resolverlo explícitamente antes de considerar aprobado RF-10.

### 5.3. Diálogos y mensajes de resultado

| Evento | Presentación aprobada | Texto mínimo |
|---|---|---|
| Confirmar eliminación | Diálogo nativo de Android | «¿Eliminar “{título}”? Esta acción no se puede deshacer». |
| Descartar un borrador modificado | Diálogo nativo | «Tienes cambios sin guardar. ¿Quieres descartarlos?»; acciones «Seguir editando» y «Descartar cambios». |
| Tarea agregada | Confirmación breve no bloqueante y lista actualizada | «Tarea agregada». |
| Tarea editada | Confirmación breve no bloqueante y lista actualizada | «Cambios guardados». |
| Tarea eliminada | Confirmación breve no bloqueante y lista actualizada | «Tarea eliminada». |
| Tarea completada/reabierta | Cambio visible del estado, con anuncio accesible cuando aplique | «Tarea completada» / «Tarea marcada como pendiente». |

Los mensajes de éxito no deben bloquear la navegación ni disparar diálogos innecesarios. Se utilizará un **mensaje contextual breve, no bloqueante, integrado con componentes disponibles de React Native**, con texto accesible y sin biblioteca de notificaciones adicional. La ubicación y mecanismo técnico se comprobarán con la versión de Expo elegida mediante Context7; esa verificación no habilita introducir otra dependencia ni cambiar la decisión de UX.

## 6. Estados de interfaz y manejo de errores

| Estado | Qué observa el usuario | Acción de recuperación o continuación |
|---|---|---|
| Inicio sin tareas | Estado vacío general, sin errores | «Nueva tarea». |
| Lista con tareas | Tarjetas, contador y filtros | Gestionar cualquiera de las tareas. |
| Filtro sin coincidencias | Mensaje específico del filtro, sin sugerir eliminación | Cambiar a «Todas». |
| Formulario válido | Campos completos | Guardar. |
| Formulario inválido | Error bajo campo y borrador conservado | Corregir y volver a guardar. |
| Edición sin cambios | Valores precargados y acción para regresar | Volver/cancelar sin modificar datos. |
| Edición con cambios | Borrador distinto del original | Guardar o confirmar descarte. |
| Eliminación pendiente | Diálogo de confirmación | Cancelar o eliminar explícitamente. |
| Tarea inexistente | Mensaje controlado, sin pantalla en blanco | «Volver a mis tareas». |
| Sesión reiniciada | Lista comienza vacía si no existe persistencia | Crear tareas; explicar el alcance en el README e informe. |

No se diseñarán estados ficticios de carga remota o desconexión porque la Unidad 1 no utiliza backend ni API. Si una operación local fallase de forma inesperada, se debe comunicar sin inventar la causa.

## 7. Accesibilidad y uso táctil

### 7.1. Controles y lectura asistida

- **Objetivo táctil Android:** área interactiva mínima de **48 × 48 dp** para botones, filtros, control de completitud y acciones de cada tarea; separación suficiente para evitar toques accidentales. Esta recomendación corresponde a Android, no se confunde con los tamaños en píxeles CSS de WCAG.
- Cada acción debe exponer una etiqueta comprensible al lector de pantalla, por ejemplo «Editar tarea Preparar evaluación», «Eliminar tarea Preparar evaluación», «Marcar Preparar evaluación como completada».
- Representar el estado seleccionado del filtro y el estado completado de la tarea mediante propiedades semánticas de accesibilidad cuando existan en los componentes utilizados, además de la señal visual.
- Los campos deben tener etiquetas persistentes; no depender exclusivamente de un marcador de posición que desaparezca al escribir.
- Los errores deben identificarse mediante texto y ser anunciables con herramientas de accesibilidad, sin depender exclusivamente del color.
- Mantener orden de lectura lógico: encabezado → filtros → tareas → crear. En formularios: encabezado → título → descripción → guardar/cancelar.
- Probar con **TalkBack** en Android, al menos en los flujos de creación, edición, completar y eliminación. Si no se dispone de TalkBack, registrar **NO EJECUTADO** y no afirmar conformidad comprobada.

### 7.2. Contraste y legibilidad

Los pares de texto normales deberán aspirar a **4,5:1** y el texto grande a **3:1** como referencia de contraste de WCAG. WCAG es una norma web usada aquí como **referente de accesibilidad visual**; ello no constituye una certificación automática de accesibilidad de una aplicación nativa. Los elementos de interfaz deben distinguirse claramente en sus estados activo, presionado y de error.

### 7.3. Interacciones sin gestos ocultos

No exigir deslizar, mantener pulsado o realizar gestos complejos para editar o eliminar. Todas las acciones principales estarán representadas mediante controles visibles, etiquetados y accesibles por toque y lector de pantalla.

**Fuentes oficiales para estas referencias:**

- Android Developers, **Make apps more accessible** — https://developer.android.com/guide/topics/ui/accessibility/views/apps-views
- React Native, **Accessibility** — https://reactnative.dev/docs/accessibility
- W3C, **WCAG 2.2** — https://www.w3.org/TR/WCAG22/
- Expo, **Stack navigation** — https://docs.expo.dev/router/advanced/stack/

Los enlaces HTTPS anteriores son referencias externas oficiales; **no son rutas locales del repositorio**.

## 8. Trazabilidad UX/UI y evidencia esperada

Esta matriz propone **qué comprobar después de implementar**. Ninguna prueba ni captura se ha realizado en esta etapa.

| Requisitos | Diseño o interacción que los cubre | Aceptación asociada | Evidencia futura |
|---|---|---|---|
| RF-01, RF-09 | Lista, encabezado, tarjetas y estados vacíos | CA-01, CA-13 | Capturas reales de lista y vacío. |
| RF-02, RF-05 | Formulario de creación, validación y limpiar tras guardar | CA-02, CA-03 | Pruebas de formulario y captura de errores. |
| RF-03, RF-10 | Formulario compartido precargado, cancelación | CA-04, CA-05, CA-10 | Flujo editar/cancelar y prueba de no duplicación. |
| RF-04, RF-08 | Botón Eliminar + diálogo de confirmación | CA-06, CA-07, CA-12 | Prueba de cancelar y confirmar. |
| RF-06 | Control de estado, indicador textual | CA-08 | Prueba completa/pendiente y accesibilidad. |
| RF-07 | Selector de filtros y estados vacíos por filtro | CA-09, CA-13 | Pruebas de los tres filtros. |
| RNF-04, RNF-05 | Tokens, jerarquía, contraste, legibilidad y zonas táctiles | CA-11 y revisión manual UX | Capturas Android y checklist visual. |
| RNF-09 | Rutas relativas para documentación y evidencias | CP-DOC-01 (previsto) | Verificación de enlaces en copia limpia. |

**Relación explícita con la rúbrica:**

- **RUB-01 (14 pts):** explicación del papel de cada componente de interfaz y su relación con el framework.
- **RUB-02 (18 pts):** composición, reutilización de formulario, estado y flujo de eventos explicados con casos reales.
- **RUB-03 (12 pts):** jerarquía, balance, contraste, ritmo y proporción demostrados con pantallas reales y tokens.
- **RUB-04 (28 pts):** botones, formularios, filtros, listas, diálogos y navegación funcionales, comprobados en Android.
- **RUB-05 (28 pts):** claridad de operaciones, prevención/recuperación de errores, accesibilidad, navegación intuitiva y evidencia manual.

No se asignan puntos por adelantado: la matriz representa un **plan de evidencia** y no una calificación.

## 9. Reglas para desarrollo agéntico derivadas del diseño

1. No reemplazar la navegación Stack por Tabs ni ampliar el alcance con pantallas no aprobadas.
2. Reutilizar el componente de formulario; mantener datos del borrador separados de las tareas guardadas.
3. Evitar librerías de interfaz, iconos o notificaciones por conveniencia estética sin una necesidad y aprobación documentadas.
4. No cambiar colores, tamaños táctiles ni textos críticos sin actualizar esta especificación y los casos de prueba afectados.
5. Verificar funciones de Android real: teclado, retorno, accesibilidad y diálogos. **No dar por aprobado un control porque un mock o una prueba unitaria funcione.**
6. No incorporar rutas absolutas, capturas ficticias, secretos ni referencias a archivos que aún no existen como enlaces Markdown.
7. Mantener la posibilidad de ampliar persistencia y APIs más adelante **sin implementar módulos anticipados**.
8. Registrar discrepancias entre el diseño esperado y la implementación como pendientes o correcciones, no corregir silenciosamente cambiando la documentación para que coincida con errores.

## 10. Registro de decisiones UX — APROBADAS

| ID | Decisión de diseño | Estado |
|---|---|---|
| **P-UX-01** | Paleta de la §3: fondo `#F8FAFC`, superficie `#FFFFFF`, principal `#2563EB`, demás tokens, fuente del sistema y espaciado coherente. | **APROBADA** |
| **P-UX-02** | Seleccionar **«Todas»** como filtro inicial, sin ocultar tareas. | **APROBADA** |
| **P-UX-03** | Mostrar **«Editar»** y **«Eliminar»** como controles visibles y accesibles en cada tarjeta, sin gestos exclusivos. | **APROBADA** |
| **P-UX-04** | Título y descripción obligatorios; máximo **100/500** caracteres; límite al ingresar, validación de negocio, recorte exterior al guardar y contadores visibles. | **APROBADA** |
| **P-UX-05** | Confirmar descarte **solo si existe un borrador modificado**, incluso ante retorno de Android; en caso contrario volver sin diálogo. | **APROBADA** |
| **P-UX-06** | Retroalimentación de éxito breve, no bloqueante y accesible mediante componentes existentes, sin biblioteca adicional. | **APROBADA** |
| **P-01** | Estado único de tareas con **Context + `useReducer`** y estado local `useState` para formulario y filtro. | **APROBADA** en [arquitectura](./02-DECISIONES-ARQUITECTURA.md) |

**Solo quedan pendientes las comprobaciones operativas** (SDK/Android/harness) y la validación visual real. No son decisiones de diseño abiertas.

## 11. Condiciones de aprobación de este documento

- [x] Se basa en las siete decisiones aprobadas y en RF-01 a RF-10.
- [x] Describe dos diseños de pantalla, tres rutas lógicas y los flujos completos de tareas.
- [x] Distingue componentes previstos, mensajes, estados y reglas de accesibilidad.
- [x] Vincula UX/UI con los criterios de aceptación y los cinco indicadores de la rúbrica.
- [x] Utiliza referencias internas Markdown relativas a archivos que existen.
- [x] Registra P-01 y P-UX-01 a P-UX-06 **como decisiones expresamente aprobadas** por el equipo.
- [x] Cerrar P-UX-01 a P-UX-06 y P-01 sin incorporar nuevas bibliotecas ni funcionalidades.
- [x] Correspondencia revisada en el repositorio real y G0 aprobado; falta validar visualmente en Android.

**Estado de ejecución:** lista, formulario, validación, CRUD, filtros y estados implementados. Pruebas automatizadas y TypeScript pasan; pantallas y capturas Android **NO EJECUTADAS / NO OBTENIDAS**.

**Siguiente etapa:** completar el emulador Android y ejecutar CP-MOV, navegación, teclado, retorno físico, accesibilidad y casos funcionales; registrar evidencia auténtica y revisión humana en el plan de pruebas.
