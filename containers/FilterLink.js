import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter ===
      state.visibilityFilter
  }
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  //console.log(ownProps);
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
      console.log(ownProps);
    }
  }
};

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLink;

// 元々はこういう書かれ方をしていたが、
// connect()を使うことで上記のようにわかりやすく書ける
// //FilterLink
// class FilterLink extends Component {
//
//   //DOMノードにアクセス
//   componentDidMount() {
//     const { store } = this.context;
//     //値が変更されるたびに実行？
//     this.unsubscribe = store.subscribe(() =>
//       //強制的に再描画が発生
//       this.forceUpdate()
//     );
//   }
//
//   //コンポーネント破棄時に呼び出される
//   componentWillUnMount() {
//     //更新をやめる
//     this.unsubscribe();
//   }
//
//   render() {
//     const props = this.props;
//     const { store } = this.context;
//     const state = store.getState();
//
//     return (
//       <Link
//         active={
//          //mapStateToLinkProps部分
//         }
//         onClick={() =>
//           store. //mapDispatchToLinkProps部分
//         }
//       >
//         {props.children}
//       </Link>
//     );
//   }
// }
// FilterLink.contextTypes = {
//   store: React.PropTypes.object
// };
