import { createMapperHooksStore } from "@apiknight/store/lib/hooks";

const playingNameStore = createMapperHooksStore<string>("歌曲名");

export const usePlayingName = playingNameStore.useStoreValue;

export const setPlayingName = playingNameStore.setStoreValue;