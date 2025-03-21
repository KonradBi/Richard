"use client"

import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Expertise } from "@/components/sections/expertise"
import { Quote } from "@/components/sections/quote"
import { Living } from "@/components/sections/living"
import { Testimonials } from "@/components/sections/testimonials"
import { LogoWall } from "@/components/sections/logo-wall"
import { Team } from "@/components/sections/team"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Expertise />
      <Quote />
      <Living />
      <Team />
      <Testimonials />
      <LogoWall />
    </main>
  )
}
