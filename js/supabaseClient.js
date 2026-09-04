// Cargar la librería desde el CDN de Supabase si no se ha cargado en el HTML
const SUPABASE_URL = 'https://teeemqurbmusumzwykks.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_3Wuv1ENl_DMDpSZSBwwqPA_d6Pvn4bd';

// Función para obtener o crear el cliente de Supabase
export function getSupabase() {
    if (window.supabaseClient) {
        return window.supabaseClient;
    }
    
    if (typeof supabase !== 'undefined') {
        window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
        return window.supabaseClient;
    } else {
        console.error('La librería de Supabase no está cargada. Asegúrate de incluir el CDN en tu HTML.');
        return null;
    }
}