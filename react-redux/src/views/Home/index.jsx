
import {useProductList} from "../../hooks"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { listAction } from "../../store/action";
import { useEffect } from "react";

const Home = ({productList, listAction}) => {
  
// console.log(productList, listAction)
  const list = [],
        navigate = useNavigate();
  useEffect(() => {
    if (!productList.length) {
      listAction()
    }
  }, [])
  return (
    <div>
      <div>
        <div>
          <Link to={ {pathname: "list/high"} }>最新</Link>
          <Link to={ {pathname: "list/hot"} }>最热</Link>
        </div>
        <div>
          {
            productList.map(item => {
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
      </div>
    </div>
  )
}

/**
 * connet(mapStateToProps, mapDispatchToProps) {
 *   let param = Object.assign(mapStateToProps(), mapDispatchToProps)
 *   return function (component) {
 *     return component(param)
 *   }
 * }
 * 
 */
// 需要的state转化为prop
const mapStateToProps = (state) => {
  return {
    productList: state.productList
  }
}
// 需要的dispatch或action
const mapDispatchToProps = {
  listAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)