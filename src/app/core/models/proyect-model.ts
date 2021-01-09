export interface ProyectModel {
  id?: string;
  date?: number;
  fin?: boolean; /*Si ya se termino el proyecto*/
  nameShop?: string;
  url?: string;
  color?: string;
  desing?: string;
  steep: number; /*Sirve para ver en que paso se encuentra el proyecto en el stepper*/
  price: number; /* Precio pagado */
  sale_option: string; /* Nombre del plan */
  sale_order_id: string; /* Id de la transaccion realizada */
  uid: string; /* Id del usuario de asociado el servicio */
}
