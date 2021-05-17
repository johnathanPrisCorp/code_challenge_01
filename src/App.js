import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    if (getOS() === ANDROID) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.aspiro.tidal"
    } else if (getOS() === IOS) {
      window.location.href = "https://apps.apple.com/us/app/tidal-music/id913943275"
    } 
  })

  const ANDROID = 'Android'
  const IOS = 'iOS'

  let userAgent = window.navigator.userAgent,
  os = null;

  const getOS = () => {
    if ([
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) {
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
