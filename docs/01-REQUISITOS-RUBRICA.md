# 01 — Requisitos, alcance y trazabilidad de la rúbrica

> **Proyecto:** To-Do List móvil — Desarrollo de Aplicaciones Móviles, Unidad 1  
> **Estado del documento:** CONSOLIDADO; decisiones funcionales y UX aprobadas, pendiente validación final de G0  
> **Fecha de consolidación:** 2026-11-01  
> **Versión documental:** 1.0 — consolidación para entrega al harness externo  
> **Tecnología acordada en la planificación:** React Native + Expo + TypeScript  
> **Objetivo académico:** apuntar al nivel **Sobresaliente (90 %–100 %)**, sin presumir que una calificación esté garantizada.

## 1. Propósito y jerarquía de fuentes

Este documento define **qué se debe construir y comprobar**, antes de iniciar la implementación. También establece cómo se demostrará el cumplimiento de los indicadores de evaluación.

Se distinguen tres orígenes de requisitos:

- **[E] Enunciado escrito:** *Evaluación sumativa Unidad N.º 1*, documento facilitado por el equipo; fuente de los requisitos académicos originales.
- **[R] Rúbrica escrita:** *Rúbrica evaluación unidad 1 — Desarrollo de aplicaciones móviles*; fuente de los criterios y puntajes.
- **[D] Decisiones de planificación:** acuerdos tomados por el equipo para desarrollar con React Native y para mejorar la experiencia de usuario. **No deben presentarse como exigencias escritas del profesor.**

Las dos fuentes PDF se consultaron para preparar este borrador, pero **no se presupone que sus archivos estén dentro del repositorio**. Por ello, se citan por título y página, sin crear enlaces relativos a archivos inexistentes.

### 1.1. Decisión tecnológica del equipo

**[E]** El enunciado escrito originalmente prescribe Ionic y especifica herramientas y componentes de ese framework. **[D]** Posteriormente, el profesor otorgó al equipo libertad para seleccionar la tecnología, por lo que se decidió desarrollar la aplicación móvil de la Unidad 1 con **React Native + Expo + TypeScript**.

Esta selección es una **decisión técnica y académica del equipo**, no una sustitución pendiente de autorización. Conservamos del enunciado el problema a resolver, las funciones solicitadas, las obligaciones de documentación y los criterios de la rúbrica; las referencias a comandos y componentes exclusivos de Ionic se traducirán a las herramientas correspondientes del stack seleccionado. El proyecto empleará controles de React Native y navegación Expo Router, sin presentar componentes `ion-*` como implementados.

### 1.2. Justificación técnica y profesional: React Native frente a Ionic

La selección del framework se realizó considerando **arquitectura de interfaz, adecuación al objetivo académico, uso profesional observado, experiencia previa del equipo, herramientas disponibles, facilidad de verificación y evolución futura**. Ambas opciones son vigentes y permiten crear aplicaciones móviles multiplataforma; la preferencia por React Native es **contextual**, no una afirmación de superioridad absoluta.

#### 1.2.1. Comparación de alternativas

