import Window from "../../components/Desktop/Window/"
import "./weather.scss"
import TimeHelper from "./helpers/time"

const WEATHER_API_KEY = "dcde45d43ce3464db4e134104212508"

class WeatherApp extends Window {
  constructor(props) {
    super(props)
    this.state = {
      should_render: true,
      weather_info_has_been_loaded: false,
      weather: null,
      city: "Binh Duong",
    }
  }

  fetchWeatherInfo = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${this.state.city}&aqi=yes`
    )
      .then((response) => response.json())
      .then((weather) =>
        this.setState({ weather: weather, weather_info_has_been_loaded: true })
      )
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.fetchWeatherInfo()
    this.useDarkTheme(false)
    this.setWindowFixedSize(true)
    this.setCustomStyle("weather-app-theme")
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value })
  }

  handleSubmit = (event) => {
    this.fetchWeatherInfo()
    event.preventDefault()
  }

  selectWeatherIcon = () => {
    const condition = this.state.weather.current.condition.text

    switch (condition) {
      case "Clear":
        return "ri-3x remixicon-moon-clear-line"
      case "Partly cloudy":
        return "ri-3x remixicon-sun-cloudy-line"
      case "Cloudy":
        return "ri-3x remixicon-cloudy-2-line"
      case "Sunny":
        return "ri-3x remixicon-sun-line"
      case "Mist":
        return "ri-3x remixicon-mist-line"
      case "Light rain":
        return "ri-3x remixicon-rainy-line"
      case "Patchy light rain":
        return "ri-3x remixicon-rainy-line"
      case "Moderate rain":
        return "ri-3x remixicon-rainy-line"
      case "Heavy rain":
        return "ri-3x remixicon-heavy-showers-line"
      case "Light drizzle":
        return "ri-3x remixicon-drizzle-line"
    }
  }

  render() {
    return this.build(
      this.state.weather_info_has_been_loaded ? (
        <div className="weather-app">
          <div>
            <i className={this.selectWeatherIcon()}></i>
            <p className="temperature">
              {this.state.weather.current.temp_c}??<span>c</span>
            </p>
          </div>
          <div>
            <h1 className="time">
              {TimeHelper.formatTime(this.state.weather.location.localtime)}{" "}
              <span className="time-period"></span>
            </h1>
            <p className="city">
              {this.state.weather.location.name},{" "}
              {this.state.weather.location.country}
            </p>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              {/* <label>
                City:
                <input
                  className="weather-input"
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </label> */}
              <button className="refresh-button">Update</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="weather-app">
          <SpinningLoader></SpinningLoader>
        </div>
      )
    )
  }
}

export default WeatherApp
