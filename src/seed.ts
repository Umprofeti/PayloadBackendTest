import { Payload } from "payload";
import { Usuario } from "./payload-types";

export const seed = async (payload: Payload): Promise<void> => {
    await payload.create<Usuario>({
        collection: 'Usuarios',
        data: {
            email: `${process.env.PAYLOAD_DEFAULTUSER}`,
            password: `${process.env.PAYLOAD_DEFAULTPASS}`,
            role: '30'
        }
    })
}