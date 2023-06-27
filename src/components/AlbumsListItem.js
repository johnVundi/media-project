import { GoTrashcan } from 'react-icons/go';
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumMutation } from '../store';

function AlbumsListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = ()=>{
        removeAlbum(album);
    }

    const header = (<>
        <Button className='mr-2' loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan />
        </Button> 
        {album.tittle}
        </>);

    return (
    <ExpandablePanel key={album.id} header={header}>
      list of Photos
    </ExpandablePanel>
    );
}

export default AlbumsListItem













