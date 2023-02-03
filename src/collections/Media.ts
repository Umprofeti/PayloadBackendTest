import { CollectionConfig } from 'payload/types';
import {isAdminOrEditor} from '../access/isAdmin';

const Media: CollectionConfig = {
    slug: 'media',
    auth:false,
    access: {
      create: isAdminOrEditor,
      update: isAdminOrEditor,
      read: () => true,
      delete: isAdminOrEditor
    },
    upload: {
      staticURL: '/media',
      staticDir: 'media',
      imageSizes: [
        {
          name: 'thumbnail',
          width: 400,
          height: 300,
          position: 'centre',
        },
        {
          name: 'card',
          width: 768,
          height: 1024,
          position: 'centre',
        },
        {
          name: 'tablet',
          width: 1024,
          height: null,
          position: 'centre',
        },
      ],
      adminThumbnail: 'thumbnail',
      mimeTypes: ['image/*', 'audio/*'],
    },
    fields: []
};

export default Media;