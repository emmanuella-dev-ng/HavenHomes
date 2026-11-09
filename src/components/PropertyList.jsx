import { useState } from "react";
import properties from "../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyList({ favorites, setFavorites }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const filteredProperties = properties.filter((property) => {
        const matchesSearch = [
        property.name,
        property.location,
        property.description,
        property.category,
    ].some((value) => 
    value?.toLowerCase().includes(searchTerm.toLowerCase(
    ))
        );
        const matchesCategory = category === "All" || property.category === category;
        return matchesSearch && matchesCategory;
    });

    const displayProperties = showAll ? filteredProperties : filteredProperties.slice(0,3);
    return (
        <section id="properties" className="properties-section">
            <div className="properties-heading">
                <p className="section-subtitle">EXPLORE OUR COLLECTION</p>
                <h2>Find Your Perfect Property</h2>
                <p>Explore carefully selected properties designed to match your lifestyle.</p>
            </div>

            <div className="property-controls">
                <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowAll(false);
                }}
                />

                <div className="category-filters">
                    {["All", "For Sale", "For Rent"].map((item) => (
                        <button
                        key={item}
                        className={category === item ? "active-filter" : ""}
                        onClick={() => {
                            setCategory(item);
                            setShowAll(false);
                        }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="property-grid">
                {displayProperties.length > 0 ? (
                    displayProperties.map((property) => (
                        <PropertyCard
                        key={property.id}
                        property={property}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        />
                    ))
                ) : (
                  <p className="no-results">
                    No properties found. Try another search.
                  </p>
                )}
            </div>

            {filteredProperties.length > 3 && (
                <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "View Less" : "View All Properties"}
                </button>
            )}
        </section>
    );
}

export default PropertyList;