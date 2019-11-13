import { MountableComponent } from '../MountableComponent'
import _ from 'lodash'

/**
 * React Component that will handle deep comparison in shouldComponentUpdate.
 * This Component also exposes Component.getDerivedStateFromProps() functionality by
 * checking if state.getDerivedState is set, this way we can generate derived state from a
 * non-static enviroment in the state.getDerivedState function.
 * 
 * Example:
```
export class MyComponent extends StateComponent {
  state = {
    getDerivedState: (nextProps, nextState) => {
      const propsChanged = !this.isEqual(nextProps, this.props)
      const stateChanged = !this.isEqual(this.state, nextState)
      return null
    }
  }
  render() {
    return <LotsOfUI />
  }
}
```
 * 
 * @extends MountableComponent
 */
export class StateComponent extends MountableComponent {
  /**
   * https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
   * It should return an object to update the state, or null to update nothing.
   */
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState && _.isFunction(nextState.getDerivedState)) {
      return nextState.getDerivedState(nextProps, nextState)
    }
    return null
  }

  // TODO MAYBE have custom key: _componentUpdateFingerprint, and if this key is set then it will be used for determening if a component should update or not
  // TODO MAYBE NOT because child-state will be irrelevant with this solution, and break component design.
  shouldComponentUpdate(nextProps, nextState) {
    // const className = this.__proto__.constructor.name
    // console.log(className + '.shouldComponentUpdate', {
    //   changedProps: !this.isEqual(nextProps, this.props),
    //   changedState: !this.isEqual(nextState, this.state),
    //   prevProps: this.props,
    //   nextProps: nextProps,
    //   prevState: this.state,
    //   nextState: nextState
    // })
    // const timestamp = Date.now()
    if (
      !this.isEqual(nextProps, this.props) ||
      !this.isEqual(nextState, this.state)
    ) {
      // console.log(className + `.isEqual took: ${Date.now() - timestamp} ms`)
      return true
    }
    // console.log(className + `.isEqual took: ${Date.now() - timestamp} ms`)
    return false
  }

  isEqual(firstObject, secondObject) {
    return _.isEqual(firstObject, secondObject)
  }
}
