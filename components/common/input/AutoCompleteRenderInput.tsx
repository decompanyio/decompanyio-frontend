import React, { ReactElement } from 'react'
import AutoSuggest from 'react-autosuggest'

export default function({ addTag, tagList, ...props }): ReactElement {
  let handleOnChange = (e, { method }) => {
    if (method === 'enter') return e.preventDefault()
    else return props.onChange(e)
  }

  let inputValue = (props.value && props.value.trim().toLowerCase()) || ''
  let inputLength = inputValue.length
  let suggestions =
    tagList && tagList.length > 0
      ? tagList.filter(
          (tag): boolean =>
            tag.id.toLowerCase().slice(0, inputLength) === inputValue
        )
      : []

  return (
    <AutoSuggest
      ref={props.ref}
      suggestions={suggestions}
      shouldRenderSuggestions={(value): boolean =>
        value && value.trim().length > 0
      }
      getSuggestionValue={suggestion => suggestion}
      renderSuggestion={suggestion => (
        <span key={suggestion.id}>{suggestion.id}</span>
      )}
      inputProps={{ ...props, onChange: handleOnChange }}
      onSuggestionSelected={(_e, { suggestion }) => {
        addTag(suggestion.id)
      }}
      onSuggestionsFetchRequested={() => true}
      onSuggestionsClearRequested={() => true}
    />
  )
}
