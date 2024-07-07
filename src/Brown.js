export default function Brown(){
    return (
        <Toolbar
        onPlayMovie={() => alert('playing')}
        onUploadImage={() => alert('Uploading!')}
        />
    )
}

function Toolbar({onPlayMovie, onUploadImage}){
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    )
}

function Button({onClick, children}){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}