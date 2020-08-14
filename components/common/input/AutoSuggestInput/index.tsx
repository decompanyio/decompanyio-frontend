import * as styles from 'public/static/styles/scss/index.scss'
import common from '../../../../common/common'
import AutoSuggest from 'react-autosuggest'
import { psString } from 'utils/localization'
import React, { ReactElement, useState } from 'react'
import { useMain } from '../../../../redux/main/hooks'
import TagListItem from '../../../../service/model/TagListItem'

interface AutoSuggestInputProps {
  search: Function
  enter?: Function
  type: string
  getNameList?: any
}

function AutoSuggestInput({
  search,
  enter,
  type,
  getNameList
}: AutoSuggestInputProps): ReactElement {
  const { tagList } = useMain()
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const setAutoSuggestions = (value: string) => {
    const escapedValue = common.escapeRegexCharacters(value.trim())

    if (escapedValue === '') return []

    const regex = new RegExp('^' + escapedValue, 'i')

    switch (type) {
      case 'tag':
        return tagList.filter((data: TagListItem) => regex.test(data._id))

      case 'name':
        let tempArr = getNameList.filter(
          (data, i) =>
            getNameList.findIndex(
              data2 =>
                (data.user ? data.user.e : 'Anonymous') ===
                (data2.user ? data2.user.e : 'Anonymous')
            ) === i
        )
        return tempArr.filter(data =>
          regex.test(data.user ? data.user.e : 'Anonymous')
        )

      default:
        break
    }
  }

  const getSuggestionValue = suggestion => {
    switch (type) {
      case 'tag':
        return suggestion._id

      case 'name':
        return suggestion.user ? suggestion.user.e : 'Anonymous'

      default:
        break
    }
  }

  const getSectionSuggestions = (section): { _id: string; value: number }[] => {
    let arr = new Array(0)
    arr.push(section)
    return arr
  }

  const setPlaceholder = (): string => {
    let _placeholder: string
    _placeholder = ''

    switch (type) {
      case 'tag':
        return (_placeholder = psString('auto-placeholder-1'))

      case 'name':
        return (_placeholder = psString('auto-placeholder-2'))

      default:
        break
    }

    return _placeholder
  }

  const onChange = (_event, { newValue }) => setValue(newValue)

  const onKeyUp = e => {
    if (e.keyCode === 13 && enter) enter(value)
  }

  const onSuggestionSelected = (_event, { suggestion }) => {
    search(suggestion)
    setValue('')
  }

  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(setAutoSuggestions(value))

  const onSuggestionsClearRequested = () => setSuggestions([])

  const renderSectionTitle = section => (
    <strong className={styles.asi_count}>{section.value}</strong>
  )

  // 표시할 값 SET
  const renderSuggestion = suggestion => {
    switch (type) {
      case 'tag':
        return suggestion._id

      case 'name':
        return suggestion.user ? suggestion.user.e : 'Anonymous'

      default:
        break
    }
  }

  const inputProps = {
    placeholder: setPlaceholder(),
    value,
    onChange,
    onKeyUp
  }

  return (
    <AutoSuggest
      multiSection={true}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      highlightFirstSuggestion={true}
      onSuggestionSelected={onSuggestionSelected}
      renderSectionTitle={renderSectionTitle}
      getSectionSuggestions={getSectionSuggestions}
      inputProps={inputProps}
    />
  )
}

export default AutoSuggestInput
