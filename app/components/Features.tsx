import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Share, LineChart } from "lucide-react"

const features = [
  {
    title: "Drag & Drop Themes",
    description: "Easily personalize your blinklyy page in seconds.",
    icon: <Sparkles className="text-pink-500" size={28} />,
    tag: "Aesthetic",
    gradient: "from-pink-100 via-pink-50 to-white",
  },
  {
    title: "Link Everything",
    description: "Connect TikTok, Insta, YouTube, GitHub and more.",
    icon: <Share className="text-blue-500" size={28} />,
    tag: "Gen Z Essential",
    gradient: "from-blue-100 via-blue-50 to-white",
  },
  {
    title: "Analytics Built-in",
    description: "See who's clicking your links in real-time.",
    icon: <LineChart className="text-green-500" size={28} />,
    tag: "Professional",
    gradient: "from-green-100 via-green-50 to-white",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Why Creators Love <span className="text-pink-500">blinklyy</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border rounded-lg bg-gradient-to-br ${feature.gradient} backdrop-blur-sm`}
            >
              <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-500" />
              <CardHeader className="flex flex-col items-start space-y-3 p-6">
                {feature.icon}
                <CardTitle className="text-left text-lg lg:text-3xl font-extrabold">
                  {feature.title}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className={`text-lg ${
                    feature.tag === "Aesthetic"
                      ? "bg-pink-100 text-pink-600"
                      : feature.tag === "Gen Z Essential"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {feature.tag}
                </Badge>
              </CardHeader>
              <CardContent className="text-left text-muted-foreground text-sm md:text-base font-semibold px-6 pb-6 pt-0">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
