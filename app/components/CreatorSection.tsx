import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const creators = [
  {
    name: "@zoe.codes",
    avatar: "/avatars/zoe.png",
    quote: "blinklyy made my links look ✨ *so* professional.",
    pagePreview: "/showcase/zoe-blinklyy.png",
    platform: "TikTok",
  },
  {
    name: "@artbyluna",
    avatar: "/avatars/luna.png",
    quote: "The themes and analytics changed the game for me.",
    pagePreview: "/showcase/luna-blinklyy.png",
    platform: "Instagram",
  },
  {
    name: "@kevin.dev",
    avatar: "/avatars/kevin.png",
    quote: "A link in bio that actually feels *mine*. Love it!",
    pagePreview: "/showcase/kevin-blinklyy.png",
    platform: "YouTube",
  },
]

export function CreatorShowcase() {
  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
          Featured <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Creators</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {creators.map((creator, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border border-border bg-gradient-to-br from-white/70 via-white/60 to-white/40 backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardHeader className="flex items-center space-x-4 p-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={creator.avatar} alt={creator.name} />
                  <AvatarFallback>{creator.name[1]}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-semibold">{creator.name}</p>
                  <p className="text-xs text-muted-foreground">{creator.platform}</p>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Image
                  src={creator.pagePreview}
                  alt={`${creator.name} blinklyy page`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover border-y border-border"
                />
                <div className="p-6 text-sm text-muted-foreground italic">
                  “{creator.quote}”
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
