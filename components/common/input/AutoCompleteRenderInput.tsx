import React from "react";
import AutoSuggest from "react-autosuggest";

export default function({ addTag, tagList, ...props }) {
  let handleOnChange = (e, { method }) => {
    if (method === "enter") return e.preventDefault();
    else return props.onChange(e);
  };

  let inputValue = (props.value && props.value.trim().toLowerCase()) || "";
  let inputLength = inputValue.length;
  let suggestions =
    tagList && tagList.length > 0
      ? tagList.filter(
          tag => tag._id.toLowerCase().slice(0, inputLength) === inputValue
        )
      : [];

  return (
    <AutoSuggest
      ref={props.ref}
      suggestions={suggestions}
      shouldRenderSuggestions={value => value && value.trim().length > 0}
      getSuggestionValue={suggestion => suggestion}
      renderSuggestion={suggestion => (
        <span key={suggestion._id}>{suggestion._id}</span>
      )}
      inputProps={{ ...props, onChange: handleOnChange }}
      onSuggestionSelected={(_e, { suggestion }) => {
        addTag(suggestion._id);
      }}
      onSuggestionsFetchRequested={() => true}
      onSuggestionsClearRequested={() => true}
    />
  );
}
