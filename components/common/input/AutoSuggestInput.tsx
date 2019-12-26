import * as styles from "public/static/styles/main.scss";
import common from "../../../common/common";
import Autosuggest from "react-autosuggest";
import { useSelector } from "react-redux";
import { psString } from "utils/localization";
import React, { useState } from "react";

type Type = {
  search: any;
  type: string;
  getNameList?: any;
};

function AutoSuggestInput({ search, type, getNameList }: Type) {
  const tagListFromRedux = useSelector(state => state.main.tagList);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 자동 완성 리스트 설정
  const getSuggestions = (value: string) => {
    const escapedValue = common.escapeRegexCharacters(value.trim());

    if (escapedValue === "") return [];

    const regex = new RegExp("^" + escapedValue, "i");

    switch (type) {
      case "tag":
        return tagListFromRedux.filter(data => regex.test(data._id));

      case "name":
        let tempArr = getNameList.filter(
          (data, i) =>
            getNameList.findIndex(
              data2 =>
                (data.user ? data.user.e : "Anonymous") ===
                (data2.user ? data2.user.e : "Anonymous")
            ) === i
        );
        return tempArr.filter(data =>
          regex.test(data.user ? data.user.e : "Anonymous")
        );

      default:
        break;
    }
  };

  // 보여줄 값 GET
  const getSuggestionValue = suggestion => {
    switch (type) {
      case "tag":
        return suggestion._id;

      case "name":
        return suggestion.user ? suggestion.user.e : "Anonymous";

      default:
        break;
    }
  };

  const getSectionSuggestions = section => {
    let arr = new Array(0);
    arr.push(section);
    return arr;
  };

  // placeholder 설정
  const getPlaceholder = () => {
    let _placeholder: string = "";

    switch (type) {
      case "tag":
        return (_placeholder = psString("auto-placeholder-1"));

      case "name":
        return (_placeholder = psString("auto-placeholder-2"));

      default:
        break;
    }

    return _placeholder;
  };

  // @ts-ignore
  const onChange = (event, { newValue }) => setValue(newValue);

  // @ts-ignore
  const onSuggestionSelected = (event, { suggestion }) => {
    search(suggestion);
    setValue("");
  };

  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const renderSectionTitle = section => (
    <strong className={styles.asi_count}>{section.value}</strong>
  );

  // 표시할 값 SET
  const renderSuggestion = suggestion => {
    switch (type) {
      case "tag":
        return suggestion._id;

      case "name":
        return suggestion.user ? suggestion.user.e : "Anonymous";

      default:
        break;
    }
  };

  const inputProps = {
    placeholder: getPlaceholder(),
    value,
    onChange: onChange
  };

  return (
    <Autosuggest
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
  );
}

export default AutoSuggestInput;
