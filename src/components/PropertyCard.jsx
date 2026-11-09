function PropertyCard({ property, favorites = [], setFavorites }) {
    const isFavorites = favorites.includes(property.id);
    function toggleFavorites () {
        setFavorites((currentFavorites) =>
            currentFavorites.includes(property.id) ? currentFavorites.filter((id) => id !==
        property.id) : [...currentFavorites, property.id]
        );
    }
    return (
        <div className="property-card">
            <div className="property-image">
                <img src={property.image} alt={property.name} />

                <button type="button"
                onClick={toggleFavorites}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white text-red-500 flex items-center justify-center text-2xl shadow-md"
                >
                    {isFavorites ? "\u2665" : "\u2661"}
                </button>
            </div>

            <div className="property-info">
                <span className="property-location">{property.location}</span>
                <h3>{property.name}</h3>
                <p className="property-description">{property.description}</p>

                <div className="property-details">
                    <span>{property.bedrooms} Bedrooms</span>
                    <span>{property.bathrooms} Bathrooms</span>
                </div>

                <div className="property-footer">
                    <h4>{property.price}</h4>
                </div>

            </div>
        </div>
    );
}

export default PropertyCard;