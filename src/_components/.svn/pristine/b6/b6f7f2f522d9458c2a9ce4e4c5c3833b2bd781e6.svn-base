import _ from 'lodash'
import { Component } from 'react'

export class MountableComponent extends Component {
  _unmounted = true

  op = {
    log: (value1, value2, value3, value4, value5) => {
      if (value1 === undefined) {
        console.log(this.__proto__.constructor.name, this.state)
      } else if (value2 === undefined) {
        console.log(this.__proto__.constructor.name, value1)
      } else if (value3 === undefined) {
        console.log(this.__proto__.constructor.name, value1, value2)
      } else if (value4 === undefined) {
        console.log(this.__proto__.constructor.name, value1, value2, value3)
      } else if (value5 === undefined) {
        console.log(
          this.__proto__.constructor.name,
          value1,
          value2,
          value3,
          value4
        )
      } else {
        console.warn(
          this.__proto__.constructor.name,
          'MAX_ARGS',
          value1,
          value2,
          value3,
          value4,
          value5
        )
      }
    },
    /**
     * Performs a deep comparison between two values to determine if they are equivalent.
     * @param firstValue The first value to compare.
     * @param secondValue The second value to compare.
     */
    equal: (firstValue, secondValue) => {
      return _.isEqual(firstValue, secondValue)
    },
    /**
     * Creates a deep clone of value.
     *
     * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
     * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
     * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
     * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @param value The value to recursively clone.
     * @return Returns the deep cloned value.
     */
    cloneDeep: value => {
      return _.cloneDeep(value)
    },
    /**
     * Helper method for getting values from object in a safe way.
     * @param {Object} object The object to query.
     * @param {string[]|string} keyPath The path of the property to get.
     */
    get: (object, keyPath) => {
      if (_.isString(keyPath) || _.isArray(keyPath)) {
        return _.get(object, keyPath)
      } else {
        throw new Error(
          `Illegal argument keyPath: ${keyPath} | object: ${object}`
        )
      }
    },
    /**
     * Helper method for getting/setting state.input.active, can be used to control an edit-mode or the like!
     */
    inputActive: value => {
      return this.op.input('active', value)
    },
    /**
     * Helper method for toggling the state.input.active value.
     */
    inputActiveToggle: () => {
      return this.op.input('active', !!!this.op.input('active'))
    },
    /**
     * Helper method for getting/setting state.input values, same API as
     * this.op.state() but keyPath is auto-prefixed with 'input'.
     */
    input: (keyPath, value) => {
      keyPath = keyPath ? 'input.' + keyPath : 'input'
      return this.op.state(keyPath, value)
    },
    /**
     * Helper method for getting state.input-values, or return defaultValue if state.input-value is undefined.
     */
    inputOr: (keyPath, defaultValue) => {
      const stateValue = this.op.input(keyPath)
      if (stateValue !== undefined) {
        return stateValue
      } else {
        return defaultValue
      }
    },
    /**
     * Helper method for getting state.input-values, or return null for all falsy-values.
     */
    inputOrNull: keyPath => {
      const stateValue = this.op.input(keyPath)
      if (stateValue === undefined || !!stateValue) {
        // if undefined or truthy we return stateValue
        return stateValue
      } else {
        // if NOT undefined and falsy we return null
        return null
      }
    },
    /**
     * Helper method for getting/setting state.dialog values, same API as
     * this.op.state() but keyPath is auto-prefixed with 'dialog'.
     * This method also supports single object-argument to set entire object of state.dialog
     */
    dialog: (keyPath, value) => {
      if (_.isObject(keyPath)) {
        value = keyPath
        keyPath = ''
      }
      keyPath = keyPath ? 'dialog.' + keyPath : 'dialog'
      return this.op.state(keyPath, value)
    },
    /**
     * Helper method for getting and setting values on state in a safe way.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {object} [value] The new value of the property, if supplied.
     */
    state: (keyPath, value) => {
      if (value === undefined) {
        // Getter functionality
        if (_.isString(keyPath) || _.isArray(keyPath)) {
          return _.get(this.state, keyPath)
        } else {
          throw new Error(`Illegal argument keyPath: ${keyPath}`)
        }
      } else {
        // Setter functionality
        if (_.isString(keyPath) || _.isArray(keyPath)) {
          if (!this._unmounted) {
            // TODO do we need to optimise this code?
            this.setState((state, _props) => {
              const newState = _.cloneDeep(state) // spread-operator results in corrupted state
              _.set(newState, keyPath, value)
              return newState
            })
          } else {
            // // Only log in dev
            // if (process.env.NODE_ENV !== 'production') {
            //   this.op.log('BLOCKED op.state-setter when _unmounted = true')
            // }
          }
        } else {
          throw new Error(`Illegal argument keyPath: ${keyPath}`)
        }
      }
    },
    /**
     * Helper method for getting state-values, or return defaultValue if state-value is undefined.
     */
    stateOr: (keyPath, defaultValue) => {
      const stateValue = this.op.state(keyPath)
      if (stateValue !== undefined) {
        return stateValue
      } else {
        return defaultValue
      }
    },
    /**
     * Helper method for getting values from props in a safe way.
     * @param {string[]|string} keyPath The path of the property to get.
     */
    props: keyPath => {
      if (_.isString(keyPath) || _.isArray(keyPath)) {
        return _.get(this.props, keyPath)
      } else {
        throw new Error(`Illegal argument keyPath: ${keyPath}`)
      }
    }
  }

