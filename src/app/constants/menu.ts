export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'homepage',
    icon: 'simple-icon-layers',
    label: 'Proyectos',
    to: '/app/proyects'
  },
  {
    id: 'add-proyect',
    icon: 'simple-icon-share-alt',
    label: 'Nuevo Proyecto',
    to: '/app/add-proyect'
  },
  /*
  {
    id: 'vien',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.vien',
    to: '/app/vien',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: '/app/vien/start'
      }
    ]
  },
  {
    id: 'second-menu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.second-menu',
    to: '/app/second-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: '/app/second-menu/second'
      }
    ]
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: '/app/blank-page'
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://vien-docs.coloredstrategies.com/',
    newWindow: true
  }
   */
];
export default data;
