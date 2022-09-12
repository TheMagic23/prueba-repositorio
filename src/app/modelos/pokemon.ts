export type TipoPokemon = 'Planta' | 'Fuego' | 'Agua' | 'Electrico' | 'Roca';
export interface Pokemon {
    idPk?: number;
    nombre: string;
    foto: string;
    descripcion: string;
    tipo: TipoPokemon;
}
