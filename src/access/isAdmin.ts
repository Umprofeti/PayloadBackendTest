import {Access} from 'payload/types'
import { Usuario } from '../payload-types'

export const isAdmin : Access<any, Usuario> = ({req: {user}}) => {
    return Boolean (user?.role?.includes('30'));
}

export const isAdminOrEditor : Access<any, Usuario> = ({req: {user}}) => {
    return Boolean (user?.role?.includes('30') || user?.role?.includes('20'));
}
