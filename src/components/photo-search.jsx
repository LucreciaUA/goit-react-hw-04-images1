
import { Component } from "react";
import { Gallery } from "./gallery/gallery";
import { Vortex } from "react-loader-spinner";
import { SearchBar } from "./header/header";
import { getData } from "./api/get-data";
import { Button } from "./load-more/button";
import { Modal } from "./modal/modal";
import './photo-search.module.css'



class PhotoGallery extends Component{
    state = {
        hits: [],
        isLoading: true,
        error: '',
        search: 'cat',
        page: 1,
        total: null,
        isModal: false,
        selectedImage: null,
    }

  
componentDidMount() {
       this.getAllPhoto(this.state.search)
    }
    

    
    getAllPhoto = async () => {
        try {
            const search = this.state.search
        const page = this.state.page
        console.log(search)
        const response = await getData(search, page);
        this.setState(prevState => ({
                hits: page === 1 ? response.data.hits : [...prevState.hits, ...response.data.hits],
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
        }), () => {
            this.getAllPhoto(this.state.search);
        });
    }

    onImgClick = (image) => {
        document.body.classList.add('no-scroll');
        this.setState({ selectedImage: image, isModal: true });
        console.log('click', image.id)
    }

    closeModal = () => {
        document.body.classList.remove('no-scroll');
        this.setState({ isModal: false });
    }

    render() {
        const { hits, isLoading, error, total, isModal, selectedImage} = this.state;
        
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
                        <Gallery hits={hits} onImgClick={this.onImgClick} />
                        {(total > 12 && total> hits.length) && <Button onClick={this.loadMore} />}
                        {
                            isModal && (<Modal image={selectedImage} onClose={this.closeModal} />)
   
                        }
                    </>)}
                
                
            </>

    );
    }
}

export default PhotoGallery