import React from 'react'
/**
 * A state props validator.
 * @author Steven Agyekum <Burnett01>
 * @license MIT
 * @class
 */
export class StateValidator extends React.Component {
  /**
   * Creates an instance.
   * @param {Object} props 
   */
  constructor (props) {
    super(props)
    this.rules = {}
  }
  /**
   * Sets the rules for validation.
   * Also adds rules as props to state.
   * @context Before component was mounted
   * @param {Object} rules - The rules
   */
  validationRules(rules) {
    this.state.validated = {}
    for (const prop in rules)
      this.state.validated[prop] = null
    this.rules = rules
  }
  /**
   * Validates a prop in state.
   * @context After component was mounted
   * @param {String} prop - The prop
   * @returns {Boolean} - true/false
   */
  validateState = prop => {
    const state = this.state
    const value = state[prop]
    const rules = this.rules
    if (!(prop in rules)) return true
    let {
      len,
      minLen,
      maxLen,
      min,
      max,
      regex,
      has,
      notIf
    } = rules[prop]
    let isValid = false
    let [
      validMinLen = false,
      validMaxLen = false,
      validMin = false,
      validMax = false
    ] = []
  
    if (notIf && notIf.filter(({field, value}) => {
      return state[field] == value}).length) return true
    if (len) isValid = value.length === len
    if (minLen) isValid = validMinLen = value.length >= minLen
    if (maxLen) isValid = validMaxLen = value.length <= maxLen
    if (minLen && maxLen) isValid = validMinLen && validMaxLen
    if (min) isValid = value >= min
    if (max) isValid = value <= max
    if (min && max) isValid = validMin && validMax
    if (regex) isValid = regex.test(value)
    if (has) isValid = has.includes(value)

    this.state.validated[prop] = isValid
    this.setState({ validated: this.state.validated })
    return isValid
  }
  /**
   * Sets state and validates it.
   * Helper method.
	 * 
	 * @param {String} prop - The state prop
	 * @param {any} value - The value
   * @async
	 */
  setStateValidate = async (prop, value) => {
    await this.setState({ [prop]: value })
    await this.validateState(prop)
  }
}