| Criterio | Ionic Framework (con Capacitor para despliegue móvil) | React Native + Expo | Fundamento de la decisión |
|---|---|---|---|
| **Tecnología de interfaz** | Utiliza componentes web basados en HTML, CSS y JavaScript; la aplicación móvil emplea habitualmente una vista web y Capacitor para integrar capacidades del dispositivo [F1]. | Utiliza componentes de React Native que se representan con elementos de interfaz propios de Android e iOS, sin usar una WebView como fundamento de la interfaz [F2]. | Preferimos estudiar directamente componentes, interacción, navegación y patrones de una interfaz móvil basada en React Native. |
| **Enfoque multiplataforma** | Es especialmente conveniente cuando se desea reutilizar una aplicación web o mantener una experiencia web/PWA junto a la móvil [F1]. | Comparte gran parte de la lógica y la interfaz entre Android e iOS; ciertos casos pueden requerir adaptaciones específicas de plataforma [F2]. | El producto exigido es una **aplicación móvil**, no una aplicación web preexistente que debamos reutilizar. |
| **Ecosistema y adopción observada** | Sigue activo y dispone de aplicaciones y herramientas para la industria; no corresponde clasificarlo como obsoleto [F1, F3]. | Posee una presencia más amplia entre quienes respondieron encuestas recientes del ecosistema JavaScript [F4, F5]. | La mayor exposición observada favorece que el equipo adquiera conocimientos transferibles a proyectos profesionales, sin extrapolar la encuesta a todo el mercado. |
| **Aprendizaje y experiencia previa** | Permite React, pero requiere comprender además el modelo de componentes Ionic y sus convenciones de despliegue web/móvil. | Reaprovecha conocimientos del equipo en React, componentes funcionales, hooks y TypeScript. | Reduce el cambio de paradigma y concentra el aprendizaje en experiencia de usuario y desarrollo móvil. |
| **Inicio, ejecución y depuración** | Ionic CLI y Capacitor ofrecen un flujo válido de desarrollo y empaquetado [F1]. | Expo proporciona un conjunto integrado de herramientas; React Native recomienda comenzar nuevos proyectos con un framework como Expo [F6]. | Para una To-Do List académica, Expo permite priorizar funcionalidades y pruebas frente a configuración nativa prematura. |
| **Calidad y mantenimiento** | Permite estructura modular, pruebas y buenas prácticas con su stack web. | Facilita una estructura modular basada en React, TypeScript estricto, pruebas de lógica y de componentes, junto a validación en Android [F2, F6]. | Encaja con las decisiones aprobadas de arquitectura B, pruebas B y gobernanza documental. |
| **Escalabilidad del ejercicio** | Puede incorporar persistencia local, autenticación y consumo de APIs [F1]. | Puede incorporar las mismas capacidades mediante bibliotecas y APIs compatibles con su versión de Expo [F6]. | Las futuras unidades pueden ampliarse sin introducir esas dependencias de forma anticipada. |

#### 1.2.2. Evidencia de adopción y límites de interpretación

En la pregunta **«Mobile & Desktop»** de *State of JavaScript 2025*, **2.212** participantes indicaron utilizar habitualmente React Native, **1.513** Expo y **706** Ionic [F4]. React Native obtuvo aproximadamente **3,1 veces** las menciones de Ionic. Como corroboración parcial del uso profesional, la sección **«Used at Work»** de *State of JavaScript 2024* registró **2.629** respuestas para React Native y **1.118** para Ionic [F5].

Estas cifras **no son una cuota de mercado**, ni un censo de ofertas laborales, ni una medición específica de Chile. Las preguntas permiten selecciones múltiples y sus muestras no garantizan representatividad de toda la industria. Se emplean como **indicadores comparativos de adopción entre participantes**, no como prueba de que Ionic haya dejado de utilizarse.

Ionic mantiene actividad de desarrollo y publicó actualizaciones de su versión 9 en 2026 [F3]. Por ello, **no justificamos la elección alegando que Ionic está obsoleto o que no se utiliza profesionalmente**.

#### 1.2.3. Razones particulares para elegir React Native + Expo + TypeScript

1. **Pertinencia formativa:** la evaluación exige diseñar e implementar interfaces móviles. React Native permite trabajar directamente con `View`, `Text`, `TextInput`, listas y controles táctiles, así como con navegación Stack y estado de React.
2. **Aprovechamiento de conocimientos previos:** el equipo ya posee experiencia con React y TypeScript, lo que reduce aprendizaje incidental sin eliminar el desafío de desarrollar para Android.
3. **Alcance acotado y reproducible:** Expo reúne herramientas para crear, ejecutar y probar el proyecto. Las versiones de Expo, React Native y dependencias se fijarán según compatibilidad y quedarán reproducibles mediante Git y el archivo de bloqueo de npm.
4. **Calidad verificable:** TypeScript estricto, ESLint, Prettier, Jest y React Native Testing Library permiten comprobar lógica y componentes; las pruebas manuales Android complementarán las automáticas.
5. **Continuidad arquitectónica:** la separación modular por funcionalidades facilitará evolucionar hacia almacenamiento, autenticación y APIs en próximas unidades, sin implementarlos ahora.

