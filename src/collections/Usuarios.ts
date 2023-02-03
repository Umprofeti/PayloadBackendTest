import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';

const Usuarios: CollectionConfig = {
  slug: 'Usuarios',
  auth: {
    useAPIKey: true,
    depth: 0
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    update: isAdmin,
    read: ()=> true,
    delete: isAdmin
  },
  fields: [
    {
      type: 'select',
      name: 'role',
      label: 'Tipo de Usuario',
      saveToJWT: true,
      options: [
        /*
          * Niveles de Acceso: 30 Admin, 20 Editor, 10 Lectores 
        */
        {
          label: 'Admin',
          value: '30'
        },
        {
          label: 'Editor',
          value: '20'
        },
        {
          label: 'Lector',
          value: '10'
        }
      ],
      hasMany: false,
    }
  ],
};


export default Usuarios;