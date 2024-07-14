import React from 'react'

const ItemContext = React.createContext({
  isDark: true,
  changeTheme: () => {},
  likedVideosList: [],
  addToLikedVideos: () => {},
  disLikedVideosList: [],
  addToDisLikedVideos: () => {},
  savedVideosList: [],
  addToSavedVideos: () => {},
})

export default ItemContext
