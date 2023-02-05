import { buildConfig } from 'payload/config';
import path from 'path';
import Usuarios from './collections/Usuarios';
import Revista from './collections/Revista';
import Media from './collections/Media';
import Audio from './collections/Audio';
import RevistaCategoria from './collections/RevistaCategoria';
import TarifarioContent from './collections/TarifarioContent';
import TarifarioGlobal from './global/Tarifario';
import { seed } from './seed';

export default buildConfig({
  serverURL: 'https://panel.rendezvouscorp.com',
  admin: {
    user: Usuarios.slug,
    avatar: 'gravatar'
  },
  collections: [
    Usuarios,
    Media,
    Audio,
    RevistaCategoria,
    Revista,
    TarifarioContent  
  ],
  globals: [
    TarifarioGlobal
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  onInit: async (payload) => {
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  }
});
