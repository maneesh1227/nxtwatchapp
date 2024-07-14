import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetailView from './components/VideoDetailView'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ItemContext from './context/ItemContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    likedVideosList: [],
    disLikedVideosList: [],
    savedVideosList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  addToLikedVideos = id => {
    const {likedVideosList} = this.state

    if (likedVideosList.includes(id)) {
      this.setState(prevState => ({
        likedVideosList: prevState.likedVideosList.filter(
          eachItem => eachItem !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        likedVideosList: [...prevState.likedVideosList, id],
        disLikedVideosList: prevState.disLikedVideosList.filter(
          eachItem => eachItem !== id,
        ),
      }))
    }
  }

  addToDisLikedVideos = id => {
    const {disLikedVideosList} = this.state

    if (disLikedVideosList.includes(id)) {
      this.setState(prevState => ({
        disLikedVideosList: prevState.disLikedVideosList.filter(
          eachItem => eachItem !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        disLikedVideosList: [...prevState.disLikedVideosList, id],
        likedVideosList: prevState.likedVideosList.filter(
          eachItem => eachItem !== id,
        ),
      }))
    }
  }

  addToSavedVideos = obj => {
    const {savedVideosList} = this.state
    const savedObj = savedVideosList.filter(eachItem => eachItem.id === obj.id)
    const isSaved = savedObj.length > 0
    if (isSaved) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachItem => eachItem.id !== obj.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, obj],
      }))
    }
  }

  render() {
    const {isDark, likedVideosList, disLikedVideosList, savedVideosList} =
      this.state

    return (
      <ItemContext.Provider
        value={{
          isDark,
          likedVideosList,
          disLikedVideosList,
          savedVideosList,
          changeTheme: this.changeTheme,
          addToLikedVideos: this.addToLikedVideos,
          addToDisLikedVideos: this.addToDisLikedVideos,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <Route path="/not-found" components={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ItemContext.Provider>
    )
  }
}

export default App
