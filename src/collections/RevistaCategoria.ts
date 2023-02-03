import { CollectionConfig } from 'payload/types';
import {isAdminOrEditor} from '../access/isAdmin';

const RevistaCategoria: CollectionConfig = {
    slug: 'revista-categoria',
    auth:false,
    access: {
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        read: ()=> true,
        delete: isAdminOrEditor
    },
    admin: {
        useAsTitle: 'categoriaNombre',
        defaultColumns: ['categoriaNombre']
    },
    fields: [
        {
            type: 'text',
            label: 'Categoria',
            name: 'categoriaNombre'
        }
    ]
}

export default RevistaCategoria