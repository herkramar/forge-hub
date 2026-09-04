import { getSupabase } from './supabaseClient.js';

// Iniciar sesión con Email y Contraseña
export async function loginUser(email, password) {
  const db = getSupabase();
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// Obtener el perfil completo (Rol + Organización) del usuario activo
export async function getCurrentUserProfile() {
  const db = getSupabase();
  const { data: { user } } = await db.auth.getUser();
  
  if (!user) return null;

  const { data: profile, error } = await db
    .from('usuarios')
    .select('id, nombre, rol, organizacion_id, organizaciones(nombre)')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error cargando perfil:', error.message);
    return null;
  }

  return { ...user, profile };
}

// Cerrar sesión
export async function logoutUser() {
  const db = getSupabase();
  await db.auth.signOut();
  window.location.reload();
}