import CategoriesList from "@/components/home/CategoriesList"
import PropertiesContaner from "@/components/home/PropertiesContaner"
import { Button } from "@/components/ui/button"

export default function Home({
  searchParams
}: {
  searchParams: {
    category?: string,
    search?: string
  }
}) {

  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <PropertiesContaner
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  )
}