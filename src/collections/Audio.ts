import { CollectionConfig } from 'payload/types';
import {isAdminOrEditor} from '../access/isAdmin';

const Audio: CollectionConfig = {
    slug: 'audio',
    auth:false,
    access: {
      create: isAdminOrEditor,
      update: isAdminOrEditor,
      read: () => true,
      delete: isAdminOrEditor
    },
    upload: {
      staticURL: '/audio',
      staticDir: 'audio',
      adminThumbnail: 'thumbnail',
      mimeTypes: ['audio/*'],
    },
    fields: []
};

export default Audio;