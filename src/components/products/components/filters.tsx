import {
    Box,
    TextField,
    Select,
    MenuItem,
    Typography,
    InputLabel,
    FormControl,
} from "@mui/material";

interface FiltersType {
    search: string;
    sort: string;
    category: string;
}

interface FiltersProps {
    filters: FiltersType;
    setFilters: (filters: FiltersType) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
    return (
        <Box sx={{ maxWidth: 300, p: 2 }}>
            <Typography variant="h6">Filters</Typography>

            <TextField
                fullWidth
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                }
                sx={{ my: 2 }}
            />

            <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel id="sort-label">Sort</InputLabel>
                <Select
                    labelId="sort-label"
                    label="Sort"
                    value={filters.sort}
                    onChange={(e) =>
                        setFilters({ ...filters, sort: e.target.value })
                    }
                >
                    <MenuItem value="">Default</MenuItem>
                    <MenuItem value="az">Name (A–Z)</MenuItem>
                    <MenuItem value="za">Name (Z–A)</MenuItem>
                    <MenuItem value="low">Price (Low → High)</MenuItem>
                    <MenuItem value="high">Price (High → Low)</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                    labelId="category-label"
                    label="Category"
                    value={filters.category}
                    onChange={(e) =>
                        setFilters({ ...filters, category: e.target.value })
                    }
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="smartphones">Smartphones</MenuItem>
                    <MenuItem value="laptops">Laptops</MenuItem>
                    <MenuItem value="fragrances">Fragrances</MenuItem>
                    <MenuItem value="beauty">Beauty</MenuItem>
                    <MenuItem value="furniture">Furniture</MenuItem>
                    <MenuItem value="groceries">Groceries</MenuItem>
                    <MenuItem value="home-decoration">Home-decoration</MenuItem>
                    <MenuItem value="kitchen-accessories">
                        Kitchen-accessories
                    </MenuItem>
                    <MenuItem value="mens-shirts">Mens-shirts</MenuItem>
                    <MenuItem value="mens-shoes">Mens-shoes</MenuItem>
                    <MenuItem value="mens-watches">Mens-watches</MenuItem>
                    <MenuItem value="mobile-accessories">
                        Mobile-accessories
                    </MenuItem>
                    <MenuItem value="motorcycle">Motorcycl</MenuItem>
                    <MenuItem value="skin-care">Skin-care</MenuItem>
                    <MenuItem value="sports-accessories">
                        Sports-accessories
                    </MenuItem>
                    <MenuItem value="sunglasses">Sunglasses</MenuItem>
                    <MenuItem value="tablets">Tablest</MenuItem>
                    <MenuItem value="tops">Tops</MenuItem>
                    <MenuItem value="vehicle">Vehicle</MenuItem>
                    <MenuItem value="womens-bags">Womens-bags</MenuItem>
                    <MenuItem value="womens-dresses">Womens-dresses</MenuItem>
                    <MenuItem value="womens-jewellery">
                        Womens-jewellery
                    </MenuItem>
                    <MenuItem value="womens-shoes">Womens-shoes</MenuItem>
                    <MenuItem value="womens-watches">Womens-watches</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
