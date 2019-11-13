import { Component } from 'react'
import _ from 'lodash'

/**
 * React Component that will handle deep comparison in shouldComponentUpdate.
 */
export class PropsComponent extends Component {
  // TODO MAYBE have custom key: _componentUpdateFingerprint, and if this key is set then it will be used for determening if a component should update or not
  // TODO MAYBE NOT because child-state will be irrelevant with this solution, and break component design.
  shouldComponentUpdate(nextProps) {
    // const className = this.__proto__.constructor.name
    // console.log(className + '.shouldComponentUpdate', {
    //   changedProps: !this.isEqual(nextProps, this.props),
    //   prevProps: this.props,
    //   nextProps: nextProps
    // })
    // const timestamp = Date.now()
    if (!this.isEqual(nextProps, this.props)) {
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
