import React, { Component } from "react";
class ClassComp extends Component {
    render() {
        //return element
        return (
            // wrapper tag
            <>
                <h2>{this.props.companyName} chúc các bạn lớp {this.props.children} có trải nghiệm tốt</h2>
                <h2>Java - 08</h2>
            </>
        );
    }
}
export default ClassComp;