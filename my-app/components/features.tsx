import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BarChart className="w-10 h-10 mb-2" />
              <CardTitle>SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Improve your search engine rankings and drive organic traffic to your website.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-10 h-10 mb-2" />
              <CardTitle>Social Media Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Engage with your audience and build brand awareness across social platforms.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 mb-2" />
              <CardTitle>PPC Advertising</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Create targeted ad campaigns to reach potential customers and drive conversions.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

