'use client'
import AccordionComponent from '@/components/AccordionComponent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Container, Main } from '@/styles/homeStyles'

export default function Learn() {
  return (
    <Main>
      <Container>
        <Header />

        <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />

        <AccordionComponent />
      </Container>

      <Footer />
    </Main>
  )
}
