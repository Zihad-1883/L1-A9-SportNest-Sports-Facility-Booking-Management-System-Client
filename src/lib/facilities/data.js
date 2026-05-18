export const fetchFacilities = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-facilities`);
    const data = await res.json();
    return data;
}

export const fetchFeaturedFacilities = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/features`);
    const data = await res.json();
    return data;
}

// export const fetchFacilityDetails = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/:id`)
//     const data = await res.json();
//     return data;
// }