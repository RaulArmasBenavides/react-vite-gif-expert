export const getGifs = async( category ) => {
    //kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIFT_KEY}=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}