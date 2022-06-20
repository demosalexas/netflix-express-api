interface CRUD {
  create: (resource: any) => Promise<any>;
  findAll: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  update: (id: number, resource: any) => Promise<any>;
  delete: (id: number) => Promise<any>;
};

export default CRUD;
