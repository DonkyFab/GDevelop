// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdObjectsContainer {
  constructor(): void;
  insertNewObject(project: gdProject, type: string, name: string, pos: number): gdObject;
  insertNewObjectInFolder(project: gdProject, type: string, name: string, folder: gdObjectFolderOrObject, pos: number): gdObject;
  insertObject(obj: gdObject, pos: number): gdObject;
  hasObjectNamed(name: string): boolean;
  getObject(name: string): gdObject;
  getObjectAt(pos: number): gdObject;
  getObjectPosition(name: string): number;
  removeObject(name: string): void;
  moveObject(oldIndex: number, newIndex: number): void;
  moveObjectFolderOrObjectToAnotherContainerInFolder(objectFolderOrObject: gdObjectFolderOrObject, newObjectsContainer: gdObjectsContainer, parentObjectFolderOrObject: gdObjectFolderOrObject, newPosition: number): void;
  getObjectsCount(): number;
  getRootFolder(): gdObjectFolderOrObject;
  getObjectGroups(): gdObjectGroupsContainer;
  delete(): void;
  ptr: number;
};