import React from 'react';

const Breadcrumb = (props) => {
  return (
    <div>
      <div>
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">{props.title}</li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;