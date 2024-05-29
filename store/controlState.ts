import {createMapperHooksStore} from "@apiknight/store/lib/hooks"

const controlState = createMapperHooksStore<boolean>(false)

export const useControlState = controlState.useStoreValue

export const setControlState = controlState.setStoreValue