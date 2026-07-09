import CategoriesGrid from "./CategoriesGrid"
import Testimonials from "./Testimonials"

const Categories = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-16 xl:gap-20 px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15">
      <CategoriesGrid />
      <Testimonials />
    </section>
  )
}

export default Categories