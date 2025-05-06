import type { Product } from "../components/types/types"

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const resp = await fetch("https://dummyjson.com/products")
        if (!resp.ok) {
            throw new Error(`API request failed with status ${resp.status}`)
        }
        const json = await resp.json()
        return json.products
    } catch (error) {
        console.error("Error fetching products:", error)
        return []
    }
}
