import React from 'react';

const jsxToJson = (element) => {
    if (typeof element === 'string' || typeof element === 'number') {
        return element; // Directly return text or number
    }

    if (!React.isValidElement(element)) {
        return null; // Ignore invalid JSX elements
    }

    const { type, props } = element;

    const json = {
        type: typeof type === 'string' ? type : type.name || 'UnknownComponent',
        props: { ...props }
    };

    // Handle children recursively
    if (props.children) {
        if (Array.isArray(props.children)) {
            json.props.children = props.children.map(jsxToJson);
        } else {
            json.props.children = jsxToJson(props.children);
        }
    }

    return json;
};

export default jsxToJson;
