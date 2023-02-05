import { CollectionConfig } from 'payload/types';
import {isAdminOrEditor} from '../access/isAdmin';

const Tarifario:CollectionConfig  = {
    slug: 'tarifario-contenido',
    auth:false,
    access: {
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        read: () => true,
        delete: isAdminOrEditor
    },
    admin: {
        useAsTitle: 'beneficio',
        defaultColumns: ['beneficio']
    },
    fields: [
        {
            name:'beneficio',
            type: 'text',
            label: 'Titulo',
            required: true
        },
        {
            name: 'icono',
            type: 'upload',
            relationTo: 'media',
            label: 'Icono de representación',
            required: true
        },
        {
            name: 'precio',
            type: 'number',
            label: 'Precio',
            required: true
        },
        {
            name: 'imagenBeneficio',
            type: 'upload',
            relationTo: 'media',
            label:'Imagen del beneficio',
            required: true
        }
    ]
}

export default Tarifario;