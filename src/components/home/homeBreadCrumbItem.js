import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class homeBreadCrumbItem extends Component {

  render() {
    var displayPathComponent = this.props.pathComponent.replace("-", " ");

    return (
      <Breadcrumb.Item>{displayPathComponent}</Breadcrumb.Item>
    );
  }
}

export default homeBreadCrumbItem