import {GlobalConfig} from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'

const TarifarioGlobal: GlobalConfig = {
    slug: "tarifario",
    access: {
        update: isAdminOrEditor,
        read: () => true,
    },
    fields: [
        {
            name: 'imagenSup',
            type: 'upload',
            label: 'Imagen Superior',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'tarifarioOptions',
            type: 'relationship',
            relationTo: 'tarifario-contenido',
            label: 'Contenido del tarifario',
            hasMany: true,
            required: true,
        },
        {
            name: 'imagenInf',
            type: 'upload',
            label: 'Imagen Inferior',
            relationTo: 'media',
            required: true,
        }
    ],
}

export default TarifarioGlobal;