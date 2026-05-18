export const fetchFacilities = async () => {
    const res = await fetch('http://localhost:8080/all-facilities');
    const data = await res.json();
    return data;
}

export const fetchFeaturedFacilities = async () => {
    const res = await fetch('http://localhost:8080/features');
    const data = await res.json();
    return data;
}