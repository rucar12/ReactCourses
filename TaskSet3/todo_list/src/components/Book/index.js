import "./Book.css";
import React from "react";
import { CheckCircleOutlined,DeleteOutlined} from '@ant-design/icons';

const Book = ({item, onDeleteItem,onChangeStatus}) => {

  const itemStyle = `book-item${item.wrote ? "-wrote" : ""}`;
  const checkMarkStyle = `check_mark${item.wrote ? "-active" : ""}`;

  return(
    <div className='book' >
      <>
        <div className={itemStyle}>
          <span className={checkMarkStyle} onClick={()=>onChangeStatus(item.id)}>
            <CheckCircleOutlined />
          </span>
          <div>
          <div className="book-item-info">
            <span>
                {item.author}
            </span>
            <p>
                 {item.name}
            </p>
          </div>
          </div>
          <span className='book-item-description' >
              {item.description}
          </span>
          <button className='button'>
            <DeleteOutlined className='delete' onClick={()=>onDeleteItem(item.id)}/>
          </button>
        </div>
      </>
    </div>
  );
}

export default Book;