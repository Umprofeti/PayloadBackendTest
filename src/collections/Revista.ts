import { CollectionConfig } from 'payload/types';
import {isAdminOrEditor} from '../access/isAdmin';

const Revista: CollectionConfig = {
  slug: 'revista-content',
  auth:false,
  access: {
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    read: () => true,
    delete: isAdminOrEditor
  },
  admin: {
    useAsTitle: 'articulo',
    defaultColumns: ['articulo', 'position', 'magazineImage']
  },
  fields: [
    {
        name: 'articulo', // required
        type: 'text',
        label: 'Nombre del artículo', // required
        required: true,
    },
    {
        name: 'position', // required
        label: 'Posición',
        type: 'number', // required
        required: true,
        unique: true,
        admin: {
            width: '80%',
            position: 'sidebar'
        },
    },
    {
        name: 'imagen', // required
        label: 'Imagen',
        type: 'checkbox', // required
        defaultValue: false,
        admin: {
            position: 'sidebar'
        },
    },
    {
        name: 'magazineImage',
        label: 'Imagen a colocar',
        type: 'upload', // required
        relationTo: 'media', // required
        admin: {
            condition: (data, siblingData) => {
                return data.imagen
            }
        }
    },
    {
        name: 'audio',
        label: 'Audio',
        type: 'checkbox',
        defaultValue: false,
        admin: {
            position: 'sidebar'
        }
    },
    {
        name: 'audioFile',
        label: 'Archivo de audio',
        type: 'upload',
        relationTo: 'audio',
        admin: {
            condition: (data, siblingData) => {
                return data.audio
            }
        }
    },
    {
        name: 'video',
        label: 'Video',
        type: 'checkbox',
        defaultValue: false,
        admin: {
            position: 'sidebar'
        }
    },
    {
        name: 'urlVideo',
        label: 'URL del video',
        type: 'text',
        admin: {
            condition: (data, siblingData) => {
                return data.video
            }
        }
    },
    {
        name: 'categoriaPrueba',
        label: 'Categoria',
        type: 'relationship',
        relationTo: 'revista-categoria',
        required: true,
        hasMany: false,
        admin: {
            position: 'sidebar'
        }
    }
  ],
};

export default Revista;