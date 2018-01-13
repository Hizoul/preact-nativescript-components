import componentMaker from "./maker"

const ActivityIndicator = componentMaker<{busy?: boolean} & any>("activityIndicator")
const Progress = componentMaker<{value?: number, maxValue?: number} & any>("progress")

export default ActivityIndicator
export {
  Progress
}