**Limitaciones reconocidas:** React Native también exige comprender diferencias entre plataformas, compatibilidades de dependencias y, en ciertos escenarios, módulos nativos. Expo simplifica el desarrollo, pero no elimina esas responsabilidades ni garantiza que cualquier biblioteca sea compatible. Por su parte, Ionic puede ser una mejor alternativa si el objetivo prioritario es reaprovechar una aplicación web existente o publicar una PWA. Para una To-Do List pequeña, **ambas opciones permiten cumplir las funciones solicitadas**; no se presume una superioridad general de rendimiento de React Native.

#### 1.2.4. Conclusión de la decisión

> **Decisión D-01 — Stack seleccionado.** En ejercicio de la libertad tecnológica otorgada por el docente, el equipo optó por **React Native + Expo + TypeScript** para desarrollar la aplicación móvil de gestión de tareas. La elección se fundamenta en el enfoque de componentes nativos de React Native, su amplia adopción observada en encuestas del ecosistema JavaScript, el aprovechamiento de conocimientos previos en React y TypeScript, las herramientas de desarrollo y validación de Expo y su adecuación a la arquitectura modular aprobada. Ionic permanece como una alternativa válida y actual, particularmente apropiada para proyectos con fuerte reutilización de tecnologías web. No obstante, React Native presenta un mejor ajuste a los objetivos formativos, el alcance móvil y la experiencia técnica de este equipo. La selección se considera **aprobada**, quedando pendiente únicamente la verificación de versiones compatibles y del entorno concreto de pruebas Android.

#### 1.2.5. Fuentes técnicas y de adopción

Las siguientes son **referencias web externas**; las rutas internas del repositorio permanecen relativas:

- **[F1]** Ionic Framework, documentación oficial y fundamentos: https://ionicframework.com/docs
- **[F2]** React Native, componentes y APIs: https://reactnative.dev/docs/components-and-apis
- **[F3]** Ionic Framework, historial oficial de versiones y actualización 9.0.9 (21-10-2026): https://ionicframework.com/docs/reference/release-notes
- **[F4]** State of JavaScript 2025, «Other Tools — Mobile & Desktop»: https://2025.stateofjs.com/en-US/other-tools/
- **[F5]** State of JavaScript 2024, «Mobile & Desktop — Used at Work»: https://2024.stateofjs.com/en-US/libraries/mobile_desktop/
- **[F6]** React Native, guía oficial sobre frameworks y Expo: https://reactnative.dev/docs/environment-setup

## 2. Contexto de la evaluación

| Dato | Valor y procedencia |
|---|---|
| Asignatura | Desarrollo de Aplicaciones Móviles [R, encabezado]. |
| Evaluación | Unidad 1; 100 puntos [E, p. 1]. |
| Modalidad | Grupal, máximo **3 integrantes** [E, p. 1]. |
| Ponderación | **10 %** de la nota final de la asignatura [E, p. 1]. |
| Exigencia | **60 %** para la nota 4,0 [E, p. 2]. |
| Plazo | El publicado en la plataforma; **no aparece una fecha concreta en el PDF** [E, p. 1]. |
| Proyección | Unidades posteriores incorporarán almacenamiento local, autenticación y consumo de APIs [E, p. 2]. |

**Problema a resolver:** desarrollar una aplicación móvil básica que permita registrar y visualizar tareas pendientes. Cada tarea tendrá un título y una descripción; se podrán crear, editar y eliminar [E, p. 2].

