import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import HomeBreadCrumbItem from './homeBreadCrumbItem'

import * as Style from '../../style/myStyle'

class homeBreadCrumb extends Component {

    render() {

        const pathComponents = this.props.pathName.split("/");

        return (
            <Breadcrumb style={Style.homeLayoutBreadcrumb}>
                {pathComponents.map(
                    function (pathComponent) { return <HomeBreadCrumbItem pathComponent={pathComponent} /> }
                )}
            </Breadcrumb>
        );
    }
}

export default homeBreadCrumb