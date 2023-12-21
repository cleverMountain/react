import React, {useEffect} from "react"
import { connect } from 'react-redux';

const FirstPage: React.FC = (a) => {
  useEffect(() => {
    console.log(a)
  })
  return (
    <div>2</div>
  )
}
const mapStateToProps = (state) => ({
  someData: state,
});
export default connect(mapStateToProps)(FirstPage)