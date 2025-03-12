import React from 'react';

const componentMap = {
    button: ({ onClick, ...props }) => (
        <button {...props} onClick={() => window[onClick] && window[onClick]()} />
    )
};

const renderJSXFromJSON = (json) => {
    if (!json) return null;

    const { type, props } = json;

    // Handle children correctly
    let children = props?.children;

    if (!Array.isArray(children)) {
        if (typeof children === 'object' && children !== null) {
            children = [renderJSXFromJSON(children)]; // Render nested JSX
        } else if (typeof children === 'string' || typeof children === 'number') {
            children = [children]; // Wrap text or numbers in an array
        } else {
            children = [];
        }
    } else {
        children = children.map(child =>
            typeof child === 'object' ? renderJSXFromJSON(child) : child
        );
    }

    const Component = componentMap[type] || type;

    return React.createElement(Component, { ...props, key: props?.key || Math.random() }, children);
};

export default renderJSXFromJSON;
