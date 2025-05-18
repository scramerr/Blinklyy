'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Sparkles, Star, Rocket } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    features: ['1 Bio Page', 'Basic Themes', 'Link Analytics (3 Days)', 'trial domain (3 weeks)'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$6/mo',
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    features: ['Unlimited Pages', 'Premium Themes', 'Custom Domains', 'Analytics (30 Days)'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Creator+',
    price: '$15/mo',
    icon: <Rocket className="w-6 h-6 text-blue-500" />,
    features: ['Everything in Pro', 'AI Bio Generator', 'Priority Support', 'Advanced Analytics'],
    cta: 'Upgrade',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-white to-pink-50 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Transparent <span className="text-pink-500">Pricing</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-xl mx-auto">
          Start for free. Upgrade when you're ready to unlock the full potential of your bio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative overflow-hidden border rounded-xl shadow-md transition-all ${
                  plan.popular
                    ? 'border-pink-500 bg-white dark:bg-gray-900'
                    : 'bg-white/80 dark:bg-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full font-semibold shadow">
                    Most Popular
                  </div>
                )}
                <CardHeader className="flex items-center justify-center flex-col gap-2 pt-8">
                  <div>{plan.icon}</div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-pink-500 text-3xl font-extrabold">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300 px-6 pt-0">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-pink-400">✓</span>
                      {f}
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-6 pb-8 flex justify-center">
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? 'bg-pink-500 hover:bg-pink-600 text-white' : ' text-black font-bold bg-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
