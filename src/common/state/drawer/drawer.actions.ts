export enum DrawerActionTypes {
  OPEN_DRAWER = '@@general/OPEN_DRAWER',
  CLOSE_DRAWER = '@@general/CLOSE_DRAWER'
}

export const OpenDrawerAction = () => ({
  type: DrawerActionTypes.OPEN_DRAWER
});

export const CloseDrawerAction = () => ({
  type: DrawerActionTypes.CLOSE_DRAWER
});