## 3. Alcance aprobado de la Unidad 1

### 3.1. Funciones incluidas

| ID | Funcionalidad | Origen | Prioridad |
|---|---|---|---|
| RF-01 | Visualizar una lista de tareas con su título y descripción. | [E] | Obligatoria |
| RF-02 | Agregar una tarea y limpiar el formulario tras guardar correctamente. | [E] | Obligatoria |
| RF-03 | Editar el título y la descripción de una tarea existente. | [E] | Obligatoria |
| RF-04 | Eliminar una tarea específica sin modificar las demás. | [E] | Obligatoria |
| RF-05 | Validar título y descripción y evitar valores vacíos o compuestos solo por espacios. | [D] | Mejora aprobada |
| RF-06 | Marcar una tarea como pendiente o completada. | [D] | Mejora aprobada |
| RF-07 | Filtrar por **Todas**, **Pendientes** y **Completadas**. | [D] | Mejora aprobada |
| RF-08 | Pedir confirmación antes de eliminar una tarea. | [D] | Mejora aprobada |
| RF-09 | Mostrar estado vacío, errores comprensibles y retroalimentación de operaciones. | [D] | Mejora aprobada |
| RF-10 | Navegar entre lista y formulario sin aplicar cambios al cancelar. | [D] | Mejora aprobada |

**Precisión importante:** el enunciado general exige **editar**, aunque el desglose de funciones desarrolla con más detalle agregar y eliminar [E, pp. 2–3]. La edición se conserva como obligatoria y no como función opcional.

### 3.2. Fuera de alcance para esta unidad

- Persistencia de tareas al cerrar o reiniciar completamente la aplicación.
- Registro de usuarios, inicio de sesión o autenticación.
- Backend propio, base de datos remota, sincronización o consumo de APIs externas.
- Notificaciones, fechas de vencimiento, prioridades, categorías, búsquedas complejas y colaboración entre usuarios.
- Publicación en tiendas de aplicaciones y generación de un producto comercial.

**Regla temporal:** durante la Unidad 1 las tareas estarán **en memoria**. Se acepta que se pierdan al reiniciar la aplicación. Esto **no** invalida el CRUD durante una sesión activa, y debe explicarse en la demostración y el informe.

### 3.3. Modelo funcional mínimo — especificación aprobada

Cada tarea administrada durante una sesión contará, como mínimo, con:

| Dato | Finalidad | Restricción acordada |
|---|---|---|
| Identificador interno | Diferenciar tareas al editar, completar o eliminar. | Único dentro de la sesión. |
| Título | Identificación visible. | Obligatorio; longitud máxima de **100 caracteres**. |
| Descripción | Detalle visible. | Obligatoria; longitud máxima de **500 caracteres**. |
| Estado | Distinguir pendiente/completada. | Dos valores: pendiente o completada. |

El identificador y el estado son decisiones de diseño para soportar las mejoras aprobadas; **no son campos explícitos del enunciado**. Los máximos **100/500** son acuerdos del equipo, no exigencias académicas. Se impedirá excederlos en el formulario, y las reglas de validación también rechazarán datos fuera de rango que lleguen por otra vía. Al guardar se eliminarán espacios al inicio y final; ambos valores resultantes deben ser no vacíos. Véase [diseño UX/UI](./03-DISENO-UX-UI.md).

## 4. Criterios de aceptación funcional

Una funcionalidad se considerará **aceptable** únicamente cuando el resultado sea observable y comprobable. Estos criterios son la base de los casos de prueba; **no representan pruebas ejecutadas**.

