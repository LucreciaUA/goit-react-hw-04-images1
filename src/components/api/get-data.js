
import { api } from "./api";

export const getData = async (search, page) => {

const {data} = await api.get(`?q=${search}&page=${page.toString()}&key=40401726-c7a7b8e60d6c4450cbe7a420e&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(data)
    return data
    
};

