import React from 'react';

const Breadcrumb = (props) => {
  return (
    <div>
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">{props.title}</li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;