| ID | Condición mínima verificable |
|---|---|
| CA-01 | Al abrir la lista se muestran todas las tareas existentes de la sesión con título y descripción; si no hay tareas, se informa claramente. |
| CA-02 | Crear una tarea con título y descripción válidos agrega exactamente una entrada visible y limpia el formulario. |
| CA-03 | No se permite guardar si el título o la descripción está vacío o contiene solo espacios; se identifica el campo con error. |
| CA-04 | Editar una tarea modifica únicamente la tarea elegida, conserva su identificador y no genera duplicados. |
| CA-05 | Cancelar creación o edición no introduce cambios en los datos de la lista. |
| CA-06 | Solicitar eliminar muestra una confirmación; cancelar conserva la tarea. |
| CA-07 | Confirmar eliminar quita solo la tarea seleccionada. |
| CA-08 | Completar o reabrir una tarea actualiza su estado de manera visible. |
| CA-09 | Cada filtro muestra exclusivamente las tareas del estado indicado; **Todas** muestra todas. |
| CA-10 | La navegación Stack permite abrir el formulario, regresar y seguir usando la lista sin errores. |
| CA-11 | El teclado no impide acceder a los campos ni a las acciones principales del formulario en el Android utilizado para validar. |
| CA-12 | Crear varias tareas y operar sobre una no altera datos ni estados de las restantes. |
| CA-13 | Las listas vacías por filtro y los errores de formulario muestran textos claros y no confunden al usuario. |

**Casos de prueba especificados:** `CP-01` a `CP-16`, además de casos UX, técnicos, Android y `CP-DOC-01`, se encuentran en [plan de pruebas](./04-PLAN-PRUEBAS.md). La ejecución parcial está registrada en el plan (§4.1) y en la [bitácora](./05-BITACORA.md) (CHK-010 a CHK-019). Las capturas están en `docs/evidencias/capturas/`; su revisión humana sigue pendiente.

## 5. Requisitos no funcionales y restricciones

| ID | Requisito | Justificación | Verificación prevista |
|---|---|---|---|
| RNF-01 | React Native + Expo + TypeScript estricto; versiones compatibles entre sí. | [D], decisión tecnológica aprobada por el equipo. | Revisión del stack y dependencias reales. |
| RNF-02 | Arquitectura **modular por funcionalidades** y responsabilidades comprensibles. | [D] | Revisión de estructura, componentes y explicación técnica. |
| RNF-03 | Navegación **Stack**: lista principal y formulario reutilizable para crear/editar. | [D] | Recorridos de navegación y pruebas de cancelación. |
| RNF-04 | Estilo **minimalista profesional**: fondo claro, grises y azul; consistencia de estilos. | [D] | Revisión de pantallas y guía de diseño. |
| RNF-05 | Accesibilidad: etiquetas comprensibles, contraste suficiente, tamaño táctil apropiado y estados identificables sin depender solo del color. | [D] | Inspección manual y comprobaciones en Android. |
| RNF-06 | Estado de tareas mediante **Context + `useReducer`**, compartido entre rutas y mantenido en memoria durante la sesión; `useState` local para formulario/filtros, sin servidores. | [D], decisión P-01 aprobada. | Pruebas del reducer, navegación y estado consistente entre rutas. |
| RNF-07 | Calidad verificable con TypeScript, ESLint, Prettier, Jest y React Native Testing Library. | [D] | Resultados reales registrados, sin declararlos aprobados por anticipado. |
| RNF-08 | Pruebas manuales en Android y captura de evidencias auténticas. | [D], capturas exigidas en [E]. | Registro de dispositivo, pasos, resultado y capturas. |
| RNF-09 | Repositorio Git portable: rutas documentales relativas, sin secretos y con dependencias reproducibles. | [D], entrega Git comunicada por el equipo. | Comprobación desde una copia limpia del repositorio. |
| RNF-10 | Documentación que explique el framework, sus patrones, sus componentes y la usabilidad con ejemplos del proyecto. | [R] y [E]. | Matriz de trazabilidad académica completa. |

