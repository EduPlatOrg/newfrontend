const CLAVES_EMAIL = [
  'VITE_ADMIN_EMAIL',
  'VITE_ADMIN_EMAIL1',
  'VITE_ADMIN_EMAIL2',
  'VITE_ADMIN_EMAIL3',
  'VITE_ADMIN_EMAIL4',
];

export const esEmailAdmin = (userEmail) => {
  // Recorremos cada clave de las variables de entorno
  for (let i = 0; i < CLAVES_EMAIL.length; i++) {
    // Obtenemos el valor de la variable de entorno
    console.log(import.meta.env.CLAVES_EMAIL[i]);
    const adminEmail = import.meta.env.CLAVES_EMAIL[i];
    // Si el email del usuario coincide con el email de la variable de entorno, devolvemos true
    if (adminEmail && adminEmail === userEmail) {
      return true;
    }
  }
  // Si no encontramos coincidencia, devolvemos false
  return false;
};
