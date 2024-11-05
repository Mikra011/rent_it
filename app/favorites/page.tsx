import EmptyList from '@/components/home/EmptyList'
import PropertiesList from '@/components/home/PropertiesList'
import { fetchFavorites } from '@/utils/actions'

async function FavoritesPage() {
  const favorites = await fetchFavorites()

  // Map the favorites to match the expected PropertyCardProps type
  const mappedFavorites = favorites.map((property) => ({
    ...property,
    images: property.images.map(img => img.url), // Extract only the image URLs
  }));

  if (mappedFavorites.length === 0) {
    return <EmptyList />
  }

  return <PropertiesList properties={mappedFavorites} />
}

export default FavoritesPage
