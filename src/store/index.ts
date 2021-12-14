import store from "store";

const LIGHT_RAIL = "favorite-light-rail-v2";

export const favoriteStore = {
  addLightRail: (stationId: number) => {
    const ids = store.get(LIGHT_RAIL, []);

    if (!ids.includes(stationId)) {
      store.set(LIGHT_RAIL, [...ids, stationId]);
    }
  },
  removeLightRail: (stationId: number) => {
    const ids: number[] = store.get(LIGHT_RAIL, []);

    const index = ids.indexOf(stationId);

    if (index >= 0) {
      ids.splice(index, 1);
      store.set(LIGHT_RAIL, ids);
    }
  },
  getLightRail: () => store.get(LIGHT_RAIL, []),
  addMTR: () => {},
  removeMTR: () => {},
  getMTR: () => {},
};
