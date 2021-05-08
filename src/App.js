import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    if (getOS() === ANDROID) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.aspiro.tidal"
    } else if (getOS() === IOS) {
      window.location.href = "https://apps.apple.com/us/app/tidal-music/id913943275"
    } 
  })

  const IOS = 'iOS'
  const ANDROID = 'Android'

  let userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;

  const getOS = () => {
    if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } 
    return os;
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
