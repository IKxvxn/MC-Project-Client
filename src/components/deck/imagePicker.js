import React, { Component } from 'react';
import { Carousel } from 'antd';
import ImagePickerElement from './imagePickerElement'
import * as ClientBanners from '../../assets/clientBanners'

class imagePicker extends Component {

    constructor(props) {
        super(props)

        this.carouselRef = React.createRef();
    }

    render() {
        return (
            <Carousel effect="fade" dotPosition="top" afterChange={this.props.onBannerChange} ref={this.carouselRef}>
                {ClientBanners.banners.map((banner) => (<ImagePickerElement banner={banner} background={this.props.background} />))}
            </ Carousel>
        );
    }

    componentDidMount() {
        this.carouselRef.current.goTo(this.props.selectedBanner, true)
    }
}

export default imagePicker