Las versiones de Expo/React Native quedaron verificadas con `npm ci` y `expo install --check` (CHK-013). La modalidad Android usada es emulador AVD; el teléfono físico **sigue sin verificar**. No corresponde fijar versiones en este documento sin validar compatibilidad.

## 6. Pantallas y componentes previstos

| Área | Comportamiento requerido en nuestro diseño | Estado |
|---|---|---|
| Lista principal | Encabezado, contador de pendientes, filtros, lista y acción de crear. | Decisión aprobada [D] |
| Formulario reutilizable | Crear y editar título/descripcion; validaciones, guardar y cancelar. | Decisión aprobada [D] |
| Confirmación de eliminación | Mensaje que identifica la acción y permite confirmar o cancelar. | Decisión aprobada [D] |
| Estados vacíos y errores | Mensajes visibles, específicos y comprensibles. | Decisión aprobada [D] |
| Acciones por tarea | Botones visibles y accesibles «Editar» y «Eliminar», sin menú oculto obligatorio. | **P-UX-03 APROBADA**; no añade una función nueva. |

**Adaptación de los componentes al stack elegido:** la evaluación utiliza ejemplos como `ion-header`, `ion-content`, `ion-list`, `ion-item`, `ion-input` y `ion-button`. Dada la libertad de elección tecnológica, verificaremos sus **funciones de interfaz**, no la presencia literal de componentes Ionic. Para React Native se consideran encabezados de navegación, `View`, `Text`, `FlatList`, `TextInput`, `Pressable` y controles accesibles. No se supone que exista una correspondencia uno a uno entre ambos frameworks; las pruebas demostrarán el comportamiento solicitado.

## 7. Matriz de trazabilidad de la rúbrica (100 puntos)

| ID | Indicador de la rúbrica [R] | Máximo | Qué debe demostrar el equipo | Evidencia prevista |
|---|---|---:|---|---|
| RUB-01 | Conceptos fundamentales del framework, arquitectura, componentes clave y terminología. | **14** | Explicación precisa de React Native, Expo, flujo de datos, estructura y relación con la aplicación. | Sección del informe, estructura del repositorio y ejemplos concretos del proyecto. |
| RUB-02 | Patrones de diseño centrales del framework y ejemplos de implementación. | **18** | Composición de componentes, separación de responsabilidades, estado de React y ejemplos de su aplicación; explicar límites y elección. | Justificación de decisiones y referencias a los componentes efectivamente construidos. |
| RUB-03 | Principios de diseño UI: jerarquía, balance, contraste, ritmo y proporción. | **12** | Pantallas consistentes, legibles y organizadas, con decisiones visuales justificadas. | Capturas en Android y explicación de la guía visual. |
| RUB-04 | Componentes comunes: botones, menús, formularios, listas y navegadores. | **28** | Interacciones correctas, consistentes y accesibles; funciones RF-01 a RF-10 y navegación Stack. | Pruebas funcionales, capturas, demostración y registro de resultados. |
| RUB-05 | Interfaz intuitiva y fácil de usar según las necesidades de los usuarios. | **28** | Flujos claros, confirmaciones, errores, filtros, estados vacíos, teclado y navegación comprensible. | Escenarios de uso y comprobación manual en Android. |
| | **Total** | **100** | | |

La rúbrica escrita describe el nivel **Sobresaliente** como desempeño preciso, completo y consistente, con logro **90 %–100 %** [R, p. 1]. **Ningún conjunto de evidencias garantiza por sí mismo 100 puntos**; la evaluación final corresponde al docente.

### 7.1. Relación entre funciones y criterios

