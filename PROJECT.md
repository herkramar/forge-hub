# FORGE - Estado del Proyecto

**Última actualización:** 3 de septiembre de 2026
**Estado:** Etapa 1 Finalizada (Hub Local de 4 Soluciones Operativo).

## Estructura Actual del Proyecto
- `/index.html`: Portal principal del Hub FORGE.
- `/productos/`:
  - `crm.html`
  - `ecommerce.html`
  - `pos.html`
  - `cms.html`
- `/demos/`:
  - `/crm/index.html`
  - `/ecommerce/index.html`
  - `/pos/index.html`
  - `/cms/index.html`

## Siguiente Hito
Diseño de la capa de persistencia de datos (Supabase) y desarrollo del módulo transversal de Inventario/Rentas con roles de usuario.

## Esquema Inicial de Base de Datos (Supabase / PostgreSQL)

### Tabla: `organizaciones`
- `id` (uuid, primary key)
- `nombre` (text)
- `created_at` (timestamp)

### Tabla: `usuarios`
- `id` (uuid, primary key, auth.users)
- `organizacion_id` (foreign key -> organizaciones.id)
- `rol` (text: 'admin', 'vendedor', 'cajero')
- `nombre` (text)

### Tabla: `inventario_global`
- `id` (uuid, primary key)
- `organizacion_id` (foreign key -> organizaciones.id)
- `nombre` (text)
- `precio` (numeric)
- `stock` (integer)
- `es_renta` (boolean)