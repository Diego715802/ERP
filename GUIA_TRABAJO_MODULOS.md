# Guía de trabajo colaborativo por módulos — ComeCore ERP

Este documento define cómo trabajará cada integrante del equipo sin sobrescribir el trabajo de los demás. El proyecto usa un único repositorio Git, una rama por módulo y Pull Requests para integrar cambios.

## 1. Responsables actuales

| Módulo | Responsable | Rama asignada | Carpeta principal |
|---|---|---|---|
| Clientes | Diego Reyes 🤴 | `feature/clientes` | `apps/frontend/src/features/clientes/` |
| Contratos | Emmanuel | `feature/contratos` | `apps/frontend/src/features/contratos/` |
| Planes | Montiel | `feature/planes` | `apps/frontend/src/features/planes/` |
| Facturación | Kiriku González | `feature/facturacion` | `apps/frontend/src/features/facturacion/` |
| Inventario | Pendiente | No crear todavía | `apps/frontend/src/features/inventario/` |
| Servidores | Pendiente | No crear todavía | `apps/frontend/src/features/servidores/` |
| Nodos | Pendiente | No crear todavía | `apps/frontend/src/features/nodos/` |

Diego Reyes es responsable de integrar los Pull Requests y mantener los archivos compartidos del sistema.

## 2. Regla principal

Cada integrante debe trabajar únicamente dentro de la carpeta de su módulo y su archivo de ruta.

Ejemplo para Contratos:

```text
apps/frontend/src/features/contratos/
apps/frontend/src/app/(erp)/contratos/page.tsx
```

No se deben copiar carpetas manualmente ni enviar versiones del proyecto por WhatsApp, Drive o archivos ZIP. Todo cambio se entrega mediante Git.

## 3. Archivos compartidos que no deben modificarse

Solo Diego Reyes debe modificar estos archivos o carpetas, salvo autorización expresa:

```text
apps/frontend/src/components/brand/
apps/frontend/src/components/layout/
apps/frontend/src/components/navigation/
apps/frontend/src/components/providers/
apps/frontend/src/components/modules/module-placeholder.tsx
apps/frontend/src/config/modules.ts
apps/frontend/src/theme/
apps/frontend/src/app/globals.css
apps/frontend/src/app/layout.tsx
apps/frontend/src/app/(erp)/layout.tsx
apps/backend/
package.json
package-lock.json
```

Si un módulo necesita un cambio compartido, su responsable debe explicarlo en el Pull Request. Diego realizará o aprobará ese cambio por separado.

## 4. Requisitos del equipo

- Git.
- Node.js 22, indicado por `.nvmrc`.
- npm, respetando la versión declarada en `package.json`.
- Acceso al repositorio privado.
- Editor recomendado: Visual Studio Code.

Quien utilice `nvm` puede activar la versión correcta con:

```bash
nvm use
```

## 5. Descargar el proyecto por primera vez

Diego compartirá la URL del repositorio. Cada integrante ejecutará:

```bash
git clone <URL_DEL_REPOSITORIO>
cd "ERP Proyecto Tesis"
npm ci
```

Después debe comprobar que la base funciona:

```bash
npm run lint
npm run build
```

Para iniciar el frontend:

```bash
npm run dev:frontend
```

La aplicación estará disponible normalmente en `http://localhost:3000`.

## 6. Crear la rama del módulo

