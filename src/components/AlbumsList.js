import React from 'react'
import { useFetchAlbumsQuery  } from '../store'
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';


function AlbumsList({user}) {
  const {data, error, isLoading} = useFetchAlbumsQuery(user)

  let content;
  if(isLoading){
    content = <Skeleton times={3}/>
  }else if(error){
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      const header = <div> {album.tittle}</div>;

      return <ExpandablePanel key={album.id} header={header}>
        list of Photos
      </ExpandablePanel>
    })
  }


  return (
    <div>
      <div>
      Albums for {user.name}
      </div>
       <div>
        {content}
       </div>
    </div>
  )
}

export default AlbumsList