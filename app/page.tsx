import LoadingCards from "@/components/card/LoadingCards"
import CategoriesList from "@/components/home/CategoriesList"
import PropertiesContaner from "@/components/home/PropertiesContaner"
import { Suspense } from "react"

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

      {/* Use Suspense to show SkeletonCard loading state 
      while data fetches in PropertiesContainer */}
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContaner
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>

    </section>
  )
}