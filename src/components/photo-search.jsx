
import { useEffect, useState } from "react";
import { Gallery } from "./gallery/gallery";
import { Vortex } from "react-loader-spinner";
import { SearchBar } from "./header/header";
import { getData } from "./api/get-data";
import { Button } from "./load-more/button";
import './photo-search.module.css'
import { NoImages } from "./noimg/noImages";
import { images } from "./api/images-norm";
import { Starting } from "./starting-page/starting-page";



const PhotoGallery =()=>{

    const [hits, setHits] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {

        const getAllPhoto = async () => {
            if (!search) {
                return
            }

        try {
            setIsLoading(true);
            const response = await getData(search, page);
            const newHits = images(response.hits);
            setHits(prev => prev?[...prev, ...newHits]:newHits);
            //console.log(hits)
            setTotal(response.totalHits);
            //console.log(hits)
            //console.log(search)
            setIsLoading(false);
        } catch(error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
       
        getAllPhoto()
        
    }, [search, page])
  
    
    const handleSubmit = (searchQuery) => {
        setSearch(searchQuery);
        setHits([]);
        setPage(1);
        setTotal(0)
        console.log(search)
    };

    const loadMore = () => {
        
        setPage((prev) => prev+1)
    }



        return (
            <>
            <SearchBar onSubmit={handleSubmit}/>
                { search === '' ? (
                <Starting/>
            ) : isLoading?(<Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['blue', 'blue', 'blue','yellow', 'yellow', 'yellow']}
  />):
                    (<>
                        {error && <p>Error: {error}</p>}
                        {total === 0 ? (
                        <NoImages/>
                    ) : (
                        <Gallery hits={hits} />
                    )}
                        {(total > 12 && total> hits.length) && <Button onClick={loadMore} />}

                    </>)}
                
                
            </>

    );
    
}

export default PhotoGallery
