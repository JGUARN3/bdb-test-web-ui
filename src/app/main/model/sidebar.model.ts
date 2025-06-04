export interface ISideBar {
  icon: string;
  label: string;
  isActive?: string;
}

export const menuItems: ISideBar[] = [
  { "icon": "ico-home", "label": "Nuevo Colaborador" },
  { "icon": "ico-padlock-lock", "label": "Solicitud de Accesos" },
  { "icon": "ico-job", "label": "Asignar Recurso" },
  { "icon": "ico-logout", "label": "Salir" },
];

export const menuItemsCollaborator: ISideBar[] = [
  { "icon": "ico-job", "label": "Recurso Asignado" },
  { "icon": "ico-padlock-lock", "label": "Solicitud de Accesos" },
  { "icon": "ico-logout", "label": "Salir" },
];