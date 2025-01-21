import { Card, CardHeader, CardContent } from "../ui/card"
import { motion } from "framer-motion"

export default function TierSystem() {
  const tiers = [
    {
      title: "Tier 1",
      points: "15, 11, 7",
      categories: [
        {
          name: "SPORTS",
          items: [
            "Field Football Boys",
            "Basketball Boys",
            "Basketball Girls",
            "Box Cricket Boys",
            "Box Cricket Girls",
            "Volleyball Boys",
            "Volleyball Girls",
            "Kabaddi Boys",
            "Throwball Girls",
            "Rink Football Girls",
            "Tug Of War Boys",
            "Tug Of War Girls",
          ],
        },
        {
          name: "ATHLETICS",
          items: ["4×100 Meters Relay (Boys)", "4×400 Meters Relay (Boys)", "4×100 Meters Relay (Girls)"],
        },
      ],
    },
    {
      title: "Tier 2",
      points: "10, 7, 4",
      categories: [
        {
          name: "SPORTS",
          items: [
            "Chess (Mixed)",
            "Carrom Doubles (Mixed)",
            "Table Tennis Singles (Boys)",
            "Table Tennis Doubles (Boys)",
            "Carrom Singles (Boys)",
            "Table Tennis Singles (Girls)",
            "Table Tennis Doubles (Girls)",
            "Carrom Singles (Girls)",
          ],
        },
        {
          name: "ATHLETICS",
          items: [
            "100 Meters (Boys)",
            "200 Mtrs (Boys)",
            "400 Mtrs (Boys)",
            "800 Mtrs (Boys)",
            "Shot Put (Boys)",
            "Discuss Throw (Boys)",
            "Javelin Throw (Boys)",
          ],
        },
      ],
    },
    {
      title: "Tier 3",
      points: "6, 4, 2",
      categories: [
        {
          name: "LITERARY ARTS",
          items: ["Book Quest", "Open-Mic Competition"],
        },
        {
          name: "FINE ARTS",
          items: ["The Painted Story"],
        },
        {
          name: "PHOTOGRAPHY",
          items: ["Euphoria Through My Lens", "Candid Photography"],
        },
        {
          name: "PERFORMING ARTS",
          items: ["Instrumental", "Solo Dance Battle"],
        },
        {
          name: "MEGA AND FUN",
          items: ["Turbo Takedown", "Cosmic Odyssey"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12">Tier System</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white h-full">
                <CardHeader className="text-center border-b border-white/10 bg-white/5">
                  <h2 className="text-2xl font-bold">{tier.title}</h2>
                  <p className="text-lg text-blue-200">Points: {tier.points}</p>
                </CardHeader>
                <CardContent className="p-6">
                  {tier.categories.map((category) => (
                    <div key={category.name} className="mb-6 last:mb-0">
                      <h3 className="text-xl font-semibold mb-3 text-blue-200">{category.name}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <motion.li
                            key={item}
                            className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

