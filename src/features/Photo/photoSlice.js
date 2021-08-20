import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: 1,
    title: "1 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/819/500/500",
    category: 1,
  },
  {
    id: 2,
    title: "2 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/829/500/500",
    category: 1,
  },
  {
    id: 8,
    title: "8 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/889/500/500",
    category: 1,
  },
  {
    id: 3,
    title: "3 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/839/500/500",
    category: 1,
  },
  {
    id: 4,
    title: "4 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/849/500/500",
    category: 1,
  },
  {
    id: 5,
    title: "5 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/859/500/500",
    category: 1,
  },
  {
    id: 6,
    title: "6 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/869/500/500",
    category: 1,
  },
  {
    id: 7,
    title: "7 - Lorem ipsum dolor sit amet.",
    photo: "https://picsum.photos/id/879/500/500",
    category: 1,
  },
];

const photo = createSlice({
  name: "photo",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    updatePhoto: (state, action) => {
      const updatePhotoId = action.payload.id;
      const index = state.findIndex((photo) => photo.id === updatePhotoId);
      if (index > -1) {
        state[index] = action.payload;
      }
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      return state.filter((photo) => photo.id !== removePhotoId);
    },
  },
});

const { reducer, actions } = photo;

export const { addPhoto, removePhoto, updatePhoto } = actions;

export default reducer;