| Requisitos | Indicadores apoyados | Evidencia mínima prevista |
|---|---|---|
| RF-01, RF-02, RF-03, RF-04 | RUB-01, RUB-02, RUB-04 | Estructura explicada, CRUD probado y capturas. |
| RF-05, RF-08, RF-09, RF-10 | RUB-03, RUB-04, RUB-05 | Errores, confirmaciones, navegación y estados vacíos. |
| RF-06, RF-07 | RUB-02, RUB-04, RUB-05 | Cambio de estado y filtros probados en combinación. |
| RNF-02, RNF-03 | RUB-01, RUB-02, RUB-04 | Justificación arquitectónica y navegación funcional. |
| RNF-04, RNF-05 | RUB-03, RUB-05 | Evaluación visual y de accesibilidad. |
| RNF-07, RNF-08, RNF-09, RNF-10 | Transversal a los cinco | Pruebas, capturas, documentación y reproducibilidad. |

La rúbrica menciona **menús** como componente común. Para este alcance, se aprobaron controles visibles «Editar» y «Eliminar», más filtros accesibles, sin fabricar un menú o una pantalla extra para aparentar complejidad. Esta decisión se evalúa por función y facilidad de uso.

## 8. Entregables y formato académico

### 8.1. Exigencias del enunciado escrito [E, pp. 1–3]

- Proyecto funcional de la Unidad 1.
- Documentación del proceso, de la estructura de archivos y de los componentes principales.
- Capturas de pantalla de la aplicación en funcionamiento.
- Carpeta del proyecto comprimida en **ZIP** y subida a la plataforma indicada.
- Nombre del archivo de proyecto según el patrón **`EVU1_APELLIDO_NOMBRE`** (la extensión será la correspondiente al ZIP cuando se genere).
- **Coevaluación** completada por cada integrante del grupo y entregada junto al desarrollo.
- Informe académico con portada: título, asignatura, logo de CIISA, nombre del profesor y de los alumnos.
- Cuerpo del informe que desarrolle los ítems solicitados.
- Informe en **Word o PDF**, con **Arial 12**, interlineado **1,15**, alineación **justificada** y páginas **numeradas**.

### 8.2. Entrega adicional comunicada por el equipo [D]

- Entregar el **repositorio Git** del trabajo, de acuerdo con la instrucción del profesor indicada por el equipo.
- Verificar con el profesor si el repositorio **se suma** al ZIP o **lo sustituye**; por ahora se prepararán ambos para evitar omisiones.
- Mantener un `README.md` con instrucciones reproducibles y enlaces relativos.
- Excluir dependencias instaladas, artefactos temporales, credenciales y archivos exclusivos de la computadora de desarrollo.
- Registrar las evidencias generadas de forma que el evaluador pueda ubicarlas desde el repositorio, sin referencias a unidades de disco o cuentas locales.

**No se conocen todavía:** fecha exacta de entrega, nombres de todos los integrantes, profesor, URL del repositorio ni plataforma específica de publicación. No se inventarán esos datos.

## 9. Reglas de portabilidad de documentación y Git

1. En los archivos `.md`, **todas las rutas internas y enlaces a archivos del proyecto serán relativos al documento donde aparecen**.
2. No usar rutas absolutas de Windows, Linux o macOS; tampoco enlaces locales de sistema de archivos ni referencias a carpetas personales.
3. Los comandos futuros deberán indicar el directorio de trabajo relativo al repositorio; sus ejemplos no dependerán de nombres de usuario locales.
4. Solo enlazar archivos y carpetas cuando **existan realmente**. Los documentos aún no creados se mencionan por su nombre, sin convertirlos en enlaces rotos.
5. Versionar los archivos necesarios para reproducir la instalación, incluido el archivo de bloqueo de npm, una vez que exista el proyecto.
6. No incluir claves, tokens, contraseñas ni datos sensibles en Git.
7. Antes de entregar se realizará la prueba `CP-DOC-01`: **enlaces internos válidos, rutas portables e instrucciones ejecutables desde una copia limpia**.

Este archivo está planificado para ubicarse en `docs/`. Si su ubicación cambia, todas las rutas relativas deberán revisarse antes de aprobarlo.

## 10. Condiciones de calidad y cierre

Se considerará que la **planificación de requisitos** está lista cuando:

