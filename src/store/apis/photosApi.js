import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { albumsApi } from "./albumsApi";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
       baseUrl: 'http://localhost:3005' 
    }),
    endpoints(builder){
        return{
            fetchPhotos: builder.query({
                query: (album)=>{
                    return{
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET'
                    };
                }
            }),
            addPhotos: builder.mutation({
                query: (album)=>{
                    return{
                        method: 'POST',
                        url: '/photos',
                        body: {
                            albumId: album.id,
                            url: faker.image.url(150,150,true)
                        }
                    };
                }
            }),
            removePhotos: builder.mutation({
                query: (photo)=>{
                    return{
                        method: 'DELETE',
                        url: `/photos/${photo.id}`,
                    };
                }
            }),
        };
    },
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;
export {photosApi};