Nunca se trabaja directamente sobre `main`.

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/<modulo>
```

Ejemplos:

```bash
git switch -c feature/clientes
git switch -c feature/contratos
git switch -c feature/planes
git switch -c feature/facturacion
```

La rama se crea una sola vez. En sesiones posteriores se abre con:

```bash
git switch feature/<modulo>
```

## 7. Estructura interna recomendada

Cada módulo comienza con un archivo `*-module.tsx`. Cuando crezca, puede organizarse así:

```text
features/<modulo>/
├── components/       Componentes exclusivos del módulo
├── hooks/            Hooks exclusivos del módulo
├── schemas/          Validaciones del módulo
├── services/         Acceso a API del módulo
├── types/            Tipos exclusivos del módulo
└── <modulo>-module.tsx
```

No se deben crear estas carpetas vacías. Se agregan únicamente cuando exista código real que colocar dentro.

## 8. Alcance actual

Cada ruta ya está aislada y actualmente muestra el placeholder `Próximamente`. El responsable del módulo reemplazará progresivamente ese contenido cuando Diego entregue los requerimientos específicos de su etapa.

No se debe implementar por iniciativa propia:

- Autenticación o permisos.
- Endpoints o cambios de backend.
- Modelos o esquemas de base de datos.
- Dependencias nuevas.
- Cambios en la navbar, sidebar, logo o tema global.
- Datos falsos que no hayan sido solicitados.
- Funcionalidades pertenecientes a otro módulo.

La arquitectura completa se encuentra en el documento entregado por Diego. Sus decisiones técnicas tienen prioridad.

## 9. Guardar avances

Se recomiendan commits pequeños y descriptivos:

```bash
git status
git add apps/frontend/src/features/<modulo>
git add 'apps/frontend/src/app/(erp)/<modulo>/page.tsx'
git commit -m "feat(<modulo>): describir el cambio realizado"
```

Ejemplos:

```text
feat(clientes): agregar estructura visual del listado
feat(contratos): crear formulario inicial
fix(planes): corregir validación de velocidad
refactor(facturacion): separar componentes de factura
```

No utilizar mensajes como `cambios`, `avance`, `prueba` o `final`.

## 10. Mantener la rama actualizada

Antes de comenzar una jornada y antes de entregar:

```bash
git fetch origin
git rebase origin/main
```

Si aparece un conflicto dentro de la carpeta propia, el responsable del módulo debe resolverlo. Si afecta un archivo compartido, debe detenerse y solicitar ayuda a Diego.

Después del rebase:

```bash
npm ci
npm run lint
npm run build
```

## 11. Publicar la rama

La primera vez:

```bash
git push -u origin feature/<modulo>
```

Después:

```bash
git push
```

Si se realizó un rebase sobre una rama que ya estaba publicada:

```bash
git push --force-with-lease
```

Nunca utilizar `git push --force`.

## 12. Crear el Pull Request

En GitHub se crea un Pull Request desde `feature/<modulo>` hacia `main`.

El Pull Request debe incluir:

1. Resumen de lo desarrollado.
2. Archivos principales modificados.
3. Capturas de desktop y móvil cuando existan cambios visuales.
4. Comandos de validación ejecutados.
5. Dependencias nuevas, si Diego las autorizó previamente.
6. Pendientes o limitaciones conocidas.

No se debe fusionar el Pull Request. Diego revisará y realizará la integración.

## 13. Lista de comprobación antes de entregar

- [ ] Estoy trabajando en mi rama `feature/<modulo>`.
- [ ] Solo modifiqué archivos de mi módulo.
- [ ] No agregué secretos ni archivos `.env`.
- [ ] No subí `node_modules`, `.next`, `dist` ni archivos generados.
- [ ] No instalé dependencias sin autorización.
- [ ] La navegación hacia mi módulo funciona.
- [ ] La sidebar identifica correctamente el módulo activo.
- [ ] La vista funciona en desktop, tablet y móvil.
- [ ] Ejecuté `npm run lint`.
- [ ] Ejecuté `npm run build`.
- [ ] Actualicé mi rama con `origin/main`.
- [ ] Mi Pull Request explica cambios y pendientes.

## 14. Integración realizada por Diego

Diego integrará un módulo a la vez:

1. Revisará el Pull Request.
2. Solicitará correcciones si son necesarias.
3. Confirmará lint, compilación y pruebas.
4. Fusionará el Pull Request en `main`.
5. Avisará al equipo para que actualice sus ramas.

Después de una integración, los demás integrantes ejecutarán:

```bash
git fetch origin
git rebase origin/main
```

## 15. Módulos pendientes

Inventario, Servidores y Nodos permanecen sin responsable. Nadie debe comenzar esos módulos hasta que Diego actualice esta tabla y asigne su rama.
