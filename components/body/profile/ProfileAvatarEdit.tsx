import { setActionMain } from "../../../redux/reducer/main";
import { useDispatch } from "react-redux";
import * as styles from "public/static/styles/main.scss";

type Type = {
  owner: boolean;
};

export default function({ owner }: Type) {
  const dispatch = useDispatch();

  // file upload
  const handleFileUpload = () => document.getElementById("imgFile")!.click();

  // file input 등록/변경 시, url get
  const handleFileChange = async e => {
    if (e && e.length > 0) {
      dispatch(setActionMain.modal("imageCrop", { file: e[0] }));
    }
  };

  return (
    <div>
      {owner && (
        <div className={styles.pae_wrapper} onClick={handleFileUpload}>
          <i className="material-icons">edit</i>
        </div>
      )}
      {owner && (
        <input
          type="file"
          id="imgFile"
          accept="image/*"
          onChange={e => handleFileChange(e.target.files)}
          onClick={(e: any) => (e.target.value = null)}
        />
      )}
    </div>
  );
}
