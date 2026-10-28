export function adaptar(personaje) {
  return {
    id: personaje.id,
    nombre: personaje.name,
    imagen: personaje.image,
    especie: personaje.species,
    estado: personaje.status,
    genero: personaje.gender,
    origen: personaje.origin?.name || 'Desconocido',
  }
}
