const findMovie=(id,movies)=>{
    return movies.find((movie) => movie.id === parseInt(id));
}

export default findMovie



