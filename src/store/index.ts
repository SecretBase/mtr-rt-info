import store from "store";

const LIGHT_RAIL = "favorite-light-rail-v2";
const MTR = "favorite-mtr";

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
  addMTR: ({ line, station }) => {
    const mtr = store.get(MTR, []);
    if (!favoriteStore.containMTR({ line, station })) {
      store.set(MTR, [...mtr, [line, station]]);
    }
  },
  removeMTR: ({ line, station }) => {
    const mtr = store.get(MTR, []);

    const index = mtr.findIndex(
      ([favLine, favStation]) => favLine === line && favStation === station
    );

    if (index >= 0) {
      mtr.splice(index, 1);
      store.set(MTR, mtr);
    }
  },
  getMTR: () => store.get(MTR, []),
  containMTR: ({ line, station }) => {
    return store.get(MTR, []).some(([favLine, favStation]) => {
      return favLine === line && favStation === station;
    });
  },
};
