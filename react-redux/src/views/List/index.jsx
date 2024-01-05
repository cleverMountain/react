import { useLocation } from 'react-router-dom';
import { useGetHotOrHighList } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const location = useLocation().pathname.split('/')[2],
    list = useGetHotOrHighList(location === 'high' ? 1 : 2),
    navigate = useNavigate();

  return (
    <div>
      {
        list.map(item => {
          return (
            <div 
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              {item.name}
            </div>
          )
        })
      }
    </div>
  )
}


export default List