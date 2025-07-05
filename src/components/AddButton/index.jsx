
import {useDispatch, useSelector} from "react-redux";
import {toggleList} from "../../redux/action";
import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";


const AddButton = ({movie}) => {
  const {list} = useSelector((store) => store);
  
  //Dispatch kurulum
  const dispatch = useDispatch();

// film elemani lsitede var mi? kotrol et
  const isAdded = list.find((item) => item.id == movie.id);

  // listeye ekleme/cikarma
    const handleClick =() => {
      dispatch(toggleList(movie, "true"));
    };
  return (
    
    <button 
    onClick={handleClick}
    className="bg-blue-600 py-2 px-4 flex items-center gap-2 rounded hover:bg-blue-700 cursor-pointer justify-center ">

      {isAdded ? (
        <>
        <MdBookmarkRemove /> <span>Remove to List</span>
        </>
      ) : (
        <>
         <MdBookmarkAdd /> <span>Add to List</span>
        </>
      )}    
    </button>
  );
};

export default AddButton;