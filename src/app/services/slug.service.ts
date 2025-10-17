import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlugService {
  slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .replace(/\s+/g, '-') // Reemplaza espacios por guiones
      .replace(/[^a-z0-9-]/g, ''); // Elimina caracteres especiales excepto guiones
  }

  // Opcional: función para generar slugs sin guiones (todo junto)
  slugifyCompact(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .replace(/\s+/g, ''); // Elimina espacios completamente
  }
}
