# PROYECTO: FORGE (Hub de Soluciones Web Express)
Basado en Arquitectura FORGEPRIME (Costo $0)

## 1. Propósito
FORGE es una plataforma/hub que exhibe y vende micro-sitios web modulares preconstruidos (E-commerce, CRM, Control de Inventario, Gestión de Equipos, Sitios Vitrina). Los clientes pueden interactuar con demos funcionales y, al rentar/comprar, habilitar funcionalidades avanzadas.

## 2. Stack Tecnológico ($0 Costo)
- Repositorio: Git + GitHub.
- Hosting Frontend: Netlify.
- Backend / API: Netlify Functions (JavaScript).
- Base de Datos y Autenticación: Supabase (PostgreSQL).
- Estilos / UI: HTML5, JavaScript Vanilla (Modular) y Tailwind CSS.

## 3. Principios de Arquitectura y Seguridad (FORGEPRIME)
- **Modularidad:** Cada micro-solución (CRM, E-commerce, etc.) debe ser un módulo reutilizable.
- **Seguridad Absoluta:** Ninguna credencial ni Service Role Key se expone en el Frontend. La lógica de suscripción y pagos/activaciones va por Netlify Functions. Uso estricto de `.env`.
- **Trazabilidad:** Soft Delete obligatorio (`is_active`, `deleted_at`) y timestamps (`created_at`, `updated_at`).
- **Formato de Entrega de IA:** Entrega de archivos COMPLETOS con su ruta exacta (sin fragmentos).

## 4. Esquema Inicial de Base de Datos (Supabase)
- `profiles`: id (UUID, FK a auth.users), email, role ('client', 'admin'), created_at, is_active.
- `modules`: id (UUID), name (ej: 'CRM Express'), slug, description, price_monthly, is_active.
- `subscriptions`: id (UUID), user_id (FK), module_id (FK), status ('demo', 'active', 'canceled'), expires_at, created_at.

## 5. Arquitectura de Rutas del Hub
- `/index.html` -> Portada General / Catálogo de Soluciones.
- `/productos/[modulo].html` -> Página de Detalle, Características y Add-ons del Módulo (ej. crm.html).
- `/demos/[modulo]/index.html` -> Demo Interactiva del Módulo con simulación Pro (ej. demos/crm/index.html).

