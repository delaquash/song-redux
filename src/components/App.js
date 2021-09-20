import React from 'react';
import PostList from './PostList';
// import SongDetail from './SongDetail';
// import SongList from './SongList';


 const App =() =>{
    return (
        // this is for the first tutorial
        // <div className="ui container grid">
        //     <div className="ui row">
        //         <div className="column eight wide">
        //             <SongList />
        //         </div>
        //         <div className="column eight wide">
        //             <SongDetail />
        //         </div>
        //     </div>
        // </div>

        <div className="ui container">
                <PostList />
        </div>
    )
}
export default App;