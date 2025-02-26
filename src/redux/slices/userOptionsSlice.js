import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  room: {
    length: 0,
    width: 0,
    height: 0,
  },

  rollSquare: 1.06 * 10,

  rapport: 0,

  windows: [
    // // example
    // {
    //   height: 10,
    //   width: 20,
    // },
  ],
  doors: [
    // // example
    // {
    //   height: 30,
    //   width: 50,
    // },
  ],
};

const userOptionsSlice = createSlice({
  initialState,
  name: 'userOptions',

  reducers: {
    resetUserOptions: function () {
      return initialState;
    },

    setRoomLength: function (state, action) {
      state.room.length = action.payload; // возможно благодаря immer
    },
    setRoomWidth: function (state, action) {
      state.room.width = action.payload;
    },
    setRoomHeight: function (state, action) {
      state.room.height = action.payload;
    },

    setRollSquareOptions: function (state, action) {
      state.rollSquare = action.payload;
    },

    setRapportOptions: function (state, action) {
      state.rapport = action.payload;
    },

    addWindow: function (state, action) {
      state.windows.push(action.payload);
      // возможно благодаря immer
    },
    deleteWindow: function (state, action) {
      state.windows = state.windows.filter(
        window => window.id !== action.payload
      );
    },
    // при желании можно отрефакторить - объеденить в setWindow
    setWindowHeight: function (state, action) {
      state.windows = state.windows.map(window => {
        if (window.id === action.payload.id) {
          window.height = action.payload.height;
        }
        return window;
      });
    },
    setWindowWidth: function (state, action) {
      state.windows = state.windows.map(window => {
        if (window.id === action.payload.id) {
          window.width = action.payload.width;
        }
        return window;
      });
    },

    addDoor: function (state, action) {
      state.doors.push(action.payload);
      // возможно благодаря immer
    },
    deleteDoor: function (state, action) {
      state.doors = state.doors.filter(door => door.id !== action.payload);
    },
    // при желании можно отрефакторить - объеденить в setDoor
    setDoorHeight: function (state, action) {
      state.doors = state.doors.map(door => {
        if (door.id === action.payload.id) {
          door.height = action.payload.height;
        }
        return door;
      });
    },
    setDoorWidth: function (state, action) {
      state.doors = state.doors.map(door => {
        if (door.id === action.payload.id) {
          door.width = action.payload.width;
        }
        return door;
      });
    },
  },
});

export const {
  resetUserOptions,
  setRoomLength,
  setRoomWidth,
  setRoomHeight,
  setRollSquareOptions,
  setRapportOptions,
  addWindow,
  deleteWindow,
  setWindowHeight,
  setWindowWidth,
  addDoor,
  deleteDoor,
  setDoorHeight,
  setDoorWidth,
} = userOptionsSlice.actions;

// callbacks for useSelector()
export function selectRoomOptions(state) {
  return state.userOptions.room;
}
export function selectRollSquareOptions(state) {
  return state.userOptions.rollSquare;
}
export function selectRapportOptions(state) {
  return state.userOptions.rapport;
}
export function selectWindowsOptions(state) {
  return state.userOptions.windows;
}
export function selectDoorsOptions(state) {
  return state.userOptions.doors;
}

export default userOptionsSlice.reducer;
