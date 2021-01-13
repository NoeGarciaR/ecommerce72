export interface ProductModel {
  id?: string;
  nombre?: string;
  sku?: string;
  precio?: number;
  categoria?: string;
  subCategoria?: string;
  descripcion?: string;
  fichaTecnica?: string;
  alto?: number;
  ancho?: number;
  peso?: number;
  color?: string;
  proyect_id?: string; /* ID del proyecto */
  //urlDescatacada?: string;
  //urlImgs?: string[];
}
