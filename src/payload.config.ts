import { buildConfig } from 'payload/config';
import path from 'path';
import Usuarios from './collections/Usuarios';
import Revista from './collections/Revista';
import Media from './collections/Media';
import Audio from './collections/Audio';
import RevistaCategoria from './collections/RevistaCategoria';


export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Usuarios.slug,
  },
  collections: [
    Usuarios,
    Media,
    Audio,
    RevistaCategoria,
    Revista  
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
