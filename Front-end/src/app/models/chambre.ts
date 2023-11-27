export enum TypeChambre {
    SINGLE = 'SINGLE',
    DOUBLE = 'DOUBLE',
    SUITE = 'SUITE',
  }
  
  export class Chambre {
    idChambre!: number;
    numChambre!: number;
    typeC: TypeChambre = TypeChambre.SINGLE;
  }