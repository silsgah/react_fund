//named export
export function Profile() {
    const image = "https://i.imgur.com/MK3eW3Am.jpg"
    const description = "Image description"
    return (
        <img
        src= {image}
        alt= {description}
        />
    )
}

//default export
export default function Gallery() {
    return (
        <div>
            <Profile />
            <Profile />
            <Profile />
        </div>
    )
}