
import { Component } from "react";
import { Gallery } from "./gallery/gallery";
import { Vortex } from "react-loader-spinner";
import { SearchBar } from "./header/header";
import { getData } from "./api/get-data";
import { Button } from "./load-more/button";
import './photo-search.module.css'



class PhotoGallery extends Component{
    state = {
        hits: [],
        isLoading: true,
        error: '',
        search: 'cat',
        page: 1,
        total: null,
    }

    componentDidMount() {
       this.getAllPhoto(this.state.search)
    }
  
    componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ){
       this.getAllPhoto()}
    }
    

    
    getAllPhoto = async () => {
        try {
            const { search, page, hits } = this.state;
        console.log(search);
        const response = await getData(search, page);

        const newHits = response.data.hits;

        const uniqueNewHits = newHits.filter(newHit => 
            !hits.some(hit => hit.id === newHit.id)
        );

        this.setState(prevState => ({
            hits: page === 1 ? uniqueNewHits : [...prevState.hits, ...uniqueNewHits],
            total: response.data.totalHits,
        }));
        console.log(response.data.hits[0]);
            console.log(this.state)
        }
        catch(error) {
            this.setState({error: error.message})
        }
        finally {
            this.setState({isLoading: false})
        }
 }


   handleSubmit = (searchQuery) => {
        this.setState({ search: searchQuery, hits: [], isLoading: true, page: 1 }, () => {
            this.getAllPhoto(searchQuery);
        });
    };

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }));
    }


    render() {
        const { hits, isLoading, error, total} = this.state;
        
        return (
            <>
            <SearchBar onSubmit={this.handleSubmit}/>
                { isLoading?(<Vortex
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
                        <Gallery hits={hits}/>
                        {(total > 12 && total> hits.length) && <Button onClick={this.loadMore} />}

                    </>)}
                
                
            </>

    );
    }
}

export default PhotoGallery