export interface ProyectModel {
  id?: string;
  date: number;
  fin: boolean;
  nameShop: string;
  url?: string;
  color: string;
  desing: string;
  steep?: number; /*Sirve para ver en que paso se encuentra el proyecto en el stepper*/
  price?: number; /* Precio pagado */
  sale_option_id?: string; /* Id del tipo de plan que compro para este proyecto */
  uid?: string; /* Id del usuario de asociado el servicio */
}