  input = {
    /**
     * Helper method for getting values on state in a safe way.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @returns {any} Returns value that keyPath references.
     */
    stateGet: keyPath => {
      if (_.isString(keyPath) || _.isArray(keyPath)) {
        return _.get(this.state, keyPath)
      } else {
        throw new Error(`Illegal argument keyPath: ${keyPath}`)
      }
    },
    /**
     * Helper method for setting values on state in a safe way.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {any} value The new value of the property, if supplied.
     */
    stateSet: (keyPath, value) => {
      // Setter functionality
      if (_.isString(keyPath) || _.isArray(keyPath)) {
        if (!this._unmounted) {
          // TODO do we need to optimise this code?
          this.setState((state, _props) => {
            const newState = _.cloneDeep(state) // spread-operator results in corrupted state
            _.set(newState, keyPath, value)
            return newState
          })
        } else {
          // Only log in dev
          if (process.env.NODE_ENV !== 'production') {
            this.op.log('BLOCKED input.stateSet() when _unmounted = true')
          }
        }
      } else {
        throw new Error(`Illegal argument keyPath: ${keyPath}`)
      }
    },
    /**
     * Helper method for getting state.input values, or return defaultValue if state.input-value is undefined.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {any} defaultValue The default value that will be returned if keyPath points to an undefined object.
     * @returns {any} Returns value that keyPath references, if value referenced by keyPath is undefined defaultValue will be returned.
     */
    get: (keyPath, defaultValue) => {
      keyPath = keyPath ? 'input.' + keyPath : 'input'
      const stateValue = this.input.stateGet(keyPath)
      if (stateValue !== undefined) {
        return stateValue
      } else {
        return defaultValue
      }
    },
    /**
     * Helper method for setting state.input values, same API as this.op.stateSet() but keyPath is auto-prefixed with 'input'.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {any} value The new value of the property, if supplied.
     */
    set: (keyPath, value) => {
      keyPath = keyPath ? 'input.' + keyPath : 'input'
      return this.input.stateSet(keyPath, value)
    },
    /**
     * Helper method for casting a value to an Integer.
     * @param {any} intValue The value that will be converted to an Integer.
     * @param {number} defaultValue The default value that will be returned if intValue can not be converted to an Integer.
     * @returns {number|undefined} Returns a number, returns undefined if intValue and defaultValue is undefined.
     */
    castInt: (intValue, defaultValue) => {
      const parsedInt = parseInt(intValue, 10)
      if (isNaN(parsedInt)) {
        const parsedDefaultValue = parseInt(defaultValue, 10)
        if (isNaN(parsedDefaultValue)) {
          return undefined
        } else {
          return parsedDefaultValue
        }
      } else {
        return parsedInt
      }
    },
    /**
     * Helper method for getting state.input-values as Integers, or return defaultValue as Integer if state.input-value is undefined.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {any} defaultValue The default value that will be returned if keyPath points to an undefined object.
     * @returns {number|undefined} Returns a number, returns undefined if keyPath-value and defaultValue can not be converted to an Integer.
     */
    int: (keyPath, defaultValue) => {
      return this.input.castInt(this.input.get(keyPath), defaultValue)
    },
    /**
     * Helper method for casting a value to a Float.
     * @param {any} floatValue The value that will be converted to a Float.
     * @param {number} defaultValue The default value that will be returned if floatValue can not be converted to a Float.
     * @returns {number|undefined} Returns a number, returns undefined if floatValue and defaultValue can not be converted to a Float.
     */
    castFloat: (floatValue, defaultValue) => {
      if (typeof floatValue === 'number') {
        return floatValue
      }
      const parsedFloat = parseFloat(floatValue)
      if (isNaN(parsedFloat)) {
        if (typeof defaultValue === 'number') {
          return defaultValue
        }
        const parsedDefaultValue = parseFloat(defaultValue)
        if (isNaN(parsedDefaultValue)) {
          return undefined
        } else {
          return parsedDefaultValue
        }
      } else {
        return parsedFloat
      }
    },
    /**
     * Helper method for getting state.input-values as Floats, or return defaultValue as Float if state.input-value is undefined.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {any} defaultValue The default value that will be returned if keyPath points to an undefined object.
     * @returns {number|undefined} Returns a number, returns undefined if keyPath-value and defaultValue can not be converted to a Float.
     */
    float: (keyPath, defaultValue) => {
      return this.input.castFloat(this.input.get(keyPath), defaultValue)
    },
    /**
     * Helper method for casting a value to a String.
     * @param {any} stringValue The value that will be converted to a String.
     * @param {any} defaultValue The default value that will be returned if stringValue can not be converted to a String.
     * @returns {string|null|undefined} Returns a string or null, returns undefined if stringValue and defaultValue is undefined.
     */
    castString: (stringValue, defaultValue) => {
      if (typeof stringValue === 'string') {
        return stringValue
      } else if (stringValue === undefined) {
        if (typeof defaultValue === 'string') {
          return defaultValue
        } else if (defaultValue === undefined) {
          return undefined
        } else if (defaultValue === null) {
          return null
        } else {
          return String(defaultValue)
        }
      } else if (stringValue === null) {
        return null
      } else {
        return String(stringValue)
      }
    },
    /**
     * Helper method for getting state.input-values as Strings, or return defaultValue as String if state.input-value is undefined.
     * @param {string[]|string} keyPath The path of the property to get or set.
     * @param {any} defaultValue The default value that will be returned if keyPath points to an undefined object.
     * @returns {string|null|undefined} Returns a string or null, returns undefined if keyPath points to undefined object and defaultValue is undefined.
     */
    string: (keyPath, defaultValue) => {
      return this.input.castString(this.input.get(keyPath), defaultValue)
    }
  }

  componentDidMount() {
    this._unmounted = false
    // console.log('MountableComponent._unmounted:', this._unmounted)
  }

  /**
   * https://reactjs.org/docs/react-component.html#componentwillunmount
   * componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
   * Perform any necessary cleanup in this method, such as invalidating timers,
   * canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
   *
   * You should not call setState() in componentWillUnmount() because the component will never be re-rendered.
   * Once a component instance is unmounted, it will never be mounted again.
   */
  componentWillUnmount() {
    this._unmounted = true
    // console.log('MountableComponent._unmounted:', this._unmounted)
  }
}
