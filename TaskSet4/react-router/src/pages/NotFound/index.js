import {FileExcelOutlined} from "@ant-design/icons";

import './NotFound.css'

const NotFound = () => {

    return(
      <div className={"content_box"}>
            <div className={"not_found_page"}>
                  <FileExcelOutlined />
                  404 Not Found
            </div>


      </div>
    );

}

export default NotFound;