import AnalyticsDashboard from "@/components/AnalyticsDashboard"
import { getDate } from "@/utils"
import { analytics } from "@/utils/analytics"

const Controller = async () => {
    const TRACKING_DAYS = 7

    const pageviews = await analytics.retriveDays("pageview", TRACKING_DAYS)

    const totalPageViews = pageviews.reduce((acc, crr) => {
        return (
            acc +
            crr.events.reduce((acc, crr) => {
                return acc + Object.values(crr)[0]!
            }, 0)
        )
    }, 0)

    const avgVisitorsPerDay = (totalPageViews / TRACKING_DAYS).toFixed(1)

    const amtVisitorsToday = pageviews
        .filter((ev) => ev.date === getDate())
        .reduce((acc, crr) => {
            return (
                acc +
                crr.events.reduce((acc, crr) => acc + Object.values(crr)[0]!, 0)
            )
        }, 0)

    const topCountriesMap = new Map<string, number>()

    for (let i = 0; i < pageviews.length; i++) {
        const day = pageviews[i]

        if (!day) continue

        for (let j = 0; j < day.events.length; j++) {
            const event = day.events[j]

            if (!event) continue

            const key = Object.keys(event)[0]!
            const value = Object.values(event)[0]!

            const parsedKey = JSON.parse(key)
            const country = parsedKey?.country

            if (country) {
                if (topCountriesMap.has(country)) {
                    const prevValue = topCountriesMap.get(country)!
                    topCountriesMap.set(country, prevValue + value)
                } else {
                    topCountriesMap.set(country, value)
                }
            }
        }
    }

    const topCountries = [...topCountriesMap.entries()]
        .sort((a, b) => {
            if (a[1] > b[1]) return -1
            else return 1
        })
        .slice(0, 5)

    return (
        <div className="min-h-screen w-full py-12 flex justify-center items-center">
            <div className="relative w-full max-w-6xl mx-auto text-white">
                <AnalyticsDashboard
                    avgVisitorsPerDay={avgVisitorsPerDay}
                    amtVisitorsToday={amtVisitorsToday}
                    timeseriesPageViews={pageviews}
                    topCountries={topCountries}
                />
            </div>
        </div>
    )
}

export default Controller