- [x] La elección de React Native + Expo + TypeScript esté documentada y justificada conforme a la libertad de elección tecnológica del equipo.
- [x] Los requisitos funcionales escritos estén identificados y diferenciados de las mejoras del equipo.
- [x] La rúbrica esté cubierta por una matriz de **14 + 18 + 12 + 28 + 28 = 100** puntos.
- [x] El alcance de la Unidad 1 separe funciones actuales de ampliaciones futuras.
- [x] Se registre el requisito de rutas documentales relativas y repositorio reproducible.
- [x] El equipo aprobó la base documental para continuar; la actualización técnica de la justificación queda incorporada para revisión.

Se considerará que **la aplicación**, más adelante, puede proponerse para cierre cuando:

- [ ] Las funciones RF-01 a RF-10 estén implementadas y comprobadas.
- [ ] Las pruebas críticas y las comprobaciones estáticas terminen sin fallos críticos abiertos.
- [ ] La navegación, el teclado, la accesibilidad básica y la interfaz hayan sido revisados en Android.
- [ ] Existan capturas auténticas de la aplicación y evidencias suficientes para los cinco criterios.
- [ ] El repositorio pueda recuperarse y ejecutarse siguiendo su documentación.
- [ ] El informe, el ZIP y la coevaluación estén preparados según las instrucciones académicas de entrega vigentes.

**Regla para agentes:** no declarar aprobada una prueba que no haya sido ejecutada; no modificar alcance, stack o arquitectura sin una decisión explícita del equipo.

## 11. Verificaciones pendientes y decisiones cerradas

| ID | Pendiente | Impacto | Estado |
|---|---|---|---|
| PEN-01 | Verificar versiones compatibles de Expo, React Native y el dispositivo Android real. | Alto para reproducibilidad y pruebas. | **VALIDACIÓN PARCIAL:** SDK 58 y versiones seleccionadas; `npm ci` limpio y `expo install --check` PASS; smoke Android parcial y revisión humana pendientes. |
| PEN-02 | Confirmar modalidad final de entrega Git/ZIP y fecha exacta de publicación. | Alto para entrega. | PENDIENTE CONFIRMACIÓN EXTERNA |
| PEN-03 | **RESUELTO:** acciones visibles, filtro «Todas» inicial, mensajes no bloqueantes, contadores y descarte confirmado si hay cambios; ver P-UX-01 a P-UX-06. | Requisitos UX cerrados. | CERRADO — APROBADO |
| PEN-04 | Justificación de selección de React Native y comparación con Ionic aprobadas como parte de la consolidación del equipo. | Revisión documental incluida. | CERRADO — APROBADO |

---

## 12. Fuentes consultadas

1. **Evaluación sumativa Unidad N.º 1**, *Desarrollo de aplicaciones móviles*, 3 páginas. En particular: resultados de aprendizaje y modalidad (p. 1); características del proyecto y preparación de entorno (p. 2); funciones y formato de entrega (p. 3).
2. **Rúbrica evaluación unidad 1**, *Desarrollo de aplicaciones móviles*, 4 páginas. En particular: niveles y framework (p. 1); patrones y UI (p. 2); componentes, usabilidad y 100 puntos (p. 3); escala de notas (p. 4).
3. **Decisiones del equipo durante la planificación**: siete alternativas aprobadas, libertad de elección tecnológica comunicada por el docente y regla de documentación portable en Git. Se identifican siempre con **[D]**.

> **Punto de continuación:** G0 está APROBADO; el scaffold SDK 58 y la lógica inicial existen. `npm ci` limpio, Jest (5 suites / 14 pruebas, CHK-018), TypeScript y Expo dependency check pasan; ESLint/Prettier configurados (CHK-014). Completar G1 con pruebas Android (TalkBack, teclado, recorrido humano) y revisión humana de evidencias; continuar CP/RF/RUB antes del cierre.
