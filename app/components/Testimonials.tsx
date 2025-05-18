import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jane Doe",
    avatar: "/images/jane.jpg",
    testimonial: "blinklyy has made customizing my personal page a breeze. It's intuitive and easy to use!",
    rating: 5,
    role: "Content Creator",
  },
  {
    name: "John Smith",
    avatar: "/images/john.jpg",
    testimonial: "I love how blinklyy connects all my socials in one spot. It’s a must-have for any creator.",
    rating: 4,
    role: "Influencer",
  },
  {
    name: "Emily Turner",
    avatar: "/images/emily.jpg",
    testimonial: "The drag-and-drop themes made setting up my blinklyy page so fast! Highly recommend it.",
    rating: 5,
    role: "Freelancer",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          What Creators Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border border-border rounded-lg p-6 bg-white"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 text-left">
                <p className="text-lg">{testimonial.testimonial}</p>
                <div className="flex items-center mt-4 space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-500" size={18} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
